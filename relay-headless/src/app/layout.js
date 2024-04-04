import { Inter } from "next/font/google";
import "./globals.css";
import SmoothScrolling from "@/components/SmoothScrolling";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Relay Digital - Modern Web Design & Development Agency",
  description: "",
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <SmoothScrolling>
          {children}
          <Footer />
        </SmoothScrolling>
      </body>
    </html>
  );
};

export default RootLayout;
