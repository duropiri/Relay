import { Inter } from "next/font/google";
import "./globals.css";
import SmoothScrolling from "../components/SmoothScrolling";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { GlobalStateProvider } from "../components/GlobalStateContext";
import MobileMenu from "../components/MobileMenu";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Relay - Modern Web Design & Development Agency",
  description: "Relay Digital delivers innovative web design and development services, focusing on performance, cutting-edge design, and scalability to boost your online presence.",
  keywords: "modern web design, web development services, professional web design agency, scalable web solutions, custom web development",
  charset: "UTF-8",
  viewport: "width=device-width, initial-scale=1.0",
  robots: "index, follow"
};


const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Analytics />
        <GlobalStateProvider>
          {/* <ContentLoader /> */}
          <Navbar />
          <MobileMenu />
          <SmoothScrolling>
            {children}
            <Footer />
          </SmoothScrolling>
        </GlobalStateProvider>
      </body>
    </html>
  );
};

export default RootLayout;
