import CallToAction from "@/components/CallToAction";
import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import Panel from "@/components/Panel";
import Services from "@/components/Services";
import Why from "@/components/Why";
import React from "react";

const Home = () => {
  return (
    <>
      <div>
        <div className="flex flex-col justify-center min-h-lvh -mt-[90px] pt-[90px] pb-10 gap-10">
          <Hero />
        </div>
        <Marquee speed={1}>
          <img
            src="/img/homezy.webp"
            alt="Homezy"
            class="sm:h-54 h-48 w-auto rounded-lg border border-neutral-700 grayscale-[50%] lg:h-72"
            loading="eager"
            width="1728"
            height="992"
            decoding="async"
          />
          <img
            src="/img/thai.webp"
            alt="Thai"
            class="sm:h-54 h-48 w-auto rounded-lg border border-neutral-700 grayscale-[50%] lg:h-72"
            loading="eager"
            width="1728"
            height="992"
            decoding="async"
          />
          <img
            src="/img/wellbeing.webp"
            alt="WellBeing"
            class="sm:h-54 h-48 w-auto rounded-lg border border-neutral-700 grayscale-[50%] lg:h-72"
            loading="eager"
            width="3456"
            height="1984"
            decoding="async"
          />
          <img
            src="/img/agenci.webp"
            alt="Agenci"
            class="sm:h-54 h-48 w-auto rounded-lg border border-neutral-700 grayscale-[50%] lg:h-72"
            loading="eager"
            width="1728"
            height="992"
            decoding="async"
          />
          <img
            src="/img/joyfolio.webp"
            alt="Joyfolio"
            class="sm:h-54 h-48 w-auto rounded-lg border border-neutral-700 grayscale-[50%] lg:h-72"
            loading="eager"
            width="1728"
            height="992"
            decoding="async"
          />
          <img
            src="/img/inspire.webp"
            alt="Inspire"
            class="sm:h-54 h-48 w-auto rounded-lg border border-neutral-700 grayscale-[50%] lg:h-72"
            loading="eager"
            width="1728"
            height="992"
            decoding="async"
          />
          <img
            src="/img/wellbeing.webp"
            alt="WellBeing"
            class="sm:h-54 h-48 w-auto rounded-lg border border-neutral-700 grayscale-[50%] lg:h-72"
            loading="eager"
            width="3456"
            height="1984"
            decoding="async"
          />
          <img
            src="/img/fashion.webp"
            alt="Fashion"
            class="sm:h-54 h-48 w-auto rounded-lg border border-neutral-700 grayscale-[50%] lg:h-72"
            loading="eager"
            width="2456"
            height="1491"
            decoding="async"
          />
          <img
            src="/img/requesto.webp"
            alt="Request"
            class="sm:h-54 h-48 w-auto rounded-lg border border-neutral-700 grayscale-[50%] lg:h-72"
            loading="eager"
            width="1728"
            height="992"
            decoding="async"
          />
          <img
            src="/img/darkstudio.webp"
            alt="Studio"
            class="sm:h-54 h-48 w-auto rounded-lg border border-neutral-700 grayscale-[50%] lg:h-72"
            loading="eager"
            width="1728"
            height="992"
            decoding="async"
          />
        </Marquee>
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
