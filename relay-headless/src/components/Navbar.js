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
    // Fix for id links
    document.querySelectorAll('a[href^="/#"]').forEach((el) => {
      el.addEventListener("click", (e) => {
        e.preventDefault();
        const href = el.getAttribute("href");
        const id = href?.slice(2); // Slice to remove "/#"
        if (!id) return;

        const currentUrl = window.location.pathname;
        const targetUrl = href.split("#")[0] || "/";

        if (currentUrl === targetUrl) {
          // Target element is on the same page
          const target = document.getElementById(id);
          if (target) {
            target.scrollIntoView({ behavior: "smooth" });
          }
        } else {
          // Navigate to the correct URL with the hash
          window.location.href = `${targetUrl}#${id}`;
        }
      });
    });

    // Check for anchor in URL on page load
    window.addEventListener("load", () => {
      const hash = window.location.hash;
      if (hash) {
        setTimeout(() => {
          const id = hash.slice(1); // Remove the "#"
          const target = document.getElementById(id);
          if (target) {
            target.scrollIntoView({ behavior: "smooth" });
          }
        }, 100); // Adjust the delay as necessary
      }
    });

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

    // Add or remove the 'overflow-hidden' class to the body element based on mobileMenuOpen state
    if (mobileMenuOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }

    textUnderlineAnimation();
    window.addEventListener("DOMContentLoaded", textUnderlineAnimation);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("DOMContentLoaded", textUnderlineAnimation);

      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, [mobileMenuOpen]);

  return (
    <div className="sticky top-0 z-50 w-full">
      {/* Dekstop Nav */}
      <nav className=" bg-neutral-950/50 backdrop-blur-md py-4 hidden md:block border-neutral-700 border-b-[1px] w-full">
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
                  href="/#pricing"
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

      {/* Mobile Nav */}
      <nav
        className={` bg-neutral-950/50 backdrop-blur-md p-6 flex flex-col justify-between items-start md:hidden border-neutral-700 w-[100vw] ${mobileMenuOpen ? "h-[100vh]" : "border-b-[1px]"}`}
      >
        {/* Mobile Menu Navbar */}
        <div className="flex flex-row justify-between items-center w-full">
          <a
            className="-ml-2 flex  items-center rounded-full px-2 text-3xl transition"
            href="/"
          >
            <span className="font-[700] text-neutral-50">Relay</span>
            <span className="text-neutral-300">Digital</span>
            <span className="text-blue-500">.</span>
          </a>

          <div class="flex items-center">
            <button
              class={`flex flex-col h-12 w-12 rounded justify-center items-center cursor-pointer group ${mobileMenuOpen ? "expanded" : ""}`}
              aria-label="Toggle Menu"
              data-aw-toggle-menu=""
              onClick={toggleMobileMenu}
            >
              <span class="sr-only">Toggle Menu</span>
              <span
                aria-hidden="true"
                class="h-0.5 w-6 my-1 rounded-full bg-white transition ease transform duration-200 opacity-80 group-[.expanded]:rotate-45 group-[.expanded]:translate-y-2.5"
              ></span>
              <span
                aria-hidden="true"
                class="h-0.5 w-6 my-1 rounded-full bg-white transition ease transform duration-200 opacity-80 group-[.expanded]:opacity-0"
              ></span>
              <span
                aria-hidden="true"
                class="h-0.5 w-6 my-1 rounded-full bg-white transition ease transform duration-200 opacity-80 group-[.expanded]:-rotate-45 group-[.expanded]:-translate-y-2.5"
              ></span>
            </button>
          </div>
        </div>
        {/* Mobile Menu Content */}
        <div
          className={`flex flex-col justify-between w-full h-full pt-12 gap-y-6 ${
            mobileMenuOpen ? "" : "hidden"
          }`}
        >
          {/* Links */}
          <div className="flex flex-col justify-start gap-y-6">
            <a
              href="/#why"
              onClick={toggleMobileMenu}
              className="cursor-pointer text-neutral-50 text-2xl font-normal md:text-base"
            >
              Why Use Us?
            </a>
            <a
              href="/#casestudies"
              onClick={toggleMobileMenu}
              className="cursor-pointer text-neutral-50 text-2xl font-normal md:text-base"
            >
              Portfolio
            </a>
            <a
              href="/#pricing"
              onClick={toggleMobileMenu}
              className="cursor-pointer text-neutral-50 text-2xl font-normal md:text-base"
            >
              Pricing
            </a>
          </div>

          {/* CTA Button */}
          <div className="flex items-center gap-4">
            <a href="/contact" className="w-full">
              <button className="relative rounded-full text-center transition-all duration-500 transform overflow-hidden z-40 px-6 py-3 border border-blue-500 text-neutral-50 bg-neutral-950 button group text-lg uppercase w-full">
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
    </div>
  );
};

export default Navbar;
