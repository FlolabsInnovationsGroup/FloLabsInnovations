import { FaEnvelope, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer id="links" className="bg-black text-white py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Grid Layout for Even Distribution */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pb-8 border-b border-gray-800 items-center">
          
          {/* Follow Us Section */}
          <div className="text-center md:text-left">
            <h3 className="text-lg font-semibold mb-4">Follow us</h3>
            <div className="flex justify-center md:justify-start space-x-6">
              <a
                href="mailto:info@flolabsrd.com"
                className="hover:text-blue-400 transition duration-300"
                aria-label="Email"
              >
                <FaEnvelope className="w-7 h-7" />
              </a>
              <a
                href="https://www.linkedin.com/company/flomad-labs-r-d/"
                className="hover:text-blue-400 transition duration-300"
                aria-label="LinkedIn"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin className="w-7 h-7" />
              </a>
            </div>
          </div>

          {/* Stay Connected Section with Beehiiv Embed */}
          <div className="flex justify-center">
            <iframe
              src="https://embeds.beehiiv.com/53c7ac00-2964-4f87-ba7d-c7b87146ad90"
              data-test-id="beehiiv-embed"
              width="100%"
              height="280"
              className="max-w-md w-full border-2 border-gray-300 rounded-md bg-transparent overflow-hidden"
              aria-label="Subscribe to our newsletter"
            ></iframe>
          </div>
          
        </div>
      </div>
    </footer>
  );
}
