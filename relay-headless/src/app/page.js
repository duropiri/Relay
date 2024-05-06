import CallToAction from "../components/CallToAction";
import Contact from "../components/Contact";
import Hero from "../components/Hero";
import Panel from "../components/Panel";
import Services from "../components/Services";
import Why from "../components/Why";
import React from "react";
import Head from "next/head";
import { metadata } from "./layout";

const Home = () => {
  return (
    <>
      {/* <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords} />
        <meta charSet={metadata.charset} />
        <meta name="viewport" content={metadata.viewport} />
        <meta name="robots" content={metadata.robots} />

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
      </Head> */}
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
