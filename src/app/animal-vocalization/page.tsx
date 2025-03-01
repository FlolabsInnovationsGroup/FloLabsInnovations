import MainLayout from "../../components/MainLayout";

export default function AnimalVocalizationPage() {
    return (
        <MainLayout>
            <div className="bg-black text-white min-h-screen py-32 px-6">
                <div className="container mx-auto max-w-4xl">
                    {/* Header Section */}
                    <header className="mb-20 relative w-full max-w-4xl mx-auto">
                        <div className="relative w-full h-64 md:h-80 mb-6">
                            {/* Background Image */}
                            <img 
                                src="/images/catdog.png" 
                                alt="Animal Vocalization" 
                                className="w-full h-full object-cover rounded-lg"
                            />

                            {/* Overlay for Contrast */}
                            <div className="absolute inset-0 bg-gradient-to-b from-black/90 to-transparent"></div>
                        </div>

                        {/* Title Below the Image */}
                        <h1 className="text-white text-3xl md:text-5xl font-bold text-center mb-4">
                            Decoding the Language of Cats and Dogs: Flomad’s New Frontier
                        </h1>

                        <p className="text-lg text-gray-400 leading-relaxed mt-4">
                            Understanding how animals communicate has fascinated humans for centuries. At Flomad, we’re taking a bold step into this field with a focus on cats and dogs—the companions we share our lives with daily. Our project aims to unlock the mysteries behind their barks, meows, purrs, and growls to strengthen the connection between humans and their pets.
                        </p>
                    </header>

                    {/* Content Sections */}
                    <div className="space-y-20">
                        {/* Section 1 */}
                        <section>
                            <h2 className="text-2xl font-semibold mb-4">
                                The Inspiration Behind the Project
                            </h2>
                            <p className="text-lg text-gray-400 leading-relaxed mb-4">
                                We’re inspired by groundbreaking research happening right now. The <a href="https://www.earthspecies.org" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">Earth Species Project (ESP)</a> is developing AI to decode communication across species. <a href="https://www.projectceti.org" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">Project CETI (Cetacean Translation Initiative)</a> is focused on deciphering the intricate sounds of sperm whales. <a href="https://www.zoolingua.com" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">Zoolingua</a> is paving the way for understanding canine communication by analyzing vocalizations and body language.
                            </p>
                        </section>

                        {/* Section 2 */}
                        <section>
                            <h2 className="text-2xl font-semibold mb-4">What the Research Tells Us</h2>
                            <p className="text-lg text-gray-400 leading-relaxed mb-4">
                                Recent studies have shown that dogs’ barks vary based on their emotions and intentions—whether they’re hungry, excited, or alerting us to danger. Cats, too, have a diverse “vocabulary” of meows and purrs, with subtle changes in tone and frequency that reflect their feelings or needs. While tools like the “MeowTalk” app have made strides in translating cat vocalizations, there’s still so much more to uncover.
                            </p>
                        </section>

                        {/* Section 3 */}
                        <section>
                            <h2 className="text-2xl font-semibold mb-4">Flomad’s Approach Using AI</h2>
                            <ul className="list-disc pl-6 space-y-4 text-gray-300">
                                <li>
                                    <strong>Understanding Emotional Cues:</strong> Distinguish between barks or meows of excitement, fear, or distress.
                                </li>
                                <li>
                                    <strong>Health Monitoring:</strong> Identify vocal patterns that could signal discomfort or illness.
                                </li>
                                <li>
                                    <strong>Strengthening Bonds:</strong> Help pet owners respond more effectively to their pets’ needs, improving relationships.
                                </li>
                            </ul>
                        </section>

                        {/* Section 4 */}
                        <section>
                            <h2 className="text-2xl font-semibold mb-4">Practical Applications</h2>
                            <p className="text-lg text-gray-400 leading-relaxed mb-4">
                                Imagine knowing exactly what your dog’s bark means—whether it’s a playful invitation or a sign of unease. Or being able to tell when your cat’s meow indicates hunger, curiosity, or a desire for affection. These tools can make life easier for pet owners and enhance the well-being of their furry friends.
                            </p>
                        </section>

                        {/* Section 5 */}
                        <section>
                            <h2 className="text-2xl font-semibold mb-4">Looking Ahead</h2>
                            <p className="text-lg text-gray-400 leading-relaxed mb-4">
                                The field of animal communication is still in its early stages, but its potential is immense. At Flomad, we’re excited to contribute to this growing body of knowledge. With every bark, meow, and purr we analyze, we’re building a future where humans and their pets understand each other in deeper, more meaningful ways.
                            </p>
                        </section>
                    </div>

                    {/* Moved Logos to Bottom */}
                    <div className="mt-20 flex justify-center items-center space-x-16">
                        <a
                            href="https://www.earthspecies.org"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Visit Earth Species Project (ESP)"
                        >
                            <img
                                src="/images/esp.png"
                                alt="ESP Logo"
                                className="w-40 h-40 object-contain"
                            />
                        </a>
                        <a
                            href="https://www.projectceti.org"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Visit Project CETI"
                        >
                            <img
                                src="/images/ceti.png"
                                alt="CETI Logo"
                                className="w-40 h-40 object-contain"
                            />
                        </a>
                        <a
                            href="https://www.zoolingua.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Visit Zoolingua"
                        >
                            <img
                                src="/images/zoolinga.png"
                                alt="Zoolingua Logo"
                                className="w-40 h-40 object-contain"
                            />
                        </a>
                    </div>

                </div>
            </div>
        </MainLayout>
    );
}
