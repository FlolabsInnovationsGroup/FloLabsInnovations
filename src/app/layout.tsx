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
  image: "https://www.flomadlabs.com/images/metaflomadlabs.png", 
  url: "https://www.flomadlabs.com",
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
<head>
  {/* Basic Metadata */}
  <title>{metadata.title}</title>
  <meta name="description" content={metadata.description} />
  <meta name="viewport" content="width=device-width, initial-scale=1" />

  {/* Open Graph / Facebook Metadata */}
  <meta property="og:title" content={metadata.title} />
  <meta property="og:description" content={metadata.description} />
  <meta property="og:image" content={metadata.image} />
  <meta property="og:url" content={metadata.url} />
  <meta property="og:type" content="website" />
  <meta property="og:site_name" content="Flomad Labs" />

  {/* Twitter Metadata */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content={metadata.title} />
  <meta name="twitter:description" content={metadata.description} />
  <meta name="twitter:image" content={metadata.image} />
</head>

      <body
        className={`${inter.variable} ${robotoMono.variable} antialiased bg-gradient-to-b from-black via-[#121212] to-[#1e1e1e] text-white`}
      >
        {/* Global Header */}
        <Header />

        {/* Main content */}
        <main>{children}</main>

        {/* Global Footer */}
        <Footer />
      </body>
    </html>
  );
}
