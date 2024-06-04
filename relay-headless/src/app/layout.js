import { Inter } from "next/font/google";
import "./globals.css";
import SmoothScrolling from "../components/SmoothScrolling";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { GlobalStateProvider } from "../components/GlobalStateContext";
import MobileMenu from "../components/MobileMenu";
import { Analytics } from "@vercel/analytics/react";
import Head from "next/head";
import Spline from "@splinetool/react-spline";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Relay - Modern Web Design & Development Agency",
  description:
    "Relay Digital delivers innovative web design and development services, focusing on performance, cutting-edge design, and scalability to boost your online presence.",
  keywords:
    "modern web design, web development services, professional web design agency, scalable web solutions, custom web development",
  charset: "UTF-8",
  viewport: "width=device-width, initial-scale=1.0",
  robots: "index, follow",
  image: "/img/social-media-share-preview.png",
  url: "http://relaymedia.agency",
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords} />
        <meta charSet={metadata.charset} />
        <meta name="viewport" content={metadata.viewport} />
        <meta name="robots" content={metadata.robots} />

        <link rel="shortcut icon" href="/img/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/img/favicon.png" />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/img/favicon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/img/favicon.png"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={metadata.url} />
        <meta property="og:title" content={metadata.title} />
        <meta property="og:description" content={metadata.description} />
        <meta property="og:image" content={metadata.image} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content={metadata.url} />
        <meta name="twitter:title" content={metadata.title} />
        <meta name="twitter:description" content={metadata.description} />
        <meta name="twitter:image" content={metadata.image} />

        <Script
          id="google-tag"
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-NQH0Z2981Z"
        ></Script>
        <Script
          id="google-analytics"
          strategy="afterInteracive"
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-NQH0Z2981Z');`,
          }}
        ></Script>
        <Script
          id="gtm"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-PXXTT7FJ');`,
          }}
        ></Script>
      </head>
      <body className={inter.className}>
        {/* <Analytics /> */}
        <GlobalStateProvider>
          <SmoothScrolling>
            {/* <ContentLoader /> */}
            <Navbar />
            {/* <MobileMenu /> */}
            {children}
            <Footer />
          </SmoothScrolling>
        </GlobalStateProvider>
      </body>
    </html>
  );
};

export default RootLayout;
