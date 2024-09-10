

"use client";
import React, { createContext, useState, useContext } from 'react';
import AuthService from '../AuthService/AuthService'; 

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

  const login = async (credentials) => {
    try {
      await AuthService.login(credentials);
      // setIsLoggedIn(true);
    } catch (error) {
      console.error("Login error:", error);
      throw new Error(error.message);
    }
  };

  const logout = async () => {
    try {
      await AuthService.logout();
      // setIsLoggedIn(false);
    } catch (error) {
      console.error("Logout error:", error);
      throw new Error(error.message);
    }
  };

  const register = async (userData) => {
    try {
      await AuthService.register(userData);
    } catch (error) {
      console.error("Register error:", error);
      throw new Error(error.message);
    }
  };

  const forgetPassword = async (email) => {
    try {
      await AuthService.forgetPassword(email);
    } catch (error) {
      console.error("Forget password error:", error);
      throw new Error(error.message);
    }
  };

  const resetPassword = async (data) => {
    try {
      await AuthService.resetPassword(data);
    } catch (error) {
      console.error("Reset password error:", error);
      throw new Error(error.message);
    }
  };

  return (
    // <AuthContext.Provider value={{ isLoggedIn, login, logout, register, forgetPassword, resetPassword }}>
     <AuthContext.Provider value={{  login, logout, register, forgetPassword, resetPassword }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
