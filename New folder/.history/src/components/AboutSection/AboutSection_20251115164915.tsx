import Card from "../AboutSection/Card";
import { getAboutProjects, getStrapiMediaUrl } from "@/lib/strapi";
import AboutSectionFallback from "./AboutSectionFallback";

export default async function AboutSection() {
  try {
    const response = await getAboutProjects();
    const projects = response.data;

    return (
      <section
        id="about"
        className="relative text-white py-32 flex items-center justify-center"
        style={{
          backgroundImage: `url('/images/tunnelbackground.png')`,
          backgroundSize: "80%",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          minHeight: "100vh",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-30"></div>
        <div className="container mx-auto px-6 lg:px-12">
          <h2 className="text-5xl font-bold text-center mb-12 text-white drop-shadow-lg">
            About Us
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-8 justify-items-center">
            {projects.map((project) => (
              <div key={project.id} className="w-full max-w-[350px]">
                <Card
                  image={getStrapiMediaUrl(project.image?.url)}
                  title={project.title}
                  description={project.description}
                  link={project.link || '#'}
                  buttonText={project.buttonText || 'Visit Site'}
                  buttonLink={project.buttonLink || project.link || '#'}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  } catch (error) {
    console.error('Failed to load about projects from Strapi, using fallback:', error);
    return <AboutSectionFallback />;
  }
}
