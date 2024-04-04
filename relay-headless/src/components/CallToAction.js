"use client";
import React, { useEffect, useState } from "react";
import { useGlobalState } from "./GlobalStateContext";

const CallToAction = () => {
  const { ctaBannerContent } = useGlobalState();
  const { isLoading } = useGlobalState();

  let Header, Description, CTA;

  if (ctaBannerContent) {
    ({ Header, Description, CTA } = ctaBannerContent);
  }

  return (
    <div class="relative mb-12 w-full border-y border-neutral-700 bg-neutral-900 py-6 lg:py-16">
      <div class="absolute inset-0 -z-20 h-full w-full transform rounded-full bg-purple-500 blur-3xl lg:scale-90"></div>
      <div class="mx-auto max-w-7xl px-5">
        {isLoading ? (
          <>
            <div class="flex flex-col items-center gap-y-8">
              <div className="skeleton h-8 lg:h-12 w-full"></div>
              <div className="skeleton h-4 lg:h-5 w-full"></div>
              <div className="skeleton h-14 w-28"></div>
            </div>
          </>
        ) : (
          <div class="flex flex-col items-center gap-y-8">
            <h3 class="mx-2 text-center font-melodrama text-3xl font-medium text-neutral-100 lg:text-5xl">
              {Header}
            </h3>
            <p class="text-md text-center leading-tight tracking-tight text-neutral-300 lg:mx-12 lg:max-w-2xl lg:text-xl">
              {Description}
            </p>
            <a href="/contact">
              <button class="relative rounded-full text-center transition-all duration-500 transform overflow-hidden z-40   w-full px-6 py-3 text-base bg-purple-500 text-neutral-950 border border-purple-500 button hover:text-neutral-50 group uppercase leading-tight tracking-tight md:text-lg">
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
    </div>
  );
};

export default CallToAction;
