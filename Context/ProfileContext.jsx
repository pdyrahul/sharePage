// ProfileContext.js
"use client"
import React, { createContext, useContext, useState, useEffect } from "react";

const ProfileContext = createContext();

export const ProfileProvider = ({ children }) => {
  const [selectedProfile, setSelectedProfile] = useState(null);

  useEffect(() => {
    // Load profile from session storage on initialization
    const storedProfile = sessionStorage.getItem("selectedProfile");
    if (storedProfile) {
      setSelectedProfile(JSON.parse(storedProfile));
    }
  }, []);

  const setProfile = (profile) => {
    setSelectedProfile(profile);
    sessionStorage.setItem("selectedProfile", JSON.stringify(profile));
  };

  return (
    <ProfileContext.Provider value={{ selectedProfile, setProfile }}>
      {children}
    </ProfileContext.Provider>
  );
};

export const useProfile = () => useContext(ProfileContext);
