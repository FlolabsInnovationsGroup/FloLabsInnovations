import { Inter, Roboto_Mono } from "next/font/google";
import "../styles/globals.css"; // Global CSS styles
import Header from "../components/Header"; // Global Header
import Footer from "../components/Footer"; // Global Footer

// Define fonts
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const robotoMono = Roboto_Mono({
  variable: "--font-roboto-mono",
  subsets: ["latin"],
});

// Metadata for the application
export const metadata = {
  title: "Flomad Labs R&D",
  description: "Discover Flomad Labs' innovative research and technologies.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en"> {/* Set `lang` directly here */}
      <head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body
        className={`${inter.variable} ${robotoMono.variable} antialiased bg-gradient-to-b from-black via-[#121212] to-[#1e1e1e] text-white`}
      >
        <Header /> {/* Render the Header */}
        <main className="container mx-auto px-4 sm:px-6 lg:px-8">{children}</main>
        <Footer /> {/* Render the Footer */}
      </body>
    </html>
  );
}
