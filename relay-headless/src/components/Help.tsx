import React from "react";

const Help = () => {
  return (
    <section className="relative py-12" id="how-it-works">
      <div className="mx-auto max-w-7xl px-5">
        {/* Top */}
        <div className="flex flex-col items-center justify-center">
          <h2 className="mt-2 text-3xl font-medium tracking-tight text-white sm:text-6xl text-center">
            <span className="bg-gradient-to-b from-neutral-50 from-60% to-neutral-400 bg-clip-text text-transparent lg:to-neutral-600">
              How our funnels help{" "}
              <span className="bg-gradient-to-b from-blue-500 from-60% to-blue-400 bg-clip-text text-transparent lg:to-blue-600 underline italic">
                your brand dominate
              </span>
            </span>
          </h2>
          <div className="bg-neutral-900 ring-2 ring-blue-500 rounded-3xl p-2 xl:p-3 mt-12 overflow-hidden">
            <div className="z-5 justify-center items-center px-4 flex relative gap-[0.67rem]">
              <div className="relative">
                <img
                  src="https://assets-global.website-files.com/66149821b79906211250b327/66166dce3b6f36cee13ab93d_hands.png"
                  loading="lazy"
                  width="20"
                  alt="Handshake"
                />
                <div className="z-1 bg-[#e9fd66] rounded-full w-[1rem] h-[1rem] mt-auto mb-auto absolute top-0 bottom-0 blur-xl"></div>
              </div>
              <p className="text-md font-light text-neutral-300 md:text-lg">
                Done-for-you by experts
              </p>
            </div>
          </div>
          <p className="text-md mt-12 font-light text-neutral-400 md:text-lg text-center">
            After working with hundreds of ecommerce brands and consulting them
            on their post-click experience, we&apos;ve identified & mastered the
            key needle-moovers that turn average pages into conversion machines.
          </p>
        </div>

        {/* Boxes */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full p-2 mx-auto mt-16 max-w-2xl rounded-3xl border border-neutral-700 shadow-xl shadow-blue-500/20 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:grid-rows-2">
          <div className="w-full p-1 flex flex-col bg-neutral-950 rounded-xl border-neutral-700 border">
            <div className="flex flex-col items-start justify-start h-full p-8 gap-4">
              <img
                src="https://assets-global.website-files.com/66149821b79906211250b327/66166f88e4f17dd77e526a46_Group%201272633434.png"
                loading="lazy"
                width="82"
                alt=""
                className="help-box-icon"
              />
              <h3 className="text-lg md:text-2xl font-semibold leading-8 text-white">
                Copy that persuades
              </h3>
              <ul role="list" className="space-y-2 list-none">
                <li className="flex items-center gap-x-3">
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
                  <p className="text-normal text-cream">In-Depth Research</p>
                </li>
                <li className="flex items-center gap-x-3">
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
                  <p className="text-normal text-cream">Consumer Psychology</p>
                </li>
                <li className="flex items-center gap-x-3">
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
                  <p className="text-normal text-cream">
                    Direct Response Principles
                  </p>
                </li>
              </ul>
            </div>
          </div>
          <div className="w-full p-1 flex flex-col bg-neutral-950 rounded-xl border-neutral-700 border">
            <div className="flex flex-col items-start justify-start h-full p-8 gap-4">
              <img
                src="https://assets-global.website-files.com/66149821b79906211250b327/66166f88e05af9939df0174f_Group%201272633435.png"
                loading="lazy"
                width="82"
                alt=""
                className="help-box-icon"
              />
              <h3 className="text-lg md:text-2xl font-semibold leading-8 text-white">
                Design that converts
              </h3>
              <ul role="list" className="space-y-2 list-none">
                <li className="flex items-center gap-x-3">
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
                  <p className="text-normal text-cream">On-Brand</p>
                </li>
                <li className="flex items-center gap-x-3">
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
                  <p className="text-normal text-cream">CRO Principles</p>
                </li>
                <li className="flex items-center gap-x-3">
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
                  <p className="text-normal text-cream">Mobile Optimized</p>
                </li>
              </ul>
            </div>
          </div>
          <div className="w-full p-1 flex flex-col bg-neutral-950 rounded-xl border-neutral-700 border">
            <div className="flex flex-col items-start justify-start h-full p-8 gap-4">
              <img
                src="https://assets-global.website-files.com/66149821b79906211250b327/66166f87f27ac4336b9f2a90_Group%201272633437.png"
                loading="lazy"
                width="82"
                alt=""
                className="help-box-icon"
              />
              <h3 className="text-lg md:text-2xl font-semibold leading-8 text-white">
                More profits
              </h3>
              <ul role="list" className="space-y-2 list-none">
                <li className="flex items-center gap-x-3">
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
                  <p className="text-normal text-cream">Offer Building</p>
                </li>
                <li className="flex items-center gap-x-3">
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
                  <p className="text-normal text-cream">
                    Bundles, AOV Upsell Strategy
                  </p>
                </li>
              </ul>
            </div>
          </div>
          <div className="w-full p-1 flex flex-col bg-neutral-950 rounded-xl border-neutral-700 border">
            <div className="flex flex-col items-start justify-start h-full p-8 gap-4">
              <img
                src="https://assets-global.website-files.com/66149821b79906211250b327/66166f88bb103231a006587c_Group%201272633434-1.png"
                loading="lazy"
                width="82"
                alt=""
                className="help-box-icon"
              />
              <h3 className="text-lg md:text-2xl font-semibold leading-8 text-white">
                Seamless Development
              </h3>
              <ul role="list" className="space-y-2 list-none">
                <li className="flex items-center gap-x-3">
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
                  <p className="text-normal text-cream">
                    Easy To Edit & Duplicate
                  </p>
                </li>
                <li className="flex items-center gap-x-3">
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
                  <p className="text-normal text-cream">Fast Loading Speed</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Help;
