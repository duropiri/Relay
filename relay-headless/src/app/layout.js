import { Inter } from "next/font/google";
import "./globals.css";
import SmoothScrolling from "@/components/SmoothScrolling";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { GlobalStateProvider } from "@/components/GlobalStateContext";
import ContentLoader from "@/components/ContentLoader";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Relay - Modern Web Design & Development Agency",
  description: "",
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body className={inter.className}>
        <GlobalStateProvider>
          <ContentLoader />
          <Navbar />
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
