import Layout from "../layout";
import BackButton from "../../components/BackButton";

export default function EducationPage() {
  return (
    <Layout>
      <div className="bg-black text-white min-h-screen py-32 px-6">
        {/* Back Button */}
        <BackButton />

        {/* Main Content Container */}
        <div className="container mx-auto max-w-4xl">
          {/* Header Section */}
          <header className="mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-snug">
              Flomad Labs R&D: A Unique Experiential Platform for AI, Robotics, and Entrepreneurship
            </h1>
            <p className="text-lg text-gray-400 leading-relaxed">
              Empowering Learners with Hands-On Experience and Career Growth
            </p>
            <p className="text-gray-300 mt-4 leading-relaxed">
              These are the pathways of Flomad Labs R&D. Its mission: to provide immersive, hands-on education, fostering practical skills, and supporting learners in achieving their career aspirations.
            </p>
          </header>

          {/* Content Sections */}
          <div className="space-y-16">
            {/* Section 1 */}
            <section>
              <h2 className="text-2xl font-semibold mb-4">A World of Innovation Awaits</h2>
              <p className="text-gray-300 leading-relaxed">
                The future is being shaped by advancements in AI, robotics, and entrepreneurial innovation. At Flomad Labs R&D, we equip students, career changers, and lifelong learners with the skills, tools, and experiences necessary to thrive in this transformative era. By engaging in real-world projects, participants gain an in-depth understanding of how to navigate and contribute to rapidly evolving industries.
              </p>
            </section>

            {/* Section 2 */}
            <section>
              <h2 className="text-2xl font-semibold mb-4">Fuel Your Journey of Discovery</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                Our internship program is more than a learning experience—it’s a solution to the challenges many face when seeking meaningful internships and career opportunities.
              </p>
              <p className="text-gray-300 leading-relaxed mb-4">
                Unlike typical internships, Flomad Labs R&D offers structured programs that maximize learning and career growth. Participants are immersed in real-world projects, collaborating in teams to explore the possibilities of AI, robotics, and entrepreneurship. Through this process, they acquire practical experience in ideation, research, development, and product evolution.
              </p>
              <p className="text-gray-300 leading-relaxed">
                With flexible, remote options, our program ensures accessibility to learners worldwide, fostering collaboration across diverse cultures and backgrounds.
              </p>
            </section>

            {/* Section 3 */}
            <section>
              <h2 className="text-2xl font-semibold mb-4">Why AI, Robotics, and Entrepreneurship?</h2>
              <ul className="list-disc list-inside space-y-4 text-gray-300">
                <li>Mastering the latest tools and technologies through immersive learning experiences.</li>
                <li>Developing critical problem-solving and collaborative skills.</li>
                <li>Gaining practical expertise by working on marketable and innovative projects.</li>
                <li>
                  A Masterclass series featuring insights from experts like Jensen Huang, Geoffrey Hinton, Andrew Ng, and others, ensuring access to highly relevant and engaging content.
                </li>
                <li>
                  A Tools Masterclass, helping participants harness AI tools tailored for specific teams, enhancing productivity by up to 10X.
                </li>
                <li>Flexible remote-based learning, including video recordings for asynchronous learning.</li>
              </ul>
            </section>

            {/* Section 4 */}
            <section>
              <h2 className="text-2xl font-semibold mb-4">Discoveries That Define Our Time</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                Advancements in AI and robotics have transformed industries like healthcare, transportation, and education. Examples include:
              </p>
              <ul className="list-disc list-inside space-y-4 text-gray-300">
                <li>
                  <strong>Autonomous Systems:</strong> From self-driving cars to robotic surgery, AI-driven automation is redefining how we work and live.
                </li>
                <li>
                  <strong>AI-Powered Insights:</strong> Machine learning algorithms analyze vast datasets, uncovering trends and solving problems faster than ever.
                </li>
                <li>
                  <strong>Entrepreneurial Innovation:</strong> Leveraging AI and robotics to create opportunities once unimaginable.
                </li>
              </ul>
            </section>

            {/* Section 5 */}
            <section>
              <h2 className="text-2xl font-semibold mb-4">Transformative Advancements Shaping Our World</h2>
              <ul className="list-disc list-inside space-y-4 text-gray-300">
                <li>
                  <strong>Human-Centric Robotics:</strong> Designing robots that enhance productivity while improving quality of life.
                </li>
                <li>
                  <strong>AI-Powered Creativity:</strong> Using machine intelligence to augment human ingenuity in arts, sciences, and business.
                </li>
                <li>
                  <strong>Tech-Driven Startups:</strong> Developing scalable solutions to global challenges, from sustainability to healthcare.
                </li>
                <li>
                  <strong>Cross-Disciplinary Breakthroughs:</strong> Combining AI, robotics, and entrepreneurship with other fields to innovate in unexpected ways.
                </li>
              </ul>
            </section>

            {/* Section 6 */}
            <section>
              <h2 className="text-2xl font-semibold mb-4">Join the Mission</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                Flomad Labs R&D is more than an internship school—it’s a platform for immersive learning, fostering innovation, and achieving professional growth. Participants gain hands-on experience in every phase of a project’s lifecycle, from initial research to market launch.
              </p>
              <p className="text-gray-300 leading-relaxed">
                The future starts with a single bold step. Take yours at Flomad Labs R&D.
              </p>
            </section>
          </div>
        </div>
      </div>
    </Layout>
  );
}
