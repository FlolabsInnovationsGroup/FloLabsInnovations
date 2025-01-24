import Image from "next/image";
import Link from "next/link";

interface CardProps {
  image: string; // URL for the card image
  title: string; // Card title
  description: string; // Card description
  link?: string; // Optional link for the card
}

export default function Card({ image, title, description, link }: CardProps) {
  const cardContent = (
    <div className="bg-[#121212] text-white rounded-lg shadow-md transform transition-transform duration-300">
      {/* Image Section with Aspect Ratio */}
      <div className="aspect-w-4 aspect-h-3 relative overflow-hidden rounded-t-lg">
        <Image
          src={image || "/images/default-placeholder.png"} // Fallback for missing image
          alt={title}
          fill // Fill the parent container
          className="object-cover"
        />
      </div>

      {/* Content Section */}
      <div className="p-6">
        {/* Title */}
        <h3 className="text-lg font-bold mb-2">{title}</h3>
        {/* Description */}
        <p className="text-sm text-gray-400 mb-4">{description}</p>
        {/* Read More Button */}
        <div className="flex justify-end items-center mt-4">
          <span className="text-sm font-medium text-blue-400 group-hover:underline">
            Read More
          </span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 ml-2 text-blue-400 group-hover:translate-x-1 transition-transform duration-300"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </div>
    </div>
  );

  // Handle wrapping with `Link` if `link` is provided
  return link ? (
    <Link
      href={link}
      className="block group"
      aria-label={`View details about ${title}`}
    >
      <div className="relative rounded-lg p-[4px] bg-transparent group-hover:bg-gradient-to-r group-hover:from-[#1e3a8a] group-hover:via-[#2563eb] group-hover:to-[#3b82f6] transition-all duration-300">
        <div className="bg-[#121212] rounded-lg">{cardContent}</div>
      </div>
    </Link>
  ) : (
    <div className="relative rounded-lg p-[4px] bg-transparent hover:bg-gradient-to-r hover:from-[#1e3a8a] hover:via-[#2563eb] hover:to-[#3b82f6] transition-all duration-300">
      <div className="bg-[#121212] rounded-lg">{cardContent}</div>
    </div>
  );
}
