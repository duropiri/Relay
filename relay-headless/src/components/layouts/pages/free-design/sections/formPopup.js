"use client";

import { useEffect, useRef, useState } from "react";
import { useGlobalState } from "../../../../../contexts/GlobalStateContext";

const FormPopup = () => {
  const { isHeroPopupOpen, closeHeroPopup, website } = useGlobalState();
  const formRef = useRef();
  const [result, setResult] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitAttempted, setSubmitAttempted] = useState(false);
  const [isFormValid, setIsFormValid] = useState(false);

  useEffect(() => {
    const form = formRef.current;
    const validateForm = () => {
      setIsFormValid(
        form.name.value.trim() !== "" &&
          form.email.value.trim() !== "" &&
          form.email.value.includes("@") &&
          form.socialUsername.value.trim() !== "" &&
          form.social.value.trim() !== "" &&
          form.monthly_visits.value.trim() !== "" &&
          form.referral_source.value.trim() !== ""
      );
    };

    validateForm();

    form.addEventListener("input", validateForm);
    return () => form.removeEventListener("input", validateForm);
  }, []);

  useEffect(() => {
    if (formRef.current) {
      formRef.current.website.value = website;
    }
  }, [website]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitAttempted(true);

    if (!isFormValid) {
      return;
    }

    setIsSubmitting(true);
    try {
      const formData = new FormData(formRef.current);
      const data = Object.fromEntries(formData.entries());

      const response = await fetch("/api/design", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.json();
      setResult("Design request successfully sent!");
      formRef.current.reset(); // Clear the form
      setIsFormValid(false); // Reset form validation state
      setSubmitAttempted(false); // Reset submit attempted state
    } catch (error) {
      console.error("Error:", error);
      setResult("Failed to send design request.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isHeroPopupOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-[999]">
      <div className="mb-5 rounded-xl border border-neutral-700 bg-neutral-950 p-5 shadow-xl md:p-8 shadow-blue-500/50 text-center">
        <div className="flex justify-between items-center mb-4">
          <h1
            className="flex flex-row justify-start items-start gap-14 mr-14 w-full text-start text-3xl md:bg-gradient-to-br md:from-neutral-100 md:from-55% md:to-neutral-500 md:bg-clip-text font-medium tracking-tight md:text-transparent text-neutral-100"
            data-speed="0.5"
          >
            Relay
            <br />
            Digital&apos;s
            <span className="text-blue-500">
              Free
              <br />
              Design
            </span>
          </h1>
        </div>
        <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
          <div className="flex flex-row gap-2 w-full rounded-md border border-neutral-700 bg-neutral-900 px-4 py-3 outline-none placeholder:text-neutral-400 focus:border-neutral-400 focus:ring-0 text-neutral-50 min-h-[50px]">
            <svg
              width="2em"
              height="2em"
              viewBox="0 0 24 24"
              className="h-6 w-6 flex-none text-white"
              aria-hidden="true"
              data-icon="tabler:world-www"
            >
              <defs>
                <symbol id="ai:tabler:world-www" viewBox="0 0 24 24">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1"
                    d="M19.5 7a9 9 0 0 0 -7.5 -4a8.991 8.991 0 0 0 -7.484 4"
                  />
                  <path
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1"
                    d="M11.5 3a16.989 16.989 0 0 0 -1.826 4"
                  />
                  <path
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1"
                    d="M12.5 3a16.989 16.989 0 0 1 1.828 4"
                  />
                  <path
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1"
                    d="M19.5 17a9 9 0 0 1 -7.5 4a8.991 8.991 0 0 1 -7.484 -4"
                  />
                  <path
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1"
                    d="M11.5 21a16.989 16.989 0 0 1 -1.826 -4"
                  />
                  <path
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1"
                    d="M12.5 21a16.989 16.989 0 0 0 1.828 -4"
                  />
                  <path
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1"
                    d="M2 10l1 4l1.5 -4l1.5 4l1 -4"
                  />
                  <path
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1"
                    d="M17 10l1 4l1.5 -4l1.5 4l1 -4"
                  />
                  <path
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1"
                    d="M9.5 10l1 4l1.5 -4l1.5 4l1 -4"
                  />
                </symbol>
              </defs>
              <use href="#ai:tabler:world-www"></use>
            </svg>
            <input
              id="website"
              type="text"
              placeholder="mywebsite.com"
              name="website"
              required
              className="flex-grow bg-transparent text-neutral-50 placeholder:text-neutral-400 outline-none"
            />
          </div>
          <div className="flex space-x-4 mb-4">
            <input
              id="name"
              type="text"
              placeholder="What's your name"
              name="name"
              required
              className="w-full rounded-md border border-neutral-700 bg-neutral-900 px-4 py-3 outline-none placeholder:text-neutral-400 focus:border-neutral-400 focus:ring-0 text-neutral-50 min-h-[50px]"
            />
            <input
              id="email"
              type="email"
              placeholder="What's your email"
              name="email"
              required
              className="w-full rounded-md border border-neutral-700 bg-neutral-900 px-4 py-3 outline-none placeholder:text-neutral-400 focus:border-neutral-400 focus:ring-0 text-neutral-50 min-h-[50px]"
            />
          </div>
          <div className="flex flex-row gap-2 w-full rounded-md border border-neutral-700 bg-neutral-900 px-2 py-2 outline-none placeholder:text-neutral-400 focus:border-neutral-400 focus:ring-0 text-neutral-50 min-h-[50px]">
            <select
              id="social"
              name="social"
              required
              className="w-auto rounded-md bg-neutral-950 p-2 outline-none placeholder:text-neutral-400 focus:border-neutral-400 focus:ring-0 text-neutral-50"
            >
              <option value="twitter">Twitter</option>
              <option value="instagram">Instagram</option>
              <option value="whatsapp">Whatsapp</option>
              <option value="linkedin">LinkedIn</option>
              <option value="discord">Discord</option>
            </select>
            <input
              id="socialUsername"
              type="text"
              placeholder="@username"
              name="socialUsername"
              required
              className="flex-grow bg-transparent text-neutral-50 placeholder:text-neutral-400 outline-none"
            />
          </div>
          <div className="mb-4">
            <select
              id="monthly_visits"
              name="monthly_visits"
              required
              className="w-full rounded-md border border-neutral-700 bg-neutral-900 px-4 py-3 outline-none placeholder:text-neutral-400 focus:border-neutral-400 focus:ring-0 text-neutral-50 min-h-[50px]"
            >
              <option value="">How many monthly visits?</option>
              <option value="0-10k">0-10K</option>
              <option value="10-25k">10-25K</option>
              <option value="25-50k">25-50K</option>
              <option value="100-250k">100-250K</option>
              <option value="250k+">250K+</option>
            </select>
          </div>
          <div className="mb-4">
            <select
              id="referral_source"
              name="referral_source"
              required
              className="w-full rounded-md border border-neutral-700 bg-neutral-900 px-4 py-3 outline-none placeholder:text-neutral-400 focus:border-neutral-400 focus:ring-0 text-neutral-50 min-h-[50px]"
            >
              <option value="">How did you hear about us?</option>
              <option value="twitter">Twitter</option>
              <option value="instagram">Instagram</option>
              <option value="google">Google</option>
              <option value="referall">Referral</option>
            </select>
          </div>
          <button
            type="submit"
            className={`button relative w-full transform overflow-hidden rounded-full border border-neutral-700 px-6 py-3 text-center transition duration-500 ${
              !isFormValid
                ? "bg-blue-500/20 text-neutral-400 cursor-not-allowed"
                : "bg-blue-500 text-neutral-950 hover:text-neutral-50"
            } ${
              isSubmitting ? `cursor-wait bg-blue-500/20 text-neutral-400` : ``
            }`}
            disabled={!isFormValid || isSubmitting}
          >
            <div className="group relative z-10">
              {isSubmitting ? "Sending..." : "Claim my free design"}
            </div>
          </button>
        </form>
        <div id="result" className="mt-3 text-center text-gray-600">
          {result}
        </div>
        <button
          onClick={closeHeroPopup}
          className="mt-4 px-4 py-2 text-gray-500"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default FormPopup;
