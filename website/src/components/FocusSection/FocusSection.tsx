import Card from "./Card";

export default function FocusSection() {
  const focuses = [
    {
      image: "/images/education.png",
      title: "Education",
      description:
        "Revolutionizing learning through AI-powered educational tools and platforms.",
      link: "/education",
    },
    {
      image: "/images/healthcare.png",
      title: "Healthcare",
      description:
        "Advancing medical research and patient care with cutting-edge AI.",
      link: "/healthcare",
    },
    {
      image: "/images/travel.png",
      title: "Travel",
      description:
        "Enhancing travel experiences with intelligent automation and personalization.",
      link: "/travel",
    },
    {
      image: "/images/space.png",
      title: "Space",
      description:
        "Advancing space exploration and travel with AI-driven technologies and innovation.",
      link: "/space",
    },
  ];

  return (
    <section id="focus" className="bg-black text-white py-16">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Section Title */}
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-8">
          Our Focus
        </h2>
        {/* Section Subtitle */}
        <p className="text-lg text-center text-gray-300 max-w-3xl mx-auto mb-12">
          Pioneering breakthrough technologies that reshape industries and
          elevate human potential.
        </p>

        {/* Cards Grid - Updated Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-8 justify-items-center">
          {focuses.map((focus) => (
            <div key={focus.link} className="w-full max-w-[350px]">
              <Card
                image={focus.image}
                title={focus.title}
                description={focus.description}
                link={focus.link}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
