import WorkGrid from "@/components/ui/WorkGrid";
import Link from "next/link";
import { MessageCircle, ArrowRight, ShieldCheck, Sparkles, CheckCircle2 } from "lucide-react";

export const metadata = {
  title: "Our Completed Work | Le Cygnex Portfolio",
  description: "Browse real completed projects by Le Cygnex across Logo Design, Poster & Billboard, Brand Identity & Packaging, Custom Websites, and Social Media campaigns.",
};

export default function WorkPage() {
  const stats = [
    { label: "Delivered Projects", value: "34+" },
    { label: "Design Disciplines", value: "5" },
    { label: "Client Satisfaction", value: "100%" },
    { label: "Turnaround Precision", value: "On-Time" },
  ];

  return (
    <main className="min-h-screen pt-28 sm:pt-36 md:pt-40 pb-16 sm:pb-24 px-4 sm:px-6 md:px-12 bg-transparent relative">
      {/* Background ambient lighting */}
      <div className="absolute top-20 right-10 w-[350px] h-[350px] sm:w-[450px] sm:h-[450px] bg-[#07076b]/5 rounded-full blur-[100px] pointer-events-none -z-10" />
      <div className="absolute top-1/2 left-5 w-[300px] h-[300px] bg-[#07076b]/4 rounded-full blur-[90px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Page Header */}
        <div className="mb-12 sm:mb-16">
          <div className="mb-4">
            <span className="text-[11px] sm:text-xs font-bold tracking-wider sm:tracking-widest text-[#07076b] uppercase bg-[#07076b]/10 border border-[#07076b]/20 px-3.5 py-1.5 rounded-full inline-flex items-center gap-1.5">
              <Sparkles size={12} />
              Portfolio & Case Studies
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight text-zinc-900 mb-4 sm:mb-6 leading-[1.1]">
            Our Completed <span className="text-[#07076b]">Masterpieces</span>
          </h1>

          <p className="text-zinc-600 text-base sm:text-lg md:text-xl max-w-3xl leading-relaxed">
            A curated showcase of completed client commissions spanning bespoke <strong>Logos</strong>, outdoor <strong>Posters & Billboards</strong>, luxury <strong>Branding & Packaging</strong>, modern <strong>Websites</strong>, and high-impact <strong>Social Media Campaigns</strong>.
          </p>

          {/* Stats Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 mt-8 sm:mt-10 pt-6 sm:pt-8 border-t border-zinc-200/90">
            {stats.map((s, idx) => (
              <div key={idx} className="p-3.5 sm:p-4 rounded-xl bg-zinc-50/70 border border-zinc-200/80">
                <span className="text-2xl sm:text-3xl font-black text-[#07076b] tracking-tight block">
                  {s.value}
                </span>
                <span className="text-[11px] sm:text-xs font-semibold uppercase tracking-wider text-zinc-500 mt-0.5 block">
                  {s.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Filterable Projects Grid & Modal Showcase */}
        <WorkGrid showFilters={true} showSearch={true} />

        {/* Client Guarantee & Testimonial Box */}
        <div className="mt-20 sm:mt-24 p-8 sm:p-12 rounded-3xl bg-white border border-zinc-200/90 shadow-sm relative overflow-hidden">
          <div className="absolute top-0 right-0 w-48 h-48 bg-[#07076b]/5 rounded-bl-full pointer-events-none" />

          <div className="grid md:grid-cols-2 gap-8 items-center relative z-10">
            <div>
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#07076b] mb-2">
                <ShieldCheck size={16} />
                Our Commitment to Excellence
              </div>
              <h3 className="text-xl sm:text-2xl font-black text-zinc-900 tracking-tight">
                Every project is crafted with singular dedication and pixel perfection.
              </h3>
              <p className="text-zinc-600 text-sm sm:text-base mt-2.5 leading-relaxed">
                Whether you need a memorable brand mark, a physical event poster, a luxury retail identity, or an enterprise SaaS web app, we bring the same unwavering architectural precision to every pixel.
              </p>
            </div>

            <div className="bg-zinc-50 border border-zinc-200/80 p-6 rounded-2xl space-y-3">
              <div className="flex items-center gap-1 text-amber-500">
                {"★★★★★".split("").map((star, i) => (
                  <span key={i} className="text-sm">{star}</span>
                ))}
              </div>
              <blockquote className="text-xs sm:text-sm text-zinc-700 italic leading-relaxed">
                "Le Cygnex completely transformed our brand and digital presence. Their attention to design fidelity, typographic elegance, and execution speed exceeded every expectation."
              </blockquote>
              <div className="pt-2 border-t border-zinc-200/60 flex items-center justify-between text-xs">
                <div>
                  <strong className="text-zinc-900 block font-bold">Marcus Sterling</strong>
                  <span className="text-zinc-500">Founder & CEO, Aetherium Labs</span>
                </div>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-[#07076b]/10 text-[#07076b]">
                  Verified Client
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA Card */}
        <div className="mt-12 sm:mt-16 p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-[#07076b] to-[#04043b] text-white shadow-xl shadow-[#07076b]/20 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-white/10 via-transparent to-transparent pointer-events-none" />

          <div className="relative z-10 max-w-2xl mx-auto space-y-4">
            <span className="inline-block text-[10px] sm:text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full bg-white/15 text-white backdrop-blur-md">
              Start Your Journey
            </span>
            <h2 className="text-2xl sm:text-4xl font-black tracking-tight text-white">
              Have a Project in Mind? Let's Engineer Success.
            </h2>
            <p className="text-zinc-200 text-xs sm:text-base leading-relaxed">
              Tell us what you're building. We'll guide you through strategy, aesthetic concepts, and technical execution.
            </p>

            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
              <Link
                href="https://wa.me/919074063277"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-7 py-3.5 rounded-full bg-white text-[#07076b] font-bold text-sm hover:bg-zinc-100 transition-all shadow-lg flex items-center justify-center gap-2"
              >
                <MessageCircle size={17} />
                Chat on WhatsApp (+91 9074063277)
              </Link>
              <Link
                href="/#contact"
                className="w-full sm:w-auto px-7 py-3.5 rounded-full border border-white/30 text-white font-semibold text-sm hover:bg-white/10 transition-all flex items-center justify-center gap-2"
              >
                Send Project Inquiry <ArrowRight size={15} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
