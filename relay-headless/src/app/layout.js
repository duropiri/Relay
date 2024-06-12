// import { Inter } from "next/font/google";
import "./globals.css";
import SmoothScrolling from "../components/SmoothScrolling";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { GlobalStateProvider } from "../components/GlobalStateContext";
import Script from "next/script";

// const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Relay - Modern Web Design & Development Agency",
  description:
    "Relay Digital delivers innovative web design and development services, focusing on performance, cutting-edge design, and scalability to boost your online presence.",
  keywords:
    "modern web design, web development services, professional web design agency, scalable web solutions, custom web development",
  charset: "UTF-8",
  robots: "index, follow",
  image: "/img/social-media-share-preview.webp",
  url: "http://relaymedia.agency",
};

export const viewport = "width=device-width, initial-scale=1.0";

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords} />
        <meta charSet={metadata.charset} />
        <meta name="viewport" content={viewport} />
        <meta name="robots" content={metadata.robots} />

        <link rel="shortcut icon" href="/img/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/img/favicon.webp" />
        <link
          rel="icon"
          type="image/webp"
          sizes="32x32"
          href="/img/favicon.webp"
        />
        <link
          rel="icon"
          type="image/webp"
          sizes="16x16"
          href="/img/favicon.webp"
        />

        <link
          rel="preload"
          href="/font/Proxima Nova Regular.otf"
          as="font"
          type="font/otf"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/font/Proxima Nova Bold.otf"
          as="font"
          type="font/otf"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/font/RedHatText[wght].ttf"
          as="font"
          type="font/ttf"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/font/RedHatText-Italic[wght].ttf"
          as="font"
          type="font/ttf"
          crossOrigin="anonymous"
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
          async
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
          async
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-PXXTT7FJ');`,
          }}
        ></Script>

        <Script
          id="hotjar"
          async
          dangerouslySetInnerHTML={{
            __html: `(function(h,o,t,j,a,r){
            h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
            h._hjSettings={hjid:5021016,hjsv:6};
            a=o.getElementsByTagName('head')[0];
            r=o.createElement('script');r.async=1;
            r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
            a.appendChild(r);
            })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');`,
          }}
        ></Script>
      </head>
      <body
      // className={inter.className}
      >
        {/* <Analytics /> */}
        <GlobalStateProvider>
          <SmoothScrolling>
            {/* <ContentLoader /> */}
            <Navbar />
            {children}
            <Footer />
          </SmoothScrolling>
        </GlobalStateProvider>
      </body>
    </html>
  );
};

export default RootLayout;
