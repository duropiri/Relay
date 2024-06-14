"use client";
import { useState, useRef, useEffect } from "react";

const ContactForm = () => {
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
        form.phone.value.trim() !== "" &&
        form.project.value.trim() !== "" &&
        form.message.value.trim() !== ""
      );
    };

    validateForm();

    form.addEventListener("input", validateForm);
    return () => form.removeEventListener("input", validateForm);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitAttempted(true);
    const formData = new FormData(formRef.current);

    if (!isFormValid) {
      return;
    }

    setIsSubmitting(true);
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.json();
      setResult("Message successfully received!");
      formRef.current.reset();  // Clear the form
      setIsFormValid(false);    // Reset form validation state
      setSubmitAttempted(false); // Reset submit attempted state
    } catch (error) {
      console.error("Error:", error);
      setResult("Failed to send message.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form ref={formRef} id="form" noValidate onSubmit={handleSubmit}>
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
        {submitAttempted && !formRef.current?.name.value.trim() && (
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
      <div className="mb-5">
        <input
          id="phone"
          type="tel"
          placeholder="Phone Number"
          name="phone"
          required
          className="w-full rounded-md border border-neutral-700 bg-neutral-900 px-4 py-3 outline-none placeholder:text-neutral-400 focus:border-neutral-400 focus:ring-0 text-neutral-50"
        />
        {submitAttempted && !formRef.current?.phone.value.trim() && (
          <div className="empty-feedback invalid-feedback mt-1 text-sm text-red-400">
            Please enter a valid phone number.
          </div>
        )}
      </div>
      <div className="mb-5">
        <input
          id="project"
          type="text"
          placeholder="New Project"
          name="project"
          required
          className="w-full rounded-md border border-neutral-700 bg-neutral-900 px-4 py-3 outline-none placeholder:text-neutral-400 focus:border-neutral-400 focus:ring-0 text-neutral-50"
        />
        {submitAttempted && !formRef.current?.project.value.trim() && (
          <div className="empty-feedback invalid-feedback mt-1 text-sm text-red-400">
            Please enter a project name.
          </div>
        )}
      </div>
      <div className="mb-3">
        <textarea
          name="message"
          required
          placeholder="Tell us about your project"
          className="w-full rounded-md border border-neutral-700 bg-neutral-900 px-4 py-3 outline-none placeholder:text-neutral-400 focus:border-neutral-400 focus:ring-0 h-32 resize-none text-neutral-50"
        ></textarea>
        {submitAttempted && !formRef.current?.message.value.trim() && (
          <div className="empty-feedback invalid-feedback mt-1 text-sm text-red-400">
            Please enter a message.
          </div>
        )}
      </div>
      <div className="h-captcha" data-captcha="true"></div>
      <button
        type="submit"
        className={`button relative w-full transform overflow-hidden rounded-full border border-neutral-700 px-6 py-3 text-center transition duration-500 ${!isFormValid || isSubmitting ? 'bg-gray-500 text-neutral-400 cursor-not-allowed' : 'bg-blue-500 text-neutral-950 hover:text-neutral-50'}`}
        disabled={!isFormValid || isSubmitting}
      >
        <div className="group relative z-10">
          {isSubmitting ? "Sending..." : "Send Message"}
        </div>
      </button>
      <div id="result" className="mt-3 text-center text-neutral-50">
        {result}
      </div>
    </form>
  );
};

export default ContactForm;
