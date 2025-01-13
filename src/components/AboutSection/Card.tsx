interface CardProps {
  image: string; // Image URL
  title: string; // Card title
  description: string; // Card description
  bgColor?: string; // Optional background color
  buttonText?: string; // Optional button text
  buttonLink?: string; // Optional button link
}

export default function Card({
  image,
  title,
  description,
  bgColor = "bg-[#121212]",
  buttonText,
  buttonLink,
}: CardProps) {
  return (
    <div
      className={`${bgColor} text-white rounded-lg shadow-md overflow-hidden transform hover:scale-105 transition-transform duration-300 ease-in-out`}
    >
      {/* Image Section */}
      <div className="overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-48 object-cover hover:scale-110 transition-transform duration-300"
        />
      </div>

      {/* Content Section */}
      <div className="p-6">
        {/* Title */}
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        {/* Description */}
        <p className="text-sm text-gray-400 leading-relaxed mb-4">{description}</p>
        {/* Optional Button */}
        {buttonText && buttonLink && (
          <a
            href={buttonLink}
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition duration-300"
          >
            {buttonText}
          </a>
        )}
      </div>
    </div>
  );
}
