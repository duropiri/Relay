"use client";
import { useEffect, useState, Suspense, lazy } from "react";

// Dynamically import the sections
const CallToAction = lazy(() => import("./sections/CallToAction"));
const Contact = lazy(() => import("./sections/Contact"));
const CalendlyEmbed = lazy(() => import("./sections/CalendlyEmbed"));
const Hero = lazy(() => import("./sections/Hero"));
const Panel = lazy(() => import("./sections/Panel"));
const Services = lazy(() => import("./sections/Services"));
const Why = lazy(() => import("./sections/Why"));
const PricingSection = lazy(() => import("./sections/PricingSection"));
const CustomerJourney = lazy(() => import("./sections/CustomerJourney"));
const Cfunnel = lazy(() => import("./sections/Cfunnel"));
const Leaking = lazy(() => import("./sections/Leaking"));
const Help = lazy(() => import("./sections/Help"));
const ExitIntentPopup = lazy(() => import("../../ExitIntentPopup"));

import { useGlobalState } from "../../../contexts/GlobalStateContext";

const Home = () => {
  const {
    isHeroPopupOpen,
    closeHeroPopup,
    website,
    isExitIntentPopupOpen,
    openExitIntentPopup,
    closeExitIntentPopup,
  } = useGlobalState();
  const [hasShownExitIntentPopup, setHasShownExitIntentPopup] = useState(false);

  useEffect(() => {
    const handleMouseLeave = (event) => {
      if (!hasShownExitIntentPopup && event.clientY <= 0) {
        openExitIntentPopup();
        setHasShownExitIntentPopup(true);
      }
    };

    document.addEventListener("mouseleave", handleMouseLeave);
    return () => {
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [hasShownExitIntentPopup, openExitIntentPopup]);

  return (
    <div className="relative flex flex-col gap-10 bg-grid-white/[0.05]">
      {isExitIntentPopupOpen && <ExitIntentPopup />}
      <Hero />
      <Suspense fallback={<div>Loading...</div>}>
        <Why />
      </Suspense>
      <Suspense fallback={<div>Loading...</div>}>
        <CallToAction
          header="Ready to Boost Your Conversion Rate?"
          description="Discover how our expertly crafted marketing funnels can increase your business leads and distinguish you from the competition."
          cta="Yes, Boost my Conversions"
          href="/contact"
        />
      </Suspense>
      <Suspense fallback={<div>Loading...</div>}>
        <CustomerJourney />
      </Suspense>
      <Suspense fallback={<div>Loading...</div>}>
        <Services />
      </Suspense>
      <Suspense fallback={<div>Loading...</div>}>
        <Panel />
      </Suspense>
      <Suspense fallback={<div>Loading...</div>}>
        <CallToAction
          header="Get Started Today, Make Your Landing Pages Work As A 24/7 Salesman."
          description=""
          cta="Get Started Now"
          href="https://calendly.com/relaydigitalyyc/discovery"
        />
      </Suspense>
      <Suspense fallback={<div>Loading...</div>}>
        <Cfunnel />
      </Suspense>
      <Suspense fallback={<div>Loading...</div>}>
        <Leaking />
      </Suspense>
      <Suspense fallback={<div>Loading...</div>}>
        <CallToAction
          header="Unlock more revenue with elite funnels & landing pages."
          description="Same ad spend, more revenue. Live within 20 days. Conversion-driven, beyond just aesthetics."
          cta="Get A Price"
          href="https://calendly.com/relaydigitalyyc/discovery"
        />
      </Suspense>
      <Suspense fallback={<div>Loading...</div>}>
        <Help />
      </Suspense>
      <Suspense fallback={<div>Loading...</div>}>
        <PricingSection />
      </Suspense>
      <Suspense fallback={<div>Loading...</div>}>
        <CalendlyEmbed />
      </Suspense>
      <Suspense fallback={<div>Loading...</div>}>
        <Contact />
      </Suspense>
    </div>
  );
};

export default Home;
