import TechnologyCard from "../Technologies/Card";
import { getTechnologies, getStrapiMediaUrl } from "@/lib/strapi";
import TechnologiesFallback from "./TechnologiesFallback";

export default async function Technologies() {
  try {
    const response = await getTechnologies();
    const technologies = response.data;

    return (
      <section id="technologies" className="bg-black text-white py-16">
        <div className="container mx-auto px-6 lg:px-12">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-8">
            Technologies
          </h2>
          <p className="text-lg text-center text-gray-300 max-w-3xl mx-auto mb-12">
            Breakthrough technologies Flo Labs R&D is focusing on.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-8 justify-items-center">
            {technologies.map((tech) => (
              <div key={tech.id} className="w-full max-w-[350px]">
                <TechnologyCard
                  image={getStrapiMediaUrl(tech.image?.url)}
                  title={tech.name}
                  description={tech.description}
                  link={tech.link || '#'}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  } catch (error) {
    console.error('Failed to load technologies from Strapi, using fallback:', error);
    return <TechnologiesFallback />;
  }
}
