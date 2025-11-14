"use client";

import MainLayout from "../../components/MainLayout";
import Image from 'next/image';
import { useState, useEffect } from "react";

export default function AIAndRoboticsPage() {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    return (
      <MainLayout>
      <div className="bg-black text-white min-h-screen py-32 px-6">
        <div className="container mx-auto max-w-4xl">
          {/* Header Section */}

          <header className="mb-20 relative w-full max-w-4xl mx-auto">
                        <div className="relative w-full h-64 md:h-80 mb-6">
                            {/* Background Image */}
                            {isMounted && (
                              <Image 
                                src="/images/airobobotics.png"  
                                alt="AI- Robotics"
                                className="rounded-lg"
                                fill
                                style={{ objectFit: 'cover' }}
                              />
                            )}

                            {/* Overlay for Contrast */}
                            <div className="absolute inset-0 bg-gradient-to-b from-black/90 to-transparent"></div>
                        </div>

                        {/* Title Below the Image */}
                        <h1 className="text-white text-3xl md:text-5xl font-bold text-center mb-4">
                        Advancing Robotics: Flo Labs R&D's Vision for Intelligent Systems
                        </h1>

            
            <p className="text-lg text-gray-400 leading-relaxed mb-4">
              Flo Labs R&D is dedicated to advancing AI and robotics, creating innovative systems
              that seamlessly integrate into our lives and industries. With a focus on intelligent automation,
              adaptability, and human-centric design, the company is addressing challenges across healthcare,
              manufacturing, mobility, and more.
            </p>
            <p className="text-lg text-gray-400 leading-relaxed">
              At the heart of Flo Labs' robotics initiatives is a commitment to research and practical applications.
              By blending artificial intelligence with engineering and user-focused design, Flo Labs is developing
              systems that are safe, efficient, and capable of working alongside humans.
            </p>
          </header>
  
          {/* Content Sections */}
          <div className="space-y-20">
            {/* Section 1 */}
            <section>
              <h2 className="text-2xl font-semibold mb-4">
                Intelligent Robotics for Everyday Impact
              </h2>
              <p className="text-lg text-gray-400 leading-relaxed mb-4">
                Flo Labs R&D's work in robotics focuses on several key areas:
              </p>
              <ul className="list-disc pl-6 space-y-4 text-gray-300">
                <li>
                  <strong>Autonomous Systems:</strong> Designing machines that can navigate environments, make
                  decisions, and perform tasks independently, from warehouse operations to self-driving vehicles.
                </li>
                <li>
                  <strong>Collaborative Robotics (Cobots):</strong> Building robots that work side-by-side with humans
                  in manufacturing, healthcare, and service roles, enhancing productivity and collaboration.
                </li>
                <li>
                  <strong>Precision Robotics:</strong> Creating systems with advanced dexterity for tasks like surgery,
                  assembly, and delicate operations requiring fine-tuned accuracy.
                </li>
                <li>
                  <strong>Human-Robot Interaction (HRI):</strong> Enhancing how robots understand and respond to
                  human behavior, ensuring seamless communication and cooperation.
                </li>
              </ul>
            </section>
  
            {/* Section 2 */}
            <section>
              <h2 className="text-2xl font-semibold mb-4">
                Research and Development
              </h2>
              <ul className="list-disc pl-6 space-y-4 text-gray-300">
                <li>
                  <strong>Machine Learning:</strong> Developing AI systems that allow robots to learn from experience,
                  adapt to new tasks, and continually improve.
                </li>
                <li>
                  <strong>Sensor Integration:</strong> Combining data from cameras, LiDAR, and tactile sensors to give
                  robots enhanced awareness and decision-making capabilities.
                </li>
                <li>
                  <strong>Responsible Robotics:</strong> Prioritizing safety, transparency, and ethical design to ensure
                  responsible development and deployment of robotics technology.
                </li>
              </ul>
            </section>
  
            {/* Section 3 */}
            <section>
              <h2 className="text-2xl font-semibold mb-4">
                Applications Across Industries
              </h2>
              <ul className="list-disc pl-6 space-y-4 text-gray-300">
                <li>
                  <strong>Healthcare:</strong> Robots assist in surgeries, patient care, and rehabilitation,
                  offering precision and support in critical settings.
                </li>
                <li>
                  <strong>Manufacturing:</strong> Intelligent machines handle repetitive tasks, optimize workflows,
                  and enhance workplace safety by reducing human exposure to hazardous environments.
                </li>
                <li>
                  <strong>Mobility:</strong> Autonomous vehicles and delivery robots improve transportation and logistics
                  systems, providing efficient and sustainable solutions.
                </li>
                <li>
                  <strong>Service Roles:</strong> Robots assist in hospitality, retail, and customer service, enhancing
                  operations and improving user experiences.
                </li>
              </ul>
            </section>
  
            {/* Section 4 */}
            <section>
              <h2 className="text-2xl font-semibold mb-4">
                Collaboration for Progress
              </h2>
              <p className="text-lg text-gray-400 leading-relaxed mb-4">
                Flo Labs R&D works closely with universities, technology companies, and industry partners
                to drive progress in robotics. These collaborations ensure that developments are aligned with
                practical needs while advancing the robotics field as a whole.
              </p>
            </section>
  
            {/* Section 5 */}
            <section>
              <h2 className="text-2xl font-semibold mb-4">
                A Future with Intelligent Machines
              </h2>
              <p className="text-lg text-gray-400 leading-relaxed mb-4">
                Flo Labs envisions a future where intelligent machines complement human capabilities,
                enhancing efficiency, safety, and innovation. By focusing on research-driven solutions, the company
                is paving the way for robotics to be seamlessly integrated into everyday life.
              </p>
              <p className="text-lg text-gray-400 leading-relaxed mb-4">
                "Our goal is to design robotics systems that work alongside humans, solving problems and opening
                new possibilities," says a representative from Flo Labs. "With intelligent robotics, we're building
                tools that empower individuals and industries alike."
              </p>
              <p className="text-lg text-gray-400 leading-relaxed">
                Through its focus on adaptability, collaboration, and user-centered design, Flo Labs R&D is setting
                a new standard for robotics, ensuring these technologies are built to support and enhance the world
                around us.
              </p>
            </section>

            <div className="space-y-20">
  {/* Featured Robotics Videos Section */}
  <section className="mt-20">
    <h2 className="text-2xl font-semibold mb-6 text-center">Featured Robotics Videos</h2>
    <p className="text-lg text-gray-400 leading-relaxed mb-6 text-center">
      The field of robotics is rapidly evolving with new breakthroughs in AI-driven automation,
      human-robot interaction, and autonomous systems. Below are some fascinating examples of
      robotics advancements.
    </p>

    {/* Embedded Videos */}
    <div className="space-y-12 flex flex-col items-center">
      <div className="w-full max-w-lg md:max-w-2xl border border-gray-700 p-2 rounded-lg shadow-lg">
        <h3 className="text-xl font-semibold mb-2 text-center">Xiaomi Automobile Super Factory</h3>
        <iframe
          className="w-full h-56 md:h-72 rounded-lg"
          src="https://www.youtube.com/embed/kYkgXkoEBzg"
          title="Agile Humanoid Robots"
          allowFullScreen
        ></iframe>
      </div>

      <div className="w-full max-w-lg md:max-w-2xl border border-gray-700 p-2 rounded-lg shadow-lg">
        <h3 className="text-xl font-semibold mb-2 text-center">2023 Spring Festival Gala</h3>
        <iframe
          className="w-full h-56 md:h-72 rounded-lg"
          src="https://www.youtube.com/embed/JIq_AM4q534"
          title="Next-Gen AI Robotics"
          allowFullScreen
        ></iframe>
      </div>

      {/* ASAP Initiative */}
      <div className="w-full max-w-lg md:max-w-2xl border border-gray-700 p-2 rounded-lg shadow-lg">
        <h3 className="text-xl font-semibold mb-2 text-center">ASAP Initiative</h3>
        {isMounted && (
          <a 
            href="https://agile.human2humanoid.com/" 
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="Visit ASAP Initiative website"
          >
            <div className="relative w-full aspect-video">
              <Image
                src="/images/asappicture.png"
                alt="ASAP Initiative"
                fill
                className="rounded-lg hover:opacity-80 transition-opacity object-cover"
              />
            </div>
          </a>
        )}
      </div>
    </div>
  </section>
</div>


          </div>
        </div>
      </div>
      </MainLayout>
    );
}
