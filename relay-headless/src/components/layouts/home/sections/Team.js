"use client";
import React, { useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useGlobalState } from "../../../../contexts/GlobalStateContext";
import Image from "next/image";

const People = [
  {
    name: "Dami",
    src: "/img/dami.webp",
    heading: "Creative Marketing Maestro Extraordinaire",
    description:
      "Co-founder, Dami leverages his computer science studies and expertise in photography, video editing, and social media trends to elevate Relay Digital's creative and marketing strategies.",
  },
  {
    name: "Glenn",
    src: "/img/glenn.webp",
    heading: "Tech Wizard and Innovation Specialist",
    description:
      "Co-founder, Glenn's passion for artificial intelligence, machine learning, and automation ensures that Relay Digital's technological backbone is robust and cutting-edge, driving efficiency and innovation.",
  },
  {
    name: "Ariel",
    src: "/img/ariel.webp",
    heading: "Neuromarketing and Copywriting Expert",
    description:
      "Co-founder, Ariel merges his background in neuromarketing, copywriting, and growth marketing with his deep understanding of human psychology to craft compelling marketing messages that resonate and drive action.",
  },
  {
    name: "Duro",
    src: "/img/duro.webp",
    heading: "Digital Visionary and Strategic Leader",
    description:
      "Founder, Duro leverages his extensive background in computer science, digital creation, and web development to lead Relay Digital's strategic direction, ensuring innovative solutions and operational excellence.",
  },
];

const Team = () => {
  const { isLoading } = useGlobalState();

  // GSAP Animations
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Define a common parent selector that wraps all your images.
    // Adjust the selector as needed to target your specific layout.
    const section = document.querySelector("#why");

    // Animate images with 'left' and 'right' classes inside this section
    gsap.utils.toArray(".left, .right").forEach((image) => {
      const direction = image.classList.contains("left") ? 1 : -1;
      gsap.to(image, {
        x: () => direction * 50, // Adjust the distance as needed
        ease: "expoScale",
        scrollTrigger: {
          trigger: section, // Use the common parent as the trigger
          start: "top center", // When the top of the parent hits the center
          end: "bottom center", // When the bottom of the parent hits the center
          scrub: true,
        },
      });
    });

    // Clean up the ScrollTriggers when the component unmounts
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [isLoading]);
  return (
    <div class="relative overflow-x-hidden py-12 lg:py-24">
      <div class="mx-auto max-w-7xl px-6 lg:px-8">
        {People.map((person, index) => (
          <div
            key={index}
            class="mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-8 gap-y-0 sm:gap-y-20 mt-12 sm:mt-6 lg:mx-0 lg:max-w-none sm:grid-cols-2"
          >
            <div class="lg:ml-auto lg:pl-4 lg:pt-4">
              <div class="lg:max-w-lg">
                <div>
                  <h2 class="mt-2 font-melodrama text-3xl font-medium tracking-tight text-white sm:text-6xl">
                    <span class="bg-gradient-to-b from-neutral-50 from-60% to-neutral-400 bg-clip-text text-transparent lg:to-neutral-600">
                      {person.heading}
                    </span>
                  </h2>
                </div>
                <p class="text-md mt-6 font-light text-neutral-300 md:text-lg">
                  {person.description}
                </p>
              </div>
            </div>
            <div
              class={`flex items-start order-first ${
                index % 2 == 0 ? "justify-start sm:order-first" : "justify-end sm:order-last"
              } w-full border-b border-blue-500`}
            >
              <Image
                src={person.src}
                alt={person.name}
                className={`h-auto w-[28rem] max-w-[50%] shadow-xl sm:w-[48rem] md:-ml-4 lg:-ml-0 grayscale ${
                  index % 2 == 0 ? "left" : "right"
                }`}
                loading="lazy"
                width={707}
                height={353}
                objectFit="contain"
                decoding="async"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;
