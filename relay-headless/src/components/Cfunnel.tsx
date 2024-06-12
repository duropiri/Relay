import Image from "next/image";

function Cfunnel() {
  return (
    <section className="relative py-12" id="how-it-works">
      <div className="mx-auto max-w-7xl px-5">
        {/* Top */}
        <div className="flex flex-col items-center justify-center">
          <h2 className="mt-2 text-3xl font-medium tracking-tight text-white sm:text-6xl text-center">
            <span className="bg-gradient-to-b from-neutral-50 from-60% to-neutral-400 bg-clip-text text-transparent lg:to-neutral-600">
              The ecommerce battlefield{" "}
              <span className="bg-gradient-to-b from-blue-500 from-60% to-blue-400 bg-clip-text text-transparent lg:to-blue-600 underline">
                has changed
              </span>
            </span>
          </h2>
          <div className="bg-neutral-900 ring-2 ring-blue-500 rounded-3xl p-2 xl:p-3 mt-12 overflow-hidden">
            <div className="z-5 justify-center items-center px-4 flex relative gap-[0.67rem]">
              <div className="relative">
                <Image
                  src="https://assets-global.website-files.com/66149821b79906211250b327/6616655cae37311cff37aadf_diamond.png"
                  loading="lazy"
                  alt="Diamond"
                  width={20}
                  height={20}
                  decoding="async"
                />
                <div className="z-1 bg-[#e9fd66] rounded-full w-[1rem] h-[1rem] mt-auto mb-auto absolute top-0 bottom-0 blur-xl"></div>
              </div>
              <p className="text-md font-light text-neutral-300 md:text-lg">
                But there&apos;s a secret weapon
              </p>
            </div>
          </div>
        </div>
        {/* Middle-Top */}
        <div className="flex flex-col gap-8 w-full mt-12 items-center justify-center">
          <div className="flex flex-col bg-neutral-950 rounded-xl p-4 border-neutral-700 border relative min-w-80 w-[50vw] shadow-xl shadow-red-900/20 transition duration-200 hover:shadow-3xl hover:shadow-red-900/50">
            <div className="flex flex-row items-start justify-center px-18 overflow-hidden">
              <Image
                src="https://assets-global.website-files.com/66149821b79906211250b327/661667f05307acc0fcadaf31_list-item-ellipse.svg"
                loading="lazy"
                alt=""
                className="m-auto absolute top-0 bottom-0 left-0 right-0 blur-xl w-full opacity-10 pointer-events-none"
                width={453}
                height={22}
                decoding="async"
              />
              <p className="text-md font-light text-neutral-300 md:text-lg">
                Increasing ad costs
              </p>
            </div>
          </div>
          <div className="flex flex-col bg-neutral-950 rounded-xl p-4 border-neutral-700 border relative min-w-80 w-[50vw] shadow-xl shadow-red-900/20 transition duration-200 hover:shadow-3xl hover:shadow-red-900/50">
            <div className="flex flex-row items-start justify-center px-18 overflow-hidden">
              <Image
                src="https://assets-global.website-files.com/66149821b79906211250b327/661667f05307acc0fcadaf31_list-item-ellipse.svg"
                loading="lazy"
                alt=""
                className="m-auto absolute top-0 bottom-0 left-0 right-0 blur-xl w-full opacity-10 pointer-events-none"
                width={453}
                height={22}
                decoding="async"
              />
              <p className="text-md font-light text-neutral-300 md:text-lg">
                Overwhelming competition
              </p>
            </div>
          </div>
          <div className="flex flex-col bg-neutral-950 rounded-xl p-4 border-neutral-700 border relative min-w-80 w-[50vw] shadow-xl shadow-red-900/20 transition duration-200 hover:shadow-3xl hover:shadow-red-900/50">
            <div className="flex flex-row items-start justify-center px-18 overflow-hidden">
              <Image
                src="https://assets-global.website-files.com/66149821b79906211250b327/661667f05307acc0fcadaf31_list-item-ellipse.svg"
                loading="lazy"
                alt=""
                className="m-auto absolute top-0 bottom-0 left-0 right-0 blur-xl w-full opacity-10 pointer-events-none"
                width={453}
                height={22}
                decoding="async"
              />
              <p className="text-md font-light text-neutral-300 md:text-lg">
                Lower barrier of entry
              </p>
            </div>
          </div>
          <div className="flex flex-col bg-neutral-950 rounded-xl p-4 border-neutral-700 border relative min-w-80 w-[50vw] shadow-xl shadow-red-900/20 transition duration-200 hover:shadow-3xl hover:shadow-red-900/50">
            <div className="flex flex-row items-start justify-center px-18 overflow-hidden">
              <Image
                src="https://assets-global.website-files.com/66149821b79906211250b327/661667f05307acc0fcadaf31_list-item-ellipse.svg"
                loading="lazy"
                alt=""
                className="m-auto absolute top-0 bottom-0 left-0 right-0 blur-xl w-full opacity-10 pointer-events-none"
                width={453}
                height={22}
                decoding="async"
              />
              <p className="text-md font-light text-neutral-300 md:text-lg">
                Lack of tracking
              </p>
            </div>
          </div>
          <div className="flex flex-col bg-neutral-950 rounded-xl p-4 border-neutral-700 border relative min-w-80 w-[50vw] shadow-xl shadow-red-900/20 transition duration-200 hover:shadow-3xl hover:shadow-red-900/50">
            <div className="flex flex-row items-start justify-center px-18 overflow-hidden">
              <Image
                src="https://assets-global.website-files.com/66149821b79906211250b327/661667f05307acc0fcadaf31_list-item-ellipse.svg"
                loading="lazy"
                alt=""
                className="m-auto absolute top-0 bottom-0 left-0 right-0 blur-xl w-full opacity-10 pointer-events-none"
                width={453}
                height={22}
                decoding="async"
              />
              <p className="text-md font-light text-neutral-300 md:text-lg">
                Less trust from online shoppers
              </p>
            </div>
          </div>
        </div>
        {/* Middle-Bottom */}
        <p className="text-md mt-12 font-light text-neutral-300 md:text-lg text-center">
          All these factors have made the e-commerce market much more
          competitive than it used to be.
          <br />
          <br />
          Excelling at ad creative and having a great product simply won’t cut
          it, you need an edge to outpace your competitors and make ads great
          again.
          <br />
          <br />
          And this edge is a high-converting, custom funnel.
        </p>
        {/* Bottom */}
        <div className="grid grid-cols-3 gap-6 mt-12">
          <div className="flex justify-center items-center relative">
            <div className="flex flex-col justify-center items-center gap-[1rem] z-10">
              <svg
                width="1em"
                height="1em"
                viewBox="0 0 24 24"
                className="h-8 w-8 flex-none text-white"
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
                <use href="#ai:tabler:check"></use>
              </svg>
              <Image
                src="https://assets-global.website-files.com/66149821b79906211250b327/661669848c9ca1005b439f97_Group%201272633407.png"
                loading="lazy"
                alt=""
                className="check-icon"
                width={162}
                height={162}
                decoding="async"
              />
              <p className="text-md font-light text-neutral-300 md:text-lg text-center">
                AD CREATIVES
              </p>
            </div>
            <Image
              src="https://assets-global.website-files.com/66149821b79906211250b327/66166984a189d8612d684e8e_arrow.png"
              loading="lazy"
              alt=""
              className="z-2 -ml-[7rem] absolute -right-4 sm:right-0 pointer-events-none"
              width={132}
              height={8}
              decoding="async"
            />
          </div>
          <div className="flex justify-center items-center relative">
            <div className="flex flex-col justify-center items-center gap-[1rem] z-10">
              <svg
                width="1em"
                height="1em"
                viewBox="0 0 24 24"
                className="h-8 w-8 flex-none text-white"
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
                <use href="#ai:tabler:check"></use>
              </svg>
              <Image
                src="https://assets-global.website-files.com/66149821b79906211250b327/66166984d93cbef32c4a1975_Group%201272633406.png"
                loading="lazy"
                alt=""
                className="check-icon"
                width={162}
                height={162}
                decoding="async"
              />
              <p className="text-md font-light text-neutral-300 md:text-lg text-center">
                GOOD PRODUCT
              </p>
            </div>
            <Image
              src="https://assets-global.website-files.com/66149821b79906211250b327/66166984a189d8612d684e8e_arrow.png"
              loading="lazy"
              alt=""
              className="z-2 -ml-[7rem] absolute -right-4 sm:right-0 pointer-events-none"
              width={132}
              height={8}
              decoding="async"
            />
          </div>
          <div className="flex justify-center items-start">
            <div className="flex flex-col items-center gap-[1rem]">
              <Image
                src="https://assets-global.website-files.com/66149821b79906211250b327/66166984cce5e186422e9ed9_Group.svg"
                loading="lazy"
                alt=""
                width={29}
                height={29}
                decoding="async"
              />
              <Image
                src="https://assets-global.website-files.com/66149821b79906211250b327/66166984a2121c43134d5f94_Group%201272633408.png"
                loading="lazy"
                alt=""
                className="check-icon"
                width={162}
                height={162}
                decoding="async"
              />
              <p className="text-md font-light text-neutral-300 md:text-lg text-center">
                CUSTOM FUNNEL
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Cfunnel;
