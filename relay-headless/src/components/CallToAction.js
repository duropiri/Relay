const CallToAction = ({
  header = "",
  description = "",
  cta = "",
  href = "/",
}) => {
  return (
    <div className="relative mb-12 w-full border-y border-neutral-700 bg-neutral-900 py-6 lg:py-16 shadow-2xl shadow-blue-500/50">
      <div className="absolute inset-0 -z-20 h-full w-full transform rounded-full bg-blue-500 blur-3xl lg:scale-90"></div>
      <div className="mx-auto max-w-7xl px-5">
        <div className="flex flex-col items-center gap-y-8">
          {header && (
            <h3 className="mx-2 text-center  text-3xl font-medium text-neutral-100 lg:text-5xl italic">
              {/* {Header} */}
              {header}
            </h3>
          )}

          {description && (
            <p className="text-md text-center leading-tight tracking-tight text-neutral-300 lg:mx-12 lg:max-w-2xl lg:text-xl">
              {/* {Description} */}
              {description}
            </p>
          )}

          {cta && (
            <a href={href}>
              <button className="relative rounded-full text-center transition-all duration-500 transform overflow-hidden z-40   w-full px-6 py-3 text-base bg-blue-500 text-neutral-950 border border-blue-500 button hover:text-neutral-50 group uppercase leading-tight tracking-tight md:text-lg">
                <div className="group relative z-10 w-full">
                  {/* {CTA} */}
                  {cta}
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
          )}
        </div>
      </div>
    </div>
  );
};

export default CallToAction;
