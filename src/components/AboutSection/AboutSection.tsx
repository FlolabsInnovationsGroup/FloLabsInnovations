import Card from "../AboutSection/Card";

export default function AboutSection() {
  const projects = [
    {
      image: "/images/conversationalai.png",
      title: "Conversational AI",
      description: "Intelligent conversational AI for personalized travel planning.",
    },
    {
      image: "/images/aiagirobotics.png",
      title: "AI/AGI/Robotics",
      description: "Empowering leaders to excel in AI and robotics through education.",
    },
    {
      image: "/images/caipo.png",
      title: "Chief AI Productivity Officer",
      description:
        "A groundbreaking role to maximize productivity through AI-driven insights.",
    },
    {
      image: "/images/spaceexploration.png", // Example additional project
      title: "Space Exploration",
      description:
        "Exploring new frontiers through advanced AI and robotics systems.",
    },
  ];

  return (
    <section id="about" className="bg-black text-white py-16">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Section Title */}
        <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-8">
          About Us
        </h2>
        {/* Section Subtitle */}
        <p className="text-lg text-center text-gray-300 max-w-3xl mx-auto mb-12">
          See our ongoing research and development projects.
        </p>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              image={project.image}
              title={project.title}
              description={project.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
