import React from "react";

const CustomerJourney = () => {
  return (
    <section className="relative py-12" id="how-it-works">
      <div className="mx-auto max-w-7xl px-5">
        
        <h2 className="mt-2 text-3xl font-medium tracking-tight text-white sm:text-6xl text-center">
          <span className="bg-gradient-to-b from-neutral-50 from-60% to-neutral-400 bg-clip-text text-transparent lg:to-neutral-600">
            Why Are Our Landing Pages So <span className="bg-gradient-to-b from-blue-500 from-60% to-blue-400 bg-clip-text text-transparent lg:to-blue-600 underline">Effective?</span>
          </span>
        </h2>
        <img
          src="/svg/svgexport-1.svg"
          alt="Journey Desktop"
          className="mt-16 w-full hidden sm:block"
          width="1031"
          height="323"
          loading="lazy"
          decoding="async"
        />
        <img
          src="/svg/svgexport-2.svg"
          alt="Journey Mobile"
          className="mt-16 w-full sm:hidden"
          width="343"
          height="523"
          loading="lazy"
          decoding="async"
        />
        <div className="grid md:grid-cols-3 gap-6 mt-12">
          
          <div className="flex flex-col bg-neutral-950 rounded-xl p-4 border-neutral-700 border">
            <div className="flex flex-row gap-x-8 items-center justify-start">
              <div className="mt-2 font-melodrama text-3xl font-medium tracking-tight text-white sm:text-6xl">
                
                <span className="bg-gradient-to-b from-neutral-50 from-60% to-neutral-400 bg-clip-text text-transparent lg:to-neutral-600">
                  
                  1
                </span>
              </div>
              <h4 className="mt-2 text-xl md:text-3xl font-medium tracking-tight text-white ">
                
                <span className="bg-gradient-to-b from-neutral-50 from-60% to-neutral-400 bg-clip-text text-transparent lg:to-neutral-600">
                  
                  Streamlined Customer Journeys
                </span>
              </h4>
            </div>
            <p className="text-md mt-6 font-light text-neutral-300 md:text-lg">
              
              Landing pages streamline the marketing funnel, creating direct
              routes to conversion with targeted messages. They capture user
              attention with a focused call to action, removing any distractions
              and significantly enhancing conversion rates. It&apos;s like paving a
              high-speed expressway directly to your desired outcomes.
            </p>
          </div>
          <div className="flex flex-col bg-neutral-950 rounded-xl p-4 border-neutral-700 border">
            
            <div className="flex flex-row gap-x-8 items-center justify-start">
              
              <div className="mt-2 font-melodrama text-3xl font-medium tracking-tight text-white sm:text-6xl">
                
                <span className="bg-gradient-to-b from-neutral-50 from-60% to-neutral-400 bg-clip-text text-transparent lg:to-neutral-600">
                  
                  2
                </span>
              </div>
              <h4 className="mt-2 text-xl md:text-3xl font-medium tracking-tight text-white ">
                
                <span className="bg-gradient-to-b from-neutral-50 from-60% to-neutral-400 bg-clip-text text-transparent lg:to-neutral-600">
                  
                  Targeted Messaging
                </span>
              </h4>
            </div>
            <p className="text-md mt-6 font-light text-neutral-300 md:text-lg">
              
              Our landing pages enable you to craft messages that resonate
              deeply with specific audience segments, offering a highly
              personalized browsing experience. By homing in on a unique
              product, service, or offer, they speak directly to your visitor&apos;s
              interests, significantly increasing engagement and conversions.
              This approach ensures that every visitor feels understood and
              valued.
            </p>
          </div>
          <div className="flex flex-col bg-neutral-950 rounded-xl p-4 border-neutral-700 border">
            
            <div className="flex flex-row gap-x-8 items-center justify-start">
              
              <div className="mt-2 font-melodrama text-3xl font-medium tracking-tight text-white sm:text-6xl">
                
                <span className="bg-gradient-to-b from-neutral-50 from-60% to-neutral-400 bg-clip-text text-transparent lg:to-neutral-600">
                  
                  3
                </span>
              </div>
              <h4 className="mt-2 text-xl md:text-3xl font-medium tracking-tight text-white ">
                
                <span className="bg-gradient-to-b from-neutral-50 from-60% to-neutral-400 bg-clip-text text-transparent lg:to-neutral-600">
                  
                  Quantifiable Results
                </span>
              </h4>
            </div>
            <p className="text-md mt-6 font-light text-neutral-300 md:text-lg">
              
              Landing pages serve as invaluable tools for measuring campaign
              effectiveness, providing tangible metrics like click-through and
              conversion rates. This wealth of data empowers continuous
              refinement of content, design, and the overall user journey. With
              each iteration, your landing page becomes a more potent tool in
              achieving optimal performance.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomerJourney;
