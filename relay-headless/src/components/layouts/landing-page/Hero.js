"use client";
import React, { useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useGlobalState } from "./GlobalStateContext";
import Marquee from "./Marquee";
import Image from "next/image";

const Hero = ({
  heroHeader,
  heroDescription,
  heroCTA,
  heroStats,
  marqueeData,
}) => {
  // GSAP Animations
  useEffect(() => {
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
  }, [isLoading]); // Re-run when isLoading changes, to ensure animations are correctly initialized once the content is loaded

  return (
    <>
      {/* Hero Content */}
      <section className="relative mx-auto overflow-x-clip px-8 sm:px-16 md:px-24 lg:px-32">
        <div className="mb-6 mt-12 flex flex-col items-center text-center lg:mb-24 lg:mt-28 2xl:mt-48 lg:grid lg:grid-cols-3">
          {/* Main Heading */}
          <div className="col-span-2 z-20 lg:mt-6 pointer-events-auto">
            <div className="-z-10 max-w-4xl text-center  text-3xl sm:text-5xl lg:text-start lg:text-7xl">
              <h1
                className="bg-gradient-to-br from-neutral-100 from-55% to-neutral-500 bg-clip-text font-medium tracking-tight text-transparent lg:min-h-[20rem] lg:to-neutral-600"
                data-speed="0.5"
              >
                {heroHeader}
              </h1>
            </div>
          </div>

          {/* Hero Description */}
          <div className="col-span-1 z-20 flex flex-col items-start justify-between gap-y-8 py-12 text-start lg:h-full pointer-events-auto">
            <p
              className="text-center text-base leading-tight text-neutral-300 lg:text-start"
              data-speed="0.7"
            >
              {heroDescription}
            </p>

            {/* Hero CTA Button */}
            <div
              className="block w-full justify-center md:flex md:flex-row lg:justify-start"
              data-speed="0.8"
            >
              <a href="/contact" className="pointer-events-auto">
                <button className="relative rounded-full text-center transition-all duration-500 transform overflow-hidden z-40 w-full px-8 py-6 bg-blue-500 text-neutral-950 border border-blue-500 button hover:text-neutral-50 group text-xl uppercase md:text-2xl">
                  <div className="flex flex-row group relative z-10 w-full justify-center">
                    {heroCTA}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="32"
                      height="32"
                      fill="currentColor"
                      viewBox="0 0 256 256"
                      className="ml-2 inline-block"
                    >
                      <path d="M200,64V168a8,8,0,0,1-16,0V83.31L69.66,197.66a8,8,0,0,1-11.32-11.32L172.69,72H88a8,8,0,0,1,0-16H192A8,8,0,0,1,200,64Z"></path>
                    </svg>
                  </div>
                </button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <div className="mx-auto min-w-[75vw] px-6 lg:px-8">
        <dl
          className="relative z-40 mt-6 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-neutral-600 bg-neutral-600 text-center shadow-2xl shadow-blue-500/50 lg:grid-cols-4"
          data-speed="1.05"
        >
          <div className="flex flex-col items-center  justify-center bg-neutral-900 px-2 py-6">
            <dt className="font-red-hat-text mt-1 text-sm font-normal leading-tight tracking-tight text-neutral-300">
              {/* {Statistic[0].description} */}
              {heroStats[0].statTitle}
            </dt>
            <dd className="font-proxima-nova order-first  text-5xl font-semibold tracking-tight text-white lg:text-5xl">
              {/* {Statistic[0].value} */}
              {heroStats[0].statDescription}
            </dd>
          </div>
          <div className="flex flex-col items-center  justify-center bg-neutral-900 px-2 py-6">
            <dt className="font-red-hat-text mt-1 text-sm font-normal leading-tight tracking-tight text-neutral-300">
              {/* {Statistic[1].description} */}
              {heroStats[1].statTitle}
            </dt>
            <dd className="font-proxima-nova order-first  text-5xl font-semibold tracking-tight text-white lg:text-5xl">
              {/* {Statistic[1].value} */}
              {heroStats[1].statDescription}
            </dd>
          </div>
          <div className="flex flex-col items-center  justify-center bg-neutral-900 px-2 py-6">
            <dt className="font-red-hat-text mt-1 text-sm font-normal leading-tight tracking-tight text-neutral-300">
              {/* {Statistic[2].description} */}
              {heroStats[2].statTitle}
            </dt>
            <dd className="font-proxima-nova order-first  text-5xl font-semibold tracking-tight text-white lg:text-5xl">
              {/* {Statistic[2].value} */}
              {heroStats[2].statDescription}
            </dd>
          </div>
          <div className="flex flex-col items-center  justify-center bg-neutral-900 px-2 py-6">
            <dt className="font-red-hat-text mt-1 text-sm font-normal leading-tight tracking-tight text-neutral-300">
              {/* {Statistic[3].description} */}
              {heroStats[3].statTitle}
            </dt>
            <dd className="font-proxima-nova order-first  text-5xl font-semibold tracking-tight text-white lg:text-5xl">
              {/* {Statistic[3].value} */}
              {heroStats[3].statDescription}
            </dd>
          </div>
        </dl>
      </div>

      <Marquee speed={1}>
        {marqueeData.images.map((image, index) => (
          <Image
            key={index}
            src={image.src}
            alt={image.alt}
            className="sm:h-54 h-72 w-auto rounded-lg border border-neutral-700 grayscale-[0%] lg:h-96"
            loading="eager"
            width={image.width}
            height={image.height}
            decoding="async"
          />
        ))}
      </Marquee>
    </>
  );
};

export default Hero;
