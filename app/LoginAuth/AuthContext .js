"use client";

import React, { createContext, useState, useContext } from "react";
import {redirect} from "next/navigation";

const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const login = () => {
    setIsLoggedIn(true);
  };

  const logout = () => {
    setIsLoggedIn(false);
  };

  if(!isLoggedIn){
    return redirect("/")
  }

  return (
    <AuthContext.Provider value={{ isLoggedIn, login, logout }}>
      {isLoggedIn ? children :
      <div>You must be logged in to view this content.</div>}
    </AuthContext.Provider>
  );
};
