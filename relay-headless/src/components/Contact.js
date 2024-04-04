"use client";
import React, { useState, useRef } from "react";

const Contact = () => {
  const formRef = useRef();
  const [result, setResult] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = formRef.current;

    if (!form.checkValidity()) {
      form.querySelectorAll(":invalid")[0].focus();
      return;
    }

    setIsSubmitting(true);
    setResult("Processing...");

    // Simulate form submission delay
    setTimeout(() => {
      const shouldSimulateSuccess = Math.random() > 0.5; // Randomly decide if it's a success or failure

      if (shouldSimulateSuccess) {
        setResult("We've received your message!");
        form.reset();
      } else {
        setResult("An error occurred. Please try again later.");
      }

      setIsSubmitting(false);
    }, 1500); // Delay of 1.5 seconds
  };

  return (
    <div class="mx-auto max-w-7xl px-5">
      <div class="pt-24 lg:pt-36">
        <h2 class="mx-2 lg:mx-8 font-melodrama text-3xl text-neutral-100 lg:text-5xl text-center">
          <span class="bg-gradient-to-b from-neutral-50 from-60% to-neutral-400 bg-clip-text text-transparent lg:to-neutral-600">
            Are You Ready To Rocket Your Conversion Rate?
          </span>
        </h2>
        <div class="mx-auto my-8 max-w-xl pb-2 lg:pb-8 text-center lg:max-w-2xl">
          <div class="text-md mx-4 text-center text-neutral-300 lg:max-w-2xl lg:text-xl">
            <p>
              Leave your details below and we'll get back to you as soon as
              possible. We look forward to hearing from you!
            </p>
          </div>
          <div> </div>
        </div>
        <div class="mx-auto mt-16 grid max-w-screen-xl gap-10 md:grid-cols-2">
          <div>
            <h2 class="font-melodrama text-3xl font-medium text-neutral-50">
              Contact Relay
            </h2>
            <p class="mt-3 text-lg leading-relaxed text-neutral-300">
              Have a question or inquiry? Fill out the form below and we will
              get back to you as soon as possible.
            </p>
            <div class="mt-5">
              <div class="mt-2 flex items-center space-x-2 text-neutral-100">
                <svg
                  class="h-4 w-4 text-neutral-300"
                  width="15"
                  height="15"
                  viewBox="0 0 15 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7.94721 0.164594C7.66569 0.0238299 7.33431 0.0238302 7.05279 0.164594L0.552786 3.41459C0.214002 3.58399 0 3.93025 0 4.30902V12C0 12.5523 0.447715 13 1 13H14C14.5523 13 15 12.5523 15 12V4.30902C15 3.93025 14.786 3.58399 14.4472 3.41459L7.94721 0.164594ZM13.5689 4.09349L7.5 1.05902L1.43105 4.09349L7.5 7.29136L13.5689 4.09349ZM1 4.88366V12H14V4.88366L7.70977 8.19813C7.57848 8.26731 7.42152 8.26731 7.29023 8.19813L1 4.88366Z"
                    fill="currentColor"
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <a href="mailto:info@relaymedia.agency">
                  info@relaymedia.agency
                </a>
              </div>
            </div>
          </div>
          <div class="mb-5 rounded-xl border border-neutral-700 bg-neutral-950 p-5 shadow-xl md:p-8">
            <form
              ref={formRef}
              action="https://api.web3forms.com/submit"
              method="POST"
              id="form"
              class="needs-validation"
              novalidate
              data-astro-cid-tflpndyl=""
              onSubmit={handleSubmit}
            >
              <input
                type="hidden"
                name="access_key text-neutral-50"
                value="c9c9369b-d5a7-49b1-b0f8-184c9c66c266"
                data-astro-cid-tflpndyl=""
              />
              <input
                type="checkbox"
                class="hidden text-neutral-50"
                bs="display:none"
                name="botcheck"
                data-astro-cid-tflpndyl=""
              />
              <div class="mb-5" data-astro-cid-tflpndyl="">
                <input
                  type="text"
                  placeholder="Full Name"
                  required=""
                  class="w-full rounded-md border border-neutral-700 bg-neutral-900 px-4 py-3 outline-none placeholder:text-neutral-400 focus:border-neutral-400 focus:ring-0 text-neutral-50"
                  name="name"
                  data-astro-cid-tflpndyl=""
                />
                <div
                  class="empty-feedback invalid-feedback mt-1 text-sm text-red-400"
                  data-astro-cid-tflpndyl=""
                >
                  Please provide your full name.
                </div>
              </div>
              <div class="mb-5" data-astro-cid-tflpndyl="">
                <input
                  id="email_address"
                  type="email"
                  placeholder="Email Address"
                  name="email"
                  required=""
                  class="w-full rounded-md border border-neutral-700 bg-neutral-900 px-4 py-3 outline-none placeholder:text-neutral-400 focus:border-neutral-400 focus:ring-0 text-neutral-50"
                  data-astro-cid-tflpndyl=""
                />
                <div
                  class="empty-feedback mt-1 text-sm text-red-400"
                  data-astro-cid-tflpndyl=""
                >
                  Please provide your email address.
                </div>
                <div
                  class="invalid-feedback mt-1 text-sm text-red-400"
                  data-astro-cid-tflpndyl=""
                >
                  Please provide a valid email address.
                </div>
              </div>
              <div class="mb-5" data-astro-cid-tflpndyl="">
                <input
                  id="phone"
                  type="tel"
                  placeholder="Phone"
                  name="phone"
                  required=""
                  class="w-full rounded-md border border-neutral-700 bg-neutral-900 px-4 py-3 outline-none placeholder:text-neutral-400 focus:border-neutral-400 focus:ring-0 text-neutral-50"
                  data-astro-cid-tflpndyl=""
                />
                <div
                  class="empty-feedback invalid-feedback mt-1 text-sm text-red-400"
                  data-astro-cid-tflpndyl=""
                >
                  Please enter a valid phone number.
                </div>
              </div>
              <div class="mb-5" data-astro-cid-tflpndyl="">
                <input
                  id="website"
                  type="text"
                  placeholder="Website"
                  name="website"
                  required=""
                  class="w-full rounded-md border border-neutral-700 bg-neutral-900 px-4 py-3 outline-none placeholder:text-neutral-400 focus:border-neutral-400 focus:ring-0 text-neutral-50"
                  data-astro-cid-tflpndyl=""
                />
                <div
                  class="empty-feedback invalid-feedback mt-1 text-sm text-red-400"
                  data-astro-cid-tflpndyl=""
                >
                  Please enter a valid website url.
                </div>
              </div>
              <div class="mb-3" data-astro-cid-tflpndyl="">
                <textarea
                  name="message"
                  required=""
                  placeholder="Your Message"
                  class="w-full rounded-md border border-neutral-700 bg-neutral-900 px-4 py-3 outline-none placeholder:text-neutral-400 focus:border-neutral-400 focus:ring-0 h-32 resize-none text-neutral-50"
                  data-astro-cid-tflpndyl=""
                ></textarea>
                <div
                  class="empty-feedback invalid-feedback mt-1 text-sm text-red-400"
                  data-astro-cid-tflpndyl=""
                >
                  Please enter a message.
                </div>
              </div>
              <button
                type="submit"
                data-submission-button=""
                class="button relative w-full transform overflow-hidden rounded-full border border-neutral-700 bg-purple-500 px-6 py-3 text-center text-neutral-950 transition duration-500 hover:text-neutral-50"
                data-astro-cid-tflpndyl=""
                disabled={isSubmitting}
              >
                <div class="group relative z-10" data-astro-cid-tflpndyl="">
                  {isSubmitting ? "Sending..." : "Send Message"}
                </div>
              </button>
              <div
                id="result"
                class="mt-3 text-center text-neutral-50"
                data-astro-cid-tflpndyl=""
              >
                {result}
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
