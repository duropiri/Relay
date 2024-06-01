import CallToAction from "../components/CallToAction";
import Contact from "../components/Contact";
import Hero from "../components/Hero";
import Panel from "../components/Panel";
import Services from "../components/Services";
import Why from "../components/Why";
import React from "react";
import PricingSection from "../components/PricingSection";
import Rocket from "../components/Rocket";
import Head from "next/head";
import { metadata } from "./layout";

const Home = () => {
  return (
    <div className="flex flex-col gap-10">
      <Hero />
      <Why />
      <CallToAction
        header="Ready to Boost Your Conversion Rate?"
        description="Discover how our expertly crafted marketing funnels can elevate your business by increasing leads and distinguishing you from the competition."
        cta="Yes, Boost my Conversions"
        href="/contact"
      />
      <Services />
      <Panel />
      <CallToAction
        header="Get Started Today, Make Your Landing Pages Work As A 24/7 Salesman."
        description=""
        cta="Get Started Now"
        href="https://calendly.com/relaydigitalyyc/discovery"
      />
      <PricingSection />
      <Rocket className="z-20" />
      <Contact />
    </div>
  );
};

export default Home;
