import "../styles/globals.css"; // Global CSS styles
import { Inter, Roboto_Mono } from "next/font/google";
import type { Metadata } from "next";
import Header from "../components/Header"; // Import your Header component
import Footer from "../components/Footer"; // Import your Footer component
import ErrorBoundary from "../components/ErrorBoundary";

// Define fonts
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const robotoMono = Roboto_Mono({
  variable: "--font-roboto-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Flo Labs R&D",
  description: "Discover Flo Labs' innovative research and technologies.",
  icons: {
    icon: "/images/FloLabs_logo.svg",
    shortcut: "/images/FloLabs_logo.svg",
  },
  openGraph: {
    title: "Flo Labs R&D",
    description: "Discover Flo Labs' innovative research and technologies.",
    images: [
      {
        url: "https://www.flolabsrd.com/images/flolabssocial.png",
        width: 1200,
        height: 630,
        alt: "Flo Labs R&D",
      },
    ],
    url: "https://www.flolabsrd.com",
    type: "website",
    siteName: "Flo Labs",
  },
  twitter: {
    card: "summary_large_image",
    title: "Flo Labs R&D",
    description: "Discover Flo Labs' innovative research and technologies.",
    images: ["https://www.flolabsrd.com/images/flolabssocial.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${robotoMono.variable} antialiased bg-gradient-to-b from-black via-[#121212] to-[#1e1e1e] text-white`}
      >
        <ErrorBoundary>
          {/* Global Header */}
          <Header />

          {/* Main content */}
          <main>{children}</main>

          {/* Global Footer */}
          <Footer />
        </ErrorBoundary>
      </body>
    </html>
  );
}
