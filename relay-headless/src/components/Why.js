"use client";
import React, { useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useGlobalState } from "./GlobalStateContext";
import Image from "next/image";

const Why = () => {
  const { whyContent } = useGlobalState();
  const { isLoading } = useGlobalState();

  let Header, Why1, Why2, WhyDescription1, WhyDescription2, CTA, Image1, Image2;

  if (whyContent) {
    ({
      Header,
      Why1,
      Why2,
      WhyDescription1,
      WhyDescription2,
      CTA,
      Image1,
      Image2,
    } = whyContent);
  }

  // GSAP Animations
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Define a common parent selector that wraps all your images.
    // Adjust the selector as needed to target your specific layout.
    const section = document.querySelector("#why");

    gsap.utils.toArray(".left, .right").forEach((image) => {
      // Decide the direction based on the class and screen size
      const direction = image.classList.contains("left") ? 1 : -1;

      gsap.to(image, {
        x: () => direction * 50, // Adjust the distance as needed
        ease: "expoScale",
        scrollTrigger: {
          trigger: image.parentElement,
          start: "top center",
          end: "bottom center",
          scrub: true,
        },
      });
    });

    // Clean up the ScrollTriggers when the component unmounts
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [isLoading]);

  return (
    <>
      <div className="relative flex min-h-[30vh] flex-col items-center justify-center overflow-hidden w-full rounded-md z-0">
        <div className="relative z-50 flex  flex-col items-center px-5">
          <h2 className="font-melodrama text-4xl sm:text-5xl lg:text-7xl text-center lg:text-start">
            <span className="bg-gradient-to-br from-neutral-100 from-55% to-neutral-500 bg-clip-text font-medium tracking-tight text-transparent lg:min-h-[50vw] lg:to-neutral-600">
              {/* {Header} */}
              Why Should You Use Our Marketing Funnels?
            </span>
          </h2>
        </div>
      </div>
      <div className="relative overflow-x-hidden" id="why">
        <div className="mx-auto px-6 lg:max-w-7xl lg:px-8">
          <div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            <div className="lg:pr-8 lg:pt-4">
              <div className="lg:max-w-lg">
                <h2 className="mt-2 font-melodrama text-3xl font-medium tracking-tight text-white sm:text-6xl">
                  <span className="bg-gradient-to-b from-neutral-50 from-60% to-neutral-400 bg-clip-text text-transparent lg:to-neutral-600">
                    {/* {Why1} */}
                    Optimized to{" "}
                    <span className="bg-gradient-to-b from-blue-500 from-60% to-blue-400 bg-clip-text text-transparent lg:to-blue-600 underline">
                      Convert
                    </span>{" "}
                    Paid Traffic
                    <span className="text-blue-500">.</span>
                  </span>
                </h2>
                <p className="text-md mt-6 font-light text-neutral-300 md:text-lg">
                  {/* {WhyDescription1} */}
                  Our team expertly crafts, builds, and manages custom marketing
                  funnels tailored to boost your sales from paid traffic. With
                  our complete management, you can focus solely on your business
                  without worrying about the technical details.
                </p>
                <a href="/contact">
                  <button className="relative rounded-full text-center transition-all duration-500 transform overflow-hidden z-40   px-6 py-3 text-base bg-blue-500 text-neutral-950 border border-blue-500 button hover:text-neutral-50 group mt-6 text-lg uppercase">
                    <div className="group relative z-10 w-full">
                      {/* {CTA} */}
                      Get Started
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

            <div className="relative flex items-start justify-end">
              <img
                src="/img/increase-cr.webp"
                alt="Product screenshot"
                className="hidden sm:block right h-auto w-[24rem] max-w-none sm:w-[36rem] md:-ml-4 lg:-ml-0"
                loading="lazy"
                width="1217"
                height="1227"
                decoding="async"
              />

              <img
                src="/img/increase-cr.webp"
                alt="Product screenshot"
                className="block sm:hidden h-auto w-[24rem] max-w-none sm:w-[36rem]"
                loading="lazy"
                width="1217"
                height="1227"
                decoding="async"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="relative overflow-x-hidden py-12 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            <div className="lg:ml-auto lg:pl-4 lg:pt-4">
              <div className="lg:max-w-lg">
                <h3 className="mt-2 font-melodrama text-3xl font-medium tracking-tight text-white sm:text-6xl">
                  <span className="bg-gradient-to-b from-neutral-50 from-60% to-neutral-400 bg-clip-text text-transparent lg:to-neutral-600">
                    {/* {Why2} */}
                    Pioneering{" "}
                    <span className="bg-gradient-to-b from-blue-500 from-60% to-blue-400 bg-clip-text text-transparent lg:to-blue-600 underline">
                      Custom
                    </span>{" "}
                    Technologies
                    <span className="text-blue-500">.</span>
                  </span>
                </h3>
                <p className="text-md mt-6 font-light text-neutral-300 md:text-lg">
                  {/* {WhyDescription2} */}
                  We&apos;ve developed our proprietary marketing framework to
                  ensure our funnels perform up to 10 times faster than standard
                  websites and achieve conversion rates 1.5 times higher than
                  conventional websites. This approach enhances user experiences
                  and significantly boosts your conversion rates.
                </p>
                <a href="/contact">
                  <button className="relative rounded-full text-center transition-all duration-500 transform overflow-hidden z-40   px-6 py-3 text-base bg-blue-500 text-neutral-950 border border-blue-500 button hover:text-neutral-50 group mt-6 uppercase">
                    <div className="group relative z-10 w-full">
                      {/* {CTA} */}
                      Get Started
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
            <div className="relative flex items-start justify-end lg:order-first">
              <img
                src="/img/design.webp"
                alt="Product screenshot"
                className="hidden sm:block left h-auto w-[28rem] max-w-none sm:w-[40rem] md:-ml-4 lg:-ml-0"
                loading="lazy"
                width="1365"
                height="832"
                decoding="async"
              />

              <img
                src="/img/design.webp"
                alt="Product screenshot"
                className="block sm:hidden h-auto w-[28rem] max-w-none sm:w-[40rem] -mr-24"
                loading="lazy"
                width="1365"
                height="832"
                decoding="async"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Why;
