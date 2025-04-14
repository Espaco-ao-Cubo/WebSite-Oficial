// components/SponsorsSection.js
export default function SponsorsSection() {
    const sponsors = [
        {
            name: "Synopsis Planet",
            logo: "/logos/SP-Logo.png",
            url: "https://example.com/space-agency"
        },
        {
            name: "Thales Edisoft",
            logo: "/logos/thales logo.png",
            url: "https://example.com/tech-foundation"
        },
        {
            name: "Instituto de Astrofísica e Ciências do Espaço",
            logo: "/logos/IA_logo_bitmap-rgbblack-1200px.png",
            url: "https://example.com/university-lab"
        },
        {
            name: "Robert Mauser",
            logo: "/logos/LOGO-mauser.pt-vermelho.png",
            url: "https://example.com/innovation-partners"
        },
        // Add more sponsors as needed
    ];

    return (
        <section className="bg-accent dark:bg-space-900 py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-space-900 dark:text-white">
                        Our Partners & Sponsors
                    </h2>
                    <p className="mt-4 text-lg text-space-600 dark:text-space-300 max-w-2xl mx-auto">
                        TejoOne is made possible through the generous support of these organizations
                    </p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 items-center justify-center">
                    {sponsors.map((sponsor, index) => (
                        <a
                            key={index}
                            href={sponsor.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center p-4 grayscale-0 hover:grayscale transition-all duration-300 hover:scale-105"
                            aria-label={`Visit ${sponsor.name}`}
                        >
                            <img
                                src={sponsor.logo}
                                alt={sponsor.name}
                                className="h-16 w-auto object-contain max-w-full"
                                loading="lazy"
                            />
                        </a>
                    ))}
                </div>

                <div className="mt-12 text-center">
                    <p className="text-space-500 dark:text-space-400">
                        Interested in supporting our mission?
                    </p>
                    <a
                        href="#contact"
                        className="inline-flex items-center mt-4 px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary hover:bg-primary-700 transition-colors"
                    >
                        Become a Sponsor
                    </a>
                </div>
            </div>
        </section>
    );
}