"use client";

import Image from "next/image";
import Link from "next/link";

interface CardProps {
  image: string;
  title: string;
  description: string;
  bgColor?: string;
  link?: string;
  buttonText?: string;
  buttonLink?: string;
}

export default function Card({
  image,
  title,
  description,
  bgColor = "bg-[#121212]",
  link,
  buttonText = "Visit Site",
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

        {/* Visit Site Button - Opens in New Tab */}
        {buttonLink && (
          <a
            href={buttonLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex justify-end items-center text-blue-400 font-medium group hover:underline"
            aria-label={`Visit ${title}`}
            onClick={(e) => e.stopPropagation()} 
          >
            <span>{buttonText}</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 ml-2 text-blue-400 group-hover:translate-x-1 transition-transform duration-300"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M9 5l7 7-7 7" />
            </svg>
          </a>
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
