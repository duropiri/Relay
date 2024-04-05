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

    // Animate images with 'left' and 'right' classes inside this section
    gsap.utils.toArray(".left, .right").forEach((image) => {
      const direction = image.classList.contains("left") ? 1 : -1;
      gsap.to(image, {
        x: () => direction * 100, // Adjust the distance as needed
        ease: "none",
        scrollTrigger: {
          trigger: section, // Use the common parent as the trigger
          start: "top center", // When the top of the parent hits the center
          end: "bottom center", // When the bottom of the parent hits the center
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
      <div class="relative flex min-h-[30vh] flex-col items-center justify-center overflow-hidden w-full rounded-md z-0">
        <div class="relative z-50 flex  flex-col items-center px-5">
          {isLoading ? (
            <>
              <div className="skeleton h-4 w-28"></div>
            </>
          ) : (
            <h2 class="font-melodrama text-4xl sm:text-5xl lg:text-7xl text-center lg:text-start">
              <span class="bg-gradient-to-br from-neutral-100 from-55% to-neutral-500 bg-clip-text font-medium tracking-tight text-transparent lg:min-h-[50vw] lg:to-neutral-600">
                {Header}
              </span>
            </h2>
          )}
        </div>
      </div>
      <div class="relative overflow-x-hidden" id="why">
        <div class="mx-auto px-6 lg:max-w-7xl lg:px-8">
          <div class="mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            <div class="lg:pr-8 lg:pt-4">
              {isLoading ? (
                <>
                  <div class="lg:max-w-lg">
                    <div className="skeleton h-4 w-28"></div>
                  </div>
                </>
              ) : (
                <div class="lg:max-w-lg">
                  <h2 class="mt-2 font-melodrama text-3xl font-medium tracking-tight text-white sm:text-6xl">
                    <span class="bg-gradient-to-b from-neutral-50 from-60% to-neutral-400 bg-clip-text text-transparent lg:to-neutral-600">
                      {Why1}
                    </span>
                  </h2>
                  <p class="text-md mt-6 font-light text-neutral-300 md:text-lg">
                    {WhyDescription1}
                  </p>
                  <a href="/contact">
                    <button class="relative rounded-full text-center transition-all duration-500 transform overflow-hidden z-40   px-6 py-3 text-base bg-purple-500 text-neutral-950 border border-purple-500 button hover:text-neutral-50 group mt-6 text-lg uppercase">
                      <div class="group relative z-10 w-full">
                        {CTA}
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="32"
                          height="32"
                          fill="currentColor"
                          viewBox="0 0 256 256"
                          class="ml-2 inline-block"
                        >
                          <path d="M200,64V168a8,8,0,0,1-16,0V83.31L69.66,197.66a8,8,0,0,1-11.32-11.32L172.69,72H88a8,8,0,0,1,0-16H192A8,8,0,0,1,200,64Z"></path>
                        </svg>
                      </div>
                    </button>
                  </a>
                </div>
              )}
            </div>
            {isLoading ? (
              <div className="right h-auto w-[24rem] max-w-none rounded-xl shadow-xl sm:w-[36rem] md:-ml-4 lg:-ml-0">
                <div className="skeleton w-full h-full"></div>
              </div>
            ) : (
              Image1 && (
                <>
                  <Image
                    key={Image1.data.attributes.id}
                    src={`${
                      process.env.NEXT_PUBLIC_STRAPI_BASE_URL ||
                      "http://localhost:1337"
                    }${Image1.data.attributes.url}`}
                    alt={Image1.data.attributes.alt}
                    className="right h-auto w-[24rem] max-w-none rounded-xl shadow-xl sm:w-[36rem] md:-ml-4 lg:-ml-0"
                    loading="lazy"
                    width="1217"
                    height="1227"
                    decoding="async"
                  />
                </>
              )
            )}
          </div>
        </div>
      </div>

      <div class="relative overflow-x-hidden py-12 lg:py-24">
        <div class="mx-auto max-w-7xl px-6 lg:px-8">
          <div class="mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            <div class="lg:ml-auto lg:pl-4 lg:pt-4">
              {isLoading ? (
                <>
                  <div class="lg:max-w-lg">
                    <div className="skeleton h-4 w-28"></div>
                  </div>
                </>
              ) : (
                <div class="lg:max-w-lg">
                  <h3 class="mt-2 font-melodrama text-3xl font-medium tracking-tight text-white sm:text-6xl">
                    <span class="bg-gradient-to-b from-neutral-50 from-60% to-neutral-400 bg-clip-text text-transparent lg:to-neutral-600">
                      {Why2}
                    </span>
                  </h3>
                  <p class="text-md mt-6 font-light text-neutral-300 md:text-lg">
                    {WhyDescription2}
                  </p>
                  <a href="/contact">
                    <button class="relative rounded-full text-center transition-all duration-500 transform overflow-hidden z-40   px-6 py-3 text-base bg-purple-500 text-neutral-950 border border-purple-500 button hover:text-neutral-50 group mt-6 uppercase">
                      <div class="group relative z-10 w-full">
                        {CTA}
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="32"
                          height="32"
                          fill="currentColor"
                          viewBox="0 0 256 256"
                          class="ml-2 inline-block"
                        >
                          <path d="M200,64V168a8,8,0,0,1-16,0V83.31L69.66,197.66a8,8,0,0,1-11.32-11.32L172.69,72H88a8,8,0,0,1,0-16H192A8,8,0,0,1,200,64Z"></path>
                        </svg>
                      </div>
                    </button>
                  </a>
                </div>
              )}
            </div>
            <div class="flex items-start justify-end lg:order-first">
              {isLoading ? (
                <div className="right h-auto w-[24rem] max-w-none rounded-xl shadow-xl sm:w-[36rem] md:-ml-4 lg:-ml-0">
                  <div className="skeleton w-full h-full"></div>
                </div>
              ) : (
                Image2 && (
                  <>
                    <Image
                      key={Image2.data.attributes.id}
                      src={`${
                        process.env.NEXT_PUBLIC_STRAPI_BASE_URL ||
                        "http://localhost:1337"
                      }${Image2.data.attributes.url}`}
                      alt={Image2.data.attributes.alt}
                      class="left h-auto w-[28rem] max-w-none rounded-xl shadow-xl sm:w-[50rem] md:-ml-4 lg:-ml-0"
                      loading="lazy"
                      width="1365"
                      height="832"
                      decoding="async"
                    />
                  </>
                )
              )}
            </div>
          </div>
        </div>
      </div>

      {/* <div class=" min-h-[200vh]  flex flex-col items-center py-12 md:py-36 justify-start flex-shrink-0 [perspective:800px] transform ">
        <h2
          class="font-melodrama text-4xl sm:text-5xl lg:text-7xl lg:text-start md:mb-20 text-center mx-auto px-5"
          bs="opacity: 1; transform: none;"
        >
          <span class=" items-center text-center bg-gradient-to-br from-neutral-100 from-55% to-neutral-500 bg-clip-text font-medium tracking-tight text-transparent lg:min-h-[50vw] lg:to-neutral-600">
            We Deliver Real Results to Real People
          </span>
        </h2>
        <div class="md:scale-100  scale-[0.35] sm:scale-50">
          <div class="relative [perspective:800px]">
            <div
              bs="transform:perspective(800px) rotateX(-25deg) translateZ(0px);transform-origin:bottom;transform-bs:preserve-3d"
              class="h-[12rem] w-[32rem] bg-[#010101] rounded-2xl p-2 relative"
            >
              <div
                bs="box-shadow:0px 2px 0px 2px var(--neutral-900) inset"
                class="absolute inset-0 bg-[#010101] rounded-lg flex items-center justify-center"
              >
                <span class="text-white">
                  <svg
                    width="66"
                    height="65"
                    viewBox="0 0 66 65"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-3 w-3 text-white"
                  >
                    <path
                      d="M8 8.05571C8 8.05571 54.9009 18.1782 57.8687 30.062C60.8365 41.9458 9.05432 57.4696 9.05432 57.4696"
                      stroke="currentColor"
                      stroke-width="15"
                      stroke-miterlimit="3.86874"
                      stroke-linecap="round"
                    ></path>
                  </svg>
                </span>
              </div>
            </div>
            <div
              class="h-96 w-[32rem] absolute inset-0 bg-[#010101] rounded-2xl p-2 shadow-3xl shadow-purple-500 border border-purple-500"
              bs="transform-bs: preserve-3d; transform-origin: center top; transform: translateY(0px) scaleX(1.2) scaleY(0.6) rotateX(-28deg) translateZ(0px);"
            >
              <div class="absolute inset-0 bg-[#272729] rounded-lg"></div>
              <Image
                src="/_astro/results.b214213f.webp"
                alt="Macbook"
                width="512"
                height="304"
                class="object-cover object-left-top absolute rounded-lg inset-0 h-full w-full"
              />
            </div>
          </div>
          <div class="h-[22rem] w-[32rem] bg-neutral-800 rounded-2xl overflow-hidden relative -z-10">
            <div class="h-10 w-full relative">
              <div class="absolute inset-x-0 mx-auto w-[80%] h-4 bg-neutral-900"></div>
            </div>
            <div class="flex relative">
              <div class="mx-auto w-[10%] overflow-hidden  h-full">
                <div
                  class="flex px-[0.5px] gap-[2px] mt-2 h-40"
                  bs="background-image:radial-gradient(circle, #08080A 0.5px, transparent 0.5px);background-size:3px 3px"
                ></div>
              </div>
              <div class="mx-auto w-[80%] h-full">
                <div class="h-full rounded-md bg-[#050505] mx-1 p-1">
                  <div class="flex gap-[2px] mb-[2px] w-full flex-shrink-0">
                    <div class="p-[0.5px] rounded-[4px] bg-white/[0.2] shadow-xl shadow-white">
                      <div
                        class="h-6 bg-[#0A090D] rounded-[3.5px] flex w-10 items-end justify-start pl-[4px] pb-[2px]"
                        bs="box-shadow:0px -0.5px 2px 0 #0D0D0F inset, -0.5px 0px 2px 0 #0D0D0F inset"
                      >
                        <div class="text-[5px] w-full flex justify-center flex-col items-start text-white">
                          esc
                        </div>
                      </div>
                    </div>
                    <div class="p-[0.5px] rounded-[4px] bg-white/[0.2] shadow-xl shadow-white">
                      <div
                        class="h-6 w-6 bg-[#0A090D] rounded-[3.5px] flex items-center justify-center"
                        bs="box-shadow:0px -0.5px 2px 0 #0D0D0F inset, -0.5px 0px 2px 0 #0D0D0F inset"
                      >
                        <div class="text-[5px] w-full flex justify-center items-center flex-col text-white">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            class="h-[6px] w-[6px]"
                          >
                            <path d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"></path>
                            <path d="M12 5l0 .01"></path>
                            <path d="M17 7l0 .01"></path>
                            <path d="M19 12l0 .01"></path>
                            <path d="M17 17l0 .01"></path>
                            <path d="M12 19l0 .01"></path>
                            <path d="M7 17l0 .01"></path>
                            <path d="M5 12l0 .01"></path>
                            <path d="M7 7l0 .01"></path>
                          </svg>
                          <span class="inline-block mt-1">F1</span>
                        </div>
                      </div>
                    </div>
                    <div class="p-[0.5px] rounded-[4px] bg-white/[0.2] shadow-xl shadow-white">
                      <div
                        class="h-6 w-6 bg-[#0A090D] rounded-[3.5px] flex items-center justify-center"
                        bs="box-shadow:0px -0.5px 2px 0 #0D0D0F inset, -0.5px 0px 2px 0 #0D0D0F inset"
                      >
                        <div class="text-[5px] w-full flex justify-center items-center flex-col text-white">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            class="h-[6px] w-[6px]"
                          >
                            <path d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"></path>
                            <path d="M12 5l0 -2"></path>
                            <path d="M17 7l1.4 -1.4"></path>
                            <path d="M19 12l2 0"></path>
                            <path d="M17 17l1.4 1.4"></path>
                            <path d="M12 19l0 2"></path>
                            <path d="M7 17l-1.4 1.4"></path>
                            <path d="M6 12l-2 0"></path>
                            <path d="M7 7l-1.4 -1.4"></path>
                          </svg>
                          <span class="inline-block mt-1">F2</span>
                        </div>
                      </div>
                    </div>
                    <div class="p-[0.5px] rounded-[4px] bg-white/[0.2] shadow-xl shadow-white">
                      <div
                        class="h-6 w-6 bg-[#0A090D] rounded-[3.5px] flex items-center justify-center"
                        bs="box-shadow:0px -0.5px 2px 0 #0D0D0F inset, -0.5px 0px 2px 0 #0D0D0F inset"
                      >
                        <div class="text-[5px] w-full flex justify-center items-center flex-col text-white">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            class="h-[6px] w-[6px]"
                          >
                            <path d="M3 5a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-14z"></path>
                            <path d="M3 10h18"></path>
                            <path d="M10 3v18"></path>
                          </svg>
                          <span class="inline-block mt-1">F3</span>
                        </div>
                      </div>
                    </div>
                    <div class="p-[0.5px] rounded-[4px] bg-white/[0.2] shadow-xl shadow-white">
                      <div
                        class="h-6 w-6 bg-[#0A090D] rounded-[3.5px] flex items-center justify-center"
                        bs="box-shadow:0px -0.5px 2px 0 #0D0D0F inset, -0.5px 0px 2px 0 #0D0D0F inset"
                      >
                        <div class="text-[5px] w-full flex justify-center items-center flex-col text-white">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            class="h-[6px] w-[6px]"
                          >
                            <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0"></path>
                            <path d="M21 21l-6 -6"></path>
                          </svg>
                          <span class="inline-block mt-1">F4</span>
                        </div>
                      </div>
                    </div>
                    <div class="p-[0.5px] rounded-[4px] bg-white/[0.2] shadow-xl shadow-white">
                      <div
                        class="h-6 w-6 bg-[#0A090D] rounded-[3.5px] flex items-center justify-center"
                        bs="box-shadow:0px -0.5px 2px 0 #0D0D0F inset, -0.5px 0px 2px 0 #0D0D0F inset"
                      >
                        <div class="text-[5px] w-full flex justify-center items-center flex-col text-white">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            class="h-[6px] w-[6px]"
                          >
                            <path d="M9 2m0 3a3 3 0 0 1 3 -3h0a3 3 0 0 1 3 3v5a3 3 0 0 1 -3 3h0a3 3 0 0 1 -3 -3z"></path>
                            <path d="M5 10a7 7 0 0 0 14 0"></path>
                            <path d="M8 21l8 0"></path>
                            <path d="M12 17l0 4"></path>
                          </svg>
                          <span class="inline-block mt-1">F5</span>
                        </div>
                      </div>
                    </div>
                    <div class="p-[0.5px] rounded-[4px] bg-white/[0.2] shadow-xl shadow-white">
                      <div
                        class="h-6 w-6 bg-[#0A090D] rounded-[3.5px] flex items-center justify-center"
                        bs="box-shadow:0px -0.5px 2px 0 #0D0D0F inset, -0.5px 0px 2px 0 #0D0D0F inset"
                      >
                        <div class="text-[5px] w-full flex justify-center items-center flex-col text-white">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            class="h-[6px] w-[6px]"
                          >
                            <path d="M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446a9 9 0 1 1 -8.313 -12.454z"></path>
                          </svg>
                          <span class="inline-block mt-1">F6</span>
                        </div>
                      </div>
                    </div>
                    <div class="p-[0.5px] rounded-[4px] bg-white/[0.2] shadow-xl shadow-white">
                      <div
                        class="h-6 w-6 bg-[#0A090D] rounded-[3.5px] flex items-center justify-center"
                        bs="box-shadow:0px -0.5px 2px 0 #0D0D0F inset, -0.5px 0px 2px 0 #0D0D0F inset"
                      >
                        <div class="text-[5px] w-full flex justify-center items-center flex-col text-white">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            class="h-[6px] w-[6px]"
                          >
                            <path d="M21 5v14l-8 -7z"></path>
                            <path d="M10 5v14l-8 -7z"></path>
                          </svg>
                          <span class="inline-block mt-1">F7</span>
                        </div>
                      </div>
                    </div>
                    <div class="p-[0.5px] rounded-[4px] bg-white/[0.2] shadow-xl shadow-white">
                      <div
                        class="h-6 w-6 bg-[#0A090D] rounded-[3.5px] flex items-center justify-center"
                        bs="box-shadow:0px -0.5px 2px 0 #0D0D0F inset, -0.5px 0px 2px 0 #0D0D0F inset"
                      >
                        <div class="text-[5px] w-full flex justify-center items-center flex-col text-white">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            class="h-[6px] w-[6px]"
                          >
                            <path d="M4 5v14l12 -7z"></path>
                            <path d="M20 5l0 14"></path>
                          </svg>
                          <span class="inline-block mt-1">F8</span>
                        </div>
                      </div>
                    </div>
                    <div class="p-[0.5px] rounded-[4px] bg-white/[0.2] shadow-xl shadow-white">
                      <div
                        class="h-6 w-6 bg-[#0A090D] rounded-[3.5px] flex items-center justify-center"
                        bs="box-shadow:0px -0.5px 2px 0 #0D0D0F inset, -0.5px 0px 2px 0 #0D0D0F inset"
                      >
                        <div class="text-[5px] w-full flex justify-center items-center flex-col text-white">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            class="h-[6px] w-[6px]"
                          >
                            <path d="M3 5v14l8 -7z"></path>
                            <path d="M14 5v14l8 -7z"></path>
                          </svg>
                          <span class="inline-block mt-1">F8</span>
                        </div>
                      </div>
                    </div>
                    <div class="p-[0.5px] rounded-[4px] bg-white/[0.2] shadow-xl shadow-white">
                      <div
                        class="h-6 w-6 bg-[#0A090D] rounded-[3.5px] flex items-center justify-center"
                        bs="box-shadow:0px -0.5px 2px 0 #0D0D0F inset, -0.5px 0px 2px 0 #0D0D0F inset"
                      >
                        <div class="text-[5px] w-full flex justify-center items-center flex-col text-white">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            class="h-[6px] w-[6px]"
                          >
                            <path d="M6 15h-2a1 1 0 0 1 -1 -1v-4a1 1 0 0 1 1 -1h2l3.5 -4.5a.8 .8 0 0 1 1.5 .5v14a.8 .8 0 0 1 -1.5 .5l-3.5 -4.5"></path>
                            <path d="M16 10l4 4m0 -4l-4 4"></path>
                          </svg>
                          <span class="inline-block mt-1">F10</span>
                        </div>
                      </div>
                    </div>
                    <div class="p-[0.5px] rounded-[4px] bg-white/[0.2] shadow-xl shadow-white">
                      <div
                        class="h-6 w-6 bg-[#0A090D] rounded-[3.5px] flex items-center justify-center"
                        bs="box-shadow:0px -0.5px 2px 0 #0D0D0F inset, -0.5px 0px 2px 0 #0D0D0F inset"
                      >
                        <div class="text-[5px] w-full flex justify-center items-center flex-col text-white">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            class="h-[6px] w-[6px]"
                          >
                            <path d="M15 8a5 5 0 0 1 0 8"></path>
                            <path d="M6 15h-2a1 1 0 0 1 -1 -1v-4a1 1 0 0 1 1 -1h2l3.5 -4.5a.8 .8 0 0 1 1.5 .5v14a.8 .8 0 0 1 -1.5 .5l-3.5 -4.5"></path>
                          </svg>
                          <span class="inline-block mt-1">F11</span>
                        </div>
                      </div>
                    </div>
                    <div class="p-[0.5px] rounded-[4px] bg-white/[0.2] shadow-xl shadow-white">
                      <div
                        class="h-6 w-6 bg-[#0A090D] rounded-[3.5px] flex items-center justify-center"
                        bs="box-shadow:0px -0.5px 2px 0 #0D0D0F inset, -0.5px 0px 2px 0 #0D0D0F inset"
                      >
                        <div class="text-[5px] w-full flex justify-center items-center flex-col text-white">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            class="h-[6px] w-[6px]"
                          >
                            <path d="M15 8a5 5 0 0 1 0 8"></path>
                            <path d="M17.7 5a9 9 0 0 1 0 14"></path>
                            <path d="M6 15h-2a1 1 0 0 1 -1 -1v-4a1 1 0 0 1 1 -1h2l3.5 -4.5a.8 .8 0 0 1 1.5 .5v14a.8 .8 0 0 1 -1.5 .5l-3.5 -4.5"></path>
                          </svg>
                          <span class="inline-block mt-1">F12</span>
                        </div>
                      </div>
                    </div>
                    <div class="p-[0.5px] rounded-[4px] bg-white/[0.2] shadow-xl shadow-white">
                      <div
                        class="h-6 w-6 bg-[#0A090D] rounded-[3.5px] flex items-center justify-center"
                        bs="box-shadow:0px -0.5px 2px 0 #0D0D0F inset, -0.5px 0px 2px 0 #0D0D0F inset"
                      >
                        <div class="text-[5px] w-full flex justify-center items-center flex-col text-white">
                          <div class="h-4 w-4 rounded-full  bg-gradient-to-b from-20% from-neutral-900 via-black via-50% to-neutral-900 to-95% p-px">
                            <div class="bg-black h-full w-full rounded-full"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="flex gap-[2px] mb-[2px] w-full flex-shrink-0">
                    <div class="p-[0.5px] rounded-[4px] bg-white/[0.2] shadow-xl shadow-white">
                      <div
                        class="h-6 w-6 bg-[#0A090D] rounded-[3.5px] flex items-center justify-center"
                        bs="box-shadow:0px -0.5px 2px 0 #0D0D0F inset, -0.5px 0px 2px 0 #0D0D0F inset"
                      >
                        <div class="text-[5px] w-full flex justify-center items-center flex-col text-white">
                          <span class="block">~</span>
                          <span class="block mt-1">`</span>
                        </div>
                      </div>
                    </div>
                    <div class="p-[0.5px] rounded-[4px] bg-white/[0.2] shadow-xl shadow-white">
                      <div
                        class="h-6 w-6 bg-[#0A090D] rounded-[3.5px] flex items-center justify-center"
                        bs="box-shadow:0px -0.5px 2px 0 #0D0D0F inset, -0.5px 0px 2px 0 #0D0D0F inset"
                      >
                        <div class="text-[5px] w-full flex justify-center items-center flex-col text-white">
                          <span class="block ">!</span>
                          <span class="block">1</span>
                        </div>
                      </div>
                    </div>
                    <div class="p-[0.5px] rounded-[4px] bg-white/[0.2] shadow-xl shadow-white">
                      <div
                        class="h-6 w-6 bg-[#0A090D] rounded-[3.5px] flex items-center justify-center"
                        bs="box-shadow:0px -0.5px 2px 0 #0D0D0F inset, -0.5px 0px 2px 0 #0D0D0F inset"
                      >
                        <div class="text-[5px] w-full flex justify-center items-center flex-col text-white">
                          <span class="block">@</span>
                          <span class="block">2</span>
                        </div>
                      </div>
                    </div>
                    <div class="p-[0.5px] rounded-[4px] bg-white/[0.2] shadow-xl shadow-white">
                      <div
                        class="h-6 w-6 bg-[#0A090D] rounded-[3.5px] flex items-center justify-center"
                        bs="box-shadow:0px -0.5px 2px 0 #0D0D0F inset, -0.5px 0px 2px 0 #0D0D0F inset"
                      >
                        <div class="text-[5px] w-full flex justify-center items-center flex-col text-white">
                          <span class="block">#</span>
                          <span class="block">3</span>
                        </div>
                      </div>
                    </div>
                    <div class="p-[0.5px] rounded-[4px] bg-white/[0.2] shadow-xl shadow-white">
                      <div
                        class="h-6 w-6 bg-[#0A090D] rounded-[3.5px] flex items-center justify-center"
                        bs="box-shadow:0px -0.5px 2px 0 #0D0D0F inset, -0.5px 0px 2px 0 #0D0D0F inset"
                      >
                        <div class="text-[5px] w-full flex justify-center items-center flex-col text-white">
                          <span class="block">$</span>
                          <span class="block">4</span>
                        </div>
                      </div>
                    </div>
                    <div class="p-[0.5px] rounded-[4px] bg-white/[0.2] shadow-xl shadow-white">
                      <div
                        class="h-6 w-6 bg-[#0A090D] rounded-[3.5px] flex items-center justify-center"
                        bs="box-shadow:0px -0.5px 2px 0 #0D0D0F inset, -0.5px 0px 2px 0 #0D0D0F inset"
                      >
                        <div class="text-[5px] w-full flex justify-center items-center flex-col text-white">
                          <span class="block">%</span>
                          <span class="block">5</span>
                        </div>
                      </div>
                    </div>
                    <div class="p-[0.5px] rounded-[4px] bg-white/[0.2] shadow-xl shadow-white">
                      <div
                        class="h-6 w-6 bg-[#0A090D] rounded-[3.5px] flex items-center justify-center"
                        bs="box-shadow:0px -0.5px 2px 0 #0D0D0F inset, -0.5px 0px 2px 0 #0D0D0F inset"
                      >
                        <div class="text-[5px] w-full flex justify-center items-center flex-col text-white">
                          <span class="block">^</span>
                          <span class="block">6</span>
                        </div>
                      </div>
                    </div>
                    <div class="p-[0.5px] rounded-[4px] bg-white/[0.2] shadow-xl shadow-white">
                      <div
                        class="h-6 w-6 bg-[#0A090D] rounded-[3.5px] flex items-center justify-center"
                        bs="box-shadow:0px -0.5px 2px 0 #0D0D0F inset, -0.5px 0px 2px 0 #0D0D0F inset"
                      >
                        <div class="text-[5px] w-full flex justify-center items-center flex-col text-white">
                          <span class="block">&amp;</span>
                          <span class="block">7</span>
                        </div>
                      </div>
                    </div>
                    <div class="p-[0.5px] rounded-[4px] bg-white/[0.2] shadow-xl shadow-white">
                      <div
                        class="h-6 w-6 bg-[#0A090D] rounded-[3.5px] flex items-center justify-center"
                        bs="box-shadow:0px -0.5px 2px 0 #0D0D0F inset, -0.5px 0px 2px 0 #0D0D0F inset"
                      >
                        <div class="text-[5px] w-full flex justify-center items-center flex-col text-white">
                          <span class="block">*</span>
                          <span class="block">8</span>
                        </div>
                      </div>
                    </div>
                    <div class="p-[0.5px] rounded-[4px] bg-white/[0.2] shadow-xl shadow-white">
                      <div
                        class="h-6 w-6 bg-[#0A090D] rounded-[3.5px] flex items-center justify-center"
                        bs="box-shadow:0px -0.5px 2px 0 #0D0D0F inset, -0.5px 0px 2px 0 #0D0D0F inset"
                      >
                        <div class="text-[5px] w-full flex justify-center items-center flex-col text-white">
                          <span class="block">(</span>
                          <span class="block">9</span>
                        </div>
                      </div>
                    </div>
                    <div class="p-[0.5px] rounded-[4px] bg-white/[0.2] shadow-xl shadow-white">
                      <div
                        class="h-6 w-6 bg-[#0A090D] rounded-[3.5px] flex items-center justify-center"
                        bs="box-shadow:0px -0.5px 2px 0 #0D0D0F inset, -0.5px 0px 2px 0 #0D0D0F inset"
                      >
                        <div class="text-[5px] w-full flex justify-center items-center flex-col text-white">
                          <span class="block">)</span>
                          <span class="block">0</span>
                        </div>
                      </div>
                    </div>
                    <div class="p-[0.5px] rounded-[4px] bg-white/[0.2] shadow-xl shadow-white">
                      <div
                        class="h-6 w-6 bg-[#0A090D] rounded-[3.5px] flex items-center justify-center"
                        bs="box-shadow:0px -0.5px 2px 0 #0D0D0F inset, -0.5px 0px 2px 0 #0D0D0F inset"
                      >
                        <div class="text-[5px] w-full flex justify-center items-center flex-col text-white">
                          <span class="block">—</span>
                          <span class="block">_</span>
                        </div>
                      </div>
                    </div>
                    <div class="p-[0.5px] rounded-[4px] bg-white/[0.2] shadow-xl shadow-white">
                      <div
                        class="h-6 w-6 bg-[#0A090D] rounded-[3.5px] flex items-center justify-center"
                        bs="box-shadow:0px -0.5px 2px 0 #0D0D0F inset, -0.5px 0px 2px 0 #0D0D0F inset"
                      >
                        <div class="text-[5px] w-full flex justify-center items-center flex-col text-white">
                          <span class="block">+</span>
                          <span class="block"> = </span>
                        </div>
                      </div>
                    </div>
                    <div class="p-[0.5px] rounded-[4px] bg-white/[0.2] shadow-xl shadow-white">
                      <div
                        class="h-6 bg-[#0A090D] rounded-[3.5px] flex w-10 items-end justify-end pr-[4px] pb-[2px]"
                        bs="box-shadow:0px -0.5px 2px 0 #0D0D0F inset, -0.5px 0px 2px 0 #0D0D0F inset"
                      >
                        <div class="text-[5px] w-full flex justify-center flex-col items-end text-white">
                          delete
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="flex gap-[2px] mb-[2px] w-full flex-shrink-0">
                    <div class="p-[0.5px] rounded-[4px] bg-white/[0.2] shadow-xl shadow-white">
                      <div
                        class="h-6 bg-[#0A090D] rounded-[3.5px] flex w-10 items-end justify-start pl-[4px] pb-[2px]"
                        bs="box-shadow:0px -0.5px 2px 0 #0D0D0F inset, -0.5px 0px 2px 0 #0D0D0F inset"
                      >
                        <div class="text-[5px] w-full flex justify-center flex-col items-start text-white">
                          tab
                        </div>
                      </div>
                    </div>
                    <div class="p-[0.5px] rounded-[4px] bg-white/[0.2] shadow-xl shadow-white">
                      <div
                        class="h-6 w-6 bg-[#0A090D] rounded-[3.5px] flex items-center justify-center"
                        bs="box-shadow:0px -0.5px 2px 0 #0D0D0F inset, -0.5px 0px 2px 0 #0D0D0F inset"
                      >
                        <div class="text-[5px] w-full flex justify-center items-center flex-col text-white">
                          <span class="block">Q</span>
                        </div>
                      </div>
                    </div>
                    <div class="p-[0.5px] rounded-[4px] bg-white/[0.2] shadow-xl shadow-white">
                      <div
                        class="h-6 w-6 bg-[#0A090D] rounded-[3.5px] flex items-center justify-center"
                        bs="box-shadow:0px -0.5px 2px 0 #0D0D0F inset, -0.5px 0px 2px 0 #0D0D0F inset"
                      >
                        <div class="text-[5px] w-full flex justify-center items-center flex-col text-white">
                          <span class="block">W</span>
                        </div>
                      </div>
                    </div>
                    <div class="p-[0.5px] rounded-[4px] bg-white/[0.2] shadow-xl shadow-white">
                      <div
                        class="h-6 w-6 bg-[#0A090D] rounded-[3.5px] flex items-center justify-center"
                        bs="box-shadow:0px -0.5px 2px 0 #0D0D0F inset, -0.5px 0px 2px 0 #0D0D0F inset"
                      >
                        <div class="text-[5px] w-full flex justify-center items-center flex-col text-white">
                          <span class="block">E</span>
                        </div>
                      </div>
                    </div>
                    <div class="p-[0.5px] rounded-[4px] bg-white/[0.2] shadow-xl shadow-white">
                      <div
                        class="h-6 w-6 bg-[#0A090D] rounded-[3.5px] flex items-center justify-center"
                        bs="box-shadow:0px -0.5px 2px 0 #0D0D0F inset, -0.5px 0px 2px 0 #0D0D0F inset"
                      >
                        <div class="text-[5px] w-full flex justify-center items-center flex-col text-white">
                          <span class="block">R</span>
                        </div>
                      </div>
                    </div>
                    <div class="p-[0.5px] rounded-[4px] bg-white/[0.2] shadow-xl shadow-white">
                      <div
                        class="h-6 w-6 bg-[#0A090D] rounded-[3.5px] flex items-center justify-center"
                        bs="box-shadow:0px -0.5px 2px 0 #0D0D0F inset, -0.5px 0px 2px 0 #0D0D0F inset"
                      >
                        <div class="text-[5px] w-full flex justify-center items-center flex-col text-white">
                          <span class="block">T</span>
                        </div>
                      </div>
                    </div>
                    <div class="p-[0.5px] rounded-[4px] bg-white/[0.2] shadow-xl shadow-white">
                      <div
                        class="h-6 w-6 bg-[#0A090D] rounded-[3.5px] flex items-center justify-center"
                        bs="box-shadow:0px -0.5px 2px 0 #0D0D0F inset, -0.5px 0px 2px 0 #0D0D0F inset"
                      >
                        <div class="text-[5px] w-full flex justify-center items-center flex-col text-white">
                          <span class="block">Y</span>
                        </div>
                      </div>
                    </div>
                    <div class="p-[0.5px] rounded-[4px] bg-white/[0.2] shadow-xl shadow-white">
                      <div
                        class="h-6 w-6 bg-[#0A090D] rounded-[3.5px] flex items-center justify-center"
                        bs="box-shadow:0px -0.5px 2px 0 #0D0D0F inset, -0.5px 0px 2px 0 #0D0D0F inset"
                      >
                        <div class="text-[5px] w-full flex justify-center items-center flex-col text-white">
                          <span class="block">U</span>
                        </div>
                      </div>
                    </div>
                    <div class="p-[0.5px] rounded-[4px] bg-white/[0.2] shadow-xl shadow-white">
                      <div
                        class="h-6 w-6 bg-[#0A090D] rounded-[3.5px] flex items-center justify-center"
                        bs="box-shadow:0px -0.5px 2px 0 #0D0D0F inset, -0.5px 0px 2px 0 #0D0D0F inset"
                      >
                        <div class="text-[5px] w-full flex justify-center items-center flex-col text-white">
                          <span class="block">I</span>
                        </div>
                      </div>
                    </div>
                    <div class="p-[0.5px] rounded-[4px] bg-white/[0.2] shadow-xl shadow-white">
                      <div
                        class="h-6 w-6 bg-[#0A090D] rounded-[3.5px] flex items-center justify-center"
                        bs="box-shadow:0px -0.5px 2px 0 #0D0D0F inset, -0.5px 0px 2px 0 #0D0D0F inset"
                      >
                        <div class="text-[5px] w-full flex justify-center items-center flex-col text-white">
                          <span class="block">O</span>
                        </div>
                      </div>
                    </div>
                    <div class="p-[0.5px] rounded-[4px] bg-white/[0.2] shadow-xl shadow-white">
                      <div
                        class="h-6 w-6 bg-[#0A090D] rounded-[3.5px] flex items-center justify-center"
                        bs="box-shadow:0px -0.5px 2px 0 #0D0D0F inset, -0.5px 0px 2px 0 #0D0D0F inset"
                      >
                        <div class="text-[5px] w-full flex justify-center items-center flex-col text-white">
                          <span class="block">P</span>
                        </div>
                      </div>
                    </div>
                    <div class="p-[0.5px] rounded-[4px] bg-white/[0.2] shadow-xl shadow-white">
                      <div
                        class="h-6 w-6 bg-[#0A090D] rounded-[3.5px] flex items-center justify-center"
                        bs="box-shadow:0px -0.5px 2px 0 #0D0D0F inset, -0.5px 0px 2px 0 #0D0D0F inset"
                      >
                        <div class="text-[5px] w-full flex justify-center items-center flex-col text-white">
                          <span class="block"></span>
                          <span class="block">]</span>
                        </div>
                      </div>
                    </div>
                    <div class="p-[0.5px] rounded-[4px] bg-white/[0.2] shadow-xl shadow-white">
                      <div
                        class="h-6 w-6 bg-[#0A090D] rounded-[3.5px] flex items-center justify-center"
                        bs="box-shadow:0px -0.5px 2px 0 #0D0D0F inset, -0.5px 0px 2px 0 #0D0D0F inset"
                      >
                        <div class="text-[5px] w-full flex justify-center items-center flex-col text-white">
                          <span class="block">|</span>
                          <span class="block">\</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="flex gap-[2px] mb-[2px] w-full flex-shrink-0">
                    <div class="p-[0.5px] rounded-[4px] bg-white/[0.2] shadow-xl shadow-white">
                      <div
                        class="h-6 bg-[#0A090D] rounded-[3.5px] flex w-[2.8rem] items-end justify-start pl-[4px] pb-[2px]"
                        bs="box-shadow:0px -0.5px 2px 0 #0D0D0F inset, -0.5px 0px 2px 0 #0D0D0F inset"
                      >
                        <div class="text-[5px] w-full flex justify-center flex-col items-start text-white">
                          caps lock
                        </div>
                      </div>
                    </div>
                    <div class="p-[0.5px] rounded-[4px] bg-white/[0.2] shadow-xl shadow-white">
                      <div
                        class="h-6 w-6 bg-[#0A090D] rounded-[3.5px] flex items-center justify-center"
                        bs="box-shadow:0px -0.5px 2px 0 #0D0D0F inset, -0.5px 0px 2px 0 #0D0D0F inset"
                      >
                        <div class="text-[5px] w-full flex justify-center items-center flex-col text-white">
                          <span class="block">A</span>
                        </div>
                      </div>
                    </div>
                    <div class="p-[0.5px] rounded-[4px] bg-white/[0.2] shadow-xl shadow-white">
                      <div
                        class="h-6 w-6 bg-[#0A090D] rounded-[3.5px] flex items-center justify-center"
                        bs="box-shadow:0px -0.5px 2px 0 #0D0D0F inset, -0.5px 0px 2px 0 #0D0D0F inset"
                      >
                        <div class="text-[5px] w-full flex justify-center items-center flex-col text-white">
                          <span class="block">S</span>
                        </div>
                      </div>
                    </div>
                    <div class="p-[0.5px] rounded-[4px] bg-white/[0.2] shadow-xl shadow-white">
                      <div
                        class="h-6 w-6 bg-[#0A090D] rounded-[3.5px] flex items-center justify-center"
                        bs="box-shadow:0px -0.5px 2px 0 #0D0D0F inset, -0.5px 0px 2px 0 #0D0D0F inset"
                      >
                        <div class="text-[5px] w-full flex justify-center items-center flex-col text-white">
                          <span class="block">D</span>
                        </div>
                      </div>
                    </div>
                    <div class="p-[0.5px] rounded-[4px] bg-white/[0.2] shadow-xl shadow-white">
                      <div
                        class="h-6 w-6 bg-[#0A090D] rounded-[3.5px] flex items-center justify-center"
                        bs="box-shadow:0px -0.5px 2px 0 #0D0D0F inset, -0.5px 0px 2px 0 #0D0D0F inset"
                      >
                        <div class="text-[5px] w-full flex justify-center items-center flex-col text-white">
                          <span class="block">F</span>
                        </div>
                      </div>
                    </div>
                    <div class="p-[0.5px] rounded-[4px] bg-white/[0.2] shadow-xl shadow-white">
                      <div
                        class="h-6 w-6 bg-[#0A090D] rounded-[3.5px] flex items-center justify-center"
                        bs="box-shadow:0px -0.5px 2px 0 #0D0D0F inset, -0.5px 0px 2px 0 #0D0D0F inset"
                      >
                        <div class="text-[5px] w-full flex justify-center items-center flex-col text-white">
                          <span class="block">G</span>
                        </div>
                      </div>
                    </div>
                    <div class="p-[0.5px] rounded-[4px] bg-white/[0.2] shadow-xl shadow-white">
                      <div
                        class="h-6 w-6 bg-[#0A090D] rounded-[3.5px] flex items-center justify-center"
                        bs="box-shadow:0px -0.5px 2px 0 #0D0D0F inset, -0.5px 0px 2px 0 #0D0D0F inset"
                      >
                        <div class="text-[5px] w-full flex justify-center items-center flex-col text-white">
                          <span class="block">H</span>
                        </div>
                      </div>
                    </div>
                    <div class="p-[0.5px] rounded-[4px] bg-white/[0.2] shadow-xl shadow-white">
                      <div
                        class="h-6 w-6 bg-[#0A090D] rounded-[3.5px] flex items-center justify-center"
                        bs="box-shadow:0px -0.5px 2px 0 #0D0D0F inset, -0.5px 0px 2px 0 #0D0D0F inset"
                      >
                        <div class="text-[5px] w-full flex justify-center items-center flex-col text-white">
                          <span class="block">J</span>
                        </div>
                      </div>
                    </div>
                    <div class="p-[0.5px] rounded-[4px] bg-white/[0.2] shadow-xl shadow-white">
                      <div
                        class="h-6 w-6 bg-[#0A090D] rounded-[3.5px] flex items-center justify-center"
                        bs="box-shadow:0px -0.5px 2px 0 #0D0D0F inset, -0.5px 0px 2px 0 #0D0D0F inset"
                      >
                        <div class="text-[5px] w-full flex justify-center items-center flex-col text-white">
                          <span class="block">K</span>
                        </div>
                      </div>
                    </div>
                    <div class="p-[0.5px] rounded-[4px] bg-white/[0.2] shadow-xl shadow-white">
                      <div
                        class="h-6 w-6 bg-[#0A090D] rounded-[3.5px] flex items-center justify-center"
                        bs="box-shadow:0px -0.5px 2px 0 #0D0D0F inset, -0.5px 0px 2px 0 #0D0D0F inset"
                      >
                        <div class="text-[5px] w-full flex justify-center items-center flex-col text-white">
                          <span class="block">L</span>
                        </div>
                      </div>
                    </div>
                    <div class="p-[0.5px] rounded-[4px] bg-white/[0.2] shadow-xl shadow-white">
                      <div
                        class="h-6 w-6 bg-[#0A090D] rounded-[3.5px] flex items-center justify-center"
                        bs="box-shadow:0px -0.5px 2px 0 #0D0D0F inset, -0.5px 0px 2px 0 #0D0D0F inset"
                      >
                        <div class="text-[5px] w-full flex justify-center items-center flex-col text-white">
                          <span class="block">:</span>
                          <span class="block">;</span>
                        </div>
                      </div>
                    </div>
                    <div class="p-[0.5px] rounded-[4px] bg-white/[0.2] shadow-xl shadow-white">
                      <div
                        class="h-6 w-6 bg-[#0A090D] rounded-[3.5px] flex items-center justify-center"
                        bs="box-shadow:0px -0.5px 2px 0 #0D0D0F inset, -0.5px 0px 2px 0 #0D0D0F inset"
                      >
                        <div class="text-[5px] w-full flex justify-center items-center flex-col text-white">
                          <span class="block">"</span>
                          <span class="block">'</span>
                        </div>
                      </div>
                    </div>
                    <div class="p-[0.5px] rounded-[4px] bg-white/[0.2] shadow-xl shadow-white">
                      <div
                        class="h-6 bg-[#0A090D] rounded-[3.5px] flex w-[2.85rem] items-end justify-end pr-[4px] pb-[2px]"
                        bs="box-shadow:0px -0.5px 2px 0 #0D0D0F inset, -0.5px 0px 2px 0 #0D0D0F inset"
                      >
                        <div class="text-[5px] w-full flex justify-center flex-col items-end text-white">
                          return
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="flex gap-[2px] mb-[2px] w-full flex-shrink-0">
                    <div class="p-[0.5px] rounded-[4px] bg-white/[0.2] shadow-xl shadow-white">
                      <div
                        class="h-6 bg-[#0A090D] rounded-[3.5px] flex w-[3.65rem] items-end justify-start pl-[4px] pb-[2px]"
                        bs="box-shadow:0px -0.5px 2px 0 #0D0D0F inset, -0.5px 0px 2px 0 #0D0D0F inset"
                      >
                        <div class="text-[5px] w-full flex justify-center flex-col items-start text-white">
                          shift
                        </div>
                      </div>
                    </div>
                    <div class="p-[0.5px] rounded-[4px] bg-white/[0.2] shadow-xl shadow-white">
                      <div
                        class="h-6 w-6 bg-[#0A090D] rounded-[3.5px] flex items-center justify-center"
                        bs="box-shadow:0px -0.5px 2px 0 #0D0D0F inset, -0.5px 0px 2px 0 #0D0D0F inset"
                      >
                        <div class="text-[5px] w-full flex justify-center items-center flex-col text-white">
                          <span class="block">Z</span>
                        </div>
                      </div>
                    </div>
                    <div class="p-[0.5px] rounded-[4px] bg-white/[0.2] shadow-xl shadow-white">
                      <div
                        class="h-6 w-6 bg-[#0A090D] rounded-[3.5px] flex items-center justify-center"
                        bs="box-shadow:0px -0.5px 2px 0 #0D0D0F inset, -0.5px 0px 2px 0 #0D0D0F inset"
                      >
                        <div class="text-[5px] w-full flex justify-center items-center flex-col text-white">
                          <span class="block">X</span>
                        </div>
                      </div>
                    </div>
                    <div class="p-[0.5px] rounded-[4px] bg-white/[0.2] shadow-xl shadow-white">
                      <div
                        class="h-6 w-6 bg-[#0A090D] rounded-[3.5px] flex items-center justify-center"
                        bs="box-shadow:0px -0.5px 2px 0 #0D0D0F inset, -0.5px 0px 2px 0 #0D0D0F inset"
                      >
                        <div class="text-[5px] w-full flex justify-center items-center flex-col text-white">
                          <span class="block">C</span>
                        </div>
                      </div>
                    </div>
                    <div class="p-[0.5px] rounded-[4px] bg-white/[0.2] shadow-xl shadow-white">
                      <div
                        class="h-6 w-6 bg-[#0A090D] rounded-[3.5px] flex items-center justify-center"
                        bs="box-shadow:0px -0.5px 2px 0 #0D0D0F inset, -0.5px 0px 2px 0 #0D0D0F inset"
                      >
                        <div class="text-[5px] w-full flex justify-center items-center flex-col text-white">
                          <span class="block">V</span>
                        </div>
                      </div>
                    </div>
                    <div class="p-[0.5px] rounded-[4px] bg-white/[0.2] shadow-xl shadow-white">
                      <div
                        class="h-6 w-6 bg-[#0A090D] rounded-[3.5px] flex items-center justify-center"
                        bs="box-shadow:0px -0.5px 2px 0 #0D0D0F inset, -0.5px 0px 2px 0 #0D0D0F inset"
                      >
                        <div class="text-[5px] w-full flex justify-center items-center flex-col text-white">
                          <span class="block">B</span>
                        </div>
                      </div>
                    </div>
                    <div class="p-[0.5px] rounded-[4px] bg-white/[0.2] shadow-xl shadow-white">
                      <div
                        class="h-6 w-6 bg-[#0A090D] rounded-[3.5px] flex items-center justify-center"
                        bs="box-shadow:0px -0.5px 2px 0 #0D0D0F inset, -0.5px 0px 2px 0 #0D0D0F inset"
                      >
                        <div class="text-[5px] w-full flex justify-center items-center flex-col text-white">
                          <span class="block">N</span>
                        </div>
                      </div>
                    </div>
                    <div class="p-[0.5px] rounded-[4px] bg-white/[0.2] shadow-xl shadow-white">
                      <div
                        class="h-6 w-6 bg-[#0A090D] rounded-[3.5px] flex items-center justify-center"
                        bs="box-shadow:0px -0.5px 2px 0 #0D0D0F inset, -0.5px 0px 2px 0 #0D0D0F inset"
                      >
                        <div class="text-[5px] w-full flex justify-center items-center flex-col text-white">
                          <span class="block">M</span>
                        </div>
                      </div>
                    </div>
                    <div class="p-[0.5px] rounded-[4px] bg-white/[0.2] shadow-xl shadow-white">
                      <div
                        class="h-6 w-6 bg-[#0A090D] rounded-[3.5px] flex items-center justify-center"
                        bs="box-shadow:0px -0.5px 2px 0 #0D0D0F inset, -0.5px 0px 2px 0 #0D0D0F inset"
                      >
                        <div class="text-[5px] w-full flex justify-center items-center flex-col text-white">
                          <span class="block">&lt;</span>
                          <span class="block">,</span>
                        </div>
                      </div>
                    </div>
                    <div class="p-[0.5px] rounded-[4px] bg-white/[0.2] shadow-xl shadow-white">
                      <div
                        class="h-6 w-6 bg-[#0A090D] rounded-[3.5px] flex items-center justify-center"
                        bs="box-shadow:0px -0.5px 2px 0 #0D0D0F inset, -0.5px 0px 2px 0 #0D0D0F inset"
                      >
                        <div class="text-[5px] w-full flex justify-center items-center flex-col text-white">
                          <span class="block">&gt;</span>
                          <span class="block">.</span>
                        </div>
                      </div>
                    </div>{" "}
                    <div class="p-[0.5px] rounded-[4px] bg-white/[0.2] shadow-xl shadow-white">
                      <div
                        class="h-6 w-6 bg-[#0A090D] rounded-[3.5px] flex items-center justify-center"
                        bs="box-shadow:0px -0.5px 2px 0 #0D0D0F inset, -0.5px 0px 2px 0 #0D0D0F inset"
                      >
                        <div class="text-[5px] w-full flex justify-center items-center flex-col text-white">
                          <span class="block">?</span>
                          <span class="block">/</span>
                        </div>
                      </div>
                    </div>
                    <div class="p-[0.5px] rounded-[4px] bg-white/[0.2] shadow-xl shadow-white">
                      <div
                        class="h-6 bg-[#0A090D] rounded-[3.5px] flex w-[3.65rem] items-end justify-end pr-[4px] pb-[2px]"
                        bs="box-shadow:0px -0.5px 2px 0 #0D0D0F inset, -0.5px 0px 2px 0 #0D0D0F inset"
                      >
                        <div class="text-[5px] w-full flex justify-center flex-col items-end text-white">
                          shift
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="flex gap-[2px] mb-[2px] w-full flex-shrink-0">
                    <div class="p-[0.5px] rounded-[4px] bg-white/[0.2] shadow-xl shadow-white">
                      <div
                        class="h-6 w-6 bg-[#0A090D] rounded-[3.5px] flex items-center justify-center"
                        bs="box-shadow:0px -0.5px 2px 0 #0D0D0F inset, -0.5px 0px 2px 0 #0D0D0F inset"
                      >
                        <div class="text-[5px] w-full flex items-center flex-col h-full justify-between py-[4px] text-white">
                          <div class="flex justify-end w-full pr-1">
                            <span class="block">fn</span>
                          </div>
                          <div class="flex justify-start w-full pl-1">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              class="h-[6px] w-[6px]"
                            >
                              <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"></path>
                              <path d="M3.6 9h16.8"></path>
                              <path d="M3.6 15h16.8"></path>
                              <path d="M11.5 3a17 17 0 0 0 0 18"></path>
                              <path d="M12.5 3a17 17 0 0 1 0 18"></path>
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="p-[0.5px] rounded-[4px] bg-white/[0.2] shadow-xl shadow-white">
                      <div
                        class="h-6 w-6 bg-[#0A090D] rounded-[3.5px] flex items-center justify-center"
                        bs="box-shadow:0px -0.5px 2px 0 #0D0D0F inset, -0.5px 0px 2px 0 #0D0D0F inset"
                      >
                        <div class="text-[5px] w-full flex items-center flex-col h-full justify-between py-[4px] text-white">
                          <div class="flex justify-end w-full pr-1">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              class="h-[6px] w-[6px]"
                            >
                              <path d="M6 15l6 -6l6 6"></path>
                            </svg>
                          </div>
                          <div class="flex justify-start w-full pl-1">
                            <span class="block">control</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="p-[0.5px] rounded-[4px] bg-white/[0.2] shadow-xl shadow-white">
                      <div
                        class="h-6 w-6 bg-[#0A090D] rounded-[3.5px] flex items-center justify-center"
                        bs="box-shadow:0px -0.5px 2px 0 #0D0D0F inset, -0.5px 0px 2px 0 #0D0D0F inset"
                      >
                        <div class="text-[5px] w-full flex items-center flex-col h-full justify-between py-[4px] text-white">
                          <div class="flex justify-end w-full pr-1">
                            <svg
                              fill="none"
                              version="1.1"
                              id="icon"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 32 32"
                              class="h-[6px] w-[6px]"
                            >
                              <rect
                                stroke="currentColor"
                                stroke-width="2"
                                x="18"
                                y="5"
                                width="10"
                                height="2"
                              ></rect>
                              <polygon
                                stroke="currentColor"
                                stroke-width="2"
                                points="10.6,5 4,5 4,7 9.4,7 18.4,27 28,27 28,25 19.6,25 "
                              ></polygon>
                              <rect
                                id="_Transparent_Rectangle_"
                                class="st0"
                                width="32"
                                height="32"
                                stroke="none"
                              ></rect>
                            </svg>
                          </div>
                          <div class="flex justify-start w-full pl-1">
                            <span class="block">option</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="p-[0.5px] rounded-[4px] bg-white/[0.2] shadow-xl shadow-white">
                      <div
                        class="h-6 bg-[#0A090D] rounded-[3.5px] flex items-center justify-center w-8"
                        bs="box-shadow:0px -0.5px 2px 0 #0D0D0F inset, -0.5px 0px 2px 0 #0D0D0F inset"
                      >
                        <div class="text-[5px] w-full flex items-center flex-col h-full justify-between py-[4px] text-white">
                          <div class="flex justify-end w-full pr-1">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              class="h-[6px] w-[6px]"
                            >
                              <path d="M7 9a2 2 0 1 1 2 -2v10a2 2 0 1 1 -2 -2h10a2 2 0 1 1 -2 2v-10a2 2 0 1 1 2 2h-10"></path>
                            </svg>
                          </div>
                          <div class="flex justify-start w-full pl-1">
                            <span class="block">command</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="p-[0.5px] rounded-[4px] bg-white/[0.2] shadow-xl shadow-white">
                      <div
                        class="h-6 bg-[#0A090D] rounded-[3.5px] flex items-center justify-center w-[8.2rem]"
                        bs="box-shadow:0px -0.5px 2px 0 #0D0D0F inset, -0.5px 0px 2px 0 #0D0D0F inset"
                      >
                        <div class="text-[5px] w-full flex justify-center items-center flex-col text-white"></div>
                      </div>
                    </div>
                    <div class="p-[0.5px] rounded-[4px] bg-white/[0.2] shadow-xl shadow-white">
                      <div
                        class="h-6 bg-[#0A090D] rounded-[3.5px] flex items-center justify-center w-8"
                        bs="box-shadow:0px -0.5px 2px 0 #0D0D0F inset, -0.5px 0px 2px 0 #0D0D0F inset"
                      >
                        <div class="text-[5px] w-full flex items-center flex-col h-full justify-between py-[4px] text-white">
                          <div class="flex justify-start w-full pl-1">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              class="h-[6px] w-[6px]"
                            >
                              <path d="M7 9a2 2 0 1 1 2 -2v10a2 2 0 1 1 -2 -2h10a2 2 0 1 1 -2 2v-10a2 2 0 1 1 2 2h-10"></path>
                            </svg>
                          </div>
                          <div class="flex justify-start w-full pl-1">
                            <span class="block">command</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="p-[0.5px] rounded-[4px] bg-white/[0.2] shadow-xl shadow-white">
                      <div
                        class="h-6 w-6 bg-[#0A090D] rounded-[3.5px] flex items-center justify-center"
                        bs="box-shadow:0px -0.5px 2px 0 #0D0D0F inset, -0.5px 0px 2px 0 #0D0D0F inset"
                      >
                        <div class="text-[5px] w-full flex items-center flex-col h-full justify-between py-[4px] text-white">
                          <div class="flex justify-start w-full pl-1">
                            <svg
                              fill="none"
                              version="1.1"
                              id="icon"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 32 32"
                              class="h-[6px] w-[6px]"
                            >
                              <rect
                                stroke="currentColor"
                                stroke-width="2"
                                x="18"
                                y="5"
                                width="10"
                                height="2"
                              ></rect>
                              <polygon
                                stroke="currentColor"
                                stroke-width="2"
                                points="10.6,5 4,5 4,7 9.4,7 18.4,27 28,27 28,25 19.6,25 "
                              ></polygon>
                              <rect
                                id="_Transparent_Rectangle_"
                                class="st0"
                                width="32"
                                height="32"
                                stroke="none"
                              ></rect>
                            </svg>
                          </div>
                          <div class="flex justify-start w-full pl-1">
                            <span class="block">option</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="w-[4.9rem] mt-[2px] h-6 p-[0.5px] rounded-[4px] flex flex-col justify-end items-center">
                      <div class="p-[0.5px] rounded-[4px] bg-white/[0.2] shadow-xl shadow-white">
                        <div
                          class="bg-[#0A090D] rounded-[3.5px] flex items-center justify-center w-6 h-3"
                          bs="box-shadow:0px -0.5px 2px 0 #0D0D0F inset, -0.5px 0px 2px 0 #0D0D0F inset"
                        >
                          <div class="text-[5px] w-full flex justify-center items-center flex-col text-white">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              class="h-[6px] w-[6px]"
                            >
                              <path
                                d="M11.293 7.293a1 1 0 0 1 1.32 -.083l.094 .083l6 6l.083 .094l.054 .077l.054 .096l.017 .036l.027 .067l.032 .108l.01 .053l.01 .06l.004 .057l.002 .059l-.002 .059l-.005 .058l-.009 .06l-.01 .052l-.032 .108l-.027 .067l-.07 .132l-.065 .09l-.073 .081l-.094 .083l-.077 .054l-.096 .054l-.036 .017l-.067 .027l-.108 .032l-.053 .01l-.06 .01l-.057 .004l-.059 .002h-12c-.852 0 -1.297 -.986 -.783 -1.623l.076 -.084l6 -6z"
                                fill="currentColor"
                                stroke-width="0"
                              ></path>
                            </svg>
                          </div>
                        </div>
                      </div>
                      <div class="flex">
                        <div class="p-[0.5px] rounded-[4px] bg-white/[0.2] shadow-xl shadow-white">
                          <div
                            class="bg-[#0A090D] rounded-[3.5px] flex items-center justify-center w-6 h-3"
                            bs="box-shadow:0px -0.5px 2px 0 #0D0D0F inset, -0.5px 0px 2px 0 #0D0D0F inset"
                          >
                            <div class="text-[5px] w-full flex justify-center items-center flex-col text-white">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                class="h-[6px] w-[6px]"
                              >
                                <path
                                  d="M13.883 5.007l.058 -.005h.118l.058 .005l.06 .009l.052 .01l.108 .032l.067 .027l.132 .07l.09 .065l.081 .073l.083 .094l.054 .077l.054 .096l.017 .036l.027 .067l.032 .108l.01 .053l.01 .06l.004 .057l.002 .059v12c0 .852 -.986 1.297 -1.623 .783l-.084 -.076l-6 -6a1 1 0 0 1 -.083 -1.32l.083 -.094l6 -6l.094 -.083l.077 -.054l.096 -.054l.036 -.017l.067 -.027l.108 -.032l.053 -.01l.06 -.01z"
                                  fill="currentColor"
                                  stroke-width="0"
                                ></path>
                              </svg>
                            </div>
                          </div>
                        </div>
                        <div class="p-[0.5px] rounded-[4px] bg-white/[0.2] shadow-xl shadow-white">
                          <div
                            class="bg-[#0A090D] rounded-[3.5px] flex items-center justify-center w-6 h-3"
                            bs="box-shadow:0px -0.5px 2px 0 #0D0D0F inset, -0.5px 0px 2px 0 #0D0D0F inset"
                          >
                            <div class="text-[5px] w-full flex justify-center items-center flex-col text-white">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                class="h-[6px] w-[6px]"
                              >
                                <path
                                  d="M18 9c.852 0 1.297 .986 .783 1.623l-.076 .084l-6 6a1 1 0 0 1 -1.32 .083l-.094 -.083l-6 -6l-.083 -.094l-.054 -.077l-.054 -.096l-.017 -.036l-.027 -.067l-.032 -.108l-.01 -.053l-.01 -.06l-.004 -.057v-.118l.005 -.058l.009 -.06l.01 -.052l.032 -.108l.027 -.067l.07 -.132l.065 -.09l.073 -.081l.094 -.083l.077 -.054l.096 -.054l.036 -.017l.067 -.027l.108 -.032l.053 -.01l.06 -.01l.057 -.004l12.059 -.002z"
                                  fill="currentColor"
                                  stroke-width="0"
                                ></path>
                              </svg>
                            </div>
                          </div>
                        </div>
                        <div class="p-[0.5px] rounded-[4px] bg-white/[0.2] shadow-xl shadow-white">
                          <div
                            class="bg-[#0A090D] rounded-[3.5px] flex items-center justify-center w-6 h-3"
                            bs="box-shadow:0px -0.5px 2px 0 #0D0D0F inset, -0.5px 0px 2px 0 #0D0D0F inset"
                          >
                            <div class="text-[5px] w-full flex justify-center items-center flex-col text-white">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                class="h-[6px] w-[6px]"
                              >
                                <path
                                  d="M9 6c0 -.852 .986 -1.297 1.623 -.783l.084 .076l6 6a1 1 0 0 1 .083 1.32l-.083 .094l-6 6l-.094 .083l-.077 .054l-.096 .054l-.036 .017l-.067 .027l-.108 .032l-.053 .01l-.06 .01l-.057 .004l-.059 .002l-.059 -.002l-.058 -.005l-.06 -.009l-.052 -.01l-.108 -.032l-.067 -.027l-.132 -.07l-.09 -.065l-.081 -.073l-.083 -.094l-.054 -.077l-.054 -.096l-.017 -.036l-.027 -.067l-.032 -.108l-.01 -.053l-.01 -.06l-.004 -.057l-.002 -12.059z"
                                  fill="currentColor"
                                  stroke-width="0"
                                ></path>
                              </svg>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="mx-auto w-[10%] overflow-hidden   h-full">
                <div
                  class="flex px-[0.5px] gap-[2px] mt-2 h-40"
                  bs="background-image:radial-gradient(circle, #08080A 0.5px, transparent 0.5px);background-size:3px 3px"
                ></div>
              </div>
            </div>
            <div
              class="w-[40%] mx-auto h-32  rounded-xl my-1 bg-neutral-800"
              bs="box-shadow:0px 0px 1px 1px #00000020 inset"
            ></div>
            <div class="h-2 w-20 mx-auto inset-x-0 absolute bottom-0 bg-gradient-to-t from-neutral-700 to-neutral-800 rounded-tr-3xl rounded-tl-3xl"></div>
            <div class="absolute bottom-4 left-4">
              <a href="https://peerlist.io/manuarora">
                <p class="sr-only">Relay</p>
                <Image
                  src="/_astro/ss-logo-dark.08e32a2d.svg"
                  class="h-16 w-16 -rotate-12 transform rounded-full"
                  alt="Relay Logo"
                />
              </a>
            </div>
          </div>
        </div>
      </div> */}
    </>
  );
};

export default Why;
