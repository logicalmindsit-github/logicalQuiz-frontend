import React from "react";
import { useAuth } from "../AuthContext";

const Navbar = () => {
  const { isLoggedIn, logout } = useAuth(); // Access isLoggedIn and logout function from AuthContext

  const handleLogout = () => {
    // Call the logout function from AuthContext upon logout button click
    logout();
  };

  return (
    <div>
      {isLoggedIn ? (
        // Render logout button if user is logged in
        <button onClick={handleLogout}>Logout</button>
      ) : (
        // Render login button if user is not logged in
        <button>Login</button>
      )}
    </div>
  );
};

export default Navbar;
