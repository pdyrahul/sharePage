"use client"
import React, { createContext, useContext, useState, useEffect } from "react";

const ProfileContext = createContext();

export const ProfileProvider = ({ children }) => {
  const [selectedProfile, setSelectedProfile] = useState(null);

  useEffect(() => {
    const storedProfile = sessionStorage.getItem("selectedProfile");
    if (storedProfile) {
      setSelectedProfile(JSON.parse(storedProfile));
    }
  }, []);

  const setProfile = (profile) => {
    setSelectedProfile(profile);
    sessionStorage.setItem("selectedProfile", JSON.stringify(profile));
  };

  // Here we're not providing any value, just the functions to manage state
  return (
    <ProfileContext.Provider value={{ setProfile }}>
      {children}
    </ProfileContext.Provider>
  );
};

export const useProfile = () => {
  const context = useContext(ProfileContext);
  if (context === undefined) {
    throw new Error('useProfile must be used within a ProfileProvider');
  }
  return context;
};