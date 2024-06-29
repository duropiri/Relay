const Packages = () => {
  return (
    <div className="mx-auto mt-16 max-w-2xl rounded-3xl border border-neutral-700 shadow-xl shadow-blue-500/20 sm:mt-20 lg:mx-0 lg:flex lg:max-w-none">
      <div className="p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0">
        <div className="h-full rounded-2xl border border-neutral-700 bg-neutral-900 py-10 text-center lg:mt-0 lg:flex lg:flex-col lg:justify-center lg:py-16">
          <div className="mx-auto flex max-w-xs flex-col px-8">
            <p className="flex items-baseline justify-center gap-x-2">
              <span className="text-7xl font-bold tracking-tight text-neutral-100">
                1995
              </span>
              <span className="text-lg -ml-0 font-semibold tracking-tight text-neutral-100 uppercase">
                usd
              </span>
              <span className="text-sm font-semibold leading-6 tracking-wide text-neutral-300">
                /page
              </span>
            </p>
            <a href="https://buy.stripe.com/3cs8wI6l16Z3dFK000">
              <button className="relative rounded-full text-center transition-all duration-500 transform overflow-hidden z-40   px-6 py-3 bg-blue-500 text-neutral-950 border border-blue-500 button hover:text-neutral-50 group mt-6 text-lg uppercase">
                <div className="group relative z-10 w-full">
                  Get Started
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    fill="currentColor"
                    viewBox="0 0 256 256"
                    className="ml-2 inline-block"
                  >
                    <path d="M200,64V168a8,8,0,0,1-16,0V83.31L69.66,197.66a8,8,0,0,1-11.32-11.32L172.69,72H88a8,8,0,0,1,0-16H192A8,8,0,0,1,200,64Z"></path>
                  </svg>
                </div>
              </button>
            </a>
            <p className="flex items-baseline justify-center gap-x-2 mt-3">
              <a
                onClick={() =>
                  sendGAEvent({
                    event: "buttonClicked",
                    value: "calendly",
                  })
                }
                href="https://calendly.com/relaydigitalyyc/discovery"
              >
                <span className="calendly text-sm font-semibold leading-6 tracking-wide text-neutral-400 hover:text-neutral-300 underline duration-300">
                  Book a call
                </span>
              </a>
            </p>
          </div>
        </div>
      </div>
      <div className="p-8 sm:p-10 lg:flex-auto">
        <h3 className=" text-3xl font-medium text-neutral-100">
          High Converting Landing Page
        </h3>
        <p className="mt-6 text-base leading-snug tracking-tight text-neutral-300">
          Every Page is custom designed and coded to your specifications.
          We&apos;ll work with you to get the perfect design for your business.
          We make sure that our sites are some of the fastest on the web, and
          we&apos;ll make sure that your site is optimized for search engines
          out of the box.
        </p>
        <div className="mt-10 flex items-center gap-x-4">
          <h4 className="text-md flex-none font-semibold leading-6 text-neutral-100">
            What&apos;s included
          </h4>
          <div className="h-px flex-auto bg-neutral-700"></div>
        </div>
        <ul
          role="list"
          className="mt-8 grid grid-cols-1 gap-4 text-sm leading-6 text-neutral-300 sm:grid-cols-2"
        >
          <li className="flex gap-x-2">
            <svg
              className="h-6 w-5 flex-none text-white"
              width="15"
              height="15"
              viewBox="0 0 15 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11.4669 3.72684C11.7558 3.91574 11.8369 4.30308 11.648 4.59198L7.39799 11.092C7.29783 11.2452 7.13556 11.3467 6.95402 11.3699C6.77247 11.3931 6.58989 11.3355 6.45446 11.2124L3.70446 8.71241C3.44905 8.48022 3.43023 8.08494 3.66242 7.82953C3.89461 7.57412 4.28989 7.55529 4.5453 7.78749L6.75292 9.79441L10.6018 3.90792C10.7907 3.61902 11.178 3.53795 11.4669 3.72684Z"
                fill="currentColor"
                fillRule="evenodd"
                clipRule="evenodd"
              ></path>
            </svg>
            Designed by a Professional Designer
          </li>
          <li className="flex gap-x-2">
            <svg
              className="h-6 w-5 flex-none text-white"
              width="15"
              height="15"
              viewBox="0 0 15 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11.4669 3.72684C11.7558 3.91574 11.8369 4.30308 11.648 4.59198L7.39799 11.092C7.29783 11.2452 7.13556 11.3467 6.95402 11.3699C6.77247 11.3931 6.58989 11.3355 6.45446 11.2124L3.70446 8.71241C3.44905 8.48022 3.43023 8.08494 3.66242 7.82953C3.89461 7.57412 4.28989 7.55529 4.5453 7.78749L6.75292 9.79441L10.6018 3.90792C10.7907 3.61902 11.178 3.53795 11.4669 3.72684Z"
                fill="currentColor"
                fillRule="evenodd"
                clipRule="evenodd"
              ></path>
            </svg>
            Custom Coded From Scratch
          </li>
          <li className="flex gap-x-2">
            <svg
              className="h-6 w-5 flex-none text-white"
              width="15"
              height="15"
              viewBox="0 0 15 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11.4669 3.72684C11.7558 3.91574 11.8369 4.30308 11.648 4.59198L7.39799 11.092C7.29783 11.2452 7.13556 11.3467 6.95402 11.3699C6.77247 11.3931 6.58989 11.3355 6.45446 11.2124L3.70446 8.71241C3.44905 8.48022 3.43023 8.08494 3.66242 7.82953C3.89461 7.57412 4.28989 7.55529 4.5453 7.78749L6.75292 9.79441L10.6018 3.90792C10.7907 3.61902 11.178 3.53795 11.4669 3.72684Z"
                fill="currentColor"
                fillRule="evenodd"
                clipRule="evenodd"
              ></path>
            </svg>
            Custom Animations
          </li>
          <li className="flex gap-x-2">
            <svg
              className="h-6 w-5 flex-none text-white"
              width="15"
              height="15"
              viewBox="0 0 15 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11.4669 3.72684C11.7558 3.91574 11.8369 4.30308 11.648 4.59198L7.39799 11.092C7.29783 11.2452 7.13556 11.3467 6.95402 11.3699C6.77247 11.3931 6.58989 11.3355 6.45446 11.2124L3.70446 8.71241C3.44905 8.48022 3.43023 8.08494 3.66242 7.82953C3.89461 7.57412 4.28989 7.55529 4.5453 7.78749L6.75292 9.79441L10.6018 3.90792C10.7907 3.61902 11.178 3.53795 11.4669 3.72684Z"
                fill="currentColor"
                fillRule="evenodd"
                clipRule="evenodd"
              ></path>
            </svg>
            Built To Convert
          </li>
          <li className="flex gap-x-2">
            <svg
              className="h-6 w-5 flex-none text-white"
              width="15"
              height="15"
              viewBox="0 0 15 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11.4669 3.72684C11.7558 3.91574 11.8369 4.30308 11.648 4.59198L7.39799 11.092C7.29783 11.2452 7.13556 11.3467 6.95402 11.3699C6.77247 11.3931 6.58989 11.3355 6.45446 11.2124L3.70446 8.71241C3.44905 8.48022 3.43023 8.08494 3.66242 7.82953C3.89461 7.57412 4.28989 7.55529 4.5453 7.78749L6.75292 9.79441L10.6018 3.90792C10.7907 3.61902 11.178 3.53795 11.4669 3.72684Z"
                fill="currentColor"
                fillRule="evenodd"
                clipRule="evenodd"
              ></path>
            </svg>
            Fastest Load Times On The Web
          </li>
          <li className="flex gap-x-2">
            <svg
              className="h-6 w-5 flex-none text-white"
              width="15"
              height="15"
              viewBox="0 0 15 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11.4669 3.72684C11.7558 3.91574 11.8369 4.30308 11.648 4.59198L7.39799 11.092C7.29783 11.2452 7.13556 11.3467 6.95402 11.3699C6.77247 11.3931 6.58989 11.3355 6.45446 11.2124L3.70446 8.71241C3.44905 8.48022 3.43023 8.08494 3.66242 7.82953C3.89461 7.57412 4.28989 7.55529 4.5453 7.78749L6.75292 9.79441L10.6018 3.90792C10.7907 3.61902 11.178 3.53795 11.4669 3.72684Z"
                fill="currentColor"
                fillRule="evenodd"
                clipRule="evenodd"
              ></path>
            </svg>
            Search Engine Optimized
          </li>
          <li className="flex gap-x-2">
            <svg
              className="h-6 w-5 flex-none text-white"
              width="15"
              height="15"
              viewBox="0 0 15 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11.4669 3.72684C11.7558 3.91574 11.8369 4.30308 11.648 4.59198L7.39799 11.092C7.29783 11.2452 7.13556 11.3467 6.95402 11.3699C6.77247 11.3931 6.58989 11.3355 6.45446 11.2124L3.70446 8.71241C3.44905 8.48022 3.43023 8.08494 3.66242 7.82953C3.89461 7.57412 4.28989 7.55529 4.5453 7.78749L6.75292 9.79441L10.6018 3.90792C10.7907 3.61902 11.178 3.53795 11.4669 3.72684Z"
                fill="currentColor"
                fillRule="evenodd"
                clipRule="evenodd"
              ></path>
            </svg>
            Up To x10 Sections
          </li>
          <li className="flex gap-x-2">
            <svg
              className="h-6 w-5 flex-none text-white"
              width="15"
              height="15"
              viewBox="0 0 15 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11.4669 3.72684C11.7558 3.91574 11.8369 4.30308 11.648 4.59198L7.39799 11.092C7.29783 11.2452 7.13556 11.3467 6.95402 11.3699C6.77247 11.3931 6.58989 11.3355 6.45446 11.2124L3.70446 8.71241C3.44905 8.48022 3.43023 8.08494 3.66242 7.82953C3.89461 7.57412 4.28989 7.55529 4.5453 7.78749L6.75292 9.79441L10.6018 3.90792C10.7907 3.61902 11.178 3.53795 11.4669 3.72684Z"
                fill="currentColor"
                fillRule="evenodd"
                clipRule="evenodd"
              ></path>
            </svg>
            Lighthouse Audit
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Packages;
