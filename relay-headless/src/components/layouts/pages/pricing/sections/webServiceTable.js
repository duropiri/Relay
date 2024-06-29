const websiteServicePackages = [
    {
      name: "Sprint Start",
      price: 495,
      simpleLandingPage: true,
      upTo5Pages: false,
      upTo10Pages: false,
      moreThan10Pages: false,
      customOnlineStrategy: false,
      oneLandingPageTotal: true,
      upTo5PagesTotal: false,
      upTo10PagesTotal: false,
      customNumberOfPages: false,
      fifteenBusinessDayTurnaround: true,
      tenBusinessDayTurnaround: false,
      customTurnaroundTime: false,
      twoVariationsRevisions: true,
      sixVariationsRevisions: false,
      tenVariationsRevisions: false,
      customVariationsRevisions: false,
      basicSEOSetup: true,
      seoOptimization: false,
      enhancedSEOWithKeywordResearch: false,
      advancedSEOWithConversionOptimization: false,
      advancedSEOWithConversionFunnelAnalysis: false,
      analyticsIntegration: true,
      dedicatedAccountManager: false
    },
    {
      name: "Relay Ready",
      price: 995,
      simpleLandingPage: false,
      upTo5Pages: true,
      upTo10Pages: false,
      moreThan10Pages: false,
      customOnlineStrategy: false,
      oneLandingPageTotal: false,
      upTo5PagesTotal: true,
      upTo10PagesTotal: false,
      customNumberOfPages: false,
      fifteenBusinessDayTurnaround: false,
      tenBusinessDayTurnaround: true,
      customTurnaroundTime: false,
      twoVariationsRevisions: false,
      sixVariationsRevisions: true,
      tenVariationsRevisions: false,
      customVariationsRevisions: false,
      basicSEOSetup: false,
      seoOptimization: true,
      enhancedSEOWithKeywordResearch: false,
      advancedSEOWithConversionOptimization: false,
      advancedSEOWithConversionFunnelAnalysis: false,
      analyticsIntegration: true,
      dedicatedAccountManager: true
    },
    {
      name: "Mid-Relay Boost",
      price: 1495,
      simpleLandingPage: false,
      upTo5Pages: false,
      upTo10Pages: true,
      moreThan10Pages: false,
      customOnlineStrategy: false,
      oneLandingPageTotal: false,
      upTo5PagesTotal: false,
      upTo10PagesTotal: true,
      customNumberOfPages: false,
      fifteenBusinessDayTurnaround: false,
      tenBusinessDayTurnaround: true,
      customTurnaroundTime: false,
      twoVariationsRevisions: false,
      sixVariationsRevisions: false,
      tenVariationsRevisions: true,
      customVariationsRevisions: false,
      basicSEOSetup: false,
      seoOptimization: false,
      enhancedSEOWithKeywordResearch: true,
      advancedSEOWithConversionOptimization: false,
      advancedSEOWithConversionFunnelAnalysis: false,
      analyticsIntegration: true,
      dedicatedAccountManager: true
    },
    {
      name: "Anchor Leg Advantage",
      price: 1995,
      simpleLandingPage: false,
      upTo5Pages: false,
      upTo10Pages: false,
      moreThan10Pages: true,
      customOnlineStrategy: false,
      oneLandingPageTotal: false,
      upTo5PagesTotal: false,
      upTo10PagesTotal: false,
      customNumberOfPages: true,
      fifteenBusinessDayTurnaround: false,
      tenBusinessDayTurnaround: true,
      customTurnaroundTime: false,
      twoVariationsRevisions: false,
      sixVariationsRevisions: false,
      tenVariationsRevisions: false,
      customVariationsRevisions: true,
      basicSEOSetup: false,
      seoOptimization: false,
      enhancedSEOWithKeywordResearch: false,
      advancedSEOWithConversionOptimization: true,
      advancedSEOWithConversionFunnelAnalysis: false,
      analyticsIntegration: true,
      dedicatedAccountManager: true
    },
    {
      name: "Victory Lap",
      price: "Custom Pricing",
      simpleLandingPage: false,
      upTo5Pages: false,
      upTo10Pages: false,
      moreThan10Pages: true,
      customOnlineStrategy: true,
      oneLandingPageTotal: false,
      upTo5PagesTotal: false,
      upTo10PagesTotal: false,
      customNumberOfPages: true,
      fifteenBusinessDayTurnaround: false,
      tenBusinessDayTurnaround: false,
      customTurnaroundTime: true,
      twoVariationsRevisions: false,
      sixVariationsRevisions: false,
      tenVariationsRevisions: false,
      customVariationsRevisions: true,
      basicSEOSetup: false,
      seoOptimization: false,
      enhancedSEOWithKeywordResearch: false,
      advancedSEOWithConversionOptimization: false,
      advancedSEOWithConversionFunnelAnalysis: true,
      analyticsIntegration: true,
      dedicatedAccountManager: true
    }
  ];
  

