"use client";

import { usePathname } from "next/navigation";
import BackButton from "./BackButton";

export default function MainLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname(); // Get the current path

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" }); // Smooth scroll to the top
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
      <footer className="bg-gray-900 text-white py-6 mt-12">
        <div className="container mx-auto flex justify-between items-center px-6">
          {/* Scroll to Top Button */}
          <button
            onClick={scrollToTop}
            className="bg-[#0073e6] text-white py-2 px-4 rounded-lg hover:bg-[#005bb5] transition-all duration-200"
            aria-label="Scroll to top of the page"
          >
            Scroll to Top
          </button>

          {/* Back to Home Button */}
          <button
            onClick={() => window.location.href = "/"}
            className="bg-[#0073e6] text-white py-2 px-4 rounded-lg hover:bg-[#005bb5] transition-all duration-200"
            aria-label="Back to homepage"
          >
            Back to Home
          </button>
        </div>
      </footer>
    </div>
  );
}
