import MainLayout from "../../components/MainLayout";

export default function CaipoPage() {
    return (
        <MainLayout>
            <div className="bg-black text-white min-h-screen py-32 px-6">
                <div className="container mx-auto max-w-4xl">
                    {/* Header Section */}
                    <header className="mb-20 relative w-full max-w-4xl mx-auto">
                        <div className="relative w-full h-64 md:h-80 mb-6">
                            {/* Image */}
                            <img 
                                src="/images/soundwaves.png"  
                                alt="CAIPO AI Productivity"
                                className="w-full h-full object-cover rounded-lg"
                            />

                            {/* Overlay for Contrast */}
                            <div className="absolute inset-0 bg-gradient-to-b from-black/90 to-transparent"></div>
                        </div>

                        {/* Title Below the Image */}
                        <h1 className="text-white text-3xl md:text-5xl font-bold text-center mb-4">
                            Optimizing Health and Performance: A New Approach to Personal and Organizational Growth
                        </h1>

                        <p className="text-lg text-gray-400 leading-relaxed">
                            In today’s fast-paced world, the pursuit of AI optimization—whether for individuals or businesses—has become an essential strategy for success. Health, productivity, and performance are no longer addressed with generic advice or short-term fixes. Instead, they require thoughtful, personalized solutions that focus on long-term improvement and measurable outcomes, all driven by the latest AI technologies.
                        </p>
                    </header>

                    {/* Content Sections */}
                    <div className="space-y-20">
                        {/* Section 1 */}
                        <section>
                            <h2 className="text-2xl font-semibold mb-4">A Personalized Path to Better Health</h2>
                            <p className="text-lg text-gray-400 leading-relaxed mb-4">
                                For individuals, the focus on health optimization has shifted to strategies that work specifically for them. Gone are the days of general advice or cookie-cutter solutions. People now look for tailored recommendations that align with their goals, whether it’s improving physical fitness, managing stress, or enhancing overall wellness.
                            </p>
                        </section>

                        {/* Section 2 */}
                        <section>
                            <h2 className="text-2xl font-semibold mb-4">Empowering Organizations to Perform Better</h2>
                            <p className="text-lg text-gray-400 leading-relaxed mb-4">
                                For businesses, AI optimization takes on a slightly different form but with equally important goals. Companies are increasingly looking for strategies that help them perform better—whether it’s improving team productivity, reaching operational targets, or supporting employee well-being.
                            </p>
                        </section>

                        {/* Section 3 */}
                        <section>
                            <h2 className="text-2xl font-semibold mb-4">Shared Goals for Sustained Success</h2>
                            <p className="text-lg text-gray-400 leading-relaxed mb-4">
                                Both individuals and businesses share a common goal: to grow, succeed, and improve in a way that lasts. For individuals, this means improving their health, longevity, and ability to achieve their personal objectives. For companies, it means increasing performance, maintaining efficiency, and making meaningful progress toward their goals.
                            </p>
                        </section>

                        {/* Section 4 */}
                        <section>
                            <h2 className="text-2xl font-semibold mb-4">How the Need for Smarter Productivity Led to CAIPO</h2>
                            <p className="text-lg text-gray-400 leading-relaxed mb-4">
                                The growing demand for practical, sustainable ways to improve health and productivity, both personally and within organizations, inspired the creation of <a href="https://caipo.ai" className="text-blue-400 underline hover:text-blue-500"> CAIPO</a>—Chief Artificial Intelligence Productivity Officer.
                            </p>
                        </section>

                        {/* Section 5 */}
                        <section>
                            <h2 className="text-2xl font-semibold mb-4">Connecting Health to Productivity</h2>
                            <p className="text-lg text-gray-400 leading-relaxed mb-4">
                                CAIPO was designed to meet this need by analyzing health data collected from wearable devices with inbuilt sensors, turning it into meaningful guidance for users. Through this connection, CAIPO provides strategies for optimizing fitness, managing health goals, and supporting users in their day-to-day lives.
                            </p>
                        </section>

                        {/* Section 6 */}
                        <section>
                            <h2 className="text-2xl font-semibold mb-4">A Vision for Long-Term Success</h2>
                            <p className="text-lg text-gray-400 leading-relaxed">
                                CAIPO was created to address the challenges of maintaining health and productivity in a world that demands more from both individuals and organizations. By connecting technology, health data, and tailored advice, it delivers meaningful strategies to help users and businesses succeed over the long term.
                            </p>
                        </section>
                    </div>
                </div>
            </div>
        </MainLayout>
    );
}
