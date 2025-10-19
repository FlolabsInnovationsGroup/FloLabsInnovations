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
                            Smarter Healthcare: Flo Labs' Approach to AI-Powered Innovation
                        </h1>

                        <p className="text-lg text-gray-400 leading-relaxed mb-4">
                            The intersection of artificial intelligence and healthcare is opening new possibilities for personalized, data-driven, and accessible care. At Flo Labs, we're exploring how AI-powered systems, wearable technology, and intelligent automation can enhance patient experiences, streamline processes, and make healthcare smarter.
                        </p>
                        <p className="text-lg text-gray-400 leading-relaxed mb-4">
                            While we're in the early stages of research and development, our goal is clear: to create AI-driven healthcare solutions that empower individuals and improve medical decision-making.
                        </p>
                    </header>

                    {/* Content Sections */}
                    <div className="space-y-20">
                        {/* Section 1 */}
                        <section>
                            <h2 className="text-2xl font-semibold mb-4">Where AI Can Make a Difference</h2>
                            <p className="text-lg text-gray-400 leading-relaxed mb-4">
                                We believe AI has the potential to bridge critical gaps in healthcare, making processes more efficient, adaptive, and responsive. Here's what we're working on:
                            </p>
                            <ul className="list-disc pl-6 space-y-4 text-gray-300">
                                <li>
                                    <strong>Personalized Care:</strong> AI algorithms analyze patient data to provide tailored treatment recommendations and preventive care strategies.
                                </li>
                                <li>
                                    <strong>Early Detection:</strong> Machine learning models identify patterns in health data to catch potential issues before they become serious problems.
                                </li>
                                <li>
                                    <strong>Process Optimization:</strong> AI streamlines administrative tasks, reducing wait times and improving resource allocation.
                                </li>
                                <li>
                                    <strong>Remote Monitoring:</strong> Smart devices and AI systems enable continuous health monitoring outside traditional healthcare settings.
                                </li>
                            </ul>
                        </section>

                        {/* Section 2 */}
                        <section>
                            <h2 className="text-2xl font-semibold mb-4">Our Research Focus</h2>
                            <p className="text-lg text-gray-400 leading-relaxed mb-4">
                                Our research team is exploring several key areas where AI can transform healthcare delivery:
                            </p>
                            <ul className="list-disc pl-6 space-y-4 text-gray-300">
                                <li>
                                    <strong>Predictive Analytics:</strong> Developing models that can forecast health outcomes and recommend preventive measures.
                                </li>
                                <li>
                                    <strong>Natural Language Processing:</strong> Creating systems that can understand and analyze medical records, research papers, and patient communications.
                                </li>
                                <li>
                                    <strong>Computer Vision:</strong> Implementing AI-powered image analysis for medical imaging and diagnostic support.
                                </li>
                                <li>
                                    <strong>Wearable Integration:</strong> Building platforms that seamlessly integrate data from various health monitoring devices.
                                </li>
                            </ul>
                        </section>

                        {/* Section 3 */}
                        <section>
                            <h2 className="text-2xl font-semibold mb-4">Looking Forward</h2>
                            <p className="text-lg text-gray-400 leading-relaxed mb-4">
                                The future of healthcare is one where AI and human expertise work together to provide better care for everyone. We're committed to developing solutions that are not just technologically advanced but also accessible, ethical, and focused on improving patient outcomes.
                            </p>
                            <p className="text-lg text-gray-400 leading-relaxed">
                                As we continue our research and development, we're focused on creating AI systems that complement rather than replace human healthcare providers, ensuring that technology enhances rather than diminishes the human touch in healthcare.
                            </p>
                        </section>
                    </div>
                </div>
            </div>
        </MainLayout>
    );
}
