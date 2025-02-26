import MainLayout from "../../components/MainLayout";

export default function AITravelPage() {
    return (
      <MainLayout>
      <div className="bg-black text-white min-h-screen py-32 px-6">
        <div className="container mx-auto max-w-4xl">
          {/* Header Section */}
          <header className="mb-20">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-snug">
              Conversational AI Is Transforming Travel—And Flomad Labs Is Leading the Way
            </h1>
            <p className="text-lg text-gray-400 leading-relaxed mb-4">
              The way we plan, book, and experience travel is evolving—fast. At Flomad Labs, we’re not just watching this transformation happen; we’re building the AI-powered tools that make it seamless. Conversational AI is at the heart of this shift, helping travelers navigate complex choices, adapt to unexpected changes, and interact with their journeys in a more human, intuitive way.
            </p>
          </header>
  
          {/* Content Sections */}
          <div className="space-y-20">
            {/* Section 1 */}
            <section>
              <h2 className="text-2xl font-semibold mb-4">AI That Understands Travelers—Not Just Their Questions</h2>
              <p className="text-lg text-gray-400 leading-relaxed mb-4">
                Traditional travel planning has always been overwhelming—endless flight comparisons, hotel reviews, itinerary juggling. Even after booking, disruptions like delays and cancellations add layers of stress. That’s where AI-powered travel assistants come in.
              </p>
              <p className="text-lg text-gray-400 leading-relaxed">
                At Flomad Labs, we’re developing conversational AI that goes beyond answering questions—it anticipates needs and personalizes experiences. Imagine an AI assistant that:
              </p>
              <ul className="list-disc pl-6 space-y-4 text-gray-300">
                <li>Knows your travel style—preferring boutique stays over big chains or adventure over relaxation.</li>
                <li>Tracks your itinerary in real time, adjusting plans when flights are delayed or weather impacts your schedule.</li>
                <li>Speaks your language—offering multilingual support that makes global travel smoother.</li>
                <li>Handles last-minute changes, like rebooking a hotel or finding the best local transportation in unfamiliar cities.</li>
              </ul>
            </section>
  
            {/* Section 2 */}
            <section>
              <h2 className="text-2xl font-semibold mb-4">How Conversational AI Enhances Every Stage of Travel</h2>
              <p className="text-lg text-gray-400 leading-relaxed mb-4">
                Conversational AI is shifting travel from a manual, research-heavy process to a personalized, real-time experience. Here’s how:
              </p>
              <h3 className="text-xl font-semibold mb-2">1. Effortless Planning</h3>
              <p className="text-lg text-gray-400 leading-relaxed">
                Instead of spending hours searching multiple sites, travelers can have a conversation with an AI assistant that curates personalized suggestions. Whether it’s finding a unique stay, optimizing flight routes, or crafting a custom itinerary, AI turns decision overload into a seamless dialogue.
              </p>
              <h3 className="text-xl font-semibold mb-2">2. Real-Time Support—Anywhere in the World</h3>
              <p className="text-lg text-gray-400 leading-relaxed">
                Delays, cancellations, or last-minute itinerary changes are a fact of travel. But instead of scrambling for solutions, conversational AI can proactively offer alternatives—rebooking a missed connection, rerouting based on weather, or even finding nearby attractions when plans change.
              </p>
              <h3 className="text-xl font-semibold mb-2">3. AI That Listens, Learns, and Adapts</h3>
              <p className="text-lg text-gray-400 leading-relaxed">
                Flomad Labs is building AI that remembers preferences over time. The more you travel, the smarter it gets—learning what you like, what you avoid, and how to make recommendations that actually matter.
              </p>
            </section>
  
            {/* Section 3 */}
            <section>
              <h2 className="text-2xl font-semibold mb-4">Why Flomad Labs?</h2>
              <p className="text-lg text-gray-400 leading-relaxed">
                The future of travel isn’t just about AI—it’s about intelligent, human-centered AI that makes journeys simpler, more efficient, and more enjoyable. At Flomad Labs, we are focused on creating conversational AI solutions that blend cutting-edge technology with real-world travel needs.
              </p>
              <p className="text-lg text-gray-400 leading-relaxed">
                With projects like FlomadTravel.com, we’re setting a new standard for AI-powered travel, one that is:
              </p>
              <ul className="list-disc pl-6 space-y-4 text-gray-300">
                <li>✅ Context-aware—understanding and adapting to real-time travel conditions.</li>
                <li>✅ Personalized—offering curated recommendations based on unique user behavior.</li>
                <li>✅ Seamless—reducing friction at every stage of the journey.</li>
              </ul>
            </section>
  
            {/* Section 4 */}
            <section>
              <h2 className="text-2xl font-semibold mb-4">The Future of AI-Enhanced Travel Is Here</h2>
              <p className="text-lg text-gray-400 leading-relaxed">
                Conversational AI isn’t a distant innovation—it’s already redefining travel. And at Flomad Labs, we’re making sure it does more than just answer questions. We’re creating AI-driven travel experiences that feel personal, responsive, and genuinely helpful.
              </p>
              <p className="text-lg text-gray-400 leading-relaxed">
                Because travel should be about the experience, not the logistics.
              </p>
            </section>
          </div>
        </div>
      </div>
      </MainLayout>
    );
}
