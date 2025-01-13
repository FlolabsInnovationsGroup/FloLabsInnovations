import { FaEnvelope, FaPhoneAlt, FaLinkedin } from "react-icons/fa";

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
                href="#"
                className="hover:text-blue-400 transition duration-300"
                aria-label="Email"
              >
                <FaEnvelope className="w-6 h-6" />
              </a>
              <a
                href="#"
                className="hover:text-blue-400 transition duration-300"
                aria-label="Phone"
              >
                <FaPhoneAlt className="w-6 h-6" />
              </a>
              <a
                href="#"
                className="hover:text-blue-400 transition duration-300"
                aria-label="LinkedIn"
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
                <a href="#home" className="hover:text-blue-400 transition duration-300">
                  Home
                </a>
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
                <a href="https://www.flomadtravel.com/" className="hover:text-blue-400 transition duration-300">
                  Flomad Travel
                </a>
              </li>
              <li>
                <a href="https://flomad.international/" className="hover:text-blue-400 transition duration-300">
                  Flomad International
                </a>
              </li>
              <li>
                <a href="https://www.caipo.ai/" className="hover:text-blue-400 transition duration-300">
                  CAIPO
                </a>
              </li>
            </ul>
          </div>

          {/* Stay Connected Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Stay connected with us</h3>
            <form>
              <div className="mb-4">
                <label htmlFor="email" className="block text-sm mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full p-3 rounded bg-gray-800 text-white placeholder-gray-500"
                  placeholder="Enter your email"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="firstName" className="block text-sm mb-2">
                  First name
                </label>
                <input
                  type="text"
                  id="firstName"
                  className="w-full p-3 rounded bg-gray-800 text-white placeholder-gray-500"
                  placeholder="Enter your first name"
                />
              </div>
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded w-full transition duration-300"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
          <p>A Flomad Labs R&D company</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition">
              About Flomad Labs R&D
            </a>
            <a href="#" className="hover:text-white transition">
              Flomad Labs R&D products
            </a>
            <a href="#" className="hover:text-white transition">
              Privacy
            </a>
            <a href="#" className="hover:text-white transition">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
