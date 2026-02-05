import WorkGrid from "@/components/ui/WorkGrid";

export const metadata = {
    title: "Our Work | Le Cygnex",
    description: "Explore our portfolio of premium web design, 3D animation, and digital marketing projects.",
};

export default function WorkPage() {
    return (
        <main className="min-h-screen pt-32 pb-24 px-6 md:px-12 bg-black">
            <div className="max-w-7xl mx-auto">
                <div className="mb-16">
                    <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                        Our <span className="text-primary">Masterpieces</span>
                    </h1>
                    <p className="text-gray-400 text-lg md:text-xl max-w-2xl">
                        A curated collection of our most impactful digital experiences.
                        Where creativity meets technical precision.
                    </p>
                </div>

                <WorkGrid />
            </div>
        </main>
    );
}
