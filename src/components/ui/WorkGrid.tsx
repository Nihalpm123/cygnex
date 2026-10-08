"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Search, ExternalLink, ArrowRight, Sparkles, Filter } from "lucide-react";
import { PROJECTS, CATEGORIES, CategoryId, Project } from "@/lib/projectsData";
import ProjectModal from "./ProjectModal";

interface WorkGridProps {
  initialCategory?: CategoryId;
  limit?: number;
  showFilters?: boolean;
  showSearch?: boolean;
}

export default function WorkGrid({
  initialCategory = "all",
  limit,
  showFilters = true,
  showSearch = true,
}: WorkGridProps) {
  const [selectedCategory, setSelectedCategory] = useState<CategoryId>(initialCategory);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // Compute category item counts
  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = { all: PROJECTS.length };
    PROJECTS.forEach((p) => {
      counts[p.category] = (counts[p.category] || 0) + 1;
    });
    return counts;
  }, []);

  // Filter projects by category and search
  const filteredProjects = useMemo(() => {
    let list = PROJECTS;

    if (selectedCategory !== "all") {
      list = list.filter((p) => p.category === selectedCategory);
    }

    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase().trim();
      list = list.filter(
        (p) =>
          p.title.toLowerCase().includes(q) ||
          p.client.toLowerCase().includes(q) ||
          p.categoryLabel.toLowerCase().includes(q) ||
          p.tools.some((t) => t.toLowerCase().includes(q)) ||
          p.deliverables.some((d) => d.toLowerCase().includes(q))
      );
    }

    if (limit) {
      list = list.slice(0, limit);
    }

    return list;
  }, [selectedCategory, searchQuery, limit]);

  // Modal navigation (next/prev)
  const currentProjectIndex = useMemo(() => {
    if (!selectedProject) return -1;
    return filteredProjects.findIndex((p) => p.id === selectedProject.id);
  }, [selectedProject, filteredProjects]);

  const handlePrevProject = () => {
    if (currentProjectIndex > 0) {
      setSelectedProject(filteredProjects[currentProjectIndex - 1]);
    }
  };

  const handleNextProject = () => {
    if (currentProjectIndex < filteredProjects.length - 1) {
      setSelectedProject(filteredProjects[currentProjectIndex + 1]);
    }
  };

  return (
    <div className="w-full">
      {/* Category Filter Bar & Search */}
      {showFilters && (
        <div className="mb-10 sm:mb-12 space-y-5">
          {/* Top row: Categories and Search bar */}
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
            {/* Category Pills */}
            <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none -mx-4 px-4 sm:mx-0 sm:px-0">
              {CATEGORIES.map((cat) => {
                const isActive = selectedCategory === cat.id;
                const count = categoryCounts[cat.id] || 0;

                return (
                  <button
                    key={cat.id}
                    onClick={() => setSelectedCategory(cat.id)}
                    className={`px-4 py-2 sm:px-4.5 sm:py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all duration-200 shrink-0 flex items-center gap-2 cursor-pointer shadow-xs ${
                      isActive
                        ? "bg-[#07076b] text-white shadow-md shadow-[#07076b]/25 scale-102"
                        : "bg-white border border-zinc-200 text-zinc-700 hover:border-[#07076b]/30 hover:text-[#07076b] hover:bg-zinc-50"
                    }`}
                  >
                    <span>{cat.label}</span>
                    <span
                      className={`text-[10px] px-1.5 py-0.5 rounded-full font-bold ${
                        isActive
                          ? "bg-white/20 text-white"
                          : "bg-zinc-100 text-zinc-500"
                      }`}
                    >
                      {count}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Live Search Input */}
            {showSearch && (
              <div className="relative w-full lg:w-72 shrink-0">
                <Search
                  size={16}
                  className="absolute left-3.5 top-1/2 -translate-y-1/2 text-zinc-400 pointer-events-none"
                />
                <input
                  type="text"
                  placeholder="Search work, tools, clients..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-white border border-zinc-200 rounded-full pl-9.5 pr-4 py-2 sm:py-2.5 text-xs sm:text-sm text-zinc-900 placeholder-zinc-400 focus:outline-none focus:border-[#07076b] focus:ring-2 focus:ring-[#07076b]/15 transition-all shadow-xs"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery("")}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-bold text-zinc-400 hover:text-zinc-700"
                  >
                    Clear
                  </button>
                )}
              </div>
            )}
          </div>

          {/* Results Counter & Active Category summary */}
          <div className="flex items-center justify-between text-xs text-zinc-500 px-1">
            <span className="flex items-center gap-1.5 font-medium">
              <Sparkles size={13} className="text-[#07076b]" />
              Showing <strong className="text-zinc-900 font-bold">{filteredProjects.length}</strong> completed {filteredProjects.length === 1 ? "project" : "projects"}
              {selectedCategory !== "all" && (
                <span>in <span className="font-semibold text-[#07076b]">{CATEGORIES.find(c => c.id === selectedCategory)?.label}</span></span>
              )}
            </span>

            {searchQuery && (
              <button
                onClick={() => {
                  setSearchQuery("");
                  setSelectedCategory("all");
                }}
                className="text-[#07076b] font-semibold hover:underline cursor-pointer"
              >
                Reset all filters
              </button>
            )}
          </div>
        </div>
      )}

      {/* Projects Grid */}
      {filteredProjects.length > 0 ? (
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 md:gap-8"
        >
          <AnimatePresence>
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.35, delay: index * 0.04 }}
                onClick={() => setSelectedProject(project)}
                className="group relative bg-white border border-zinc-200/90 rounded-2xl sm:rounded-3xl overflow-hidden cursor-pointer shadow-sm hover:shadow-xl hover:border-[#07076b]/30 transition-all duration-400 flex flex-col justify-between"
              >
                {/* Image Container with Hover Zoom */}
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-zinc-100">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-108"
                  />

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/70 via-zinc-950/10 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />

                  {/* Top Badges */}
                  <div className="absolute top-3.5 left-3.5 right-3.5 flex items-center justify-between pointer-events-none">
                    <span className="text-[10px] sm:text-[11px] font-black uppercase tracking-wider px-3 py-1 rounded-full bg-white/95 backdrop-blur-md text-[#07076b] border border-white/60 shadow-sm">
                      {project.categoryLabel}
                    </span>
                    <span className="text-[10px] font-bold text-white bg-black/40 backdrop-blur-md px-2.5 py-0.5 rounded-full border border-white/10">
                      {project.year}
                    </span>
                  </div>

                  {/* Hover Quick Action Indicator */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                    <span className="px-4 py-2 rounded-full bg-white text-[#07076b] text-xs font-bold shadow-xl flex items-center gap-1.5 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                      View Project Details <ExternalLink size={13} />
                    </span>
                  </div>

                  {/* Bottom Image Caption inside overlay */}
                  <div className="absolute bottom-3 left-3.5 right-3.5 text-white pointer-events-none">
                    <p className="text-[11px] font-medium text-zinc-300 tracking-wide uppercase">
                      {project.client}
                    </p>
                    <h3 className="text-base sm:text-lg font-bold text-white leading-tight drop-shadow-sm mt-0.5">
                      {project.title}
                    </h3>
                  </div>
                </div>

                {/* Card Content Footer */}
                <div className="p-4 sm:p-5 bg-white flex flex-col justify-between flex-1 border-t border-zinc-100">
                  <p className="text-zinc-600 text-xs sm:text-sm line-clamp-2 leading-relaxed mb-3">
                    {project.description}
                  </p>

                  <div className="pt-3 border-t border-zinc-100 space-y-2.5">
                    {/* Metrics Chip */}
                    <div className="text-[11px] font-semibold text-[#07076b] bg-[#07076b]/5 px-2.5 py-1 rounded-lg border border-[#07076b]/15 truncate">
                      ✦ {project.metrics}
                    </div>

                    {/* Tools Tags & Action */}
                    <div className="flex items-center justify-between gap-2 pt-1">
                      <div className="flex flex-wrap gap-1.5">
                        {project.tools.slice(0, 2).map((tool, idx) => (
                          <span
                            key={idx}
                            className="text-[10px] font-medium px-2 py-0.5 rounded-md bg-zinc-100 text-zinc-600"
                          >
                            {tool}
                          </span>
                        ))}
                        {project.tools.length > 2 && (
                          <span className="text-[10px] font-medium px-1.5 py-0.5 rounded-md bg-zinc-100 text-zinc-400">
                            +{project.tools.length - 2}
                          </span>
                        )}
                      </div>

                      <div className="text-xs font-bold text-[#07076b] flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                        Explore <ArrowRight size={13} />
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      ) : (
        /* Empty State */
        <div className="text-center py-16 px-4 bg-zinc-50 border border-zinc-200 rounded-3xl">
          <div className="w-12 h-12 rounded-full bg-[#07076b]/10 text-[#07076b] mx-auto flex items-center justify-center mb-3">
            <Filter size={20} />
          </div>
          <h3 className="text-lg font-bold text-zinc-900">No projects found</h3>
          <p className="text-sm text-zinc-500 mt-1 max-w-sm mx-auto">
            No projects matched "{searchQuery}" in this category. Try adjusting your query.
          </p>
          <button
            onClick={() => {
              setSearchQuery("");
              setSelectedCategory("all");
            }}
            className="mt-4 px-5 py-2 rounded-full bg-[#07076b] text-white text-xs font-bold hover:bg-[#050552] transition-all cursor-pointer shadow-sm"
          >
            Show All Projects
          </button>
        </div>
      )}

      {/* Project Lightbox & Details Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onPrev={handlePrevProject}
        onNext={handleNextProject}
        hasPrev={currentProjectIndex > 0}
        hasNext={currentProjectIndex < filteredProjects.length - 1}
      />
    </div>
  );
}
