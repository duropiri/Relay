"use client";
import React, { useState, useRef } from "react";

const Contact = () => {
  const formRef = useRef();
  const [result, setResult] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitAttempted, setSubmitAttempted] = useState(false);

  const validateEmail = (email) => {
    // Simple regex for basic email validation
    const re =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@(([^<>()[\]\\.,;:\s@"]+\.)+[^<>()[\]\\.,;:\s@"]{2,})$/i;
    return re.test(String(email).toLowerCase());
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitAttempted(true); // Indicate a submission attempt has been made

    const form = formRef.current;
    const name = form["name"].value;
    const email = form["email"].value;
    const phone = form["phone"].value;
    const website = form["website"].value;
    const message = form["message"].value;

    // Simple validation for demonstration
    if (!name || !email.includes("@") || !phone || !website || !message) {
      setResult("Please fill in all fields correctly.");
      setIsSubmitting(false);
      return; // Prevent submission if validation fails
    }

    // If the email is valid, continue with the form submission logic
    try {
      // Simulated API call with a timeout
      setTimeout(() => {
        setIsSubmitting(false);
        // Randomly simulate success or failure
        if (Math.random() > 0.5) {
          setResult("Success! Your message has been sent.");
          formRef.current.reset(); // Reset the form upon success
          setSubmitAttempted(false); // Reset submission attempt flag upon successful submission
        } else {
          setResult("An error occurred. Please try again later.");
        }
      }, 2000); // Simulate a delay for the API call
    } catch (error) {
      setResult("An error occurred. Please try again later.");
      setIsSubmitting(false);
    }
  };

  return (
    <div className="mx-auto max-w-7xl px-5">
      <div className="pt-24 lg:pt-36">
        <h2 className="mx-2 lg:mx-8 font-melodrama text-3xl text-neutral-100 lg:text-5xl text-center">
          <span className="bg-gradient-to-b from-neutral-50 from-60% to-neutral-400 bg-clip-text text-transparent lg:to-neutral-600">
            Are You Ready To Rocket Your Conversion Rate?
          </span>
        </h2>
        <div className="mx-auto my-8 max-w-xl pb-2 lg:pb-8 text-center lg:max-w-2xl">
          <div className="text-md mx-4 text-center text-neutral-300 lg:max-w-2xl lg:text-xl">
            <p>
              Leave your details below and we&apos;ll get back to you as soon as
              possible. We look forward to hearing from you!
            </p>
          </div>
          <div> </div>
        </div>
        <div className="mx-auto mt-16 grid max-w-screen-xl gap-10 md:grid-cols-2">
          <div>
            <h2 className="font-melodrama text-3xl font-medium text-neutral-50">
              Contact Relay
            </h2>
            <p className="mt-3 text-lg leading-relaxed text-neutral-300">
              Have a question or inquiry? Fill out the form below and we will
              get back to you as soon as possible.
            </p>
            <div className="mt-5">
              <div className="mt-2 flex items-center space-x-2 text-neutral-100">
                <svg
                  className="h-4 w-4 text-neutral-300"
                  width="15"
                  height="15"
                  viewBox="0 0 15 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7.94721 0.164594C7.66569 0.0238299 7.33431 0.0238302 7.05279 0.164594L0.552786 3.41459C0.214002 3.58399 0 3.93025 0 4.30902V12C0 12.5523 0.447715 13 1 13H14C14.5523 13 15 12.5523 15 12V4.30902C15 3.93025 14.786 3.58399 14.4472 3.41459L7.94721 0.164594ZM13.5689 4.09349L7.5 1.05902L1.43105 4.09349L7.5 7.29136L13.5689 4.09349ZM1 4.88366V12H14V4.88366L7.70977 8.19813C7.57848 8.26731 7.42152 8.26731 7.29023 8.19813L1 4.88366Z"
                    fill="currentColor"
                    fillRule="evenodd"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <a href="mailto:info@relaymedia.agency">
                  info@relaymedia.agency
                </a>
              </div>
            </div>
          </div>
          <div className="mb-5 rounded-xl border border-neutral-700 bg-neutral-950 p-5 shadow-xl md:p-8">
            <form
              ref={formRef}
              action="https://api.web3forms.com/submit"
              method="POST"
              id="form"
              noValidate
              onSubmit={handleSubmit}
            >
              <input
                type="hidden"
                name="access_key"
                value="8fb384a2-c120-475a-b013-b02012741b63"
              />
              <input
                type="checkbox"
                className="hidden text-neutral-50"
                bs="display:none"
                name="botcheck"
              />
              <div className="mb-5">
                <input
                  type="text"
                  placeholder="Full Name"
                  required
                  className="w-full rounded-md border border-neutral-700 bg-neutral-900 px-4 py-3 outline-none placeholder:text-neutral-400 focus:border-neutral-400 focus:ring-0 text-neutral-50"
                  name="name"
                />
                {submitAttempted && (
                  <div className="empty-feedback invalid-feedback mt-1 text-sm text-red-400">
                    Please provide your full name.
                  </div>
                )}
              </div>
              <div className="mb-5">
                <input
                  id="email_address"
                  type="email"
                  placeholder="Email Address"
                  name="email"
                  required
                  className="w-full rounded-md border border-neutral-700 bg-neutral-900 px-4 py-3 outline-none placeholder:text-neutral-400 focus:border-neutral-400 focus:ring-0 text-neutral-50"
                />
                {submitAttempted && (
                  <div className="empty-feedback mt-1 text-sm text-red-400">
                    Please provide your email address.
                  </div>
                )}
                {submitAttempted && (
                  <>
                    {!formRef.current?.email.value.includes("@") && (
                      <div className="invalid-feedback mt-1 text-sm text-red-400">
                        Please provide a valid email address.
                      </div>
                    )}
                  </>
                )}
              </div>
              <div className="mb-5">
                <input
                  id="phone"
                  type="tel"
                  placeholder="Phone"
                  name="phone"
                  required
                  className="w-full rounded-md border border-neutral-700 bg-neutral-900 px-4 py-3 outline-none placeholder:text-neutral-400 focus:border-neutral-400 focus:ring-0 text-neutral-50"
                />
                {submitAttempted && (
                  <div className="empty-feedback invalid-feedback mt-1 text-sm text-red-400">
                    Please enter a valid phone number.
                  </div>
                )}
              </div>
              <div className="mb-5">
                <input
                  id="website"
                  type="text"
                  placeholder="Website"
                  name="website"
                  required
                  className="w-full rounded-md border border-neutral-700 bg-neutral-900 px-4 py-3 outline-none placeholder:text-neutral-400 focus:border-neutral-400 focus:ring-0 text-neutral-50"
                />
                {submitAttempted && (
                  <div className="empty-feedback invalid-feedback mt-1 text-sm text-red-400">
                    Please enter a valid website url.
                  </div>
                )}
              </div>
              <div className="mb-3">
                <textarea
                  name="message"
                  required
                  placeholder="Your Message"
                  className="w-full rounded-md border border-neutral-700 bg-neutral-900 px-4 py-3 outline-none placeholder:text-neutral-400 focus:border-neutral-400 focus:ring-0 h-32 resize-none text-neutral-50"
                ></textarea>
                {submitAttempted && (
                  <div className="empty-feedback invalid-feedback mt-1 text-sm text-red-400">
                    Please enter a message.
                  </div>
                )}
              </div>
              <div className="h-captcha" data-captcha="true"></div>
              <button
                type="submit"
                className="button relative w-full transform overflow-hidden rounded-full border border-neutral-700 bg-blue-500 px-6 py-3 text-center text-neutral-950 transition duration-500 hover:text-neutral-50"
                disabled={isSubmitting}
              >
                <div className="group relative z-10">
                  {isSubmitting ? "Sending..." : "Send Message"}
                </div>
              </button>
              <div id="result" className="mt-3 text-center text-neutral-50">
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
