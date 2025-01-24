import TechnologyCard from "../Technologies/Card";

export default function Technologies() {
  const technologies = [
    {
      image: "/images/caipotech.png",
      title: "CAIPO",
      description: "Optimizing health and performance: personal and organizational growth.",
      link: "/caipo",
    },
    {
      image: "/images/transforming.png",
      title: "MoodChanger App for People",
      description: "Transforming your mood, one insight at a time with intelligent tools.",
      link: "/moodchanger-people",
    },
    {
      image: "/images/forpets.png",
      title: "MoodChanger App for Pets",
      description: "Redefining pet wellness through AI and connection for better care.",
      link: "/moodchanger-pets",
    },
    {
      image: "/images/atravelonearth.png",
      title: "AI Travel on Earth and Beyond",
      description: "Conversational AI is changing the way we explore and travel the world.",
      link: "/ai-travel",
    },
    {
      image: "/images/animalvocalpic.png",
      title: "Animal Vocalization",
      description: "AI-powered research in animal vocalization for a better understanding.",
      link: "/animal-vocalization",
    },
    {
      image: "/images/aiandroboticspic.png",
      title: "AI and Robotics",
      description: "Advancing robotics through Flomad Labs R&D's cutting-edge technologies.",
      link: "/ai-robotics",
    },
  ];

  return (
    <section id="technologies" className="bg-black text-white py-16">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-8">
          Technologies
        </h2>
        <p className="text-lg text-center text-gray-300 max-w-3xl mx-auto mb-12">
          Breakthrough technologies Flomad Labs R&D is focusing on.
        </p>

        {/* Grid of Technology Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {technologies.map((tech, index) => (
            <TechnologyCard
              key={index}
              image={tech.image}
              title={tech.title}
              description={tech.description}
              link={tech.link}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
