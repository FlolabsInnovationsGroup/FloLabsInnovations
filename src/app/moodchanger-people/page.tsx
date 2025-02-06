import MainLayout from "../../components/MainLayout";

export default function MoodchangerPage() {
    return (
      <MainLayout>
      <div className="bg-black text-white min-h-screen py-32 px-6">
        <div className="container mx-auto max-w-4xl">
          {/* Header Section */}
          <header className="mb-20">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-snug">
              Transforming Your Mood, One Insight at a Time
            </h1>
            <p className="text-lg text-gray-400 leading-relaxed mb-4">
              The Moodchanger app aims to transform the way we think about health,
              productivity, and emotional well-being. By integrating artificial
              intelligence with wearable technology, it creates a connected,
              personalized platform and provides ongoing support for users seeking
              to enhance their lifestyles.
            </p>
            <p className="text-lg text-gray-400 leading-relaxed">
              The Moodchanger app is supported by its personal AI assistant,
              CAIPO (Chief Artificial Intelligence Productivity Officer) device.
              This system aims to address some of the biggest challenges in
              maintaining healthy routines, from a lack of motivation to
              fragmented health data and the absence of continuous guidance. The
              Moodchanger app tackles these problems with a suite of innovative
              solutions.
            </p>
          </header>
  
          {/* Content Sections */}
          <div className="space-y-20">
            {/* Section 1 */}
            <section>
              <h2 className="text-2xl font-semibold mb-4">
                The Problem with Current Approaches
              </h2>
              <p className="text-lg text-gray-400 leading-relaxed mb-4">
                For many, the journey to better health and well-being is riddled
                with obstacles. A lack of support often leads to waning
                motivation, while generic health advice fails to meet the specific
                needs of individuals. Traditional coaches, though effective, are
                expensive and cannot offer 24/7 guidance. Wearable devices
                operate in isolation, leaving users without a unified
                understanding of their health.
              </p>
              <p className="text-lg text-gray-400 leading-relaxed">
                Emotional well-being, a critical aspect of overall health,
                frequently goes unaddressed, even though it significantly impacts
                mental and physical health. Poor lifestyle habits remain a leading
                cause of chronic diseases, yet tools for prevention are scarce.
                The challenge lies in creating a system that monitors health while
                motivating and empowering users to take action.
              </p>
            </section>
  
            {/* Section 2 */}
            <section>
              <h2 className="text-2xl font-semibold mb-4">The Moodchanger Solution</h2>
              <p className="text-lg text-gray-400 leading-relaxed mb-4">
                Moodchanger addresses these challenges through a holistic,
                connected approach. It is built around personalized insights,
                continuous support, and seamless integration of wearable devices.
                CAIPO acts as the heart of the system, offering users a virtual
                coach that motivates and provides companionship.
              </p>
              <p className="text-lg text-gray-400 leading-relaxed">
                With CAIPO, users receive custom health and wellness
                recommendations based on real-time and historical data from
                wearable devices. The system encourages healthy habits through
                proactive nudging, goal tracking, and milestone celebrations.
                Moodchanger doesn’t just react to problems—it anticipates them,
                offering tools and strategies to prevent issues before they arise.
              </p>
            </section>
  
            {/* Section 3 */}
            <section>
              <h2 className="text-2xl font-semibold mb-4">The Role of Technology</h2>
              <p className="text-lg text-gray-400 leading-relaxed mb-4">
                Moodchanger integrates diverse wearable technologies to enhance
                health and productivity. CAIPO connects to devices like smart
                glasses, rings, watches, and insoles to provide insights into
                activity, heart rate, stress, posture, and hydration.
              </p>
              <p className="text-lg text-gray-400 leading-relaxed">
                Tools like brain-monitoring headbands offer neuro-feedback for
                relaxation and focus, while psycho-acoustic calming systems reduce
                anxiety. These devices, integrated through the Moodchanger app,
                create a unified experience, allowing users to monitor everything
                from physical activity to emotional well-being.
              </p>
            </section>
  
            {/* Section 4 */}
            <section>
              <h2 className="text-2xl font-semibold mb-4">Beyond Data: A Personalized Approach</h2>
              <p className="text-lg text-gray-400 leading-relaxed mb-4">
                The Moodchanger app translates data into actionable steps tailored
                to users’ needs, whether it’s improving fitness routines, sleep
                quality, or stress management. This holistic approach addresses
                physical, mental, and emotional health as interconnected aspects
                of overall wellness, empowering users to make lasting changes.
              </p>
              <p className="text-lg text-gray-400 leading-relaxed">
                Moodchanger emphasizes prevention and long-term growth, providing
                a complete and meaningful experience for its users.
              </p>
            </section>
          </div>
        </div>
      </div>
      </MainLayout>
    );
}
