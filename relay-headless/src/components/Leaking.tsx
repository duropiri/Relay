import Image from "next/image";

const Leaking = () => {
  return (
    <section className="relative py-12" id="how-it-works">
      <div className="mx-auto max-w-7xl px-5">
        {/* Top */}

        <div className="flex flex-col items-center justify-center">
          <h2 className="mt-2 text-3xl font-medium tracking-tight text-white sm:text-6xl">
            <span className="bg-gradient-to-b from-neutral-50 from-60% to-neutral-400 bg-clip-text text-transparent lg:to-neutral-600">
              Your current funnel might be{" "}
              <span className="bg-gradient-to-b from-blue-500 from-60% to-blue-400 bg-clip-text text-transparent lg:to-blue-600 underline italic">
                leaking more $ than you think
              </span>
            </span>
          </h2>
          <div className="bg-neutral-900 ring-2 ring-blue-500 rounded-3xl p-2 xl:p-3 mt-12 overflow-hidden">
            <div className="z-5 justify-center items-center px-4 flex relative gap-[0.67rem]">
              <div className="relative">
                <Image
                  src="https://assets-global.website-files.com/66149821b79906211250b327/66166c78568ebf05d86db043_warning.png"
                  loading="lazy"
                  alt="Warning"
                  width={20}
                  height={20}
                  decoding="async"
                />
                <div className="z-1 bg-[#e9fd66] rounded-full w-[1rem] h-[1rem] mt-auto mb-auto absolute top-0 bottom-0 blur-xl"></div>
              </div>
              <p className="text-md font-light text-neutral-300 md:text-lg">
                Don&apos;t waste your ad spend.
              </p>
            </div>
          </div>
        </div>
        {/* Middle */}
        <div className="flex flex-col sm:flex-row gap-12 items-center justify-center">
          <Image
            src="/svg/leaking-1.svg"
            alt="Journey Desktop"
            className="mt-16 block"
            width={420}
            height={323}
            loading="lazy"
            decoding="async"
          />
          <Image
            src="/svg/leaking-2.svg"
            alt="Journey Desktop"
            className="mt-16 block"
            width={420}
            height={323}
            loading="lazy"
            decoding="async"
          />
        </div>
        <div className="flex flex-col items-center justify-center mt-16">
          <a onClick={gtag_report_conversion('https://relaydigital.agency/')} href="https://calendly.com/relaydigitalyyc/discovery">
            <button className="relative rounded-full text-center transition-all duration-500 transform overflow-hidden w-full sm:w-96 px-5 py-2.5 bg-blue-500 text-neutral-950 border border-blue-500 button hover:text-neutral-50 group uppercase leading-tight tracking-tight md:text-lg">
              <div className="group relative z-10 w-full">
                Get a price
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
    </section>
  );
};

export default Leaking;
