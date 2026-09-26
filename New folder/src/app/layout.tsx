import "../styles/globals.css";
import { Inter, Roboto_Mono } from "next/font/google";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ErrorBoundary from "../components/ErrorBoundary";
import Script from "next/script";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const robotoMono = Roboto_Mono({
  variable: "--font-roboto-mono",
  subsets: ["latin"],
});

const SITE_TITLE = "FloLabs Innovations Group";

const SITE_DESC =
  "Discover FloLabs' innovative research, technologies, and ventures in AI and robotics.";

const SITE_URL = "https://www.flolabsinnovations.com";

const OG_IMAGE =
  "https://www.flolabsinnovations.com/images/flolabssocial.png";

const GTM_ID = "GTM-NFQFM2CH";
const GA_ID = "G-YG33DE9GXQ";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Google Search Console verification */}
        <meta
          name="google-site-verification"
          content="-5aKsyqC6AysvdJkbNaLxhviIHdSntZSqa_qi5PPMEE"
        />

        {/* Google Tag Manager */}
        <Script
          id="google-tag-manager"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){
                w[l]=w[l]||[];
                w[l].push({
                  'gtm.start': new Date().getTime(),
                  event:'gtm.js'
                });

                var f=d.getElementsByTagName(s)[0],
                    j=d.createElement(s),
                    dl=l!='dataLayer'?'&l='+l:'';

                j.async=true;
                j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
                f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','${GTM_ID}');
            `,
          }}
        />

        {/* Basic metadata */}
        <title>{SITE_TITLE}</title>
        <meta name="description" content={SITE_DESC} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* Favicon */}
        <link
          rel="icon"
          href="/images/FloLabs_logo.svg"
          type="image/svg+xml"
        />

        <link
          rel="shortcut icon"
          href="/images/FloLabs_logo.svg"
          type="image/svg+xml"
        />

        {/* Open Graph */}
        <meta property="og:title" content={SITE_TITLE} />
        <meta property="og:description" content={SITE_DESC} />
        <meta property="og:image" content={OG_IMAGE} />
        <meta property="og:url" content={SITE_URL} />
        <meta property="og:type" content="website" />
        <meta
          property="og:site_name"
          content="FloLabs Innovations Group"
        />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={SITE_TITLE} />
        <meta name="twitter:description" content={SITE_DESC} />
        <meta name="twitter:image" content={OG_IMAGE} />

        {/* Existing Google Analytics GA4 */}
        <Script
          id="ga-src"
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
        />

        <Script
          id="ga-init"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];

              function gtag() {
                dataLayer.push(arguments);
              }

              gtag('js', new Date());
              gtag('config', '${GA_ID}');
            `,
          }}
        />
      </head>

      <body
        className={`${inter.variable} ${robotoMono.variable} antialiased bg-gradient-to-b from-black via-[#121212] to-[#1e1e1e] text-white`}
      >
        {/* Google Tag Manager noscript */}
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
            height="0"
            width="0"
            title="Google Tag Manager"
            style={{
              display: "none",
              visibility: "hidden",
            }}
          />
        </noscript>

        <ErrorBoundary>
          <Header />

          <main>{children}</main>

          <Footer />
        </ErrorBoundary>
      </body>
    </html>
  );
}

// import "../styles/globals.css";
// import { Inter, Roboto_Mono } from "next/font/google";
// import Header from "../components/Header";
// import Footer from "../components/Footer";
// import ErrorBoundary from "../components/ErrorBoundary";
// import Script from "next/script";

// const inter = Inter({
//   variable: "--font-inter",
//   subsets: ["latin"],
// });

// const robotoMono = Roboto_Mono({
//   variable: "--font-roboto-mono",
//   subsets: ["latin"],
// });

// const SITE_TITLE = "FloLabs Innovations Group";
// const SITE_DESC = "Discover Flo Labs' innovative research and technologies.";
// const SITE_URL = "https://www.flolabsrd.com";
// const OG_IMAGE = "https://www.flolabsrd.com/images/flolabssocial.png";

// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   return (
//     <html lang="en" suppressHydrationWarning>
//       <head>
//         {/* Google Search Console verification */}
//         <meta
//           name="google-site-verification"
//           content="q7Iz4hswuM51RriyDBt8nxz3kLPZcUDl5vvsm-k6IYg"
//         />

//         {/* Basic metadata */}
//         <title>{SITE_TITLE}</title>
//         <meta name="description" content={SITE_DESC} />
//         <meta name="viewport" content="width=device-width, initial-scale=1" />

