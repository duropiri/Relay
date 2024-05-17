"use client";
import React from "react";

const PricingSection = () => {
  return (
    <section className="py-12" id="pricing">
      <div className="mx-auto max-w-7xl px-5">
        <h2 className="mt-2 font-melodrama text-3xl font-medium tracking-tight text-white sm:text-6xl">
          <span className="bg-gradient-to-b from-neutral-50 from-60% to-neutral-400 bg-clip-text text-transparent lg:to-neutral-600">
            Simple Pricing For All Brands
          </span>
        </h2>
        <p className="text-md mt-6 font-light text-neutral-300 md:text-lg">
          Discover the perfect package for your brand from our trio of
          meticulously crafted options. Unsure which one aligns with your
          vision? Schedule a discovery call, and let us guide you towards your
          ideal match, setting the stage for your brand's next big leap.
        </p>
        <div className="isolate mx-auto mt-10 grid grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          <div className="ring-1 ring-white/10 bg-neutral-950 rounded-3xl p-8 xl:p-10">
            <div className="flex items-center justify-between gap-x-4">
              <h3
                id="x1-lp"
                className="text-lg md:text-2xl font-semibold leading-8 text-white"
              >
                x1 High Converting Landing Page
              </h3>
            </div>
            <p className="mt-4 text-sm leading-6 text-neutral-300">
              For small brands starting out, spending up to $100k/month on ads.
            </p>
            <p className="mt-6 flex items-baseline gap-x-1">
              <span className="text-4xl font-bold tracking-tight text-white">
                1995
              </span>
              <span className="text-lg -ml-0 font-semibold tracking-tight text-neutral-100 uppercase">
                usd
              </span>
            </p>
            <div className="mt-6">
              <a href="https://buy.stripe.com/3cs6oA10H1EJ1X24gm">
                <button className="relative rounded-full text-center transition-all duration-500 transform overflow-hidden   w-full px-5 py-2.5 border border-blue-500 text-neutral-50 bg-neutral-950 button group text-lg uppercase">
                  <div className="group relative z-10 w-full">
                    Buy Now
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="32"
                      height="32"
                      fill="currentColor"
                      viewBox="0 0 256 256"
                      className="ml-2 inline-block transition-all duration-200 group-hover:translate-x-2 group-hover:text-neutral-50"
                    >
                      <path d="M200,64V168a8,8,0,0,1-16,0V83.31L69.66,197.66a8,8,0,0,1-11.32-11.32L172.69,72H88a8,8,0,0,1,0-16H192A8,8,0,0,1,200,64Z"></path>
                    </svg>
                  </div>
                </button>
              </a>
            </div>
            <p className="flex items-baseline justify-center gap-x-2 mt-3">
              <a href="https://calendly.com/relaydigitalyyc/discovery">
                <span className="text-sm font-semibold leading-6 tracking-wide text-neutral-400 hover:text-neutral-300 underline duration-300">
                  Book a call
                </span>
              </a>
            </p>
            <ul
              role="list"
              className="mt-8 space-y-3 text-sm leading-6 text-neutral-300 xl:mt-10"
            >
              <p className="font-bold">Great for brands who:</p>
              <li className="flex gap-x-3">
                <svg
                  width="1em"
                  height="1em"
                  viewBox="0 0 24 24"
                  className="h-6 w-5 flex-none text-white"
                  aria-hidden="true"
                  data-icon="tabler:point-filled"
                >
                  <symbol id="ai:tabler:point-filled">
                    <path
                      fill="currentColor"
                      d="M12 7a5 5 0 1 1-4.995 5.217L7 12l.005-.217A5 5 0 0 1 12 7"
                    ></path>
                  </symbol>
                </svg>
                Spend up to $100k /month on ads
              </li>
              <li className="flex gap-x-3">
                <svg
                  width="1em"
                  height="1em"
                  viewBox="0 0 24 24"
                  className="h-6 w-5 flex-none text-white"
                  aria-hidden="true"
                  data-icon="tabler:point-filled"
                ></svg>
                Are looking to test the benefits of a LP
              </li>
              <li className="flex gap-x-3">
                <svg
                  width="1em"
                  height="1em"
                  viewBox="0 0 24 24"
                  className="h-6 w-5 flex-none text-white"
                  aria-hidden="true"
                  data-icon="tabler:point-filled"
                ></svg>
                Beginning customer acquisition
              </li>
            </ul>
            <ul
              role="list"
              className="mt-8 space-y-3 text-sm leading-6 text-neutral-300 xl:mt-10"
            >
              <p className="font-bold">Includes:</p>
              <li className="flex gap-x-3">
                <svg
                  width="1em"
                  height="1em"
                  viewBox="0 0 24 24"
                  className="h-6 w-5 flex-none text-white"
                  aria-hidden="true"
                  data-icon="tabler:check"
                >
                  <symbol id="ai:tabler:check">
                    <path
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m5 12l5 5L20 7"
                    ></path>
                  </symbol>
                </svg>
                x1 Landing Page Total
              </li>
              <li className="flex gap-x-3">
                <svg
                  width="1em"
                  height="1em"
                  viewBox="0 0 24 24"
                  className="h-6 w-5 flex-none text-white"
                  aria-hidden="true"
                  data-icon="tabler:check"
                ></svg>
                15 Business-day Turnaround
              </li>
              <li className="flex gap-x-3">
                <svg
                  width="1em"
                  height="1em"
                  viewBox="0 0 24 24"
                  className="h-6 w-5 flex-none text-white"
                  aria-hidden="true"
                  data-icon="tabler:check"
                ></svg>
                x2 Variations / Revisions
              </li>
              <li className="flex gap-x-3">
                <svg
                  width="1em"
                  height="1em"
                  viewBox="0 0 24 24"
                  className="h-6 w-5 flex-none text-white"
                  aria-hidden="true"
                  data-icon="tabler:check"
                ></svg>
                Analytics Integration
              </li>
            </ul>
          </div>
          <div className="bg-neutral-900 ring-2 ring-blue-500 rounded-3xl p-8 xl:p-10">
            <div className="flex items-center justify-between gap-x-4">
              <h3
                id="x3-lp"
                className="text-lg md:text-2xl font-semibold leading-8 text-white"
              >
                x3 High Converting Landing Pages
              </h3>
              <p className="text-center rounded-full bg-blue-500 px-2.5 py-1 text-xs font-semibold leading-5 text-black">
                Most popular
              </p>
            </div>
            <p className="mt-4 text-sm leading-6 text-neutral-300">
              For growing businesses, spending $100k to $250k/month on ads.
            </p>
            <p className="mt-6 flex items-baseline gap-x-1">
              <span
                className="text-4xl font-bold tracking-tight text-white tooltip tooltip-top"
                data-tip="17% off"
              >
                4995
              </span>
              <span className="text-lg -ml-0 font-semibold tracking-tight text-neutral-100 uppercase">
                usd
              </span>
            </p>
            <div className="mt-6">
              <a href="https://buy.stripe.com/6oEfZabFl0AFbxCeUY">
                <button className="relative rounded-full text-center transition-all duration-500 transform overflow-hidden   w-full px-5 py-2.5 bg-blue-500 text-neutral-950 border border-blue-500 button hover:text-neutral-50 group uppercase leading-tight tracking-tight md:text-lg">
                  <div className="group relative z-10 w-full">
                    Buy Now
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
            <p className="flex items-baseline justify-center gap-x-2 mt-3">
              <a href="https://calendly.com/relaydigitalyyc/discovery">
                <span className="text-sm font-semibold leading-6 tracking-wide text-neutral-400 hover:text-neutral-300 underline duration-300">
                  Book a call
                </span>
              </a>
            </p>
            <ul
              role="list"
              className="mt-8 space-y-3 text-sm leading-6 text-neutral-300 xl:mt-10"
            >
              <p className="font-bold">Great for brands who:</p>
              <li className="flex gap-x-3">
                <svg
                  width="1em"
                  height="1em"
                  viewBox="0 0 24 24"
                  className="h-6 w-5 flex-none text-white"
                  aria-hidden="true"
                  data-icon="tabler:point-filled"
                ></svg>
                Spend up to $100k - $250k /month on ads
              </li>
              <li className="flex gap-x-3">
                <svg
                  width="1em"
                  height="1em"
                  viewBox="0 0 24 24"
                  className="h-6 w-5 flex-none text-white"
                  aria-hidden="true"
                  data-icon="tabler:point-filled"
                ></svg>
                Looking to drive heavy customer acquisition
              </li>
              <li className="flex gap-x-3">
                <svg
                  width="1em"
                  height="1em"
                  viewBox="0 0 24 24"
                  className="h-6 w-5 flex-none text-white"
                  aria-hidden="true"
                  data-icon="tabler:point-filled"
                ></svg>
                Looking to get more out of sale periods
              </li>
            </ul>
            <ul
              role="list"
              className="mt-8 space-y-3 text-sm leading-6 text-neutral-300 xl:mt-10"
            >
              <p className="font-bold">Includes:</p>
              <li className="flex gap-x-3">
                <svg
                  width="1em"
                  height="1em"
                  viewBox="0 0 24 24"
                  className="h-6 w-5 flex-none text-white"
                  aria-hidden="true"
                  data-icon="tabler:check"
                ></svg>
                x3 Landing Page Total
              </li>
              <li className="flex gap-x-3">
                <svg
                  width="1em"
                  height="1em"
                  viewBox="0 0 24 24"
                  className="h-6 w-5 flex-none text-white"
                  aria-hidden="true"
                  data-icon="tabler:check"
                ></svg>
                10 Business-day Turnaround
              </li>
              <li className="flex gap-x-3">
                <svg
                  width="1em"
                  height="1em"
                  viewBox="0 0 24 24"
                  className="h-6 w-5 flex-none text-white"
                  aria-hidden="true"
                  data-icon="tabler:check"
                ></svg>
                x6 Variations
              </li>
              <li className="flex gap-x-3">
                <svg
                  width="1em"
                  height="1em"
                  viewBox="0 0 24 24"
                  className="h-6 w-5 flex-none text-white"
                  aria-hidden="true"
                  data-icon="tabler:check"
                ></svg>
                Analytics Integration
              </li>
              <li className="flex gap-x-3">
                <svg
                  width="1em"
                  height="1em"
                  viewBox="0 0 24 24"
                  className="h-6 w-5 flex-none text-white"
                  aria-hidden="true"
                  data-icon="tabler:check"
                ></svg>
                Dedicated Account Manager
              </li>
            </ul>
          </div>
          <div className="ring-1 ring-white/10 bg-neutral-950 rounded-3xl p-8 xl:p-10">
            <div className="flex items-center justify-between gap-x-4">
              <h3
                id="x5-lp"
                className="text-lg md:text-2xl font-semibold leading-8 text-white"
              >
                x5 High Converting Landing Pages
              </h3>
            </div>
            <p className="mt-4 text-sm leading-6 text-neutral-300">
              For large companies, spending over $250k/month on ads.
            </p>
            <p className="mt-6 flex items-baseline gap-x-1">
              <span
                className="text-4xl font-bold tracking-tight text-white tooltip tooltip-top"
                data-tip="20% off"
              >
                7995
              </span>
              <span className="text-lg -ml-0 font-semibold tracking-tight text-neutral-100 uppercase">
                usd
              </span>
            </p>
            <div className="mt-6">
              <a href="https://buy.stripe.com/eVa8wI6l1bfjdFKeUZ">
                <button className="relative rounded-full text-center transition-all duration-500 transform overflow-hidden   w-full px-5 py-2.5 border border-blue-500 text-neutral-50 bg-neutral-950 button group text-lg uppercase">
                  <div className="group relative z-10 w-full">
                    Buy Now
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="32"
                      height="32"
                      fill="currentColor"
                      viewBox="0 0 256 256"
                      className="ml-2 inline-block transition-all duration-200 group-hover:translate-x-2 group-hover:text-neutral-50"
                    >
                      <path d="M200,64V168a8,8,0,0,1-16,0V83.31L69.66,197.66a8,8,0,0,1-11.32-11.32L172.69,72H88a8,8,0,0,1,0-16H192A8,8,0,0,1,200,64Z"></path>
                    </svg>
                  </div>
                </button>
              </a>
            </div>
            <p className="flex items-baseline justify-center gap-x-2 mt-3">
              <a href="https://calendly.com/relaydigitalyyc/discovery">
                <span className="text-sm font-semibold leading-6 tracking-wide text-neutral-400 hover:text-neutral-300 underline duration-300">
                  Book a call
                </span>
              </a>
            </p>
            <ul
              role="list"
              className="mt-8 space-y-3 text-sm leading-6 text-neutral-300 xl:mt-10"
            >
              <p className="font-bold">Great for brands who:</p>
              <li className="flex gap-x-3">
                <svg
                  width="1em"
                  height="1em"
                  viewBox="0 0 24 24"
                  className="h-6 w-5 flex-none text-white"
                  aria-hidden="true"
                  data-icon="tabler:point-filled"
                ></svg>
                Spend up over $250k /month on ads
              </li>
              <li className="flex gap-x-3">
                <svg
                  width="1em"
                  height="1em"
                  viewBox="0 0 24 24"
                  className="h-6 w-5 flex-none text-white"
                  aria-hidden="true"
                  data-icon="tabler:point-filled"
                ></svg>
                Are looking to maximize sales across multiple paid channels
                (meta, TikTok, etc).
              </li>
              <li className="flex gap-x-3">
                <svg
                  width="1em"
                  height="1em"
                  viewBox="0 0 24 24"
                  className="h-6 w-5 flex-none text-white"
                  aria-hidden="true"
                  data-icon="tabler:point-filled"
                ></svg>
                Are looking to expand their customer demographic reach.
              </li>
            </ul>
            <ul
              role="list"
              className="mt-8 space-y-3 text-sm leading-6 text-neutral-300 xl:mt-10"
            >
              <p className="font-bold">Includes:</p>
              <li className="flex gap-x-3">
                <svg
                  width="1em"
                  height="1em"
                  viewBox="0 0 24 24"
                  className="h-6 w-5 flex-none text-white"
                  aria-hidden="true"
                  data-icon="tabler:check"
                ></svg>
                x5 Landing Page Total
              </li>
              <li className="flex gap-x-3">
                <svg
                  width="1em"
                  height="1em"
                  viewBox="0 0 24 24"
                  className="h-6 w-5 flex-none text-white"
                  aria-hidden="true"
                  data-icon="tabler:check"
                ></svg>
                10 Business-day Turnaround
              </li>
              <li className="flex gap-x-3">
                <svg
                  width="1em"
                  height="1em"
                  viewBox="0 0 24 24"
                  className="h-6 w-5 flex-none text-white"
                  aria-hidden="true"
                  data-icon="tabler:check"
                ></svg>
                x10 Variations
              </li>
              <li className="flex gap-x-3">
                <svg
                  width="1em"
                  height="1em"
                  viewBox="0 0 24 24"
                  className="h-6 w-5 flex-none text-white"
                  aria-hidden="true"
                  data-icon="tabler:check"
                ></svg>
                Analytics Integration
              </li>
              <li className="flex gap-x-3">
                <svg
                  width="1em"
                  height="1em"
                  viewBox="0 0 24 24"
                  className="h-6 w-5 flex-none text-white"
                  aria-hidden="true"
                  data-icon="tabler:check"
                ></svg>
                Dedicated Account Manager
              </li>
            </ul>
          </div>
        </div>
        <p className="flex justify-center text-md mt-6 font-light text-neutral-300 md:text-lg">
          <a href="/pricing#hosting">
            <span className="text-sm text-center font-semibold leading-6 tracking-wide text-neutral-400 hover:text-neutral-300 underline duration-300">
              Discover our hosting solutions
            </span>
          </a>
        </p>
      </div>
    </section>
  );
};

export default PricingSection;
