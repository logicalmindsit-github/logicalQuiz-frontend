"use client";

import React from "react";
import { signOut, useSession } from "next-auth/react";

const Dashboard = () => {
  const { data: session } = useSession();

  const handleLogout = async () => {
    try {
      await fetch("/api/logout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: session.user.email }),
      });

      signOut();

      console.log("User Logged out Successfully");
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };

  return (
    <div className="min-h-screen py-20">
      <div className="w-full max-w-2xl grid place-items-center mx-auto py-40 gap-6 bg-slate-50">
        <span className="text-4xl tracking-wide font-semibold capitalize text-[#5D7DF3]">
          Welcome to the Dashboard
        </span>
        {session && (
          <span className="text-2xl tracking-normal py-10 font-semibold">
            {session.user?.name}
          </span>
        )}
        {session && (
          <span className="text-2xl tracking-normal py-10 font-semibold">
            {session.user?.email}
          </span>
        )}

        <button
          onClick={handleLogout}
          className="bg-slate-950 text-white rounded text-lg w-auto px-6 py-3 uppercase"
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default Dashboard;
