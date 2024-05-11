"use client";
import React, { useEffect } from "react";
import { useGlobalState } from "./GlobalStateContext";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

const Navbar = () => {
  const { mobileMenuOpen, setMobileMenuOpen } = useGlobalState();

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  useEffect(() => {
    const textUnderlineAnimation = () => {
      document.querySelectorAll(".hover-link").forEach((link) => {
        const underline = link.querySelector(".underline");

        // Set initial styles for GSAP to manage transform origin
        gsap.set(underline, { transformOrigin: "left center", scaleX: 0 });

        // Hover start: expand the underline from the left
        link.addEventListener("mouseenter", () => {
          gsap.to(underline, {
            scaleX: 1,
            duration: 0.3,
            ease: "power2.out",
            transformOrigin: "left center", // Ensures the origin is correct for expanding
          });
        });

        // Hover end: contract the underline to the right
        link.addEventListener("mouseleave", () => {
          gsap.to(underline, {
            scaleX: 0,
            duration: 0.3,
            ease: "power2.in",
            transformOrigin: "right center", // Shifts the origin to right for contraction
          });
        });
      });
    };

    textUnderlineAnimation();
    window.addEventListener("DOMContentLoaded", textUnderlineAnimation);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("DOMContentLoaded", textUnderlineAnimation);

      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, []);

  return (
    <div className="sticky top-0 z-50 w-full">
      <nav className=" bg-neutral-950/50 backdrop-blur-md py-4 hidden lg:block border-neutral-700 border-b-[1px]">
        <div className="mx-auto max-w-7xl px-5 flex justify-between items-center">
          <a
            className="-ml-2 flex w-60 items-center rounded-full px-2 text-3xl transition"
            href="/"
          >
            <span className="font-[700] text-neutral-50">Relay</span>
            <span className="text-neutral-300">Digital</span>
            <span className="text-blue-500">.</span>
          </a>
          <div className="flex justify-center h-[58px]">
            <ul className="flex flex-row items-center gap-x-8 w-full h-full">
              <li className="group flex flex-col hover-link cursor-pointer">
                <a
                  href="/#why"
                  className="cursor-pointer text-neutral-50 text-5xl font-normal md:text-base group-hover:text-blue-500 transition-all"
                >
                  Why Use Us?
                </a>
                <span className="underline transition-colors duration-400 bg-neutral-50 group-hover:bg-blue-500 h-[2px]"></span>
              </li>
              <li className="group flex flex-col hover-link cursor-pointer">
                <a
                  href="/#casestudies"
                  className="cursor-pointer text-neutral-50 text-5xl font-normal md:text-base group-hover:text-blue-500 transition-all"
                >
                  Portfolio
                </a>
                <span className="underline transition-colors duration-400 bg-neutral-50 group-hover:bg-blue-500 h-[2px]"></span>
              </li>
              <li className="group flex flex-col hover-link cursor-pointer">
                <a
                  href="/pricing"
                  className="cursor-pointer text-neutral-50 text-5xl font-normal md:text-base group-hover:text-blue-500 transition-all"
                >
                  Pricing
                </a>
                <span className="underline transition-colors duration-400 bg-neutral-50 group-hover:bg-blue-500 h-[2px]"></span>
              </li>
            </ul>
          </div>
          <div className="flex items-center gap-4 ">
            <a href="/contact">
              <button className="relative rounded-full text-center transition-all duration-500 transform relative overflow-hidden z-40 px-6 py-3 border border-blue-500 text-neutral-50 bg-neutral-950 button group text-lg uppercase">
                <div className="group relative z-10">
                  Get Started
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
        </div>
      </nav>
      <nav className=" bg-neutral-950/50 backdrop-blur-md p-6 flex flex-row justify-between items-center lg:hidden border-neutral-700 border-b-[1px]">
        <a
          className="-ml-2 flex  items-center rounded-full px-2 text-3xl transition"
          href="/"
        >
          <span className="font-[700] text-neutral-50">Relay</span>
          <span className="text-neutral-300">Digital</span>
          <span className="text-blue-500">.</span>
        </a>
        <svg
          width="15"
          height="15"
          viewBox="0 0 15 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="text-neutral-300 w-7 h-7"
          aria-label="open menu"
          role="button"
          type="button"
          aria-haspopup="dialog"
          aria-expanded="false"
          aria-controls="radix-:r6Ra:"
          data-state="closed"
          onClick={toggleMobileMenu}
        >
          <path
            d="M1.5 3C1.22386 3 1 3.22386 1 3.5C1 3.77614 1.22386 4 1.5 4H13.5C13.7761 4 14 3.77614 14 3.5C14 3.22386 13.7761 3 13.5 3H1.5ZM1 7.5C1 7.22386 1.22386 7 1.5 7H13.5C13.7761 7 14 7.22386 14 7.5C14 7.77614 13.7761 8 13.5 8H1.5C1.22386 8 1 7.77614 1 7.5ZM1 11.5C1 11.2239 1.22386 11 1.5 11H13.5C13.7761 11 14 11.2239 14 11.5C14 11.7761 13.7761 12 13.5 12H1.5C1.22386 12 1 11.7761 1 11.5Z"
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          ></path>
        </svg>
      </nav>
    </div>
  );
};

export default Navbar;
