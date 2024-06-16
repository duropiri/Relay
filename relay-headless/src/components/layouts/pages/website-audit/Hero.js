"use client";
import { useEffect, useState } from "react";
import Marquee from "../../../Marquee";
import Image from "next/image";
import FormPopup from "./formPopup";
import { useGlobalState } from "../../../../contexts/GlobalStateContext";

const Hero = () => {
  const { openHeroPopup } = useGlobalState();

  const handleOpenPopup = (e) => {
    e.preventDefault();
    openHeroPopup(e.target.website.value);
  };

  // GSAP Animations
  useEffect(() => {
    const loadGSAP = async () => {
      const { gsap } = await import("gsap");
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      gsap.registerPlugin(ScrollTrigger);

      let effectElements = gsap.utils.toArray("[data-speed]");
      effectElements.forEach((el) => {
        let speed = parseFloat(el.getAttribute("data-speed"));
        gsap.fromTo(
          el,
          { y: 0 },
          {
            y: 0,
            ease: "none",
            scrollTrigger: {
              trigger: el,
              start: "top bottom",
              end: "bottom top",
              scrub: true,
              onRefresh: (self) => {
                let start = Math.max(0, self.start); // ensure no negative values
                let distance = self.end - start;
                let end = start + distance / speed;
                self.setPositions(start, end);
                self.animation.vars.y = (end - start) * (1 - speed);
                self.animation.invalidate().progress(1).progress(self.progress);
              },
            },
          }
        );
      });

      return () => {
        ScrollTrigger.getAll().forEach((st) => st.kill());
      };
    };

    loadGSAP();
  }, []);

  return (
    <>
      
      {/* Hero Content */}
      <section className="relative mx-auto overflow-x-clip px-8 sm:px-16 md:px-24 lg:px-32 z-10">
        <div className="mb-6 mt-12 flex flex-col items-center justify-center text-center w-full">
          {/* Main Heading */}
          <div className="col-span-2 lg:mt-6 lg:mr-4">
            <div className="-z-10 max-w-4xl text-center text-neutral-200 text-3xl sm:text-5xl lg:text-7xl">
              <h1
                className="md:bg-gradient-to-br md:from-neutral-100 md:from-55% md:to-neutral-500 md:bg-clip-text font-medium tracking-tight md:text-transparent text-neutral-100"
                data-speed="0.5"
              >
                Relay Digital's Free
                <br />
                <span className="text-blue-500">Website Audit</span>
              </h1>
            </div>
          </div>

          {/* Hero Description */}
          <div className="col-span-1 flex flex-col items-start justify-between gap-y-8 py-12 text-start lg:h-full">
            <p
              className="text-center text-xl leading-tight text-neutral-300 max-w-[35ch]"
              data-speed="0.7"
            >
              Receive a deep analysis, step-by-step 15min video guide on how to
              make your website win.
            </p>
          </div>

          {/* Hero Form */}
          <div className="mb-5 z-10 w-full">
            <form
              id="form"
              noValidate
              className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-3 w-full rounded-full lg:border lg:border-neutral-700 lg:bg-neutral-900 lg:shadow-xl lg:shadow-blue-500/50 pl-4 p-2 outline-none"
              onSubmit={handleOpenPopup}
            >
              <div className="flex flex-row gap-2 w-full lg:w-1/2 rounded-full border border-neutral-700 bg-neutral-900 shadow-xl shadow-blue-500/50 lg:border-none lg:bg-transparent lg:shadow-none pl-4 p-3 lg:p-0">
                <svg
                  width="2em"
                  height="2em"
                  viewBox="0 0 24 24"
                  className="h-6 w-6 flex-none text-white"
                  aria-hidden="true"
                  data-icon="tabler:world-www"
                >
                  <defs>
                    <symbol id="ai:tabler:world-www" viewBox="0 0 24 24">
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <path
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="1"
                        d="M19.5 7a9 9 0 0 0 -7.5 -4a8.991 8.991 0 0 0 -7.484 4"
                      />
                      <path
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="1"
                        d="M11.5 3a16.989 16.989 0 0 0 -1.826 4"
                      />
                      <path
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="1"
                        d="M12.5 3a16.989 16.989 0 0 1 1.828 4"
                      />
                      <path
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="1"
                        d="M19.5 17a9 9 0 0 1 -7.5 4a8.991 8.991 0 0 1 -7.484 -4"
                      />
                      <path
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="1"
                        d="M11.5 21a16.989 16.989 0 0 1 -1.826 -4"
                      />
                      <path
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="1"
                        d="M12.5 21a16.989 16.989 0 0 0 1.828 -4"
                      />
                      <path
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="1"
                        d="M2 10l1 4l1.5 -4l1.5 4l1 -4"
                      />
                      <path
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="1"
                        d="M17 10l1 4l1.5 -4l1.5 4l1 -4"
                      />
                      <path
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="1"
                        d="M9.5 10l1 4l1.5 -4l1.5 4l1 -4"
                      />
                    </symbol>
                  </defs>
                  <use href="#ai:tabler:world-www"></use>
                </svg>
                <input
                  id="website"
                  type="text"
                  placeholder="https://my-website.com"
                  name="website"
                  required
                  className="flex-grow bg-transparent text-neutral-50 placeholder:text-neutral-400 outline-none"
                />
              </div>
              <button
                type="submit"
                className={`w-full lg:w-auto button relative flex flex-row items-center justify-center transform overflow-hidden rounded-full border border-neutral-700 bg-neutral-950 text-neutral-50 px-6 py-3 text-center transition duration-500`}
              >
                <svg
                  width="1em"
                  height="1em"
                  viewBox="0 0 24 24"
                  className="h-4 w-4 flex-none text-blue-500 animate-pulse mr-1"
                  aria-hidden="true"
                  data-icon="tabler:point-filled"
                >
                  <defs>
                    <symbol id="ai:tabler:point-filled" viewBox="0 0 24 24">
                      <path
                        fill="currentColor"
                        d="M12 7a5 5 0 1 1-4.995 5.217L7 12l.005-.217A5 5 0 0 1 12 7"
                      ></path>
                    </symbol>
                  </defs>
                  <use href="#ai:tabler:point-filled"></use>
                </svg>
                Claim my Free Audit
              </button>
            </form>
          </div>
        </div>
        <div
          className="absolute hidden md:block left-1/2 top-1/2 -z-10 -translate-x-1/2 -translate-y-1/2 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] w-max pointer-events-none"
          data-speed="0.6"
        >
          <Image
            src="/svg/_image.svg"
            alt="circle background"
            className="h-auto w-[24rem] animate-spinSlow lg:w-[38rem] pointer-events-none"
            loading="eager"
            width={516}
            height={516}
            decoding="async"
          />
        </div>
      </section>

      <Marquee speed={1}>
        <Image
          src="/img/homezy.webp"
          alt="Homezy"
          className="sm:h-54 h-48 w-auto rounded-lg border border-neutral-700 grayscale-[0%] lg:h-72"
          loading="eager"
          width={500}
          height={288}
          decoding="async"
        />
        <Image
          src="/img/thai.webp"
          alt="Thai"
          className="sm:h-54 h-48 w-auto rounded-lg border border-neutral-700 grayscale-[0%] lg:h-72"
          loading="eager"
          width={500}
          height={288}
          decoding="async"
        />
        <Image
          src="/img/wellbeing.webp"
          alt="WellBeing"
          className="sm:h-54 h-48 w-auto rounded-lg border border-neutral-700 grayscale-[0%] lg:h-72"
          loading="eager"
          width={500}
          height={288}
          decoding="async"
        />
        <Image
          src="/img/agenci.webp"
          alt="Agenci"
          className="sm:h-54 h-48 w-auto rounded-lg border border-neutral-700 grayscale-[0%] lg:h-72"
          loading="eager"
          width={500}
          height={288}
          decoding="async"
        />
        <Image
          src="/img/joyfolio.webp"
          alt="Joyfolio"
          className="sm:h-54 h-48 w-auto rounded-lg border border-neutral-700 grayscale-[0%] lg:h-72"
          loading="eager"
          width={500}
          height={288}
          decoding="async"
        />
        <Image
          src="/img/inspire.webp"
          alt="Inspire"
          className="sm:h-54 h-48 w-auto rounded-lg border border-neutral-700 grayscale-[0%] lg:h-72"
          loading="eager"
          width={500}
          height={288}
          decoding="async"
        />
        <Image
          src="/img/wellbeing.webp"
          alt="WellBeing"
          className="sm:h-54 h-48 w-auto rounded-lg border border-neutral-700 grayscale-[0%] lg:h-72"
          loading="eager"
          width={500}
          height={288}
          decoding="async"
        />
        <Image
          src="/img/fashion.webp"
          alt="Fashion"
          className="sm:h-54 h-48 w-auto rounded-lg border border-neutral-700 grayscale-[0%] lg:h-72"
          loading="eager"
          width={500}
          height={288}
          decoding="async"
        />
        <Image
          src="/img/requesto.webp"
          alt="Request"
          className="sm:h-54 h-48 w-auto rounded-lg border border-neutral-700 grayscale-[0%] lg:h-72"
          loading="eager"
          width={500}
          height={288}
          decoding="async"
        />
        <Image
          src="/img/darkstudio.webp"
          alt="Studio"
          className="sm:h-54 h-48 w-auto rounded-lg border border-neutral-700 grayscale-[0%] lg:h-72"
          loading="eager"
          width={500}
          height={288}
          decoding="async"
        />
      </Marquee>
    </>
  );
};

export default Hero;
