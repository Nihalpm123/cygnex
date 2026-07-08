import WorkGrid from "@/components/ui/WorkGrid";

export const metadata = {
    title: "Our Work | Le Cygnex",
    description: "Explore our portfolio of premium web design, and digital marketing projects.",
};

export default function WorkPage() {
    return (
        <main className="min-h-screen pt-32 pb-24 px-6 md:px-12 bg-transparent relative">
            <div className="max-w-7xl mx-auto relative z-10">
                <div className="mb-16">
                    <h1 className="text-4xl md:text-6xl font-black tracking-tight text-white mb-6">
                        Our <span className="text-blue-400">Masterpieces</span>
                    </h1>
                    <p className="text-zinc-400 text-lg md:text-xl max-w-2xl">
                        A curated collection of our most impactful digital experiences.
                        Where creativity meets technical precision.
                    </p>
                </div>

                <WorkGrid />
            </div>
        </main>
    );
}

