// HamburgerMenu.js

import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const Hamburger = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      {/* Hamburger icon */}
      <button
        className="block text-gray-900 p-2 focus:outline-none focus:text-gray-900"
        onClick={() => setIsOpen(!isOpen)}
      >
        <svg
          className="h-9 w-9 text-white transition-transform duration-300 ease-in-out transform"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          style={{ transform: isOpen ? "rotate(90deg)" : "rotate(0deg)" }}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
          />
        </svg>
      </button>

      {/* Dropdown menu */}
      <div
        className={`absolute right-0 mt-2 w-48 bg-slate-100 rounded-md shadow-lg z-10 transition-all duration-300 ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        style={{ transform: isOpen ? "translateY(0)" : "translateY(-10px)" }}
      >
        <div className="py-1">
          <NavLink
            to="/register"
            className="block px-4 py-2 text-lg font-bold text-gray-700 hover:bg-gray-100"
          >
            Register
          </NavLink>
          <NavLink
            to="/login"
            className="block px-4 py-2 text-lg font-bold text-gray-700 hover:bg-gray-100"
          >
            Login
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Hamburger;
