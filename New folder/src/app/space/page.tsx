import MainLayout from "../../components/MainLayout";

export default function SpacePage() {
  return (
    <MainLayout>
      <div className="bg-black text-white min-h-screen py-32 px-6">
        <div className="container mx-auto max-w-4xl">
          {/* Header Section */}
          <header className="mb-20 relative w-full max-w-4xl mx-auto">
            <div className="relative w-full h-64 md:h-80 mb-6">
              <img
                src="/images/outerspace2.png"
                alt="Outer Space"
                className="w-full h-full object-cover rounded-lg"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-black/90 to-transparent"></div>
            </div>

            {/* Title Moved Below Image */}
            <h1 className="text-white text-3xl md:text-5xl font-bold text-center mb-4">
              Space: The Next Frontier in Innovation
            </h1>

            <h2 className="text-xl text-gray-400 mb-4">
              Driven by AI, Robotics, and Entrepreneurship
            </h2>
            <p className="text-lg text-gray-400 leading-relaxed">
              These are the pathways of FloLabs Innovations Group. Its mission:
              to engage in entrepreneurial journeys, to explore the unknown, and
              build to inspire the next generation.
            </p>
          </header>

          {/* Content Sections */}
          <div className="space-y-10">
            {/* Section 1 */}
            <section>
              <h2 className="text-2xl font-semibold mb-4">
                A Universe of Possibilities Awaits
              </h2>
              <p className="text-lg text-gray-400 leading-relaxed mb-4">
                Space has always captured the imagination of humanity,
                representing the ultimate challenge and opportunity. At FloLabs
                Innovations Group, we believe the future belongs to those who
                dare to explore, innovate, and build. With advancements in AI,
                robotics, and entrepreneurial thinking, the possibilities for
                transforming humanity's relationship with space are limitless.
              </p>
            </section>

            {/* Section 2 */}
            <section>
              <h2 className="text-2xl font-semibold mb-4">
                Fuel Your Journey of Discovery
              </h2>
              <p className="text-lg text-gray-400 leading-relaxed">
                Whether you're a student, career changer, or lifelong learner,
                FloLabs Innovations Group is your gateway to the next frontier.
                Our programs empower you to embrace cutting-edge technology,
                foster creativity, and develop the skills necessary to tackle
                the world's most complex challenges. Together, we'll explore the
                unknown, solve problems, and inspire the next wave of
                innovation.
              </p>
            </section>

            {/* Section 3 */}
            <section>
              <h2 className="text-2xl font-semibold mb-4">Why Space?</h2>
              <p className="text-lg text-gray-400 leading-relaxed mb-4">
                Space exploration drives advancements in AI, robotics, and
                technology that impact industries far beyond the cosmos. The
                growing commercial space industry offers unique opportunities
                for visionaries ready to take bold steps. Engaging with
                space-related challenges cultivates critical thinking,
                problem-solving, and the courage to innovate.
              </p>
            </section>

            {/* Section 4 */}
            <section>
              <h2 className="text-2xl font-semibold mb-4">
                Discoveries That Define Our Era
              </h2>
              <p className="text-lg text-gray-400 leading-relaxed">
                Scientists recently discovered that the universe is not only
                expanding but accelerating, driven by the mysterious force of
                dark energy. Thousands of exoplanets have been identified, with
                some in the habitable zone, sparking the possibility of
                discovering extraterrestrial life or future human colonies.
              </p>
              <p className="text-lg text-gray-400 leading-relaxed">
                Advancements in AI are enabling us to decode animal
                vocalizations, unlocking the ability to understand and translate
                the complex communication systems of other species. These
                breakthroughs have profound parallels with space exploration,
                where we aim to interpret the messages carried by light,
                particles, magnetic waves, and other forms of cosmic
                communication.
              </p>
            </section>

            {/* Section 5 */}
            <section>
              <h2 className="text-2xl font-semibold mb-4">
                Future Possibilities on the Horizon
              </h2>
              <ul className="list-disc pl-6 space-y-4 text-gray-300">
                <li>
                  Space colonization is closer than ever, with permanent
                  habitats on the Moon and Mars offering opportunities for human
                  life beyond Earth.
                </li>
                <li>
                  Asteroid mining could revolutionize industries by harvesting
                  valuable resources.
                </li>
                <li>
                  Advancements in propulsion systems bring interstellar travel
                  within reach.
                </li>
              </ul>
            </section>

            {/* Section 6 */}
            <section>
              <h2 className="text-2xl font-semibold mb-4">
                Opportunities Across Sectors
              </h2>
              <p className="text-lg text-gray-400 leading-relaxed mb-4">
                <strong>Education:</strong> Recent discoveries inspire the
                integration of space science into educational programs, sparking
                interest in STEM fields and cultivating the next generation of
                space innovators.
              </p>
              <p className="text-lg text-gray-400 leading-relaxed mb-4">
                <strong>Travel and Hospitality:</strong> Space tourism is
                becoming a reality, with companies like SpaceX and Blue Origin
                pioneering commercial spaceflights.
              </p>
              <p className="text-lg text-gray-400 leading-relaxed mb-4">
                <strong>Healthcare:</strong> Space research conducted in
                microgravity environments has led to groundbreaking medical
                advancements, including insights into osteoporosis and cancer
                treatments.
              </p>
            </section>

            {/* Section 7 */}
            <section>
              <h2 className="text-2xl font-semibold mb-4">Join the Mission</h2>
              <p className="text-lg text-gray-400 leading-relaxed">
                FloLabs Innovations Group is more than a learning
                experience—it's a launchpad for your potential. By joining us,
                you’ll become part of a community united by a shared vision to
                push the boundaries of human achievement.
              </p>
            </section>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
