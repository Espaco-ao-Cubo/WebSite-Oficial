// components/ProjectSections.js
export default function ProjectSection() {
    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 bg-secondary">
            {/* TejoOne Satellite Section */}
            <section className="mb-24">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div className="order-2 md:order-1">
                        <h2 className="text-3xl md:text-4xl font-bold  mb-6">
                            TejoOne: A Cube With Cosmic Ambition
                        </h2>
                        <div className="prose prose-lg ">
                            <p>
                                TejoOne is a 1U CubeSat (10×10×10 cm) designed to detect tiny pieces of space
                                debris using an innovative star-tracker camera equipped with a custom algorithm.
                            </p>
                            <p>
                                This compact spacecraft proves that even the smallest satellites can make a big
                                impact—advancing space safety, data collection, and public awareness.
                                Developed for the CubeSat Portugal competition, TejoOne is more than a satellite;
                                it's a proof of concept for accessible orbital innovation.
                            </p>
                        </div>
                    </div>
                    <div className="order-1 md:order-2">
                        <div className="relative aspect-square bg-accent rounded-2xl overflow-hidden">
                            {/* Replace with your actual CubeSat image */}
                            <div className="absolute inset-0 flex items-center justify-center text-indigo-400">
                                    <img
                                        src={"/assets/cubesat.png"}
                                        alt={`Cubesat image`}
                                        className="w-full h-full object-cover"
                                    />

                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Space Debris Section */}
            <section className="bg-primary rounded-3xl p-8 md:p-12 text-white">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">
                        The Hidden Threat in Earth Orbit
                    </h2>
                    <div className="prose prose-lg text-indigo-100 dark:text-gray-300">
                        <p>
                            Earth's orbit is crowded—with over 100 million pieces of debris whizzing around
                            at dangerous speeds. These fragments, though often tiny, can severely damage or
                            destroy active satellites.
                        </p>
                        <p className="font-medium">
                            While most detection systems only work for debris larger than 3–5 cm, TejoOne aims
                            to push this boundary using a smaller, cheaper platform.
                        </p>
                        <p className="text-xl mt-6 font-semibold text-indigo-200 dark:text-purple-300">
                            Our goal? Help build a public debris catalog to make orbit cleaner and safer.
                        </p>
                    </div>

                    {/* Stats Grid */}
                    <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
                        {[
                            { value: "100M+", label: "Debris pieces" },
                            { value: "28,000", label: "Tracked objects" },
                            { value: "7 km/s", label: "Average speed" },
                            { value: "<5 cm", label: "Our detection target" },
                        ].map((stat, index) => (
                            <div key={index} className="bg-white/10 p-4 rounded-xl backdrop-blur-sm">
                                <div className="text-2xl md:text-3xl font-bold">{stat.value}</div>
                                <div className="text-sm text-indigo-200">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}