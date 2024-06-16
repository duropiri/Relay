"use client";
import { createContext, useState, useContext } from "react";

// Step 1: Create a new context
const GlobalStateContext = createContext();

// Step 2: Create a provider component
export const GlobalStateProvider = ({ children }) => {
  // New global states for popups
  const [isHeroPopupOpen, setIsHeroPopupOpen] = useState(false);
  const [isExitIntentPopupOpen, setIsExitIntentPopupOpen] = useState(false);
  const [website, setWebsite] = useState('');

  // Mobile states
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const openHeroPopup = (website) => {
    setWebsite(website);
    setIsHeroPopupOpen(true);
    setIsExitIntentPopupOpen(false);
  };

  const closeHeroPopup = () => {
    setIsHeroPopupOpen(false);
  };

  const openExitIntentPopup = () => {
    setIsHeroPopupOpen(false);
    setIsExitIntentPopupOpen(true);
  };

  const closeExitIntentPopup = () => {
    setIsExitIntentPopupOpen(false);
  };

  // Combine all global states and their update functions into a single object
  const globalState = {
    mobileMenuOpen,
    setMobileMenuOpen,
    isHeroPopupOpen,
    setIsHeroPopupOpen,
    isExitIntentPopupOpen,
    setIsExitIntentPopupOpen,
    website,
    setWebsite,
    openHeroPopup,
    closeHeroPopup,
    openExitIntentPopup,
    closeExitIntentPopup,
  };

  return (
    <GlobalStateContext.Provider value={globalState}>
      {children}
    </GlobalStateContext.Provider>
  );
};

// Custom hook to easily access global state and update functions
export const useGlobalState = () => {
  const context = useContext(GlobalStateContext);
  if (!context) {
    throw new Error("useGlobalState must be used within a GlobalStateProvider");
  }
  return context;
};
