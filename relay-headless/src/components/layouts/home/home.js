"use client";
import { useEffect, useState } from "react";

import CallToAction from "./sections/CallToAction";
import Contact from "./sections/Contact";
import CalendlyEmbed from "./sections/CalendlyEmbed";
import Hero from "./sections/Hero";
import Panel from "./sections/Panel";
import Services from "./sections/Services";
import Why from "./sections/Why";
import PricingSection from "./sections/PricingSection";
// import Rocket from "../components/Rocket";
import CustomerJourney from "./sections/CustomerJourney";
import Cfunnel from "./sections/Cfunnel";
import Leaking from "./sections/Leaking";
import Help from "./sections/Help";
import ExitIntentPopup from "../../ExitIntentPopup";

const Home = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [hasShownPopup, setHasShownPopup] = useState(false);

  useEffect(() => {
    const handleMouseLeave = (event) => {
      if (!hasShownPopup && event.clientY <= 0) {
        setShowPopup(true);
        setHasShownPopup(true);
      }
    };

    document.addEventListener("mouseleave", handleMouseLeave);
    return () => {
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [hasShownPopup]);

  return (
    <div className="flex flex-col gap-10 bg-grid-white/[0.05]">
      {showPopup && <ExitIntentPopup onClose={() => setShowPopup(false)} />}
      <Hero />
      <Why />
      <CallToAction
        header="Ready to Boost Your Conversion Rate?"
        description="Discover how our expertly crafted marketing funnels can elevate your business by increasing leads and distinguishing you from the competition."
        cta="Yes, Boost my Conversions"
        href="/contact"
      />
      <CustomerJourney />
      <Services />

      <Panel />
      <CallToAction
        header="Get Started Today, Make Your Landing Pages Work As A 24/7 Salesman."
        description=""
        cta="Get Started Now"
        href="https://calendly.com/relaydigitalyyc/discovery"
      />
      <Cfunnel />
      <Leaking />
      <CallToAction
        header="Unlock more revenue with elite funnels & landing pages."
        description="Same ad spend, more revenue.
        Live within 20 days.
        Conversion-driven, beyond just aesthetics."
        cta="Get A Price"
        href="https://calendly.com/relaydigitalyyc/discovery"
      />
      <Help />
      <PricingSection />
      {/* <Rocket className="z-20" /> */}
      <CalendlyEmbed />
      <Contact />
    </div>
  );
};

export default Home;
