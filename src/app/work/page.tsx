import WorkGrid from "@/components/ui/WorkGrid";

export const metadata = {
    title: "Our Work",
    description: "Explore the portfolio of Le Cygnex. Premium web design, app development, and high-performance digital marketing case studies.",
};

export default function WorkPage() {
    return (
        <main className="min-h-screen pt-28 sm:pt-36 pb-16 sm:pb-24 px-4 sm:px-6 md:px-12 bg-transparent relative">
            <div className="max-w-7xl mx-auto relative z-10">
                <div className="mb-12 sm:mb-16">
                    <h1 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight text-zinc-900 mb-4 sm:mb-6">
                        Our <span className="text-blue-600">Masterpieces</span>
                    </h1>
                    <p className="text-zinc-600 text-base sm:text-lg md:text-xl max-w-2xl leading-relaxed">
                        A curated collection of our most impactful digital experiences.
                        Where creativity meets technical precision.
                    </p>
                </div>

                <WorkGrid />
            </div>
        </main>
    );
}
