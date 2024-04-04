"use client";
import React, { createContext, useState, useContext } from "react";

// Step 1: Create a new context
const GlobalStateContext = createContext();

// Step 2: Create a provider component
export const GlobalStateProvider = ({ children }) => {
  // Define your global states here
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState(null);
  // Add more global states as needed

  // Define functions to update the global states
  const updateIsLoading = (value) => setIsLoading(value);
  const updateUser = (userData) => setUser(userData);
  // Add more update functions as needed

  // Combine all global states and update functions into a single object
  const globalState = {
    isLoading,
    setIsLoading: updateIsLoading,
    user,
    setUser: updateUser,
    // Add more global states and update functions as needed
  };

  return (
    // Provide the global state and update functions through context provider
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
