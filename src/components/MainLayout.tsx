"use client";

import { usePathname } from "next/navigation";
import { FaChevronUp, FaHome } from "react-icons/fa"; 
import BackButton from "./BackButton";

export default function MainLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname(); 

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" }); 
  };

  return (
    <div className="bg-black text-white min-h-screen flex flex-col">
      {/* Back Button for Non-Homepage Paths */}
      {pathname !== "/" && (
        <div className="container mx-auto px-6 pt-20">
          <BackButton />
        </div>
      )}

      {/* Page-Specific Content */}
      <main className="flex-grow container mx-auto px-6">{children}</main>

      {/* Footer */}
      <footer>
        <div className="container mx-auto flex justify-between items-center px-6">
          {/* Scroll to Top Icon */}
          <button
            onClick={scrollToTop}
            className="fixed bottom-6 right-6 bg-blue-600/80 p-3 rounded-full hover:bg-blue-500 transition shadow-md"
            aria-label="Scroll to top of the page"
          >
            <FaChevronUp className="text-white text-2xl" />
          </button>

        </div>
      </footer>
    </div>
  );
}
