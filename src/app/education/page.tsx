import Layout from "../layout";
import BackButton from "../../components/BackButton";

export default function EducationPage() {
  return (
    <Layout>
    <div className="bg-black
   text-white min-h-screen py-32 px-6"> {/* Increased padding */}
   <BackButton />
      <div className="container mx-auto max-w-4xl">
        {/* Header Section */}
        <header className="mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-snug">
            Flomad Labs R&D’s AI Internship Program
          </h1>
          <p className="text-lg text-gray-400 leading-relaxed">
            As artificial intelligence reshapes industries and transforms the global job market,
            Flomad Labs’ AI Education Internship Program steps in to ensure students are ready
            to meet the challenge.
          </p>
        </header>

        {/* Content Sections */}
        <div className="space-y-16">
          {/* Section 1 */}
          <section>
            <h2 className="text-2xl font-semibold mb-4">Program Overview</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              By combining practical experience with innovative tools and technologies, the program
              equips participants with the skills they need to thrive in an AI-driven workforce.
            </p>
            <p className="text-gray-300 leading-relaxed">
              This comprehensive approach reflects Flomad Labs’ commitment to bridging education and
              industry, providing opportunities that extend far beyond traditional classroom learning.
            </p>
          </section>

          {/* Section 2 */}
          <section>
            <h2 className="text-2xl font-semibold mb-4">Expanding Skills Across Disciplines</h2>
            <ul className="list-disc list-inside space-y-4 text-gray-300">
              <li>
                <strong>Engineering and Robotics:</strong> Building intelligent systems,
                including autonomous machines and advanced sensors.
              </li>
              <li>
                <strong>Software Development and UX/UI Design:</strong> Designing intuitive
                applications that incorporate AI tools.
              </li>
              <li>
                <strong>Sound Engineering and Podcasting:</strong> Leveraging AI to automate editing
                and enhance audio quality.
              </li>
              <li>
                <strong>Marketing and Project Management:</strong> Harnessing AI for data-driven
                insights and efficient workflows.
              </li>
            </ul>
          </section>

          {/* Section 3 */}
          <section>
            <h2 className="text-2xl font-semibold mb-4">Learning by Doing</h2>
            <p className="text-gray-300 leading-relaxed">
              Flomad Labs prioritizes experiential learning, allowing students to work on meaningful
              projects that simulate professional scenarios. Participants gain hands-on experience
              that strengthens their problem-solving abilities.
            </p>
            <p className="text-gray-300 leading-relaxed">
              As one participant noted, “You don’t just learn theories—you put them into action and
              see results.”
            </p>
          </section>

          {/* Section 4 */}
          <section>
            <h2 className="text-2xl font-semibold mb-4">Adapting to the Future Job Market</h2>
            <p className="text-gray-300 leading-relaxed">
              The program acknowledges the rapid pace of technological change. By exposing students
              to AI tools and practices, the internship prepares them to excel in industries that
              increasingly rely on automation and intelligent systems.
            </p>
            <p className="text-gray-300 leading-relaxed">
              With reports predicting a surge in demand for AI-related roles, Flomad Labs ensures
              participants are equipped to enter and thrive in the job market.
            </p>
          </section>

          {/* Section 5 */}
          <section>
            <h2 className="text-2xl font-semibold mb-4">Collaboration and Community</h2>
            <p className="text-gray-300 leading-relaxed">
              The program thrives on collaboration, encouraging participants to engage with mentors,
              peers, and industry experts. Weekly discussions, virtual workshops, and team-based
              projects foster an environment of shared learning and collective problem-solving.
            </p>
          </section>

          {/* Section 6 */}
          <section>
            <h2 className="text-2xl font-semibold mb-4">Connecting Education and Innovation</h2>
            <p className="text-gray-300 leading-relaxed">
              By integrating AI tools with practical, hands-on learning, Flomad Labs is creating a
              pathway for students to contribute meaningfully to their chosen fields. As one mentor
              described, “We’re not just teaching students how to use AI—we’re helping them discover
              how to shape their industries with it.”
            </p>
          </section>
        </div>
      </div>
    </div>
    </Layout>
  );
}
