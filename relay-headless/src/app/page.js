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
      <CallToAction />
      <Services />
      <Panel />
      <PricingSection />
      <Rocket className="z-20" />
      <Contact />
    </div>
  );
};

export default Home;
