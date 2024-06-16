"use client";
import { useEffect, useState } from "react";
import { useGlobalState } from "../../../../contexts/GlobalStateContext";

import Hero from "./Hero";
import ExitIntentPopup from "./ExitIntentPopup";
import FormPopup from "./formPopup";

const Body = () => {
  const {
    isHeroPopupOpen,
    closeHeroPopup,
    website,
    isExitIntentPopupOpen,
    openExitIntentPopup,
    closeExitIntentPopup,
  } = useGlobalState();
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
    <div className="flex flex-col gap-10 bg-grid-white/[0.05] min-h-screen">
      {isExitIntentPopupOpen && <ExitIntentPopup />}
      {isHeroPopupOpen && <FormPopup onClose={closeHeroPopup} website={website} />}
      <Hero />
    </div>
  );
};

export default Body;