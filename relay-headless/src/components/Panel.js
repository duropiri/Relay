"use client";
import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";

const Panel = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const debounce = (func, delay) => {
      let inDebounce;
      return function () {
        const context = this;
        const args = arguments;
        clearTimeout(inDebounce);
        inDebounce = setTimeout(() => func.apply(context, args), delay);
      };
    };

    const updateAnimation = () => {
      // Ensure sections are re-queried to include any dynamic content changes
      const sections = gsap.utils.toArray(".panel");
      const totalWidth = sections.length * window.innerWidth;

      const pinSpacer = document.querySelector(".pin-spacer");
      if (pinSpacer) {
        pinSpacer.style.height = `${totalWidth}px`;
        // Set bottom margin to 20% of the pinSpacer's height
      const bottomMargin = totalWidth * 0.2;
      // pinSpacer.style.marginBottom = `${bottomMargin}px`;
      }

      // Check if the pin-spacer height is set correctly after content has loaded or layout has changed
      const checkSpacerHeight = () => {
        const actualWidth =
          (document.querySelector(".panel-grid").offsetWidth) * 2;
        if (pinSpacer && parseInt(pinSpacer.style.height, 10) !== actualWidth) {
          console.error(
            "Spacer height mismatch:",
            pinSpacer.style.height,
            "vs",
            actualWidth
          );
          pinSpacer.style.height = `${actualWidth}px`;
          ScrollTrigger.refresh();
        }
      };

      // Recreate the ScrollTrigger instance for the horizontal scroll
      const horizontalScroll = gsap.to(".panel-container", {
        x: () => `-${totalWidth - window.innerWidth}px`,
        ease: "none",
        scrollTrigger: {
          trigger: pinSpacer,
          pin: ".panel-container",
          start: "top top",
          end: `+=${totalWidth - window.innerWidth}`,
          scrub: 1,
          snap: 1 / (sections.length - 1),
          invalidateOnRefresh: true,
          markers: false,
        },
      });

      checkSpacerHeight(); // Call after setting up the ScrollTrigger

      return horizontalScroll;
    };

    const debouncedUpdateAnimation = debounce(updateAnimation, 150);

    // Immediate invocation
    const animationInstance = updateAnimation();

    window.addEventListener("resize", debouncedUpdateAnimation);
    window.addEventListener("orientationchange", debouncedUpdateAnimation);

    return () => {
      window.removeEventListener("resize", debouncedUpdateAnimation);
      window.removeEventListener("orientationchange", debouncedUpdateAnimation);
      animationInstance.kill();
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, []);

  return (
    <div class="pin-spacer">
      <div class="section h-lvh overscroll-none" id="casestudies">
        <div class="panel-container flex h-full w-[200%] flex-nowrap overscroll-none">
          <section class="panel relative flex w-full items-center justify-center overscroll-none">
            <div class="panel-grid py-2 md:py-12">
              <div class="mx-auto max-w-7xl px-6 lg:px-8">
                <div class="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
                  <div class="flex flex-col lg:ml-auto justify-center">
                    <div class="flex flex-col lg:max-w-lg">
                      <h2 class="text-md h- mt-2 leading-tight tracking-tight text-neutral-300 md:text-xl">
                        Clean Screens{" "}
                      </h2>
                      <h3 class="mt-2 font-melodrama text-2xl tracking-tight text-white sm:text-6xl">
                        <span class="bg-gradient-to-b from-neutral-50 from-60% to-neutral-400 bg-clip-text font-medium text-transparent lg:to-neutral-600">
                          Increased Conversion Rate By 39% Overnight{" "}
                        </span>
                      </h3>
                      <p class="mt-6 text-sm leading-tight tracking-tight text-neutral-300 md:text-lg">
                        After just one day of launching the new landing page,
                        Clean Screens saw a 39% increase in conversion rate.
                        This was due to the new design being more user friendly
                        and having a more streamlined checkout process.{" "}
                      </p>
                      <dl class="mt-16 grid max-w-xl grid-cols-2 gap-8 sm:mt-20 sm:grid-cols-2 xl:mt-16">
                        <div class="flex flex-col gap-y-1 border-l border-purple-500 pl-6  md:gap-y-3">
                          <dt class="text-sm leading-tight tracking-tight text-neutral-300 ">
                            Increase In Conversion Rate{" "}
                          </dt>
                          <dd class="order-first text-2xl font-medium text-neutral-200 md:text-5xl">
                            39%{" "}
                          </dd>
                        </div>
                        <div class="flex flex-col gap-y-1 border-l border-purple-500 pl-6  md:gap-y-3">
                          <dt class="text-sm leading-tight tracking-tight text-neutral-300 ">
                            Increase In Ad ROI{" "}
                          </dt>
                          <dd class="order-first text-2xl font-medium text-neutral-200 md:text-5xl">
                            44%{" "}
                          </dd>
                        </div>
                        <div class="flex flex-col gap-y-1 border-l border-purple-500 pl-6  md:gap-y-3">
                          <dt class="text-sm leading-tight tracking-tight text-neutral-300 ">
                            Increase In Speed{" "}
                          </dt>
                          <dd class="order-first text-2xl font-medium text-neutral-200 md:text-5xl">
                            55%{" "}
                          </dd>
                        </div>
                        <div class="flex flex-col gap-y-1 border-l border-purple-500 pl-6  md:gap-y-3">
                          <dt class="text-sm leading-tight tracking-tight text-neutral-300 ">
                            Reduction in Bounce Rate{" "}
                          </dt>
                          <dd class="order-first text-2xl font-medium text-neutral-200 md:text-5xl">
                            21%{" "}
                          </dd>
                        </div>
                      </dl>
                      <a href="/contact">
                        <button class="relative rounded-full text-center transition-all duration-500 transform overflow-hidden z-40   w-full px-6 py-3 text-base bg-purple-500 text-neutral-950 border border-purple-500 button hover:text-neutral-50 group mt-6 text-lg uppercase lg:mt-12">
                          <div class="group relative z-10 w-full">
                            Get Started
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
                  </div>
                  <div class="hidden items-center justify-end md:flex lg:order-first">
                    <img
                      src="/img/clean-screens.webp"
                      loading="lazy"
                      alt="Product screenshot"
                      class="h-auto w-[14rem] max-w-none rounded-xl shadow-xl sm:w-[50rem] md:-ml-4 lg:-ml-0"
                      width="1932"
                      height="1305"
                      decoding="async"
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section class="panel relative flex w-full items-center justify-center overflow-hidden overscroll-none">
            <div class="panel-grid py-2 md:py-12">
              <div class="mx-auto max-w-7xl px-6 lg:px-8">
                <div class="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
                  <div class="flex flex-col lg:ml-auto justify-center">
                    <div class="flex flex-col lg:max-w-lg">
                      <h2 class="text-md h- mt-2 leading-tight tracking-tight text-neutral-300 md:text-xl">
                        GoodMix{" "}
                      </h2>
                      <h3 class="mt-2 font-melodrama text-2xl tracking-tight text-white sm:text-6xl">
                        <span class="bg-gradient-to-b from-neutral-50 from-60% to-neutral-400 bg-clip-text font-medium text-transparent lg:to-neutral-600">
                          Increased Revenue By 54% in a week.{" "}
                        </span>
                      </h3>
                      <p class="mt-6 text-sm leading-tight tracking-tight text-neutral-300 md:text-lg">
                        Within a week of launching the new landing pages,
                        Goodmix saw a 54% increase in conversions and a 18%
                        increase in AOV. As a result, they were able to increase
                        their ad spend and scale their business rapidly.{" "}
                      </p>
                      <dl class="mt-16 grid max-w-xl grid-cols-2 gap-8 sm:mt-20 sm:grid-cols-2 xl:mt-16">
                        <div class="flex flex-col gap-y-1 border-l border-purple-500 pl-6  md:gap-y-3">
                          <dt class="text-sm leading-tight tracking-tight text-neutral-300 ">
                            Increase In Conversion Rate{" "}
                          </dt>
                          <dd class="order-first text-2xl font-medium text-neutral-200 md:text-5xl">
                            54%{" "}
                          </dd>
                        </div>
                        <div class="flex flex-col gap-y-1 border-l border-purple-500 pl-6  md:gap-y-3">
                          <dt class="text-sm leading-tight tracking-tight text-neutral-300 ">
                            Increase In Ad ROI{" "}
                          </dt>
                          <dd class="order-first text-2xl font-medium text-neutral-200 md:text-5xl">
                            61%{" "}
                          </dd>
                        </div>
                        <div class="flex flex-col gap-y-1 border-l border-purple-500 pl-6  md:gap-y-3">
                          <dt class="text-sm leading-tight tracking-tight text-neutral-300 ">
                            Increase In Speed{" "}
                          </dt>
                          <dd class="order-first text-2xl font-medium text-neutral-200 md:text-5xl">
                            80%{" "}
                          </dd>
                        </div>
                        <div class="flex flex-col gap-y-1 border-l border-purple-500 pl-6  md:gap-y-3">
                          <dt class="text-sm leading-tight tracking-tight text-neutral-300 ">
                            Reduction in Bounce Rate{" "}
                          </dt>
                          <dd class="order-first text-2xl font-medium text-neutral-200 md:text-5xl">
                            38%{" "}
                          </dd>
                        </div>
                      </dl>
                      <a href="/contact">
                        <button class="relative rounded-full text-center transition-all duration-500 transform overflow-hidden z-40   w-full px-6 py-3 text-base bg-purple-500 text-neutral-950 border border-purple-500 button hover:text-neutral-50 group mt-6 text-lg uppercase lg:mt-12">
                          <div class="group relative z-10 w-full">
                            Get Started
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
                  </div>
                  <div class="hidden items-center justify-end md:flex lg:order-first">
                    <img
                      src="/img/goodmix.webp"
                      loading="lazy"
                      alt="Product screenshot"
                      class="h-auto w-[14rem] max-w-none rounded-xl shadow-xl sm:w-[50rem] md:-ml-4 lg:-ml-0"
                      width="1434"
                      height="1447"
                      decoding="async"
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Panel;
