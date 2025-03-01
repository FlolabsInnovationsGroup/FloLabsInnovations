import MainLayout from "../../components/MainLayout";

export default function EducationPage() {
  return (
    <MainLayout>
      <div className="bg-black text-white min-h-screen py-32 px-6">
        <div className="container mx-auto max-w-4xl">
          {/* Header Section */}
          <header className="mb-20 relative w-full max-w-4xl mx-auto">
            <div className="relative w-full h-64 md:h-80 mb-6">
              {/* Background Image */}
              <img 
                src="/images/screens.png" 
                alt="Computer Screen" 
                className="w-full h-full object-cover rounded-lg"
              />

              {/* Overlay for Contrast */}
              <div className="absolute inset-0 bg-gradient-to-b from-black/90 to-transparent"></div>
            </div>

            {/* Title Below the Image */}
            <h1 className="text-white text-3xl md:text-5xl font-bold text-center mb-4">
              Flomad Labs R&D: A Unique Experiential Platform for AI, Robotics, and Entrepreneurship
            </h1>

            <p className="text-lg text-gray-400 leading-relaxed">
              Empowering Learners with Hands-On Experience and Career Growth.
            </p>
          </header>

          {/* Content Sections */}
          <div className="space-y-16">
            {/* Section 1 */}
            <section>
              <h2 className="text-2xl font-semibold mb-4">A World of Innovation Awaits</h2>
              <p className="text-lg text-gray-400 leading-relaxed mb-4">
                The future is being shaped by advancements in AI, robotics, and entrepreneurial innovation. 
                At Flomad Labs R&D, we equip students, career changers, and lifelong learners with the skills, tools, 
                and experiences necessary to thrive in this transformative era. By engaging in real-world projects, 
                participants gain an in-depth understanding of how to navigate and contribute to rapidly evolving industries.
              </p>
            </section>

            {/* Section 2 */}
            <section>
              <h2 className="text-2xl font-semibold mb-4">Fuel Your Journey of Discovery</h2>
              <p className="text-lg text-gray-400 leading-relaxed mb-4">
                Our internship program is more than a learning experience—it’s a solution to the challenges many face 
                when seeking meaningful internships and career opportunities.
              </p>
              <p className="text-lg text-gray-400 leading-relaxed mb-4">
                Participants are immersed in real-world projects, collaborating in teams to explore the possibilities 
                of AI, robotics, and entrepreneurship. Through this process, they acquire practical experience in ideation, 
                research, development, and product evolution. The program prepares learners to tackle challenges, develop solutions, 
                and achieve meaningful career growth.
              </p>
              <p className="text-lg text-gray-400 leading-relaxed">
                With flexible, remote options, our program ensures accessibility to learners worldwide, fostering collaboration across diverse cultures and backgrounds.
              </p>
            </section>

            {/* Section 3 */}
            <section>
              <h2 className="text-2xl font-semibold mb-4">Why AI, Robotics, and Entrepreneurship?</h2>
              <ul className="list-disc pl-6 space-y-4 text-gray-300">
                <li>
                  <strong>Mastering the latest tools and technologies:</strong> Through immersive learning experiences.
                </li>
                <li>
                  <strong>Developing critical problem-solving and collaborative skills:</strong> Gaining practical expertise by working on marketable and innovative projects.
                </li>
                <li>
                  <strong>A Masterclass series:</strong> Featuring videos and podcasts from renowned experts, ensuring access to highly relevant and engaging content.
                </li>
                <li>
                  <strong>Flexibility with remote-based learning:</strong> Including video recordings for those unable to join live sessions, ensuring progress on their own schedule.
                </li>
              </ul>
            </section>

            {/* Section 4 */}
            <section>
              <h2 className="text-2xl font-semibold mb-4">Discoveries That Define Our Time</h2>
              <p className="text-lg text-gray-400 leading-relaxed mb-4">
                Advancements in AI and robotics have already transformed the world, enabling breakthroughs in areas such as healthcare, transportation, and education.
              </p>
              <ul className="list-disc pl-6 space-y-4 text-gray-300">
                <li>
                  <strong>Autonomous Systems:</strong> From self-driving cars to robotic surgery, AI-driven automation is redefining how we work and live.
                </li>
                <li>
                  <strong>AI-Powered Insights:</strong> Machine learning algorithms are analyzing vast datasets, uncovering trends, and solving problems faster than ever.
                </li>
                <li>
                  <strong>Entrepreneurial Innovation:</strong> New business models are emerging, leveraging AI and robotics to create opportunities that were once unimaginable.
                </li>
              </ul>
            </section>

            {/* Section 5 */}
            <section>
              <h2 className="text-2xl font-semibold mb-4">Transformative Advancements Shaping Our World</h2>
              <p className="text-lg text-gray-400 leading-relaxed">
                Human-centric robotics, AI-powered creativity, and tech-driven startups are reshaping industries globally. Participants at Flomad Labs engage directly 
                with these cutting-edge developments, preparing themselves to excel in these rapidly growing and evolving fields.
              </p>
            </section>

            {/* Section 6 */}
            <section>
              <h2 className="text-2xl font-semibold mb-4">Join the Mission</h2>
              <p className="text-lg text-gray-400 leading-relaxed mb-4">
                Flomad Labs R&D is more than an internship school—it’s a platform for immersive learning, fostering innovation, and achieving professional growth. Participants gain hands-on experience in every phase of a project’s lifecycle, from initial research to market launch.
              </p>
              <p className="text-lg text-gray-400 leading-relaxed">
                By working in collaborative teams, they build the skills and confidence to excel in their careers and contribute to shaping the industries of the future. 
                The future starts with a single bold step. Take yours at Flomad Labs R&D.
              </p>
            </section>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
