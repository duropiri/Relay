import React from "react";

const Hero = () => {
  return (
    <>
      <section class="relative mx-auto overflow-x-clip px-8 sm:px-16 md:px-24 lg:px-32">
        <div class="mb-6 mt-12 flex flex-col items-center text-center lg:mb-24 lg:mt-48 lg:grid lg:grid-cols-3">
          <div class="col-span-2 lg:mt-6">
            <div class="-z-10 max-w-4xl text-center font-melodrama text-3xl sm:text-5xl lg:text-start lg:text-7xl">
              <h1
                class="bg-gradient-to-br from-neutral-100 from-55% to-neutral-500 bg-clip-text font-medium tracking-tight text-transparent lg:min-h-[20rem] lg:to-neutral-600"
                data-speed="0.5"
              >
                Get <span class="text-purple-500">1.5x</span> More Out Of Your
                Ads, with the #1 High Performance{" "}
                <span class="text-purple-500">Marketing Funnels</span>.
              </h1>
            </div>
          </div>
          <div class="col-span-1 flex flex-col items-start justify-between gap-y-8 py-12 text-start lg:h-full">
            <p
              class="text-center text-base leading-tight text-neutral-300 lg:text-start"
              data-speed="0.7"
            >
              Sweeny Studio is a modern development studio specialising in high
              converting marketing funnels. We design, develop and deploy high
              performance, lightning-fast landing pages that will sky-rocket
              your conversion rate.
            </p>
            <div
              class="block w-full justify-center md:flex md:flex-row lg:justify-start"
              data-speed="0.8"
            >
              <a href="/contact">
                <button class="relative rounded-full text-center transition-all duration-500 transform overflow-hidden z-40   w-full px-8 py-6 text-base bg-purple-500 text-neutral-950 border border-purple-500 button hover:text-neutral-50 group text-xl uppercase md:text-2xl">
                  <div class="group relative z-10 w-full">
                    Let's Chat
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
        </div>
        <div
          class="absolute left-1/2 top-1/2 -z-10 w-full -translate-x-1/2 -translate-y-1/2 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] lg:w-max"
          data-speed="0.6"
        >
          <img
            src="/svg/hero-circle.svg"
            alt="circle background "
            loading="eager"
            class="h-auto w-[24rem] animate-spinSlow lg:w-[38rem]"
            width="516"
            height="516"
            decoding="async"
          />
        </div>
      </section>
      <div class="mx-auto max-w-7xl px-6 lg:px-8">
        <dl
          class="relative z-40 mt-6 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-neutral-600 bg-neutral-600 text-center shadow-2xl shadow-purple-500/50 lg:grid-cols-4"
          data-speed="1.05"
        >
          <div class="flex flex-col items-center  justify-center bg-neutral-900 px-2 py-6">
            <dt class="mt-1 text-sm font-normal leading-tight tracking-tight text-neutral-300">
              Average Conversion Rate Boost{" "}
            </dt>
            <dd class="order-first font-melodrama text-5xl font-semibold tracking-tight text-white lg:text-5xl">
              22%{" "}
            </dd>
          </div>
          <div class="flex flex-col items-center  justify-center bg-neutral-900 px-2 py-6">
            <dt class="mt-1 text-sm font-normal leading-tight tracking-tight text-neutral-300">
              More Time Spent on Page{" "}
            </dt>
            <dd class="order-first font-melodrama text-5xl font-semibold tracking-tight text-white lg:text-5xl">
              60%{" "}
            </dd>
          </div>
          <div class="flex flex-col items-center  justify-center bg-neutral-900 px-2 py-6">
            <dt class="mt-1 text-sm font-normal leading-tight tracking-tight text-neutral-300">
              Faster Than Typical Websites{" "}
            </dt>
            <dd class="order-first font-melodrama text-5xl font-semibold tracking-tight text-white lg:text-5xl">
              10x{" "}
            </dd>
          </div>
          <div class="flex flex-col items-center  justify-center bg-neutral-900 px-2 py-6">
            <dt class="mt-1 text-sm font-normal leading-tight tracking-tight text-neutral-300">
              Average Ad ROI Increase{" "}
            </dt>
            <dd class="order-first font-melodrama text-5xl font-semibold tracking-tight text-white lg:text-5xl">
              39%{" "}
            </dd>
          </div>
        </dl>
      </div>
    </>
  );
};

export default Hero;
