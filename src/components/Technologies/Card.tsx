"use client";

import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";
import { useState, useEffect } from "react";

interface TechnologyCardProps {
  image: string; // URL for the card image
  title: string; // Card title
  description: string; // Card description
  link?: string; // Optional link for the card
}

export default function TechnologyCard({
  image,
  title,
  description,
  link,
}: TechnologyCardProps) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const wrapperClass = "block relative rounded-lg p-[4px] bg-transparent hover:bg-gradient-to-r hover:from-[#1e3a8a] hover:via-[#2563eb] hover:to-[#3b82f6] transition-all duration-300 h-full";
  const cardContent = (
    <>
      <div className="relative aspect-w-4 aspect-h-3 overflow-hidden rounded-t-lg">
        {isMounted && (
          <Suspense fallback={<div className="w-full h-full bg-gray-800" />}>
            <Image
              src={image || "/images/default-placeholder.png"}
              alt={title}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover"
            />
          </Suspense>
        )}
      </div>

      <div className="p-4 flex flex-col flex-grow">
        <h3 className="text-lg font-bold mb-2">{title}</h3>
        <p className="text-sm text-gray-400 mb-4 line-clamp-3">{description}</p>
        <div className="mt-auto flex justify-end items-center">
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
    </>
  );

  if (!link) {
    return <div className={`${wrapperClass} bg-[#121212] text-white rounded-lg shadow-md transform transition-transform duration-300 flex flex-col h-full`}>{cardContent}</div>;
  }

  return (
    <Link href={link} className={`${wrapperClass} bg-[#121212] text-white rounded-lg shadow-md transform transition-transform duration-300 flex flex-col h-full group`} aria-label={`View details about ${title}`}>
      {cardContent}
    </Link>
  );
}
