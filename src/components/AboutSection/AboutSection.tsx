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
      className="relative text-white py-32 flex items-center justify-center"
      style={{
        backgroundImage: `url('/images/tunnelbackground.png')`,
        backgroundSize: "80%", // Zoom out to show more of the tunnel
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        minHeight: "100vh",
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50"></div> {/* Overlay */}
      <div className="container mx-auto relative z-10 px-6">
        <h2 className="text-5xl font-bold text-center mb-12">About Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 justify-items-center">
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
