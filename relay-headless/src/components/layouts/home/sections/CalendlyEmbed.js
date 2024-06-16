"use client";
import Script from "next/script";
import { sendGAEvent } from "@next/third-parties/google";

const CalendlyEmbed = () => {
  return (
    <div className="relative mx-auto w-full max-w-7xl px-5 z-10">
      <div className="relative pt-20 lg:pt-24">
        <h2 className="mt-2 text-3xl font-medium tracking-tight text-white sm:text-6xl text-center">
          <span className="bg-gradient-to-b from-neutral-50 from-60% to-neutral-400 bg-clip-text text-transparent lg:to-neutral-600">
            Free{" "}
            <span className="bg-gradient-to-b from-blue-500 from-60% to-blue-400 bg-clip-text text-transparent lg:to-blue-600 underline">
              Consultation
            </span>
          </span>
        </h2>
        <div className="flex flex-col md:flex-row items-start justify-start w-full h-full mt-12 gap-y-8">
          <div className="relative flex items-center justify-center w-full md:w-1/2 h-full md:p-6 overflow-hidden">
            <div className="w-full h-[900px] rounded-3xl overflow-hidden bg-neutral-900 ring-2 ring-blue-500">
              <div
                className="calendly-inline-widget w-full h-full calendly"
                onClick={() =>
                  sendGAEvent({ event: "buttonClicked", value: "calendly" })
                }
                data-url="https://calendly.com/relaydigitalyyc/discovery"
              ></div>
            </div>
            <Script
              type="text/javascript"
              src="https://assets.calendly.com/assets/external/widget.js"
              async
              strategy="afterInteractive"
            ></Script>
          </div>
          <div className="relative flex items-center justify-center w-full md:w-1/2 h-full md:p-6 overflow-hidden">
            <div className="ring-1 ring-white/10 bg-neutral-950 rounded-3xl p-8 xl:p-10">
              <div className="flex items-center justify-between gap-x-4">
                <h3
                  id="x5-lp"
                  className="text-lg md:text-xl font-semibold leading-8 text-white uppercase"
                >
                  SCHEDULE YOUR CALL WITH RELAY DIGITAL
                </h3>
              </div>
              <h2 className="mt-2 text-3xl font-medium tracking-tight text-white sm:text-6xl text-start">
                Free Consultation
              </h2>
              <p className="mt-4 text-sm leading-6 text-neutral-300">
                By the end of this audit call, you will have a clear
                understanding of the next steps you can take for your business
                to start generating consistent and reliable results online with
                Funnels & Paid Advertising.
                <br />
                <br />
                Find a time on Relay Digital&apos;s calendar to schedule your
                call today, and we look forward to speaking to you soon!
              </p>
              <div className="mt-6">
                <a
                  onClick={() =>
                    sendGAEvent({ event: "buttonClicked", value: "calendly" })
                  }
                  href="https://calendly.com/relaydigitalyyc/discovery"
                >
                  <button className="relative rounded-full text-center transition-all duration-500 transform overflow-hidden   w-full px-5 py-2.5 border border-blue-500 text-neutral-50 bg-neutral-950 button group text-lg uppercase">
                    <div className="calendly group relative z-10 w-full">
                      Book a call
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
              <ul
                role="list"
                className="mt-8 space-y-3 text-sm leading-6 text-neutral-300 xl:mt-10"
              >
                <p className="font-bold capitalize">
                  This Audit Call is Perfect For:
                </p>
                <li className="flex gap-x-3">
                  <svg
                    width="1em"
                    height="1em"
                    viewBox="0 0 24 24"
                    className="h-6 w-5 flex-none text-white"
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
                  Businesses looking to convert their current website into a
                  high quality & streamlined funnel format.
                </li>
                <li className="flex gap-x-3">
                  <svg
                    width="1em"
                    height="1em"
                    viewBox="0 0 24 24"
                    className="h-6 w-5 flex-none text-white"
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
                  Businesses looking to take their offline business online.
                </li>
                <li className="flex gap-x-3">
                  <svg
                    width="1em"
                    height="1em"
                    viewBox="0 0 24 24"
                    className="h-6 w-5 flex-none text-white"
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
                  Businesses looking to understand their increased revenue
                  potential with funnels & conversion rate optimization.
                </li>
                <li className="flex gap-x-3">
                  <svg
                    width="1em"
                    height="1em"
                    viewBox="0 0 24 24"
                    className="h-6 w-5 flex-none text-white"
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
                  Businesses looking to maximize their conversion rates &
                  average order value.
                </li>
                <li className="flex gap-x-3">
                  <svg
                    width="1em"
                    height="1em"
                    viewBox="0 0 24 24"
                    className="h-6 w-5 flex-none text-white"
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
                  Businesses looking for a reliable agency that can make their
                  company a priority.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CalendlyEmbed;
