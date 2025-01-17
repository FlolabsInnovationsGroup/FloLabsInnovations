"use client"; // Required for client-side rendering

import { usePathname } from "next/navigation"; // Use `next/navigation` for modern Next.js apps
import BackButton from "./BackButton";

export default function Layout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname(); // Use `usePathname` for getting the current path

  return (
    <div className="bg-black text-white min-h-screen flex flex-col">


      {/* Back Button for Non-Homepage Paths */}
      {pathname !== "/" && (
        <div className="container mx-auto px-6 mt-16">
          <BackButton />
        </div>
      )}

      {/* Page Content */}
      <main className="flex-grow container mx-auto px-6">{children}</main>

    </div>
  );
}

