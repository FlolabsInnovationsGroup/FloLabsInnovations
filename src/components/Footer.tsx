import { FaEnvelope, FaPhoneAlt, FaLinkedin } from "react-icons/fa";
import Link from "next/link";

export default function Footer() {
  return (
    <footer id="links" className="bg-black text-white py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-8 border-b border-gray-800">
          {/* Follow Us Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Follow us</h3>
            <div className="flex space-x-4">
              <a
                href="mailto:info@flomadlabs.com"
                className="hover:text-blue-400 transition duration-300"
                aria-label="Email"
              >
                <FaEnvelope className="w-6 h-6" />
              </a>
              <a
                href="tel:+123456789"
                className="hover:text-blue-400 transition duration-300"
                aria-label="Phone"
              >
                <FaPhoneAlt className="w-6 h-6" />
              </a>
              <a
                href="https://www.linkedin.com/company/flomadlabs"
                className="hover:text-blue-400 transition duration-300"
                aria-label="LinkedIn"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Quick Links Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="hover:text-blue-400 transition duration-300">
                  Home
                </Link>
              </li>
              <li>
                <a href="#about" className="hover:text-blue-400 transition duration-300">
                  About
                </a>
              </li>
              <li>
                <a href="#focus" className="hover:text-blue-400 transition duration-300">
                  Our focus
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-blue-400 transition duration-300">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Other Websites Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Our other websites</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="https://www.flomadtravel.com/"
                  className="hover:text-blue-400 transition duration-300"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Flomad Travel
                </a>
              </li>
              <li>
                <a
                  href="https://flomad.international/"
                  className="hover:text-blue-400 transition duration-300"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Flomad International
                </a>
              </li>
              <li>
                <a
                  href="https://www.caipo.ai/"
                  className="hover:text-blue-400 transition duration-300"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  CAIPO
                </a>
              </li>
            </ul>
          </div>

          {/* Stay Connected Section with Beehiiv Embed */}
          <div>
            <iframe
              src="https://embeds.beehiiv.com/53c7ac00-2964-4f87-ba7d-c7b87146ad90"
              data-test-id="beehiiv-embed"
              width="100%"
              height="320"
              frameBorder="0"
              scrolling="no"
              style={{
                borderRadius: "4px",
                border: "2px solid #e5e7eb",
                backgroundColor: "transparent",
              }}
              aria-label="Subscribe to our newsletter"
            ></iframe>
          </div>
        </div>
      </div>
    </footer>
  );
}
