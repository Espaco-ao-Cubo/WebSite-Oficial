import { useState, useEffect } from 'react';

export default function SpaceSlideshow() {
    const [currentSlide, setCurrentSlide] = useState(0);

    // Sample space images (replace with your actual images)
    const slides = [
        '/assets/img1.jpg',
        '/assets/img2.jpg',
        '/assets/img3.jpg',
        '/assets/img4.jpg',
    ];

    // Auto-advance slides every 5 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 5000);
        return () => clearInterval(interval);
    }, [slides.length]);

    return (
        <div className="relative h-[80vh] w-full overflow-hidden">
            {/* Slides */}
            <div className="relative h-full w-full">
                {slides.map((slide, index) => (
                    <div
                        key={index}
                        className={`absolute inset-0 transition-opacity duration-1000 ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`}
                    >
                        <img
                            src={slide}
                            alt={`Space image ${index + 1}`}
                            className="w-full h-full object-cover"
                        />
                    </div>
                ))}
            </div>

            {/* Text Overlay */}
            <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
                <div className="max-w-4xl px-6 py-12 bg-black/60 rounded-xl text-center backdrop-blur-sm">
                    <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 animate-fadeIn">
                        Exploring & Innovating Space
                    </h1>
                    <p className="text-lg md:text-xl text-gray-200 leading-relaxed text-justify">
                        Welcome to <span className="font-bold"> Espaço³</span> - We are a youth-led organization that unites students to design, build, and launch space missions.
                        By connecting diverse academic fields and providing hands-on experience, we cultivate a learning environment where innovation flourishes.
                    </p>
                </div>
            </div>

            {/* Navigation Dots */}
            <div className="absolute bottom-8 left-0 right-0 flex justify-center gap-2">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentSlide(index)}
                        className={`w-3 h-3 rounded-full transition-all ${index === currentSlide ? 'bg-white w-6' : 'bg-gray-400'}`}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>
        </div>
    );
}