import Image from "next/image";
import Link from "next/link";

interface CardProps {
  image: string; // Image URL
  title: string; // Card title
  description: string; // Card description
  bgColor?: string; // Optional background color
  link?: string; // Optional link for the entire card
  buttonText?: string; // Optional button text
  buttonLink?: string; // Optional button link
}

export default function Card({
  image,
  title,
  description,
  bgColor = "bg-[#121212]",
  link,
  buttonText,
  buttonLink,
}: CardProps) {
  const cardContent = (
    <div
      className={`${bgColor} text-white rounded-lg shadow-md overflow-hidden transform hover:scale-105 transition-transform duration-300 ease-in-out max-w-xs mx-auto`}
    >
      {/* Image Section */}
      <div className="relative aspect-w-4 aspect-h-3 overflow-hidden rounded-t-lg">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
        />
      </div>

      {/* Content Section */}
      <div className="p-4">
        {/* Title */}
        <h3 className="text-lg font-bold mb-2">{title}</h3>
        {/* Description */}
        <p className="text-sm text-gray-400 leading-relaxed mb-4">{description}</p>

        {/* Optional Button */}
        {buttonText && buttonLink && (
          <Link
            href={buttonLink}
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition duration-300"
            aria-label={`Learn more about ${title}`}
          >
            {buttonText}
          </Link>
        )}
      </div>
    </div>
  );

  // If `link` is provided, wrap the entire card with `Link`
  return link ? (
    <Link
      href={link}
      className="block"
      aria-label={`View details about ${title}`}
    >
      {cardContent}
    </Link>
  ) : (
    cardContent
  );
}
