export default function TravelPage() {
    return (
      <main className="bg-black text-white min-h-screen py-32 px-6">
        <div className="container mx-auto max-w-4xl">
          {/* Header Section */}
          <header className="mb-20">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-snug">
              Discover Smarter Travel with Flomad Labs
            </h1>
            <p className="text-lg text-gray-400 leading-relaxed">
              Flomad Labs R&D is transforming the future of travel through the use
              of artificial intelligence, automation, and tailored services.
              Focused on simplifying journeys and creating meaningful experiences,
              Flomad Labs aims to meet the changing needs of modern travelers
              while improving processes for the travel and hospitality industries.
            </p>
            <p className="text-lg text-gray-400 leading-relaxed">
              Through advanced AI tools and integrated platforms, the company
              enhances every stage of the travel experience—from planning and
              booking to in-destination support—ensuring each journey is enjoyable
              and personalized.
            </p>
          </header>
  
          {/* Content Sections */}
          <div className="space-y-20">
            {/* Section 1 */}
            <section>
              <h2 className="text-2xl font-semibold mb-4">
                Personalization at Every Step
              </h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                Flomad Labs’ travel innovations center around creating tailored
                solutions that adapt to each traveler’s preferences and needs. Key
                features include:
              </p>
              <ul className="list-disc list-inside space-y-4 text-gray-300">
                <li>
                  <strong>AI-Powered Travel Agents:</strong> Intelligent
                  conversational tools assist with travel planning, providing
                  personalized recommendations and booking options designed to
                  match individual tastes.
                </li>
                <li>
                  <strong>Dynamic Itineraries:</strong> Flexible itineraries are
                  created using AI, adjusting to factors such as traveler
                  preferences, local opportunities, and changing circumstances to
                  ensure stress-free experiences.
                </li>
                <li>
                  <strong>Targeted Suggestions:</strong> The platform analyzes
                  traveler data to recommend activities, accommodations, and
                  dining options, ensuring every trip feels unique and memorable.
                </li>
              </ul>
            </section>
  
            {/* Section 2 */}
            <section>
              <h2 className="text-2xl font-semibold mb-4">
                Making Travel Easier
              </h2>
              <ul className="list-disc list-inside space-y-4 text-gray-300">
                <li>
                  <strong>Automated Bookings and Check-Ins:</strong> AI systems
                  handle bookings and check-ins, reducing long waits and
                  eliminating unnecessary steps for a smoother journey.
                </li>
                <li>
                  <strong>Travel Updates and Assistance:</strong> Digital tools
                  keep travelers informed about flight changes, local conditions,
                  and their trip’s progress, helping them feel prepared at every
                  stage.
                </li>
                <li>
                  <strong>Baggage and Safety Support:</strong> Smart tracking
                  systems ensure that travelers can monitor their luggage and stay
                  aware of potential safety concerns.
                </li>
              </ul>
            </section>
  
            {/* Section 3 */}
            <section>
              <h2 className="text-2xl font-semibold mb-4">Focus on Sustainability</h2>
              <p className="text-gray-300 leading-relaxed">
                Flomad Labs integrates eco-friendly solutions into its travel
                technology, offering options that reduce environmental impact.
                From suggesting sustainable transportation to optimizing travel
                routes, the platform helps travelers make responsible decisions
                without compromising their experiences.
              </p>
            </section>
  
            {/* Section 4 */}
            <section>
              <h2 className="text-2xl font-semibold mb-4">
                Collaboration with Industry Leaders
              </h2>
              <p className="text-gray-300 leading-relaxed">
                To bring these innovations to life, Flomad Labs collaborates with
                airlines, hotels, and travel service providers, ensuring its tools
                integrate seamlessly with established systems. These partnerships
                not only enhance traveler experiences but also improve operational
                efficiency for businesses.
              </p>
            </section>
  
            {/* Section 5 */}
            <section>
              <h2 className="text-2xl font-semibold mb-4">Travel, Simplified</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                Flomad Labs envisions a future where travel is effortless,
                enjoyable, and personalized for all. By combining advanced
                technology with a deep understanding of traveler needs, the
                company is creating tools that remove the stress from travel and
                replace it with inspiration and ease.
              </p>
              <p className="text-gray-300 leading-relaxed">
                “Our goal is to make every journey feel like an adventure worth
                taking,” says a representative from Flomad Labs. “Whether it’s a
                business trip or a family vacation, we want to enhance every part
                of the experience.”
              </p>
              <p className="text-gray-300 leading-relaxed">
                With its focus on personalization, efficiency, and sustainability,
                Flomad Labs is redefining the way we explore the world—turning
                every trip into a meaningful and delightful journey.
              </p>
            </section>
          </div>
        </div>
      </main>
    );
  }
  