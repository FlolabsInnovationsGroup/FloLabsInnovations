import Card from "../AboutSection/Card"; // Adjust path as needed

export default function AboutSection() {
  const projects = [
    {
      image: "/images/conversationalai.png",
      title: "Travel AI",
      description: "Conversational AI for personalized trip planning.",
      link: "https://www.flomadtravel.com/",
    },
    {
      image: "/images/aiagirobotics.png",
      title: "Advanced AI & Robotics Education",
      description: "Empowering learners through experiential learning.",
      link: "https://flomad.international/",
    },
    {
      image: "/images/caipo.png",
      title: "Chief AI Productivity Officer (CAIPO)",
      description: "Optimizing lifestyles through AI-driven IoT technologies.",
      link: "https://www.caipo.ai/",
    },
  ];

  return (
    <section
      className="text-white py-48" // Extended vertical padding for a longer section
      style={{
        backgroundImage: `url('/images/tunnelbackground.png')`,
        backgroundSize: "70%", // Zoomed out further to show more of the tunnel
        backgroundPosition: "center", // Centering the tunnel image
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="container mx-auto px-10 lg:px-20 bg-black bg-opacity-60 rounded-xl py-28">
        {/* Section Title */}
        <h2 className="text-5xl font-extrabold text-center mb-16">
          About Us
        </h2>
        {/* Section Subtitle */}
        <p className="text-lg text-center text-gray-300 max-w-4xl mx-auto mb-16">
          See our ongoing research and development projects.
        </p>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {projects.map((project, index) => (
            <Card
              key={index}
              image={project.image}
              title={project.title}
              description={project.description}
              link={project.link}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
