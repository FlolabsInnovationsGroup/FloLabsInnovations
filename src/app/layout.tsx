import "../styles/globals.css"; // Global CSS styles
import { Inter, Roboto_Mono } from "next/font/google";
import Header from "../components/Header"; // Import your Header component
import Footer from "../components/Footer"; // Import your Footer component

// Define fonts
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const robotoMono = Roboto_Mono({
  variable: "--font-roboto-mono",
  subsets: ["latin"],
});

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
    <html lang="en">
      <head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body
        className={`${inter.variable} ${robotoMono.variable} antialiased bg-gradient-to-b from-black via-[#121212] to-[#1e1e1e] text-white`}
      >
        <Header /> {/* Add the Header component */}
        <main>{children}</main> {/* Render the page-specific content */}
        <Footer /> {/* Add the Footer component */}
      </body>
    </html>
  );
}
