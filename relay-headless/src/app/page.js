import CallToAction from "../components/CallToAction";
import Contact from "../components/Contact";
import Hero from "../components/Hero";
import Panel from "../components/Panel";
import Services from "../components/Services";
import Why from "../components/Why";
import React from "react";

const Home = () => {
  return (
    <>
      <div className="flex flex-col gap-10">
        <Hero />
        <Why />
        <CallToAction />
        <Services />
        <Panel />
        <Contact />
      </div>
    </>
  );
};

export default Home;
