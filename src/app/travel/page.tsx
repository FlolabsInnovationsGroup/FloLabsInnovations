import MainLayout from "../../components/MainLayout"; 

export default function TravelPage() {
  return (
    <MainLayout>
      <div className="bg-black text-white min-h-screen py-32 px-6">
        <div className="container mx-auto max-w-4xl">
          {/* Header Section */}
          <header className="mb-20">
          <div className="relative w-full h-64 md:h-80 mb-6">
  {/* Background Image */}
  <img 
    src="/images/travelbanner.png"  /* Change src for each page */
    alt="Banner Image" 
    className="w-full h-full object-cover rounded-lg"
  />

  {/* Overlay for Better Readability */}
  <div className="absolute inset-0 bg-gradient-to-b from-black/90 to-transparent"></div>
</div>


            {/* Title moved below the image */}
            <h1 className="text-white text-3xl md:text-5xl font-bold text-center mb-6">
              Smarter Travel with Flo Labs
            </h1>

            <p className="text-lg text-gray-400 leading-relaxed">
              At Flo Labs, we believe travel should be seamless, intuitive, and tailored to the individual. That's why we're developing AI-driven solutions that simplify trip planning, adapt to changing conditions, and enhance the overall experience.
            </p>
            <p className="text-lg text-gray-400 leading-relaxed">
              Through conversational AI, dynamic itineraries, and real-time travel insights, we’re exploring ways to reduce stress, improve decision-making, and make every journey feel effortless.
            </p>
          </header>

          {/* Content Sections */}
          <div className="space-y-20">
            {/* Section 1 */}
            <section>
              <h2 className="text-2xl font-semibold mb-4">AI That Adapts to You</h2>
              <p className="text-lg text-gray-400 leading-relaxed mb-4">
                We’re not just building another travel app—we’re creating AI-powered assistants that learn your preferences and help you plan, adjust, and optimize trips in real time.
              </p>
              <h3 className="text-xl font-semibold mb-2">Here’s what we’re working on:</h3>
              <ul className="list-disc pl-6 space-y-4 text-gray-300">
                <li>
                  <strong>AI-Powered Travel Assistants:</strong> Instead of endlessly searching for flights, hotels, and activities, imagine an AI assistant that gets to know your travel style and suggests personalized itineraries, from boutique stays to hidden local experiences.
                </li>
                <li>
                  <strong>Smart, Flexible Itineraries:</strong> No more rigid schedules—our AI tools help create adaptive itineraries that adjust based on:
                  <ul className="list-none pl-4 mt-2">
                    <li>✅ Real-time weather updates</li>
                    <li>✅ Last-minute travel changes</li>
                    <li>✅ New local recommendations that match your interests</li>
                  </ul>
                </li>
                <li>
                  <strong>Intelligent Trip Insights:</strong> Travel isn’t just about where you go—it’s about what you experience. Our AI-driven platform analyzes destinations, events, and dining spots, helping you make informed choices without the overwhelm.
                </li>
              </ul>
            </section>

            {/* Section 2 */}
            <section>
              <h2 className="text-2xl font-semibold mb-4">Simplifying Travel with Smart Automation</h2>
              <p className="text-lg text-gray-400 leading-relaxed mb-4">
                We’re also exploring ways to remove common travel headaches, such as:
              </p>
              <ul className="list-none pl-6 space-y-4 text-gray-300">
                <li>🚀 <strong>Faster bookings –</strong> AI tools that streamline the process.</li>
                <li>🛫 <strong>Real-time flight and travel updates –</strong> Stay ahead of disruptions.</li>
                <li>🎒 <strong>Luggage tracking & safety tools –</strong> Helping you travel with peace of mind.</li>
              </ul>
            </section>

            {/* Section 3 */}
            <section>
              <h2 className="text-2xl font-semibold mb-4">A More Sustainable Approach to Travel</h2>
              <p className="text-lg text-gray-400 leading-relaxed">
                Flo Labs is committed to rethinking the way we travel responsibly. We're researching eco-friendly travel recommendations, optimized route planning, and tools to minimize unnecessary emissions.
              </p>
            </section>

            {/* Section 4 */}
            <section>
              <h2 className="text-2xl font-semibold mb-4">What's Next for Flo Labs?</h2>
              <p className="text-lg text-gray-400 leading-relaxed">
                We’re still in the early stages of R&D, but our goal is clear: to build AI-driven tools that make travel easier, more personal, and more intuitive. Whether you’re planning a business trip or a spontaneous getaway, travel shouldn’t feel like work—it should feel like an adventure.
              </p>
              <p className="text-lg text-gray-400 leading-relaxed">
                At Flo Labs, we're working to make that a reality.
              </p>
            </section>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
