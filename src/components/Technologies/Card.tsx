import Link from "next/link";
import Image from "next/image";

interface TechnologyCardProps {
  image: string; // URL for the card image
  title: string; // Card title
  description: string; // Card description
  link: string; // Link for redirection
}

export default function TechnologyCard({
  image,
  title,
  description,
  link,
}: TechnologyCardProps) {
  return (
    <Link href={link} passHref>
      <a
        className="bg-[#121212] text-white rounded-lg shadow-md overflow-hidden transform hover:scale-105 transition-transform duration-300 cursor-pointer block"
        target="_blank"
        rel="noopener noreferrer"
      >
        {/* Image Section */}
        <div className="relative w-full h-48">
          <Image
            src={image}
            alt={title}
            layout="fill"
            objectFit="cover"
            className="hover:scale-110 transition-transform duration-300"
          />
        </div>

        {/* Content Section */}
        <div className="p-6">
          {/* Title */}
          <h3 className="text-lg font-bold mb-2">{title}</h3>
          {/* Description */}
          <p className="text-sm text-gray-400 mb-4">{description}</p>
          {/* Read More Icon */}
          <div className="text-blue-400 flex items-center">
            Read More
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 ml-1"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm1.53-10.53a.75.75 0 10-1.06-1.06l-3.75 3.75a.75.75 0 000 1.06l3.75 3.75a.75.75 0 101.06-1.06L8.81 10l2.72-2.53z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </div>
      </a>
    </Link>
  );
}
