import MainLayout from "../../components/MainLayout";

export default function HealthcarePage() {
    return (
        <MainLayout>
            <div className="bg-black text-white min-h-screen py-32 px-6">
                <div className="container mx-auto max-w-4xl">
                    {/* Header Section */}
                    <header className="mb-20 relative w-full max-w-4xl mx-auto">
                        <div className="relative w-full h-64 md:h-80 mb-6">
                            {/* Background Image */}
                            <img 
                                src="/images/brainwaves3.png" 
                                alt="Healthcare Innovation" 
                                className="w-full h-full object-cover rounded-lg"
                            />

                            {/* Overlay for Contrast */}
                            <div className="absolute inset-0 bg-gradient-to-b from-black/90 to-transparent"></div>
                        </div>

                        {/* Title Below the Image */}
                        <h1 className="text-white text-3xl md:text-5xl font-bold text-center mb-4">
                            Smarter Healthcare: Flomad Labs’ Approach to AI-Powered Innovation
                        </h1>

                        <p className="text-lg text-gray-400 leading-relaxed mb-4">
                            The intersection of artificial intelligence and healthcare is opening new possibilities for personalized, data-driven, and accessible care. At Flomad Labs, we’re exploring how AI-powered systems, wearable technology, and intelligent automation can enhance patient experiences, streamline processes, and make healthcare smarter.
                        </p>
                        <p className="text-lg text-gray-400 leading-relaxed">
                            While we’re in the early stages of research and development, our goal is clear: to create AI-driven healthcare solutions that empower individuals and improve medical decision-making.
                        </p>
                    </header>

                    {/* Content Sections */}
                    <div className="space-y-20">
                        {/* Section 1 */}
                        <section>
                            <h2 className="text-2xl font-semibold mb-4">Where AI Can Make a Difference</h2>
                            <p className="text-lg text-gray-400 leading-relaxed mb-4">
                                We believe AI has the potential to bridge critical gaps in healthcare, making processes more efficient, adaptive, and responsive. Here’s what we’re working on:
                            </p>
                            <ul className="list-disc pl-6 space-y-4 text-gray-300">
                                <li>
                                    <strong>AI for Smarter Health Insights:</strong> Medical diagnostics and treatment plans are often based on data-heavy analysis. We’re researching how AI models can help analyze patterns in health data, assisting providers in making more informed decisions—without replacing human expertise.
                                </li>
                                <li>
                                    <strong>Wearable Tech That Goes Beyond Fitness:</strong> Health monitoring shouldn’t just be about counting steps. We’re exploring ways AI can enhance wearable technology, making devices smarter in detecting early warning signs for health conditions, tracking vitals, and integrating with real-time monitoring systems.
                                </li>
                                <li>
                                    <strong>Conversational AI for Healthcare Assistance:</strong> AI-powered virtual assistants could transform how people interact with healthcare information. We’re researching how conversational AI can:
                                    <ul className="list-none pl-4 mt-2">
                                        <li>✅ Answer health-related questions in a more natural, personalized way</li>
                                        <li>✅ Help patients navigate complex medical information</li>
                                        <li>✅ Provide reminders for medications, checkups, and lifestyle habits</li>
                                    </ul>
                                </li>
                                <li>
                                    <strong>Automating Healthcare Workflows:</strong> Administrative burdens in healthcare slow down efficiency. We’re exploring how AI-driven automation could help streamline tasks like scheduling, documentation, and data entry, allowing healthcare professionals to focus more on patient care.
                                </li>
                            </ul>
                        </section>

                        {/* Section 2 */}
                        <section>
                            <h2 className="text-2xl font-semibold mb-4">What’s Next for Flomad Labs?</h2>
                            <p className="text-lg text-gray-400 leading-relaxed">
                                We’re in the early stages of our healthcare R&D, focusing on building AI solutions that can be scaled and adapted to real-world medical needs.
                            </p>
                            <p className="text-lg text-gray-400 leading-relaxed">
                                Our vision isn’t just about technology—it’s about how AI can make healthcare more accessible, intuitive, and personalized. Whether it’s through smarter AI assistants, health-monitoring wearables, or AI-driven automation, we believe the future of healthcare should be as intelligent as it is human-centered.
                            </p>
                            <p className="text-lg text-gray-400 leading-relaxed">
                                At Flomad Labs, we’re not just following the trends in AI healthcare—we’re exploring what’s possible and pushing the boundaries of what comes next.
                            </p>
                        </section>
                    </div>
                </div>
            </div>
        </MainLayout>
    );
}
