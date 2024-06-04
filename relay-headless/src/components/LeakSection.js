import React from "react";
import Image from "next/image";

const LeakSection = () => {
  return (
    <section className="relative mx-auto overflow-x-clip px-8 sm:px-16 md:px-24 lg:px-32">
      <div className="mb-6 mt-12 flex flex-col items-center text-center lg:mb-24 lg:mt-28 2xl:mt-48">
        <div className="w-layout-blockcontainer container-large w-container">
          <div className="flex flex-col gap-12">
            {/* LIVE */}
            <div className="flex flex-row gap-2 items-center justify-center">
              <div className="flex flex-row items-center gap-4 rounded-3xl border border-neutral-700 shadow-xl shadow-blue-500/20 px-8 py-1">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-blue-500"></span>
                </span>
                <div className="live-label-text">LIVE</div>
              </div>
            </div>
            {/* Heading */}
            <h2 className="mt-2 text-3xl font-medium tracking-tight text-white sm:text-6xl">
              <span className="bg-gradient-to-b from-neutral-50 from-60% to-neutral-400 bg-clip-text text-transparent lg:to-neutral-600">
                Your current funnel might be{" "}
                <span className="bg-gradient-to-b from-blue-500 from-60% to-blue-400 bg-clip-text text-transparent lg:to-blue-600 underline italic">
                  leaking more $ than you think
                </span>
              </span>
            </h2>
            {/* Subheading */}
            <div className="flex flex-row gap-2 items-center justify-center">
              <div className="flex flex-row items-center gap-4 rounded-3xl border border-neutral-700 shadow-xl shadow-blue-500/20 px-8 py-4">
                <Image
                  src="https://assets-global.website-files.com/66149821b79906211250b327/66166c78568ebf05d86db043_warning.png"
                  loading="lazy"
                  width="20"
                  alt="Warning"
                />
                <div className="p-normal">Don&apos;t waste your ad spend.</div>
              </div>
              <div className="label-bar-dot is-1"></div>
            </div>
            {/* Images */}
            <div className="flex flex-row gap-8 items-center justify-center">
              <Image
                src="https://assets-global.website-files.com/66149821b79906211250b327/66166cddc6151f9331b00f27_Group%201272633393.webp"
                loading="lazy"
                sizes="(max-width: 479px) 95vw, (max-width: 767px) 97vw, (max-width: 991px) 47vw, 435.203125px"
                srcset="https://assets-global.website-files.com/66149821b79906211250b327/66166cddc6151f9331b00f27_Group%201272633393-p-500.webp 500w, https://assets-global.website-files.com/66149821b79906211250b327/66166cddc6151f9331b00f27_Group%201272633393-p-800.webp 800w, https://assets-global.website-files.com/66149821b79906211250b327/66166cddc6151f9331b00f27_Group%201272633393-p-1080.webp 1080w, https://assets-global.website-files.com/66149821b79906211250b327/66166cddc6151f9331b00f27_Group%201272633393.webp 1088w"
                alt=""
                className="leak-image"
              />
              <Image
                src="https://assets-global.website-files.com/66149821b79906211250b327/66166cdc840d0bff9ba54a75_Group%201272633394.webp"
                loading="lazy"
                sizes="(max-width: 479px) 95vw, (max-width: 767px) 97vw, (max-width: 991px) 47vw, 435.203125px"
                srcset="https://assets-global.website-files.com/66149821b79906211250b327/66166cdc840d0bff9ba54a75_Group%201272633394-p-500.webp 500w, https://assets-global.website-files.com/66149821b79906211250b327/66166cdc840d0bff9ba54a75_Group%201272633394-p-800.webp 800w, https://assets-global.website-files.com/66149821b79906211250b327/66166cdc840d0bff9ba54a75_Group%201272633394-p-1080.webp 1080w, https://assets-global.website-files.com/66149821b79906211250b327/66166cdc840d0bff9ba54a75_Group%201272633394.webp 1088w"
                alt=""
                className="leak-image"
              />
            </div>
            {/* CTA Button */}
            <div className="flex items-center justify-center mt-6">
              <a href="https://calendly.com/relaydigitalyyc/discovery">
                <button className="relative rounded-full text-center transition-all duration-500 transform overflow-hidden   w-full px-12 py-2.5 bg-blue-500 text-neutral-950 border border-blue-500 button hover:text-neutral-50 group uppercase leading-tight tracking-tight md:text-lg">
                  <div className="group relative z-10 w-full">
                    Get A Price
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
          {/* <div className="help_inner">
            <h2 className="h2-heading is-help-title">
              How our funnels help
              <span className="h1-font-pt">your brand dominate</span>
            </h2>
            <div className="w-layout-vflex label-bar-wrap">
              <div className="label-bar white-gr">
                <Image
                  src="https://assets-global.website-files.com/66149821b79906211250b327/66166dce3b6f36cee13ab93d_hands.png"
                  loading="lazy"
                  width="20"
                  alt="Handshake"
                />
                <div className="p-normal">Done-for-you by experts</div>
              </div>
              <div className="label-bar-dot is-1"></div>
            </div>
            <p className="p-normal is-help">
              After working with hundreds of ecommerce brands and consulting
              them on their post-click experience, we've identified & mastered
              the key needle-movers that turn average pages into conversion
              machines.
            </p>
            <div className="help-box-wrap">
              <div className="help-box">
                <div className="help-box-wrap">
                  <div className="help-box is-inner">
                    <Image
                      src="https://assets-global.website-files.com/66149821b79906211250b327/66166f88e4f17dd77e526a46_Group%201272633434.png"
                      loading="lazy"
                      width="82"
                      alt=""
                      className="help-box-icon"
                    />
                    <h3 className="h3-heading">Copy that persuades</h3>
                    <ul role="list" className="list has-less-space w-list-unstyled">
                      <li className="list-item">
                        <div className="list-item-dot"></div>
                        <p className="p-normal is-cream">In-Depth Research</p>
                      </li>
                      <li className="list-item">
                        <div className="list-item-dot"></div>
                        <p className="p-normal is-cream">Consumer Psychology</p>
                      </li>
                      <li className="list-item">
                        <div className="list-item-dot"></div>
                        <p className="p-normal is-cream">
                          Direct Response Principles
                        </p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="help-box-wrap">
                <div className="help-box is-inner">
                  <Image
                    src="https://assets-global.website-files.com/66149821b79906211250b327/66166f88e05af9939df0174f_Group%201272633435.png"
                    loading="lazy"
                    width="82"
                    alt=""
                    className="help-box-icon"
                  />
                  <h3 className="h3-heading">Design that converts</h3>
                  <ul role="list" className="list has-less-space w-list-unstyled">
                    <li className="list-item">
                      <div className="list-item-dot"></div>
                      <p className="p-normal is-cream">On-Brand</p>
                    </li>
                    <li className="list-item">
                      <div className="list-item-dot"></div>
                      <p className="p-normal is-cream">CRO Principles</p>
                    </li>
                    <li className="list-item">
                      <div className="list-item-dot"></div>
                      <p className="p-normal is-cream">Mobile Optimized</p>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="help-box-wrap">
                <div className="help-box is-inner">
                  <Image
                    src="https://assets-global.website-files.com/66149821b79906211250b327/66166f87f27ac4336b9f2a90_Group%201272633437.png"
                    loading="lazy"
                    width="82"
                    alt=""
                    className="help-box-icon"
                  />
                  <h3 className="h3-heading">More profits</h3>
                  <ul role="list" className="list has-less-space w-list-unstyled">
                    <li className="list-item">
                      <div className="list-item-dot"></div>
                      <p className="p-normal is-cream">Offer Building</p>
                    </li>
                    <li className="list-item">
                      <div className="list-item-dot"></div>
                      <p className="p-normal is-cream">
                        Bundles, AOV Upsell Strategy
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="help-box-wrap">
                <div className="help-box is-inner">
                  <Image
                    src="https://assets-global.website-files.com/66149821b79906211250b327/66166f88bb103231a006587c_Group%201272633434-1.png"
                    loading="lazy"
                    width="82"
                    alt=""
                    className="help-box-icon"
                  />
                  <h3 className="h3-heading">Seamless Development</h3>
                  <ul role="list" className="list has-less-space w-list-unstyled">
                    <li className="list-item">
                      <div className="list-item-dot"></div>
                      <p className="p-normal is-cream">Easy To Edit & Duplicate</p>
                    </li>
                    <li className="list-item">
                      <div className="list-item-dot"></div>
                      <p className="p-normal is-cream">Fast Loading Speed</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </div>
      {/* <div className="logos-overlay-green-line is-top"></div>
      <div className="logos-overlay-white-line"></div>
      <div className="leak-circle"></div> */}
    </section>
  );
};

export default LeakSection;
