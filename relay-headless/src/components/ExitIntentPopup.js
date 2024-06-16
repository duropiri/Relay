"use client";

import { useEffect, useRef, useState } from "react";
import { useGlobalState } from "../contexts/GlobalStateContext";

const ExitIntentPopup = () => {
  const { isExitIntentPopupOpen, closeHeroPopup, closeExitIntentPopup } = useGlobalState();
  const formRef = useRef();
  const [result, setResult] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitAttempted, setSubmitAttempted] = useState(false);
  const [isFormValid, setIsFormValid] = useState(false);

  useEffect(() => {
    if (isExitIntentPopupOpen) {
      closeHeroPopup();
    }
  }, [isExitIntentPopupOpen, closeHeroPopup]);

  useEffect(() => {
    const form = formRef.current;
    const validateForm = () => {
      setIsFormValid(
        form.email.value.trim() !== "" && form.email.value.includes("@")
      );
    };

    validateForm();

    form.addEventListener("input", validateForm);
    return () => form.removeEventListener("input", validateForm);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitAttempted(true);

    if (!isFormValid) {
      return;
    }

    setIsSubmitting(true);
    try {
      const response = await fetch("/api/sendEbook", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: formRef.current.email.value }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.json();
      setResult("Ebook successfully sent!");
      formRef.current.reset(); // Clear the form
      setIsFormValid(false); // Reset form validation state
      setSubmitAttempted(false); // Reset submit attempted state
    } catch (error) {
      console.error("Error:", error);
      setResult("Failed to send ebook.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isExitIntentPopupOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-[9999]">
      <div className="mb-5 rounded-xl border border-neutral-700 bg-neutral-950 p-5 shadow-xl md:p-8 shadow-blue-500/50 text-center">
        <h2 className="text-2xl font-bold mb-4">Wait! Before you go...</h2>
        <p className="mb-4">Enter your email to download our free ebook.</p>
        <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
          <div className="mb-5">
            <input
              id="email_address"
              type="email"
              placeholder="Email Address"
              name="email"
              required
              className="w-full rounded-md border border-neutral-700 bg-neutral-900 px-4 py-3 outline-none placeholder:text-neutral-400 focus:border-neutral-400 focus:ring-0 text-neutral-50"
            />
            {submitAttempted && !formRef.current?.email.value.trim() && (
              <div className="empty-feedback mt-1 text-sm text-red-400">
                Please provide your email address.
              </div>
            )}
            {submitAttempted && !formRef.current?.email.value.includes("@") && (
              <div className="invalid-feedback mt-1 text-sm text-red-400">
                Please provide a valid email address.
              </div>
            )}
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
              {isSubmitting ? "Sending..." : "Download Ebook"}
            </div>
          </button>
        </form>
        <div id="result" className="mt-3 text-center text-neutral-50">
          {result}
        </div>
        <button onClick={closeExitIntentPopup} className="mt-4 px-4 py-2 text-gray-500">
          Close
        </button>
      </div>
    </div>
  );
};

export default ExitIntentPopup;