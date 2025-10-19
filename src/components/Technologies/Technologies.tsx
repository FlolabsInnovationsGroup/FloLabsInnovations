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
      title: "MoodChanger for People",
      description: "Transforming your mood and health, one insight at a time.",
      link: "/moodchanger-people",
    },
    {
      image: "/images/forpets.png",
      title: "MoodChanger for Pets",
      description: "Redefining pet wellness for better care.",
      link: "/moodchanger-pets",
    },
    {
      image: "/images/aitravel.png",
      title: "AI Travel on Earth and Beyond",
      description: "Conversational AI is changing the way we explore and travel the world.",
      link: "/ai-travel",
    },
    {
      image: "/images/animalvocalization.png",
      title: "Animal Vocalization",
      description: "Talking to your pets is about to become reality.",
      link: "/animal-vocalization",
    },
    {
      image: "/images/airoboticspics.jpg",
      title: "AI and Robotics",
      description: "We are on the cusp of a revolution.",
      link: "/ai-robotics",
    },
  ];

  return (
    <section id="technologies" className="bg-black text-white py-16">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-8">
          Technologies
        </h2>
        <p className="text-lg text-center text-gray-300 max-w-3xl mx-auto mb-12">
          Breakthrough technologies Flo Labs R&D is focusing on.
        </p>

        {/* Grid of Technology Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-8 justify-items-center">
          {technologies.map((tech, index) => (
            <div key={index} className="w-full max-w-[350px]">
              <TechnologyCard
                image={tech.image}
                title={tech.title}
                description={tech.description}
                link={tech.link}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
