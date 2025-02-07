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
      className={`${bgColor} text-white rounded-lg shadow-md overflow-hidden transform transition-transform duration-300 ease-in-out w-full h-full flex flex-col`}
    >
      {/* Fixed Image Section */}
      <div className="relative w-full h-48 overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
        />
      </div>

      {/* Content Section */}
      <div className="p-4 flex-grow flex flex-col justify-between">
        <h3 className="text-lg font-bold mb-2">{title}</h3>
        <p className="text-sm text-gray-400 leading-relaxed mb-4 line-clamp-3">
          {description}
        </p>
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

  return link ? (
    <Link href={link} className="block group w-full h-full">
      <div className="relative rounded-lg p-[4px] bg-transparent group-hover:bg-gradient-to-r group-hover:from-[#1e3a8a] group-hover:via-[#2563eb] group-hover:to-[#3b82f6] transition-all duration-300 w-full h-full">
        <div className="bg-[#121212] rounded-lg w-full h-full">{cardContent}</div>
      </div>
    </Link>
  ) : (
    <div className="relative rounded-lg p-[4px] bg-transparent hover:bg-gradient-to-r hover:from-[#1e3a8a] hover:via-[#2563eb] hover:to-[#3b82f6] transition-all duration-300 w-full h-full">
      <div className="bg-[#121212] rounded-lg w-full h-full">{cardContent}</div>
    </div>
  );
}
