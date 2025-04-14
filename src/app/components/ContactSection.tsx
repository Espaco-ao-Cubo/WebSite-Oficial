import { Mail, MapPin, Phone } from 'lucide-react';

export default function ContactSection() {
    return (
        <section id="contact" className="relative bg-primary text-white py-20 overflow-hidden">
            {/* Cosmic background elements */}
            <div className="absolute top-0 left-0 w-full h-full opacity-10">
                <div className="absolute top-1/4 left-1/4 w-8 h-8 rounded-full bg-cosmic float-animation" />
                <div className="absolute top-1/3 right-1/3 w-6 h-6 rounded-full bg-primary float-animation animation-delay-2000" />
                <div className="absolute bottom-1/4 left-1/3 w-4 h-4 rounded-full bg-secondary float-animation animation-delay-4000" />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        Contact TejoOne Team
                    </h2>
                    <p className="text-lg text-space-200 max-w-2xl mx-auto">
                        Have questions about our mission or want to collaborate? Reach out through any channel below.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-12">
                    {/* Contact Form */}
                    <div className="bg-secondary/50 backdrop-blur-sm rounded-2xl p-8 border border-space-700">
                        <h3 className="text-xl font-semibold mb-6">Send us a message</h3>
                        <form className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-space-200 mb-1">
                                    Your Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    className="w-full bg-space-700 border border-space-600 rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary focus:border-transparent"
                                    placeholder="Enter your name"
                                />
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-space-200 mb-1">
                                    Email Address
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    className="w-full bg-space-700 border border-space-600 rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary focus:border-transparent"
                                    placeholder="your.email@example.com"
                                />
                            </div>

                            <div>
                                <label htmlFor="subject" className="block text-sm font-medium text-space-200 mb-1">
                                    Subject
                                </label>
                                <input
                                    type="subject"
                                    id="subject"
                                    className="w-full bg-space-700 border border-space-600 rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary focus:border-transparent"
                                    placeholder="Enter your subject"
                                />
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-space-200 mb-1">
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    rows={4}
                                    className="w-full bg-space-700 border border-space-600 rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary focus:border-transparent"
                                    placeholder="Your message here..."
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-primary hover:bg-primary-600 transition-colors text-white font-medium py-3 px-6 rounded-lg"
                            >
                                Send Message
                            </button>
                        </form>
                    </div>

                    {/* Contact Info */}
                    <div className="space-y-8">
                        <div className="bg-secondary/50 backdrop-blur-sm rounded-2xl p-8 border border-space-700">
                            <h3 className="text-xl font-semibold mb-6">Contact Information</h3>
                            <div className="space-y-6">
                                <div className="flex items-start gap-4">
                                    <div className="p-2 bg-primary bg-opacity-10 rounded-lg">
                                        <Mail className="h-6 w-6 text-accent" />
                                    </div>
                                    <div>
                                        <h4 className="font-medium">Email</h4>
                                        <a href="mailto:contact@tejoone.space" className="text-space-200 hover:text-primary transition-colors">
                                            contact@tejoone.space
                                        </a>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="p-2 bg-primary bg-opacity-10 rounded-lg">
                                        <Phone className="h-6 w-6 text-accent" />
                                    </div>
                                    <div>
                                        <h4 className="font-medium">Phone</h4>
                                        <a href="tel:+351123456789" className="text-space-200 hover:text-primary transition-colors">
                                            +351 123 456 789
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Social Media */}
                        <div className="bg-secondary/50 backdrop-blur-sm rounded-2xl p-8 border border-space-700">
                            <h3 className="text-xl font-semibold mb-6">Follow Our Mission</h3>
                            <div className="flex gap-4">
                                {[
                                    { name: 'Twitter', icon: '🐦', url: '#' },
                                    { name: 'LinkedIn', icon: '🔗', url: '#' },
                                    { name: 'Instagram', icon: '📷', url: '#' },
                                    { name: 'GitHub', icon: '💻', url: '#' },
                                ].map((social) => (
                                    <a
                                        key={social.name}
                                        href={social.url}
                                        className="w-12 h-12 flex items-center justify-center bg-space-700 hover:bg-space-600 rounded-full transition-colors text-xl"
                                        aria-label={social.name}
                                    >
                                        {social.icon}
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}