import CallToAction from "../components/CallToAction";
import Contact from "../components/Contact";
import Hero from "../components/Hero";
import Panel from "../components/Panel";
import Services from "../components/Services";
import Why from "../components/Why";
import React from "react";
import Head from "next/head";

const Home = () => {
  return (
    <>
      <Head>
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
      </Head>
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
