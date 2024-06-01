import React from "react";

export default function emailTemplate({
  name,
  email,
  phone,
  website,
  message,
}) {
  const ourWebsite = process.env.NEXT_PUBLIC_SITE_URL;
  return (
    <div className="flex min-h-[calc(100vh-20rem)] items-center justify-center bg-black">
      <div className="mt-16 text-center">
        <h1 className="bg-gradient-to-br from-neutral-100 from-55% to-neutral-500 bg-clip-text font-medium tracking-tight text-transparent lg:min-h-[20rem] lg:to-neutral-600">
          Thank You for Your <span className="text-blue-500">Contact</span>{" "}
          Request.
        </h1>
        <h2 className="mt-2  text-3xl font-medium tracking-tight text-white sm:text-6xl">
          <span className="bg-gradient-to-b from-neutral-50 from-60% to-neutral-400 bg-clip-text text-transparent lg:to-neutral-600">
            Hello {name}!
          </span>
        </h2>
        <p className="text-md mt-6 font-light text-neutral-300 md:text-lg">
          Thank you for reaching out to us. We have received your message and
          will get back to you as soon as possible. Here is a copy of your
          submission:
        </p>
        <div className="mb-5 rounded-xl border border-neutral-700 bg-neutral-950 p-5 shadow-xl md:p-8">
          <div>
            <div className="mb-5">
              <div className="w-full rounded-md border border-neutral-700 bg-neutral-900 px-4 py-3 outline-none placeholder:text-neutral-400 focus:border-neutral-400 focus:ring-0 text-neutral-50">
                {name}
              </div>
            </div>
            <div className="mb-5">
              <div className="w-full rounded-md border border-neutral-700 bg-neutral-900 px-4 py-3 outline-none placeholder:text-neutral-400 focus:border-neutral-400 focus:ring-0 text-neutral-50">
                {email}
              </div>
            </div>
            <div className="mb-5">
              <div className="w-full rounded-md border border-neutral-700 bg-neutral-900 px-4 py-3 outline-none placeholder:text-neutral-400 focus:border-neutral-400 focus:ring-0 text-neutral-50">
                {phone}
              </div>
            </div>
            <div className="mb-5">
              <div className="w-full rounded-md border border-neutral-700 bg-neutral-900 px-4 py-3 outline-none placeholder:text-neutral-400 focus:border-neutral-400 focus:ring-0 text-neutral-50">
                {website}
              </div>
            </div>
            <div className="mb-3">
              <div className="w-full rounded-md border border-neutral-700 bg-neutral-900 px-4 py-3 outline-none placeholder:text-neutral-400 focus:border-neutral-400 focus:ring-0 h-32 resize-none text-neutral-50">
                {message}
              </div>
            </div>
          </div>
        </div>
        <div className="mt-10 flex justify-center">
          <a> </a>
          <button className="relative rounded-full text-center transition-all duration-500 transform overflow-hidden z-40   px-6 py-3 text-base bg-blue-500 text-neutral-950 border border-blue-500 button hover:text-neutral-50  flex items-center justify-center uppercase">
            <a> </a>
            <div className="group relative z-10 w-full">
              <a> </a>
              <a href={ourWebsite}>
                Visit the website
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  viewBox="0 0 256 256"
                  className="ml-2 inline-block"
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
