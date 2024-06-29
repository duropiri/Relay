"use client";
import { useEffect, useState } from "react";
import { useGlobalState } from "../../../../contexts/GlobalStateContext";

import ExitIntentPopup from "../../../ExitIntentPopup";
import Top from "./sections/top";
import Packages from "./sections/packages";
import WebServiceTable from "./sections/WebServiceTable";

const Body = () => {
  const { isExitIntentPopupOpen, openExitIntentPopup, closeExitIntentPopup } =
    useGlobalState();
  const [hasShownExitIntentPopup, setHasShownExitIntentPopup] = useState(false);

  useEffect(() => {
    const handleMouseLeave = (event) => {
      if (!hasShownExitIntentPopup && event.clientY <= 0) {
        openExitIntentPopup();
        setHasShownExitIntentPopup(true);
      }
    };

    document.addEventListener("mouseleave", handleMouseLeave);
    return () => {
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [hasShownExitIntentPopup, openExitIntentPopup]);

  return (
    <div className="flex flex-col bg-grid-white/[0.05] min-h-screen">
      {isExitIntentPopupOpen && <ExitIntentPopup />}
      <div className="mx-auto max-w-7xl px-5">
        {/* Page Top */}
        <div className="py-24 sm:py-32">
          <Top />
          <Packages />
        </div>
        {/* Website Service Packages */}
        <WebServiceTable />
      </div>
    </div>
  );
};

export default Body;
