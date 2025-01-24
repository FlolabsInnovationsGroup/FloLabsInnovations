import Card from "../AboutSection/Card";

export default function AboutSection() {
  const projects = [
    {
      image: "/images/conversationalai.png",
      title: "Conversational AI",
      description: "Intelligent conversational AI for personalized travel planning.",
      link: "https://www.flomadtravel.com/", // External link
    },
    {
      image: "/images/aiagirobotics.png",
      title: "AI/AGI/Robotics",
      description: "Empowering leaders to excel in AI and robotics through education.",
      link: "https://flomad.international/", // External link
    },
    {
      image: "/images/caipo.png",
      title: "Chief AI Productivity Officer",
      description: "Maximizing productivity through AI-driven insights.",
      link: "https://www.caipo.ai/", // External link
    },
  ];

  return (
    <section
      id="about"
      className="text-white py-16"
      style={{
        backgroundImage: `url('/images/tunnelbackground.png')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="container mx-auto px-6 lg:px-12 bg-black bg-opacity-75 rounded-lg py-12">
        {/* Section Title */}
        <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-8">
          About Us
        </h2>
        {/* Section Subtitle */}
        <p className="text-lg text-center text-gray-300 max-w-3xl mx-auto mb-12">
          See our ongoing research and development projects.
        </p>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              image={project.image}
              title={project.title}
              description={project.description}
              link={project.link} // Pass the link for each card
            />
          ))}
        </div>
      </div>
    </section>
  );
}
