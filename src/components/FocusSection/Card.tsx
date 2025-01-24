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
        {/* Read More Icon */}
        <div className="text-blue-400 flex items-center">
          <span className="text-sm">Read More</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 ml-1"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm1.53-10.53a.75.75 0 10-1.06-1.06l-3.75 3.75a.75.75 0 000 1.06l-3.75 3.75a.75.75 0 101.06-1.06L8.81 10l2.72-2.53z"
              clipRule="evenodd"
            />
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
