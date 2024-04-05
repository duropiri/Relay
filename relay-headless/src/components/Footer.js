import React from "react";

const Footer = () => {
  return (
    <footer className="bg-neutral-950">
      <div className="mx-auto max-w-7xl items-center py-20 sm:py-24 lg:px-8">
        <nav
          className="mx-8 flex flex-col items-center justify-center sm:flex-row sm:gap-x-12"
          aria-label="Footer"
        >
          <div className="pb-6">
            <a
              href="/"
              className="text-sm leading-6 text-neutral-300 hover:text-neutral-100"
            >
              Home{" "}
            </a>
          </div>
          <div className="pb-6">
            <a
              href="/pricing"
              className="text-sm leading-6 text-neutral-300 hover:text-neutral-100"
            >
              Pricing{" "}
            </a>
          </div>
          <div className="pb-6">
            <a
              href="/contact"
              className="text-sm leading-6 text-neutral-300 hover:text-neutral-100"
            >
              Contact{" "}
            </a>
          </div>
        </nav>
        <p className="mt-10 text-center text-xs leading-5 text-neutral-400">
          © 2024 Relay, Inc. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
