"use client";
import React, { useRef } from "react";
import { motion, useTransform, useScroll } from "framer-motion";
import Image from "next/image";

const HorizontalScrolling = () => {
  const targetRef = useRef(null);

  const { scrollYProgress } = useScroll({ target: targetRef });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"]);
  return (
    <div ref={targetRef}>
      <motion.div style={{ x }} className="flex gap-4">
        <div className="w-[100vw] flex justify-center items-center">
          <div className="grid gap-x-8 grid-cols-2">
            <div className="items-center justify-center flex flex-col">
              <div className="flex flex-col lg:max-w-lg">
                <h2 className="text-md mt-2 leading-tight tracking-tight text-neutral-300 md:text-xl">
                  Clean Screens
                </h2>
                <h3 className="mt-2 font-melodrama text-2xl tracking-tight text-white sm:text-6xl">
                  <span className="bg-gradient-to-b from-neutral-50 from-60% to-neutral-400 bg-clip-text font-medium text-transparent lg:to-neutral-600">
                    Increased Conversion Rate By 39% Overnight
                  </span>
                </h3>
                <p className="mt-6 text-sm leading-tight tracking-tight text-neutral-300 md:text-lg">
                  After just one day of launching the new landing page, Clean
                  Screens saw a 39% increase in conversion rate. This was due to
                  the new design being more user friendly and having a more
                  streamlined checkout process.
                </p>
                <dl className="mt-16 grid max-w-xl grid-cols-2 gap-8 sm:mt-20 sm:grid-cols-2 xl:mt-16">
                  <div className="flex flex-col gap-y-1 border-l border-blue-500 pl-6  md:gap-y-3">
                    <dt className="text-sm leading-tight tracking-tight text-neutral-300 ">
                      Increase In Conversion Rate
                    </dt>
                    <dd className="order-first text-2xl font-medium text-neutral-200 md:text-5xl">
                      39%
                    </dd>
                  </div>
                  <div className="flex flex-col gap-y-1 border-l border-blue-500 pl-6  md:gap-y-3">
                    <dt className="text-sm leading-tight tracking-tight text-neutral-300 ">
                      Increase In Ad ROI
                    </dt>
                    <dd className="order-first text-2xl font-medium text-neutral-200 md:text-5xl">
                      44%
                    </dd>
                  </div>
                  <div className="flex flex-col gap-y-1 border-l border-blue-500 pl-6  md:gap-y-3">
                    <dt className="text-sm leading-tight tracking-tight text-neutral-300 ">
                      Increase In Speed
                    </dt>
                    <dd className="order-first text-2xl font-medium text-neutral-200 md:text-5xl">
                      55%
                    </dd>
                  </div>
                  <div className="flex flex-col gap-y-1 border-l border-blue-500 pl-6  md:gap-y-3">
                    <dt className="text-sm leading-tight tracking-tight text-neutral-300 ">
                      Reduction in Bounce Rate
                    </dt>
                    <dd className="order-first text-2xl font-medium text-neutral-200 md:text-5xl">
                      21%
                    </dd>
                  </div>
                </dl>
                <a href="/contact">
                  <button className="relative rounded-full text-center transition-all duration-500 transform overflow-hidden z-40 w-full px-6 py-3 bg-blue-500 text-neutral-950 border border-blue-500 button hover:text-neutral-50 group mt-6 text-lg uppercase lg:mt-12">
                    <div className="group relative z-10 w-full">
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
            <div className="items-center justify-center flex order-first">
              <Image
                src="/img/clean-screens.webp"
                loading="lazy"
                alt="Product screenshot"
                className="w-[50rem] "
                width={1932}
                height={1305}
                decoding="async"
              />
            </div>
          </div>
        </div>

        <div className="w-[100vw] flex justify-center items-center">
          <div className="grid gap-x-8 grid-cols-2">
            <div className="items-center justify-center flex flex-col">
              <div className="flex flex-col lg:max-w-lg">
                <h2 className="text-md  mt-2 leading-tight tracking-tight text-neutral-300 md:text-xl">
                  GoodMix
                </h2>
                <h3 className="mt-2 font-melodrama text-2xl tracking-tight text-white sm:text-6xl">
                  <span className="bg-gradient-to-b from-neutral-50 from-60% to-neutral-400 bg-clip-text font-medium text-transparent lg:to-neutral-600">
                    Increased Revenue By 54% in a week.
                  </span>
                </h3>
                <p className="mt-6 text-sm leading-tight tracking-tight text-neutral-300 md:text-lg">
                  Within a week of launching the new landing pages, Goodmix saw
                  a 54% increase in conversions and a 18% increase in AOV. As a
                  result, they were able to increase their ad spend and scale
                  their business rapidly.
                </p>
                <dl className="mt-16 grid max-w-xl grid-cols-2 gap-8 sm:mt-20 sm:grid-cols-2 xl:mt-16">
                  <div className="flex flex-col gap-y-1 border-l border-blue-500 pl-6  md:gap-y-3">
                    <dt className="text-sm leading-tight tracking-tight text-neutral-300 ">
                      Increase In Conversion Rate
                    </dt>
                    <dd className="order-first text-2xl font-medium text-neutral-200 md:text-5xl">
                      54%
                    </dd>
                  </div>
                  <div className="flex flex-col gap-y-1 border-l border-blue-500 pl-6  md:gap-y-3">
                    <dt className="text-sm leading-tight tracking-tight text-neutral-300 ">
                      Increase In Ad ROI
                    </dt>
                    <dd className="order-first text-2xl font-medium text-neutral-200 md:text-5xl">
                      61%
                    </dd>
                  </div>
                  <div className="flex flex-col gap-y-1 border-l border-blue-500 pl-6  md:gap-y-3">
                    <dt className="text-sm leading-tight tracking-tight text-neutral-300 ">
                      Increase In Speed
                    </dt>
                    <dd className="order-first text-2xl font-medium text-neutral-200 md:text-5xl">
                      80%
                    </dd>
                  </div>
                  <div className="flex flex-col gap-y-1 border-l border-blue-500 pl-6  md:gap-y-3">
                    <dt className="text-sm leading-tight tracking-tight text-neutral-300 ">
                      Reduction in Bounce Rate
                    </dt>
                    <dd className="order-first text-2xl font-medium text-neutral-200 md:text-5xl">
                      38%
                    </dd>
                  </div>
                </dl>
                <a href="/contact">
                  <button className="relative rounded-full text-center transition-all duration-500 transform overflow-hidden z-40   w-full px-6 py-3 text-base bg-blue-500 text-neutral-950 border border-blue-500 button hover:text-neutral-50 group mt-6 text-lg uppercase lg:mt-12">
                    <div className="group relative z-10 w-full">
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
            <div className="items-center justify-center flex order-first">
              <Image
                src="/img/goodmix.webp"
                loading="lazy"
                alt="Product screenshot"
                className="w-[50rem]"
                width={1434}
                height={1447}
                decoding="async"
              />
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default HorizontalScrolling;
