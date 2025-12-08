import Card from "../FocusSection/Card";
import { getFocusAreas, getStrapiMediaUrl } from "@/lib/strapi";
import FocusSectionFallback from "./FocusSectionFallback";

export default async function FocusSection() {
  try {
    const response = await getFocusAreas();
    const focuses = response.data;

    return (
      <section id="focus" className="bg-black text-white py-16">
        <div className="container mx-auto px-6 lg:px-12">
          {/* Section Title */}
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-8">
            Our Focus
          </h2>
          {/* Section Subtitle */}
          <p className="text-lg text-center text-gray-300 max-w-3xl mx-auto mb-12">
            Pioneering breakthrough technologies that reshape industries and elevate human potential.
          </p>

          {/* Cards Grid - Updated Layout */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-8 justify-items-center">
            {focuses.map((focus) => (
              <div key={focus.id} className="w-full max-w-[350px]">
                <Card
                  image={getStrapiMediaUrl(focus.coverImage?.url)}
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
  } catch (error) {
    console.error('Failed to load focus areas from Strapi, using fallback:', error);
    return <FocusSectionFallback />;
  }
}