const WebServiceTable = () => {
  return (
    <>
      <div className="py-24 sm:py-32" id="hosting">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h3 className="text-start  text-3xl text-neutral-50 sm:text-4xl lg:text-5xl">
            Website Service Packages
          </h3>
          <p className="mt-4 text-start text-lg text-neutral-300">
            We offer a variety of website services to not only get your website
            online, but to also help grow your business.
          </p>
          {/* Mobile View */}
          <div className="mx-auto mt-12 max-w-none space-y-8 sm:mt-16 lg:hidden ">
            <section className="ring-1 ring-inset ring-white/10 rounded-3xl p-8 xl:p-10">
              <h3
                id="tier-essential"
                className="text-sm font-semibold leading-6 text-white"
              >
                Essential
              </h3>
              <p className="mt-2 flex items-baseline gap-x-1">
                <span className="text-4xl font-bold text-white">99</span>
                <span className="text-lg -ml-0 font-semibold tracking-tight text-neutral-100 uppercase">
                  usd
                </span>
                <span className="text-sm text-neutral-300">/month</span>
              </p>
              <a
                href="https://buy.stripe.com/cN200c8t9bfj59e4gh"
                aria-describedby="tier-essential"
                className="bg-white/10 text-white hover:bg-white/20 focus-visible:outline-white mt-6 block rounded-full px-3 py-2.5 text-center text-sm font-semibold leading-6 transition-colors duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
              >
                Buy plan
              </a>
              <p className="flex items-baseline justify-center gap-x-2 mt-3">
                <a
                  onClick={() =>
                    sendGAEvent({ event: "buttonClicked", value: "calendly" })
                  }
                  href="https://calendly.com/relaydigitalyyc/discovery"
                >
                  <span className="calendly text-sm font-semibold leading-6 tracking-wide text-neutral-400 hover:text-neutral-300 underline duration-300">
                    Book a call
                  </span>
                </a>
              </p>
              <ul
                role="list"
                className="mt-10 space-y-4 text-sm leading-6 text-white"
              >
                <li>
                  <ul role="list" className="space-y-4">
                    <li className="flex gap-x-3">
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
                      <span> 24/7 Web Hosting </span>
                    </li>
                    <li className="flex gap-x-3">
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
                      <span> HTTPS/SSL Security </span>
                    </li>
                    <li className="flex gap-x-3">
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
                      <span> DDos Mitigation </span>
                    </li>
                    <li className="flex gap-x-3">
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
                      <span>
                        Bandwidth
                        <span className="text-sm leading-6 text-neutral-400">
                          (10 GB)
                        </span>
                      </span>
                    </li>
                  </ul>
                </li>
                <li>
                  <ul role="list" className="space-y-4">
                    <li className="flex gap-x-3">
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
                      <span> Support Resources </span>
                    </li>
                    <li className="flex gap-x-3">
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
                      <span> Email Support </span>
                    </li>
                  </ul>
                </li>
                <li>
                  <ul role="list" className="space-y-4">
                    <li className="flex gap-x-3">
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
                      <span> Basic Website Insights </span>
                    </li>
                    <li className="flex gap-x-3">
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
                      <span> Google Analytics Integration </span>
                    </li>
                    <li className="flex gap-x-3">
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
                      <span> Microsoft Clarity Integration </span>
                    </li>
                  </ul>
                </li>
                <li>
                  <ul role="list" className="space-y-4">
                    <li className="flex gap-x-3">
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
                      <span> Automatic Updates </span>
                    </li>
                    <li className="flex gap-x-3">
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
                      <span> Flexible CMS </span>
                    </li>
                  </ul>
                </li>
                <li>
                  <ul role="list" className="space-y-4"></ul>
                </li>
                <li>
                  <ul role="list" className="space-y-4"></ul>
                </li>
              </ul>
            </section>
            <section className="bg-white/5 ring-1 ring-inset ring-white/10 rounded-3xl p-8 xl:p-10">
              <h3
                id="tier-cro"
                className="text-sm font-semibold leading-6 text-white"
              >
                Conversion Rate Optimisation
              </h3>
              <p className="mt-2 flex items-baseline gap-x-1">
                <span className="text-4xl font-bold text-white">495</span>
                <span className="text-lg -ml-0 font-semibold tracking-tight text-neutral-100 uppercase">
                  usd
                </span>
                <span className="text-sm text-neutral-300">/month</span>
              </p>
              <a
                href="https://buy.stripe.com/eVa7sE9xd1EJbxC8wy"
                aria-describedby="tier-cro"
                className="border border-neutral-700 bg-neutral-50 text-neutral-800 shadow-sm hover:bg-white  mt-6 block rounded-full px-3 py-2.5 text-center text-sm font-semibold leading-6 transition-colors duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
              >
                Buy plan
              </a>
              <p className="flex items-baseline justify-center gap-x-2 mt-3">
                <a
                  onClick={() =>
                    sendGAEvent({ event: "buttonClicked", value: "calendly" })
                  }
                  href="https://calendly.com/relaydigitalyyc/discovery"
                >
                  <span className="calendly text-sm font-semibold leading-6 tracking-wide text-neutral-400 hover:text-neutral-300 underline duration-300">
                    Book a call
                  </span>
                </a>
              </p>
              <ul
                role="list"
                className="mt-10 space-y-4 text-sm leading-6 text-white"
              >
                <li>
                  <ul role="list" className="space-y-4">
                    <li className="flex gap-x-3">
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
                      <span> 24/7 Web Hosting </span>
                    </li>
                    <li className="flex gap-x-3">
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
                      <span> HTTPS/SSL Security </span>
                    </li>
                    <li className="flex gap-x-3">
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
                      <span> DDos Mitigation </span>
                    </li>
                    <li className="flex gap-x-3">
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
                      <span>
                        Bandwidth
                        <span className="text-sm leading-6 text-neutral-400">
                          (100 GB)
                        </span>
                      </span>
                    </li>
                  </ul>
                </li>
                <li>
                  <ul role="list" className="space-y-4">
                    <li className="flex gap-x-3">
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
                      <span> Support Resources </span>
                    </li>
                    <li className="flex gap-x-3">
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
                      <span> Email Support </span>
                    </li>
                    <li className="flex gap-x-3">
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
                      <span> Priority Support </span>
                    </li>
                    <li className="flex gap-x-3">
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
                      <span> Dedicated Account Manager </span>
                    </li>
                  </ul>
                </li>
                <li>
                  <ul role="list" className="space-y-4">
                    <li className="flex gap-x-3">
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
                      <span> Basic Website Insights </span>
                    </li>
                    <li className="flex gap-x-3">
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
                      <span> Google Analytics Integration </span>
                    </li>
                    <li className="flex gap-x-3">
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
                      <span> Microsoft Clarity Integration </span>
                    </li>
                    <li className="flex gap-x-3">
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
                      <span> Website Heatmaps </span>
                    </li>
                    <li className="flex gap-x-3">
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
                      <span> Advanced Website Insights </span>
                    </li>
                  </ul>
                </li>
                <li>
                  <ul role="list" className="space-y-4">
                    <li className="flex gap-x-3">
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
                      <span> Automatic Updates </span>
                    </li>
                    <li className="flex gap-x-3">
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
                      <span> Flexible CMS </span>
                    </li>
                    <li className="flex gap-x-3">
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
                      <span> Website Backups </span>
                    </li>
                    <li className="flex gap-x-3">
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
                      <span> 2 Hours Of Website Updates </span>
                    </li>
                  </ul>
                </li>
                <li>
                  <ul role="list" className="space-y-4">
                    <li className="flex gap-x-3">
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
                      <span> A/B Testing </span>
                    </li>
                    <li className="flex gap-x-3">
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
                      <span> Heatmap Analysis </span>
                    </li>
                    <li className="flex gap-x-3">
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
                      <span> User Session Recordings </span>
                    </li>
                    <li className="flex gap-x-3">
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
                      <span> Conversion Funnel Analysis </span>
                    </li>
                    <li className="flex gap-x-3">
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
                      <span> Conversion Rate Analysis </span>
                    </li>
                  </ul>
                </li>
                <li>
                  <ul role="list" className="space-y-4"></ul>
                </li>
              </ul>
            </section>
            <section className="ring-1 ring-inset ring-white/10 rounded-3xl p-8 xl:p-10">
              <h3
                id="tier-maintain"
                className="text-sm font-semibold leading-6 text-white"
              >
                CRO + Development
              </h3>
              <p className="mt-2 flex items-baseline gap-x-1">
                <span className="text-4xl font-bold text-white">1995</span>
                <span className="text-lg -ml-0 font-semibold tracking-tight text-neutral-100 uppercase">
                  usd
                </span>
                <span className="text-sm text-neutral-300">/month</span>
              </p>
              <a
                href="https://buy.stripe.com/8wMfZa5gX97b316eUX"
                aria-describedby="tier-maintain"
                className="bg-white/10 text-white hover:bg-white/20 focus-visible:outline-white mt-6 block rounded-full px-3 py-2.5 text-center text-sm font-semibold leading-6 transition-colors duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
              >
                Buy plan
              </a>
              <p className="flex items-baseline justify-center gap-x-2 mt-3">
                <a
                  onClick={() =>
                    sendGAEvent({ event: "buttonClicked", value: "calendly" })
                  }
                  href="https://calendly.com/relaydigitalyyc/discovery"
                >
                  <span className="calendly text-sm font-semibold leading-6 tracking-wide text-neutral-400 hover:text-neutral-300 underline duration-300">
                    Book a call
                  </span>
                </a>
              </p>
              <ul
                role="list"
                className="mt-10 space-y-4 text-sm leading-6 text-white"
              >
                <li>
                  <ul role="list" className="space-y-4">
                    <li className="flex gap-x-3">
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
                      <span> 24/7 Web Hosting </span>
                    </li>
                    <li className="flex gap-x-3">
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
                      <span> HTTPS/SSL Security </span>
                    </li>
                    <li className="flex gap-x-3">
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
                      <span> DDos Mitigation </span>
                    </li>
                    <li className="flex gap-x-3">
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
                      <span>
                        Bandwidth
                        <span className="text-sm leading-6 text-neutral-400">
                          (100GB)
                        </span>
                      </span>
                    </li>
                  </ul>
                </li>
                <li>
                  <ul role="list" className="space-y-4">
                    <li className="flex gap-x-3">
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
                      <span> Support Resources </span>
                    </li>
                    <li className="flex gap-x-3">
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
                      <span> Email Support </span>
                    </li>
                    <li className="flex gap-x-3">
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
                      <span> Priority Support </span>
                    </li>
                    <li className="flex gap-x-3">
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
                      <span> Dedicated Account Manager </span>
                    </li>
                  </ul>
                </li>
                <li>
                  <ul role="list" className="space-y-4">
                    <li className="flex gap-x-3">
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
                      <span> Basic Website Insights </span>
                    </li>
                    <li className="flex gap-x-3">
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
                      <span> Google Analytics Integration </span>
                    </li>
                    <li className="flex gap-x-3">
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
                      <span> Microsoft Clarity Integration </span>
                    </li>
                    <li className="flex gap-x-3">
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
                      <span> Website Heatmaps </span>
                    </li>
                    <li className="flex gap-x-3">
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
                      <span> Advanced Website Insights </span>
                    </li>
                  </ul>
                </li>
                <li>
                  <ul role="list" className="space-y-4">
                    <li className="flex gap-x-3">
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
                      <span> Automatic Updates </span>
                    </li>
                    <li className="flex gap-x-3">
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
                      <span> Flexible CMS </span>
                    </li>
                    <li className="flex gap-x-3">
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
                      <span> Website Backups </span>
                    </li>
                    <li className="flex gap-x-3">
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
                      <span> 2 Hours Of Website Updates </span>
                    </li>
                  </ul>
                </li>
                <li>
                  <ul role="list" className="space-y-4">
                    <li className="flex gap-x-3">
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
                      <span> A/B Testing </span>
                    </li>
                    <li className="flex gap-x-3">
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
                      <span> Heatmap Analysis </span>
                    </li>
                    <li className="flex gap-x-3">
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
                      <span> User Session Recordings </span>
                    </li>
                    <li className="flex gap-x-3">
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
                      <span> Conversion Funnel Analysis </span>
                    </li>
                    <li className="flex gap-x-3">
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
                      <span> Conversion Rate Analysis </span>
                    </li>
                  </ul>
                </li>
                <li>
                  <ul role="list" className="space-y-4">
                    <li className="flex gap-x-3">
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
                      <span> 10 Hours Of Development </span>
                    </li>
                    <li className="flex gap-x-3">
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
                      <span> Custom Feature Development </span>
                    </li>
                    <li className="flex gap-x-3">
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
                      <span> Custom Plugin Development </span>
                    </li>
                    <li className="flex gap-x-3">
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
                      <span> Custom Theme Development </span>
                    </li>
                    <li className="flex gap-x-3">
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
                      <span> Custom API Integrations </span>
                    </li>
                  </ul>
                </li>
              </ul>
            </section>
          </div>
          {/* Desktop View */}
          <div className="isolate mt-20 hidden rounded-3xl border border-neutral-700 bg-neutral-950 p-6 lg:block">
            <div className="relative -mx-8">
              {/* Colored Column */}
              <div className="absolute inset-x-4 inset-y-0 -z-10 flex">
                <div className="flex w-1/4 px-4" aria-hidden="true">
                  <div className="w-full rounded-t-xl rounded-b-xl border-x border-y border-white/10 bg-white/5"></div>
                </div>
              </div>
              {/* Price Table */}
              <table className="w-full table-fixed border-separate border-spacing-x-8 text-left px-2">
                <caption className="sr-only">Pricing plan comparison</caption>
                {/* <colgroup>
              <col className="w-1/4" /> <col className="w-1/4" />
              <col className="w-1/4" /> <col className="w-1/4" />
            </colgroup> */}
                {/* Table Head */}
                <thead>
                  <tr>
                    <td></td>
                    <th scope="col" className="px-6 pt-6 xl:px-8 xl:pt-8">
                      <div className="text-sm font-semibold leading-7 text-white text-nowrap">
                        Essential
                      </div>
                    </th>
                    <th scope="col" className="px-6 pt-6 xl:px-8 xl:pt-8">
                      <div className="text-sm font-semibold leading-7 text-white text-nowrap">
                        Conversion Rate Optimisation
                      </div>
                    </th>
                    <th scope="col" className="px-6 pt-6 xl:px-8 xl:pt-8">
                      <div className="text-sm font-semibold leading-7 text-white text-nowrap">
                        CRO + Development
                      </div>
                    </th>
                  </tr>
                </thead>
                {/* Table Body */}
                <tbody>
                  {/* Price and CTA Buttons */}
                  <tr>
                    <th scope="row">
                      <span className="sr-only">Price</span>
                    </th>
                    <td className="px-6 pt-2 xl:px-8">
                      <div className="flex items-baseline gap-x-1 text-white">
                        <span className="text-4xl font-bold">99</span>
                        <span className="text-lg -ml-0 font-semibold tracking-tight text-neutral-100 uppercase">
                          usd
                        </span>
                        <span className="text-sm leading-6">/month</span>
                      </div>
                      <a
                        href="https://buy.stripe.com/cN200c8t9bfj59e4gh"
                        aria-describedby="tier-essential"
                        className="bg-white/10 text-white hover:bg-white/20 focus-visible:outline-white  mt-6 block rounded-full px-3 py-2 text-center text-sm font-semibold leading-6 transition-colors duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
                      >
                        Buy plan
                      </a>
                    </td>
                    <td className="px-6 pt-2 xl:px-8">
                      <div className="flex items-baseline gap-x-1 text-white">
                        <span className="text-4xl font-bold">495</span>
                        <span className="text-lg -ml-0 font-semibold tracking-tight text-neutral-100 uppercase">
                          usd
                        </span>
                        <span className="text-sm leading-6">/month</span>
                      </div>
                      <a
                        href="https://buy.stripe.com/eVa7sE9xd1EJbxC8wy"
                        aria-describedby="tier-cro"
                        className="border border-neutral-700/20 bg-neutral-50 text-neutral-800 shadow-lg shadow-white/40 transition-all duration-200 hover:bg-neutral-400 hover:shadow-neutral-400  mt-6 block rounded-full px-3 py-2 text-center text-sm font-semibold leading-6 transition-colors duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
                      >
                        Buy plan
                      </a>
                    </td>
                    <td className="px-6 pt-2 xl:px-8">
                      <div className="flex items-baseline gap-x-1 text-white">
                        <span className="text-4xl font-bold">1995</span>
                        <span className="text-lg -ml-0 font-semibold tracking-tight text-neutral-100 uppercase">
                          usd
                        </span>
                        <span className="text-sm leading-6">/month</span>
                      </div>
                      <a
                        href="https://buy.stripe.com/8wMfZa5gX97b316eUX"
                        aria-describedby="tier-maintain"
                        className="bg-white/10 text-white hover:bg-white/20 focus-visible:outline-white  mt-6 block rounded-full px-3 py-2 text-center text-sm font-semibold leading-6 transition-colors duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
                      >
                        Buy plan
                      </a>
                    </td>
                  </tr>

                  {/* Hosting */}
                  <>
                    <tr>
                      <th
                        scope="colgroup"
                        colSpan="4"
                        className="pt-8 pb-4 text-sm font-semibold leading-6 text-white"
                      >
                        Hosting
                        <div className="absolute inset-x-8 mt-4 h-px bg-white/10"></div>
                      </th>
                    </tr>
                    <tr>
                      <th
                        scope="row"
                        className="py-4 text-sm font-normal leading-6 text-white"
                      >
                        24/7 Web Hosting
                        <div className="absolute inset-x-8 mt-4 h-px bg-white/5"></div>
                      </th>
                      <td className="px-6 py-4 xl:px-8">
                        <svg
                          className="mx-auto h-5 w-5 text-white"
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
                        <span className="sr-only"> Included in Essential </span>
                      </td>
                      <td className="px-6 py-4 xl:px-8">
                        <svg
                          className="mx-auto h-5 w-5 text-white"
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
                        <span className="sr-only">
                          Included in Conversion Rate Optimisation
                        </span>
                      </td>
                      <td className="px-6 py-4 xl:px-8">
                        <svg
                          className="mx-auto h-5 w-5 text-white"
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
                        <span className="sr-only">
                          Included in CRO + Development
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <th
                        scope="row"
                        className="py-4 text-sm font-normal leading-6 text-white"
                      >
                        HTTPS/SSL Security
                        <div className="absolute inset-x-8 mt-4 h-px bg-white/5"></div>
                      </th>
                      <td className="px-6 py-4 xl:px-8">
                        <svg
                          className="mx-auto h-5 w-5 text-white"
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
                        <span className="sr-only"> Included in Essential </span>
                      </td>
                      <td className="px-6 py-4 xl:px-8">
                        <svg
                          className="mx-auto h-5 w-5 text-white"
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
                        <span className="sr-only">
                          Included in Conversion Rate Optimisation
                        </span>
                      </td>
                      <td className="px-6 py-4 xl:px-8">
                        <svg
                          className="mx-auto h-5 w-5 text-white"
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
                        <span className="sr-only">
                          Included in CRO + Development
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <th
                        scope="row"
                        className="py-4 text-sm font-normal leading-6 text-white"
                      >
                        DDos Mitigation
                        <div className="absolute inset-x-8 mt-4 h-px bg-white/5"></div>
                      </th>
                      <td className="px-6 py-4 xl:px-8">
                        <svg
                          className="mx-auto h-5 w-5 text-white"
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
                        <span className="sr-only"> Included in Essential </span>
                      </td>
                      <td className="px-6 py-4 xl:px-8">
                        <svg
                          className="mx-auto h-5 w-5 text-white"
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
                        <span className="sr-only">
                          Included in Conversion Rate Optimisation
                        </span>
                      </td>
                      <td className="px-6 py-4 xl:px-8">
                        <svg
                          className="mx-auto h-5 w-5 text-white"
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
                        <span className="sr-only">
                          Included in CRO + Development
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <th
                        scope="row"
                        className="py-4 text-sm font-normal leading-6 text-white"
                      >
                        Bandwidth
                        <div className="absolute inset-x-8 mt-4 h-px bg-white/5"></div>
                      </th>
                      <td className="px-6 py-4 xl:px-8">
                        <div className="text-center text-sm leading-6 text-neutral-300">
                          10 GB
                        </div>
                      </td>
                      <td className="px-6 py-4 xl:px-8">
                        <div className="text-center text-sm leading-6 text-neutral-300">
                          100 GB
                        </div>
                      </td>
                      <td className="px-6 py-4 xl:px-8">
                        <div className="text-center text-sm leading-6 text-neutral-300">
                          100GB
                        </div>
                      </td>
                    </tr>
                  </>
                  {/* Support */}
                  <>
                    <tr>
                      <th
                        scope="colgroup"
                        colSpan="4"
                        className="pt-16 pb-4 text-sm font-semibold leading-6 text-white"
                      >
                        Support
                        <div className="absolute inset-x-8 mt-4 h-px bg-white/10"></div>
                      </th>
                    </tr>
                    <tr>
                      <th
                        scope="row"
                        className="py-4 text-sm font-normal leading-6 text-white"
                      >
                        Support Resources
                        <div className="absolute inset-x-8 mt-4 h-px bg-white/5"></div>
                      </th>
                      <td className="px-6 py-4 xl:px-8">
                        <svg
                          className="mx-auto h-5 w-5 text-white"
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
                        <span className="sr-only"> Included in Essential </span>
                      </td>
                      <td className="px-6 py-4 xl:px-8">
                        <svg
                          className="mx-auto h-5 w-5 text-white"
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
                        <span className="sr-only">
                          Included in Conversion Rate Optimisation
                        </span>
                      </td>
                      <td className="px-6 py-4 xl:px-8">
                        <svg
                          className="mx-auto h-5 w-5 text-white"
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
                        <span className="sr-only">
                          Included in CRO + Development
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <th
                        scope="row"
                        className="py-4 text-sm font-normal leading-6 text-white"
                      >
                        Email Support
                        <div className="absolute inset-x-8 mt-4 h-px bg-white/5"></div>
                      </th>
                      <td className="px-6 py-4 xl:px-8">
                        <svg
                          className="mx-auto h-5 w-5 text-white"
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
                        <span className="sr-only"> Included in Essential </span>
                      </td>
                      <td className="px-6 py-4 xl:px-8">
                        <svg
                          className="mx-auto h-5 w-5 text-white"
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
                        <span className="sr-only">
                          Included in Conversion Rate Optimisation
                        </span>
                      </td>
                      <td className="px-6 py-4 xl:px-8">
                        <svg
                          className="mx-auto h-5 w-5 text-white"
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
                        <span className="sr-only">
                          Included in CRO + Development
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <th
                        scope="row"
                        className="py-4 text-sm font-normal leading-6 text-white"
                      >
                        Priority Support
                        <div className="absolute inset-x-8 mt-4 h-px bg-white/5"></div>
                      </th>
                      <td className="px-6 py-4 xl:px-8">
                        <svg
                          className="mx-auto h-5 w-5 text-neutral-400"
                          width="15"
                          height="15"
                          viewBox="0 0 15 15"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M2.25 7.5C2.25 7.22386 2.47386 7 2.75 7H12.25C12.5261 7 12.75 7.22386 12.75 7.5C12.75 7.77614 12.5261 8 12.25 8H2.75C2.47386 8 2.25 7.77614 2.25 7.5Z"
                            fill="currentColor"
                            fillRule="evenodd"
                            clipRule="evenodd"
                          ></path>
                        </svg>
                        <span className="sr-only">
                          Not included in Essential
                        </span>
                      </td>
                      <td className="px-6 py-4 xl:px-8">
                        <svg
                          className="mx-auto h-5 w-5 text-white"
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
                        <span className="sr-only">
                          Included in Conversion Rate Optimisation
                        </span>
                      </td>
                      <td className="px-6 py-4 xl:px-8">
                        <svg
                          className="mx-auto h-5 w-5 text-white"
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
                        <span className="sr-only">
                          Included in CRO + Development
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <th
                        scope="row"
                        className="py-4 text-sm font-normal leading-6 text-white"
                      >
                        Dedicated Account Manager
                        <div className="absolute inset-x-8 mt-4 h-px bg-white/5"></div>
                      </th>
                      <td className="px-6 py-4 xl:px-8">
                        <svg
                          className="mx-auto h-5 w-5 text-neutral-400"
                          width="15"
                          height="15"
                          viewBox="0 0 15 15"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M2.25 7.5C2.25 7.22386 2.47386 7 2.75 7H12.25C12.5261 7 12.75 7.22386 12.75 7.5C12.75 7.77614 12.5261 8 12.25 8H2.75C2.47386 8 2.25 7.77614 2.25 7.5Z"
                            fill="currentColor"
                            fillRule="evenodd"
                            clipRule="evenodd"
                          ></path>
                        </svg>
                        <span className="sr-only">
                          Not included in Essential
                        </span>
                      </td>
                      <td className="px-6 py-4 xl:px-8">
                        <svg
                          className="mx-auto h-5 w-5 text-white"
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
                        <span className="sr-only">
                          Included in Conversion Rate Optimisation
                        </span>
                      </td>
                      <td className="px-6 py-4 xl:px-8">
                        <svg
                          className="mx-auto h-5 w-5 text-white"
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
                        <span className="sr-only">
                          Included in CRO + Development
                        </span>
                      </td>
                    </tr>
                  </>
                  {/* Reporting */}
                  <>
                    <tr>
                      <th
                        scope="colgroup"
                        colSpan="4"
                        className="pt-16 pb-4 text-sm font-semibold leading-6 text-white"
                      >
                        Reporting
                        <div className="absolute inset-x-8 mt-4 h-px bg-white/10"></div>
                      </th>
                    </tr>
                    <tr>
                      <th
                        scope="row"
                        className="py-4 text-sm font-normal leading-6 text-white"
                      >
                        Basic Website Insights
                        <div className="absolute inset-x-8 mt-4 h-px bg-white/5"></div>
                      </th>
                      <td className="px-6 py-4 xl:px-8">
                        <svg
                          className="mx-auto h-5 w-5 text-white"
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
                        <span className="sr-only"> Included in Essential </span>
                      </td>
                      <td className="px-6 py-4 xl:px-8">
                        <svg
                          className="mx-auto h-5 w-5 text-white"
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
                        <span className="sr-only">
                          Included in Conversion Rate Optimisation
                        </span>
                      </td>
                      <td className="px-6 py-4 xl:px-8">
                        <svg
                          className="mx-auto h-5 w-5 text-white"
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
                        <span className="sr-only">
                          Included in CRO + Development
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <th
                        scope="row"
                        className="py-4 text-sm font-normal leading-6 text-white"
                      >
                        Google Analytics Integration
                        <div className="absolute inset-x-8 mt-4 h-px bg-white/5"></div>
                      </th>
                      <td className="px-6 py-4 xl:px-8">
                        <svg
                          className="mx-auto h-5 w-5 text-white"
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
                        <span className="sr-only"> Included in Essential </span>
                      </td>
                      <td className="px-6 py-4 xl:px-8">
                        <svg
                          className="mx-auto h-5 w-5 text-white"
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
                        <span className="sr-only">
                          Included in Conversion Rate Optimisation
                        </span>
                      </td>
                      <td className="px-6 py-4 xl:px-8">
                        <svg
                          className="mx-auto h-5 w-5 text-white"
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
                        <span className="sr-only">
                          Included in CRO + Development
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <th
                        scope="row"
                        className="py-4 text-sm font-normal leading-6 text-white"
                      >
                        Microsoft Clarity Integration
                        <div className="absolute inset-x-8 mt-4 h-px bg-white/5"></div>
                      </th>
                      <td className="px-6 py-4 xl:px-8">
                        <svg
                          className="mx-auto h-5 w-5 text-white"
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
                        <span className="sr-only"> Included in Essential </span>
                      </td>
                      <td className="px-6 py-4 xl:px-8">
                        <svg
                          className="mx-auto h-5 w-5 text-white"
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
                        <span className="sr-only">
                          Included in Conversion Rate Optimisation
                        </span>
                      </td>
                      <td className="px-6 py-4 xl:px-8">
                        <svg
                          className="mx-auto h-5 w-5 text-white"
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
                        <span className="sr-only">
                          Included in CRO + Development
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <th
                        scope="row"
                        className="py-4 text-sm font-normal leading-6 text-white"
                      >
                        Website Heatmaps
                        <div className="absolute inset-x-8 mt-4 h-px bg-white/5"></div>
                      </th>
                      <td className="px-6 py-4 xl:px-8">
                        <svg
                          className="mx-auto h-5 w-5 text-neutral-400"
                          width="15"
                          height="15"
                          viewBox="0 0 15 15"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M2.25 7.5C2.25 7.22386 2.47386 7 2.75 7H12.25C12.5261 7 12.75 7.22386 12.75 7.5C12.75 7.77614 12.5261 8 12.25 8H2.75C2.47386 8 2.25 7.77614 2.25 7.5Z"
                            fill="currentColor"
                            fillRule="evenodd"
                            clipRule="evenodd"
                          ></path>
                        </svg>
                        <span className="sr-only">
                          Not included in Essential
                        </span>
                      </td>
                      <td className="px-6 py-4 xl:px-8">
                        <svg
                          className="mx-auto h-5 w-5 text-white"
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
                        <span className="sr-only">
                          Included in Conversion Rate Optimisation
                        </span>
                      </td>
                      <td className="px-6 py-4 xl:px-8">
                        <svg
                          className="mx-auto h-5 w-5 text-white"
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
                        <span className="sr-only">
                          Included in CRO + Development
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <th
                        scope="row"
                        className="py-4 text-sm font-normal leading-6 text-white"
                      >
                        Advanced Website Insights
                        <div className="absolute inset-x-8 mt-4 h-px bg-white/5"></div>
                      </th>
                      <td className="px-6 py-4 xl:px-8">
                        <svg
                          className="mx-auto h-5 w-5 text-neutral-400"
                          width="15"
                          height="15"
                          viewBox="0 0 15 15"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M2.25 7.5C2.25 7.22386 2.47386 7 2.75 7H12.25C12.5261 7 12.75 7.22386 12.75 7.5C12.75 7.77614 12.5261 8 12.25 8H2.75C2.47386 8 2.25 7.77614 2.25 7.5Z"
                            fill="currentColor"
                            fillRule="evenodd"
                            clipRule="evenodd"
                          ></path>
                        </svg>
                        <span className="sr-only">
                          Not included in Essential
                        </span>
                      </td>
                      <td className="px-6 py-4 xl:px-8">
                        <svg
                          className="mx-auto h-5 w-5 text-white"
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
                        <span className="sr-only">
                          Included in Conversion Rate Optimisation
                        </span>
                      </td>
                      <td className="px-6 py-4 xl:px-8">
                        <svg
                          className="mx-auto h-5 w-5 text-white"
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
                        <span className="sr-only">
                          Included in CRO + Development
                        </span>
                      </td>
                    </tr>
                  </>
                  {/* Maintenance */}
                  <>
                    <tr>
                      <th
                        scope="colgroup"
                        colSpan="4"
                        className="pt-16 pb-4 text-sm font-semibold leading-6 text-white"
                      >
                        Maintenance
                        <div className="absolute inset-x-8 mt-4 h-px bg-white/10"></div>
                      </th>
                    </tr>
                    <tr>
                      <th
                        scope="row"
                        className="py-4 text-sm font-normal leading-6 text-white"
                      >
                        Automatic Updates
                        <div className="absolute inset-x-8 mt-4 h-px bg-white/5"></div>
                      </th>
                      <td className="px-6 py-4 xl:px-8">
                        <svg
                          className="mx-auto h-5 w-5 text-white"
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
                        <span className="sr-only"> Included in Essential </span>
                      </td>
                      <td className="px-6 py-4 xl:px-8">
                        <svg
                          className="mx-auto h-5 w-5 text-white"
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
                        <span className="sr-only">
                          Included in Conversion Rate Optimisation
                        </span>
                      </td>
                      <td className="px-6 py-4 xl:px-8">
                        <svg
                          className="mx-auto h-5 w-5 text-white"
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
                        <span className="sr-only">
                          Included in CRO + Development
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <th
                        scope="row"
                        className="py-4 text-sm font-normal leading-6 text-white"
                      >
                        Flexible CMS
                        <div className="absolute inset-x-8 mt-4 h-px bg-white/5"></div>
                      </th>
                      <td className="px-6 py-4 xl:px-8">
                        <svg
                          className="mx-auto h-5 w-5 text-white"
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
                        <span className="sr-only"> Included in Essential </span>
                      </td>
                      <td className="px-6 py-4 xl:px-8">
                        <svg
                          className="mx-auto h-5 w-5 text-white"
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
                        <span className="sr-only">
                          Included in Conversion Rate Optimisation
                        </span>
                      </td>
                      <td className="px-6 py-4 xl:px-8">
                        <svg
                          className="mx-auto h-5 w-5 text-white"
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
                        <span className="sr-only">
                          Included in CRO + Development
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <th
                        scope="row"
                        className="py-4 text-sm font-normal leading-6 text-white"
                      >
                        Website Backups
                        <div className="absolute inset-x-8 mt-4 h-px bg-white/5"></div>
                      </th>
                      <td className="px-6 py-4 xl:px-8">
                        <svg
                          className="mx-auto h-5 w-5 text-neutral-400"
                          width="15"
                          height="15"
                          viewBox="0 0 15 15"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M2.25 7.5C2.25 7.22386 2.47386 7 2.75 7H12.25C12.5261 7 12.75 7.22386 12.75 7.5C12.75 7.77614 12.5261 8 12.25 8H2.75C2.47386 8 2.25 7.77614 2.25 7.5Z"
                            fill="currentColor"
                            fillRule="evenodd"
                            clipRule="evenodd"
                          ></path>
                        </svg>
                        <span className="sr-only">
                          Not included in Essential
                        </span>
                      </td>
                      <td className="px-6 py-4 xl:px-8">
                        <svg
                          className="mx-auto h-5 w-5 text-white"
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
                        <span className="sr-only">
                          Included in Conversion Rate Optimisation
                        </span>
                      </td>
                      <td className="px-6 py-4 xl:px-8">
                        <svg
                          className="mx-auto h-5 w-5 text-white"
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
                        <span className="sr-only">
                          Included in CRO + Development
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <th
                        scope="row"
                        className="py-4 text-sm font-normal leading-6 text-white"
                      >
                        2 Hours Of Website Updates
                        <div className="absolute inset-x-8 mt-4 h-px bg-white/5"></div>
                      </th>
                      <td className="px-6 py-4 xl:px-8">
                        <svg
                          className="mx-auto h-5 w-5 text-neutral-400"
                          width="15"
                          height="15"
                          viewBox="0 0 15 15"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M2.25 7.5C2.25 7.22386 2.47386 7 2.75 7H12.25C12.5261 7 12.75 7.22386 12.75 7.5C12.75 7.77614 12.5261 8 12.25 8H2.75C2.47386 8 2.25 7.77614 2.25 7.5Z"
                            fill="currentColor"
                            fillRule="evenodd"
                            clipRule="evenodd"
                          ></path>
                        </svg>
                        <span className="sr-only">
                          Not included in Essential
                        </span>
                      </td>
                      <td className="px-6 py-4 xl:px-8">
                        <svg
                          className="mx-auto h-5 w-5 text-white"
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
                        <span className="sr-only">
                          Included in Conversion Rate Optimisation
                        </span>
                      </td>
                      <td className="px-6 py-4 xl:px-8">
                        <svg
                          className="mx-auto h-5 w-5 text-white"
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
                        <span className="sr-only">
                          Included in CRO + Development
                        </span>
                      </td>
                    </tr>
                  </>
                  {/* Conversion Rate Optimization */}
                  <>
                    <tr>
                      <th
                        scope="colgroup"
                        colSpan="4"
                        className="pt-16 pb-4 text-sm font-semibold leading-6 text-white"
                      >
                        Conversion Rate Optimization
                        <div className="absolute inset-x-8 mt-4 h-px bg-white/10"></div>
                      </th>
                    </tr>
                    <tr>
                      <th
                        scope="row"
                        className="py-4 text-sm font-normal leading-6 text-white"
                      >
                        A/B Testing
                        <div className="absolute inset-x-8 mt-4 h-px bg-white/5"></div>
                      </th>
                      <td className="px-6 py-4 xl:px-8">
                        <svg
                          className="mx-auto h-5 w-5 text-neutral-400"
                          width="15"
                          height="15"
                          viewBox="0 0 15 15"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M2.25 7.5C2.25 7.22386 2.47386 7 2.75 7H12.25C12.5261 7 12.75 7.22386 12.75 7.5C12.75 7.77614 12.5261 8 12.25 8H2.75C2.47386 8 2.25 7.77614 2.25 7.5Z"
                            fill="currentColor"
                            fillRule="evenodd"
                            clipRule="evenodd"
                          ></path>
                        </svg>
                        <span className="sr-only">
                          Not included in Essential
                        </span>
                      </td>
                      <td className="px-6 py-4 xl:px-8">
                        <svg
                          className="mx-auto h-5 w-5 text-white"
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
                        <span className="sr-only">
                          Included in Conversion Rate Optimisation
                        </span>
                      </td>
                      <td className="px-6 py-4 xl:px-8">
                        <svg
                          className="mx-auto h-5 w-5 text-white"
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
                        <span className="sr-only">
                          Included in CRO + Development
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <th
                        scope="row"
                        className="py-4 text-sm font-normal leading-6 text-white"
                      >
                        Heatmap Analysis
                        <div className="absolute inset-x-8 mt-4 h-px bg-white/5"></div>
                      </th>
                      <td className="px-6 py-4 xl:px-8">
                        <svg
                          className="mx-auto h-5 w-5 text-neutral-400"
                          width="15"
                          height="15"
                          viewBox="0 0 15 15"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M2.25 7.5C2.25 7.22386 2.47386 7 2.75 7H12.25C12.5261 7 12.75 7.22386 12.75 7.5C12.75 7.77614 12.5261 8 12.25 8H2.75C2.47386 8 2.25 7.77614 2.25 7.5Z"
                            fill="currentColor"
                            fillRule="evenodd"
                            clipRule="evenodd"
                          ></path>
                        </svg>
                        <span className="sr-only">
                          Not included in Essential
                        </span>
                      </td>
                      <td className="px-6 py-4 xl:px-8">
                        <svg
                          className="mx-auto h-5 w-5 text-white"
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
                        <span className="sr-only">
                          Included in Conversion Rate Optimisation
                        </span>
                      </td>
                      <td className="px-6 py-4 xl:px-8">
                        <svg
                          className="mx-auto h-5 w-5 text-white"
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
                        <span className="sr-only">
                          Included in CRO + Development
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <th
                        scope="row"
                        className="py-4 text-sm font-normal leading-6 text-white"
                      >
                        User Session Recordings
                        <div className="absolute inset-x-8 mt-4 h-px bg-white/5"></div>
                      </th>
                      <td className="px-6 py-4 xl:px-8">
                        <svg
                          className="mx-auto h-5 w-5 text-neutral-400"
                          width="15"
                          height="15"
                          viewBox="0 0 15 15"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M2.25 7.5C2.25 7.22386 2.47386 7 2.75 7H12.25C12.5261 7 12.75 7.22386 12.75 7.5C12.75 7.77614 12.5261 8 12.25 8H2.75C2.47386 8 2.25 7.77614 2.25 7.5Z"
                            fill="currentColor"
                            fillRule="evenodd"
                            clipRule="evenodd"
                          ></path>
                        </svg>
                        <span className="sr-only">
                          Not included in Essential
                        </span>
                      </td>
                      <td className="px-6 py-4 xl:px-8">
                        <svg
                          className="mx-auto h-5 w-5 text-white"
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
                        <span className="sr-only">
                          Included in Conversion Rate Optimisation
                        </span>
                      </td>
                      <td className="px-6 py-4 xl:px-8">
                        <svg
                          className="mx-auto h-5 w-5 text-white"
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
                        <span className="sr-only">
                          Included in CRO + Development
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <th
                        scope="row"
                        className="py-4 text-sm font-normal leading-6 text-white"
                      >
                        Conversion Funnel Analysis
                        <div className="absolute inset-x-8 mt-4 h-px bg-white/5"></div>
                      </th>
                      <td className="px-6 py-4 xl:px-8">
                        <svg
                          className="mx-auto h-5 w-5 text-neutral-400"
                          width="15"
                          height="15"
                          viewBox="0 0 15 15"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M2.25 7.5C2.25 7.22386 2.47386 7 2.75 7H12.25C12.5261 7 12.75 7.22386 12.75 7.5C12.75 7.77614 12.5261 8 12.25 8H2.75C2.47386 8 2.25 7.77614 2.25 7.5Z"
                            fill="currentColor"
                            fillRule="evenodd"
                            clipRule="evenodd"
                          ></path>
                        </svg>
                        <span className="sr-only">
                          Not included in Essential
                        </span>
                      </td>
                      <td className="px-6 py-4 xl:px-8">
                        <svg
                          className="mx-auto h-5 w-5 text-white"
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
                        <span className="sr-only">
                          Included in Conversion Rate Optimisation
                        </span>
                      </td>
                      <td className="px-6 py-4 xl:px-8">
                        <svg
                          className="mx-auto h-5 w-5 text-white"
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
                        <span className="sr-only">
                          Included in CRO + Development
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <th
                        scope="row"
                        className="py-4 text-sm font-normal leading-6 text-white"
                      >
                        Conversion Rate Analysis
                        <div className="absolute inset-x-8 mt-4 h-px bg-white/5"></div>
                      </th>
                      <td className="px-6 py-4 xl:px-8">
                        <svg
                          className="mx-auto h-5 w-5 text-neutral-400"
                          width="15"
                          height="15"
                          viewBox="0 0 15 15"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M2.25 7.5C2.25 7.22386 2.47386 7 2.75 7H12.25C12.5261 7 12.75 7.22386 12.75 7.5C12.75 7.77614 12.5261 8 12.25 8H2.75C2.47386 8 2.25 7.77614 2.25 7.5Z"
                            fill="currentColor"
                            fillRule="evenodd"
                            clipRule="evenodd"
                          ></path>
                        </svg>
                        <span className="sr-only">
                          Not included in Essential
                        </span>
                      </td>
                      <td className="px-6 py-4 xl:px-8">
                        <svg
                          className="mx-auto h-5 w-5 text-white"
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
                        <span className="sr-only">
                          Included in Conversion Rate Optimisation
                        </span>
                      </td>
                      <td className="px-6 py-4 xl:px-8">
                        <svg
                          className="mx-auto h-5 w-5 text-white"
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
                        <span className="sr-only">
                          Included in CRO + Development
                        </span>
                      </td>
                    </tr>
                  </>
                  {/* Ongoing Development */}
                  <>
                    <tr>
                      <th
                        scope="colgroup"
                        colSpan="4"
                        className="pt-16 pb-4 text-sm font-semibold leading-6 text-white"
                      >
                        On-going Development
                        <div className="absolute inset-x-8 mt-4 h-px bg-white/10"></div>
                      </th>
                    </tr>
                    <tr>
                      <th
                        scope="row"
                        className="py-4 text-sm font-normal leading-6 text-white"
                      >
                        10 Hours Of Development
                        <div className="absolute inset-x-8 mt-4 h-px bg-white/5"></div>
                      </th>
                      <td className="px-6 py-4 xl:px-8">
                        <svg
                          className="mx-auto h-5 w-5 text-neutral-400"
                          width="15"
                          height="15"
                          viewBox="0 0 15 15"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M2.25 7.5C2.25 7.22386 2.47386 7 2.75 7H12.25C12.5261 7 12.75 7.22386 12.75 7.5C12.75 7.77614 12.5261 8 12.25 8H2.75C2.47386 8 2.25 7.77614 2.25 7.5Z"
                            fill="currentColor"
                            fillRule="evenodd"
                            clipRule="evenodd"
                          ></path>
                        </svg>
                        <span className="sr-only">
                          Not included in Essential
                        </span>
                      </td>
                      <td className="px-6 py-4 xl:px-8">
                        <svg
                          className="mx-auto h-5 w-5 text-neutral-400"
                          width="15"
                          height="15"
                          viewBox="0 0 15 15"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M2.25 7.5C2.25 7.22386 2.47386 7 2.75 7H12.25C12.5261 7 12.75 7.22386 12.75 7.5C12.75 7.77614 12.5261 8 12.25 8H2.75C2.47386 8 2.25 7.77614 2.25 7.5Z"
                            fill="currentColor"
                            fillRule="evenodd"
                            clipRule="evenodd"
                          ></path>
                        </svg>
                        <span className="sr-only">
                          Not included in Conversion Rate Optimisation
                        </span>
                      </td>
                      <td className="px-6 py-4 xl:px-8">
                        <svg
                          className="mx-auto h-5 w-5 text-white"
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
                        <span className="sr-only">
                          Included in CRO + Development
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <th
                        scope="row"
                        className="py-4 text-sm font-normal leading-6 text-white"
                      >
                        Custom Feature Development
                        <div className="absolute inset-x-8 mt-4 h-px bg-white/5"></div>
                      </th>
                      <td className="px-6 py-4 xl:px-8">
                        <svg
                          className="mx-auto h-5 w-5 text-neutral-400"
                          width="15"
                          height="15"
                          viewBox="0 0 15 15"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M2.25 7.5C2.25 7.22386 2.47386 7 2.75 7H12.25C12.5261 7 12.75 7.22386 12.75 7.5C12.75 7.77614 12.5261 8 12.25 8H2.75C2.47386 8 2.25 7.77614 2.25 7.5Z"
                            fill="currentColor"
                            fillRule="evenodd"
                            clipRule="evenodd"
                          ></path>
                        </svg>
                        <span className="sr-only">
                          Not included in Essential
                        </span>
                      </td>
                      <td className="px-6 py-4 xl:px-8">
                        <svg
                          className="mx-auto h-5 w-5 text-neutral-400"
                          width="15"
                          height="15"
                          viewBox="0 0 15 15"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M2.25 7.5C2.25 7.22386 2.47386 7 2.75 7H12.25C12.5261 7 12.75 7.22386 12.75 7.5C12.75 7.77614 12.5261 8 12.25 8H2.75C2.47386 8 2.25 7.77614 2.25 7.5Z"
                            fill="currentColor"
                            fillRule="evenodd"
                            clipRule="evenodd"
                          ></path>
                        </svg>
                        <span className="sr-only">
                          Not included in Conversion Rate Optimisation
                        </span>
                      </td>
                      <td className="px-6 py-4 xl:px-8">
                        <svg
                          className="mx-auto h-5 w-5 text-white"
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
                        <span className="sr-only">
                          Included in CRO + Development
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <th
                        scope="row"
                        className="py-4 text-sm font-normal leading-6 text-white"
                      >
                        Custom Plugin Development
                        <div className="absolute inset-x-8 mt-4 h-px bg-white/5"></div>
                      </th>
                      <td className="px-6 py-4 xl:px-8">
                        <svg
                          className="mx-auto h-5 w-5 text-neutral-400"
                          width="15"
                          height="15"
                          viewBox="0 0 15 15"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M2.25 7.5C2.25 7.22386 2.47386 7 2.75 7H12.25C12.5261 7 12.75 7.22386 12.75 7.5C12.75 7.77614 12.5261 8 12.25 8H2.75C2.47386 8 2.25 7.77614 2.25 7.5Z"
                            fill="currentColor"
                            fillRule="evenodd"
                            clipRule="evenodd"
                          ></path>
                        </svg>
                        <span className="sr-only">
                          Not included in Essential
                        </span>
                      </td>
                      <td className="px-6 py-4 xl:px-8">
                        <svg
                          className="mx-auto h-5 w-5 text-neutral-400"
                          width="15"
                          height="15"
                          viewBox="0 0 15 15"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M2.25 7.5C2.25 7.22386 2.47386 7 2.75 7H12.25C12.5261 7 12.75 7.22386 12.75 7.5C12.75 7.77614 12.5261 8 12.25 8H2.75C2.47386 8 2.25 7.77614 2.25 7.5Z"
                            fill="currentColor"
                            fillRule="evenodd"
                            clipRule="evenodd"
                          ></path>
                        </svg>
                        <span className="sr-only">
                          Not included in Conversion Rate Optimisation
                        </span>
                      </td>
                      <td className="px-6 py-4 xl:px-8">
                        <svg
                          className="mx-auto h-5 w-5 text-white"
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
                        <span className="sr-only">
                          Included in CRO + Development
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <th
                        scope="row"
                        className="py-4 text-sm font-normal leading-6 text-white"
                      >
                        Custom Theme Development
                        <div className="absolute inset-x-8 mt-4 h-px bg-white/5"></div>
                      </th>
                      <td className="px-6 py-4 xl:px-8">
                        <svg
                          className="mx-auto h-5 w-5 text-neutral-400"
                          width="15"
                          height="15"
                          viewBox="0 0 15 15"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M2.25 7.5C2.25 7.22386 2.47386 7 2.75 7H12.25C12.5261 7 12.75 7.22386 12.75 7.5C12.75 7.77614 12.5261 8 12.25 8H2.75C2.47386 8 2.25 7.77614 2.25 7.5Z"
                            fill="currentColor"
                            fillRule="evenodd"
                            clipRule="evenodd"
                          ></path>
                        </svg>
                        <span className="sr-only">
                          Not included in Essential
                        </span>
                      </td>
                      <td className="px-6 py-4 xl:px-8">
                        <svg
                          className="mx-auto h-5 w-5 text-neutral-400"
                          width="15"
                          height="15"
                          viewBox="0 0 15 15"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M2.25 7.5C2.25 7.22386 2.47386 7 2.75 7H12.25C12.5261 7 12.75 7.22386 12.75 7.5C12.75 7.77614 12.5261 8 12.25 8H2.75C2.47386 8 2.25 7.77614 2.25 7.5Z"
                            fill="currentColor"
                            fillRule="evenodd"
                            clipRule="evenodd"
                          ></path>
                        </svg>
                        <span className="sr-only">
                          Not included in Conversion Rate Optimisation
                        </span>
                      </td>
                      <td className="px-6 py-4 xl:px-8">
                        <svg
                          className="mx-auto h-5 w-5 text-white"
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
                        <span className="sr-only">
                          Included in CRO + Development
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <th
                        scope="row"
                        className="py-4 text-sm font-normal leading-6 text-white"
                      >
                        Custom API Integrations
                        <div className="absolute inset-x-8 mt-4 h-px bg-white/5"></div>
                      </th>
                      <td className="px-6 py-4 xl:px-8">
                        <svg
                          className="mx-auto h-5 w-5 text-neutral-400"
                          width="15"
                          height="15"
                          viewBox="0 0 15 15"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M2.25 7.5C2.25 7.22386 2.47386 7 2.75 7H12.25C12.5261 7 12.75 7.22386 12.75 7.5C12.75 7.77614 12.5261 8 12.25 8H2.75C2.47386 8 2.25 7.77614 2.25 7.5Z"
                            fill="currentColor"
                            fillRule="evenodd"
                            clipRule="evenodd"
                          ></path>
                        </svg>
                        <span className="sr-only">
                          Not included in Essential
                        </span>
                      </td>
                      <td className="px-6 py-4 xl:px-8">
                        <svg
                          className="mx-auto h-5 w-5 text-neutral-400"
                          width="15"
                          height="15"
                          viewBox="0 0 15 15"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M2.25 7.5C2.25 7.22386 2.47386 7 2.75 7H12.25C12.5261 7 12.75 7.22386 12.75 7.5C12.75 7.77614 12.5261 8 12.25 8H2.75C2.47386 8 2.25 7.77614 2.25 7.5Z"
                            fill="currentColor"
                            fillRule="evenodd"
                            clipRule="evenodd"
                          ></path>
                        </svg>
                        <span className="sr-only">
                          Not included in Conversion Rate Optimisation
                        </span>
                      </td>
                      <td className="px-6 py-4 xl:px-8">
                        <svg
                          className="mx-auto h-5 w-5 text-white"
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
                        <span className="sr-only">
                          Included in CRO + Development
                        </span>
                      </td>
                    </tr>
                  </>
                  <tr>
                    <td scope="col" className="px-6 py-6 xl:px-8 xl:py-8"></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <p className="mt-4 text-center text-lg text-neutral-300">
            Unsure which one aligns with your vision?{" "}
            <a
              onClick={() =>
                sendGAEvent({ event: "buttonClicked", value: "calendly" })
              }
              href="https://calendly.com/relaydigitalyyc/discovery"
            >
              <span className="font-semibold leading-6 tracking-wide text-neutral-400 hover:text-neutral-300 underline duration-300">
                Book a discovery call
              </span>
            </a>
          </p>
        </div>
      </div>
    </>
  );
};

export default WebServiceTable;
