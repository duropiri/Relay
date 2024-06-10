import React from "react";
import Spline from "@splinetool/react-spline";

const Rocket = ({className}) => {
  return (
    <div className="flex flex-col items-center justify-center relative">
      {/* <div className="mx-2 lg:mx-8 text-3xl text-neutral-100 lg:text-5xl text-center z-10">
        <h2 className="bg-gradient-to-b from-neutral-50 from-60% to-neutral-400 bg-clip-text text-transparent lg:to-neutral-600">
          Are You Ready To{" "}
          <span className="bg-gradient-to-b from-blue-500 from-60% to-blue-400 bg-clip-text text-transparent lg:to-blue-600">
            Rocket
          </span>{" "}
          Your Conversion Rate
          <span className="bg-gradient-to-b from-blue-500 from-60% to-blue-400 bg-clip-text text-transparent lg:to-blue-600">
            ?
          </span>
        </h2>
      </div> */}
{/* 
      <div className="mx-auto my-8 max-w-xl pb-2 lg:pb-8 text-center lg:max-w-2xl z-10">
        <div className="text-md mx-4 text-center text-neutral-300 lg:max-w-2xl lg:text-xl z-10">
          <p className="z-10">
            Leave your details below and we&apos;ll get back to you as soon as
            possible. We look forward to hearing from you!
          </p>
        </div>
      </div> */}
      <div className="flex flex-col items-center justify-center max-w-screen-xl pointer-events-none sm:pointer-events-auto -mt-24 -mb-52 lg:-mb-52">
        <Spline scene="https://prod.spline.design/JhlNtBynD6AHN5aV/scene.splinecode" />
      </div>
    </div>
  );
};

export default Rocket;
