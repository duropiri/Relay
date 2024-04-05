import React from "react";

export default function Custom404() {
  return (
    <div class="flex min-h-[calc(100vh-20rem)] items-center justify-center">
      <div class="mt-16 text-center">
        <h1 class="bg-gradient-to-b from-neutral-50 to-neutral-600 bg-clip-text font-melodrama text-7xl font-bold text-transparent lg:text-[160px] lg:tracking-tight">
          404
        </h1>
        <p class="mt-4 text-lg font-medium text-neutral-300 lg:text-2xl">
          The page you are looking for doesn&apos;t exist.
        </p>
        <div class="mt-10 flex justify-center">
          <a> </a>
          <button class="relative rounded-full text-center transition-all duration-500 transform overflow-hidden z-40   px-6 py-3 text-base bg-purple-500 text-neutral-950 border border-purple-500 button hover:text-neutral-50  flex items-center justify-center uppercase">
            <a> </a>
            <div class="group relative z-10 w-full">
              <a> </a>
              <a href="/">
                Back to Home
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  viewBox="0 0 256 256"
                  class="ml-2 inline-block"
                >
                  <path d="M200,64V168a8,8,0,0,1-16,0V83.31L69.66,197.66a8,8,0,0,1-11.32-11.32L172.69,72H88a8,8,0,0,1,0-16H192A8,8,0,0,1,200,64Z"></path>
                </svg>
              </a>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}