//         {/* Favicon */}
//         <link rel="icon" href="/images/FloLabs_logo.svg" type="image/svg+xml" />
//         <link
//           rel="shortcut icon"
//           href="/images/FloLabs_logo.svg"
//           type="image/svg+xml"
//         />

//         {/* Open Graph */}
//         <meta property="og:title" content={SITE_TITLE} />
//         <meta property="og:description" content={SITE_DESC} />
//         <meta property="og:image" content={OG_IMAGE} />
//         <meta property="og:url" content={SITE_URL} />
//         <meta property="og:type" content="website" />
//         <meta property="og:site_name" content="Flo Labs" />

//         {/* Twitter */}
//         <meta name="twitter:card" content="summary_large_image" />
//         <meta name="twitter:title" content={SITE_TITLE} />
//         <meta name="twitter:description" content={SITE_DESC} />
//         <meta name="twitter:image" content={OG_IMAGE} />

//         {/* Google Analytics (GA4) */}
//         <Script
//           id="ga-src"
//           strategy="afterInteractive"
//           src="https://www.googletagmanager.com/gtag/js?id=G-YG33DE9GXQ"
//         />
//         <Script
//           id="ga-init"
//           strategy="afterInteractive"
//           dangerouslySetInnerHTML={{
//             __html: `
//               window.dataLayer = window.dataLayer || [];
//               function gtag(){dataLayer.push(arguments);}
//               gtag('js', new Date());
//               gtag('config', 'G-YG33DE9GXQ');
//             `,
//           }}
//         />
//       </head>

//       <body
//         className={`${inter.variable} ${robotoMono.variable} antialiased bg-gradient-to-b from-black via-[#121212] to-[#1e1e1e] text-white`}
//       >
//         <ErrorBoundary>
//           <Header />
//           <main>{children}</main>
//           <Footer />
//         </ErrorBoundary>
//       </body>
//     </html>
//   );
// }





// // import "../styles/globals.css"; // Global CSS styles
// // import { Inter, Roboto_Mono } from "next/font/google";
// // import Header from "../components/Header"; // Import your Header component
// // import Footer from "../components/Footer"; // Import your Footer component
// // import ErrorBoundary from "../components/ErrorBoundary";

// // // Define fonts
// // const inter = Inter({
// //   variable: "--font-inter",
// //   subsets: ["latin"],
// // });

// // const robotoMono = Roboto_Mono({
// //   variable: "--font-roboto-mono",
// //   subsets: ["latin"],
// // });

// // export const metadata = {
// //   title: "FloLabs Innovations Group",
// //   description: "Discover Flo Labs' innovative research and technologies.",
// //   image: "https://www.flolabsrd.com/images/flolabssocial.png",
// //   url: "https://www.flolabsrd.com",
// // };

// // export default function RootLayout({
// //   children,
// // }: Readonly<{
// //   children: React.ReactNode;
// // }>) {
// //   return (
// //     <html lang="en" suppressHydrationWarning>
// //       <head>
// //         {/* Basic Metadata */}
// //         <title>{metadata.title}</title>
// //         <meta name="description" content={metadata.description} />
// //         <meta name="viewport" content="width=device-width, initial-scale=1" />

// //         {/* Favicon */}
// //         <link rel="icon" href="/images/FloLabs_logo.svg" type="image/svg+xml" />
// //         <link
// //           rel="shortcut icon"
// //           href="/images/FloLabs_logo.svg"
// //           type="image/svg+xml"
// //         />

// //         {/* Open Graph / Facebook Metadata */}
// //         <meta property="og:title" content={metadata.title} />
// //         <meta property="og:description" content={metadata.description} />
// //         <meta property="og:image" content={metadata.image} />
// //         <meta property="og:url" content={metadata.url} />
// //         <meta property="og:type" content="website" />
// //         <meta property="og:site_name" content="Flo Labs" />

// //         {/* Twitter Metadata */}
// //         <meta name="twitter:card" content="summary_large_image" />
// //         <meta name="twitter:title" content={metadata.title} />
// //         <meta name="twitter:description" content={metadata.description} />
// //         <meta name="twitter:image" content={metadata.image} />
// //       </head>

// //       <body
// //         className={`${inter.variable} ${robotoMono.variable} antialiased bg-gradient-to-b from-black via-[#121212] to-[#1e1e1e] text-white`}>
// //         <ErrorBoundary>
// //           {/* Global Header */}
// //           <Header />

// //           {/* Main content */}
// //           <main>{children}</main>

// //           {/* Global Footer */}
// //           <Footer />
// //         </ErrorBoundary>
// //       </body>
// //     </html>
// //   );
// // }
