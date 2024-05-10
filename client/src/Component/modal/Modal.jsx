// Modal.js

import axios from "axios";
import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { useContext } from "react";
import { MyContext } from "../../Context/MyContext";
import Cookies from "universal-cookie";

const Modal = ({ isOpen, toggleModal, isScrolling }) => {
  const { user } = useContext(MyContext);
  const cookies = new Cookies();;

  // getting the username from cookie(localhost)
  // const  user = cookies.get('userData');

  console.log(user);

  return (
    <div className="">
      {isOpen && (
        <div
          className={`${
            !isScrolling
              ? "fixed inset-x-2 inset-y-52 md:inset-x-48 md:inset-y-32 lg:inset-x-96 lg:inset-y-48 w-full h-full bg-gray-800 bg-opacity-0 flex items-center justify-center transition-all duration-300 ease-in-out delay-500"
              : "fixed inset-x-2 inset-y-48 lg:inset-x-96 lg:inset-y-32  w-full h-full bg-gray-800 bg-opacity-0 flex items-center justify-center transition-all duration-300 ease-in-out delay-500"
          }`}
        >
          <div className="w-9/12 md:w-6/12 lg:w-3/12 flex flex-col bg-white p-8 rounded-lg border-[1px] border-gray-900 shadow-lg transform transition-transform duration-300 ease-in-out delay-700">
            <Link to="/">
              <button className="text-xl font-semibold mb-5">Home</button>
            </Link>
            {(user.message === "ok" || user.name) ? (
              <>
                <Link to="/account">
                  <button className="text-xl font-semibold mb-5">
                    Account
                  </button>
                </Link>
                <Link to="/logout">
                  <button className="text-xl font-semibold mb-5">
                    Sign out
                  </button>
                </Link>
              </>
            ) : (
              <>
                <Link to="/login">
                  <button className="text-xl font-semibold mb-5">Login</button>
                </Link>
                <Link to="/register">
                  <button className="text-xl font-semibold mb-5">
                    Sign up
                  </button>
                </Link>
              </>
            )}
            <button
              onClick={toggleModal}
              className="w-2/3 px-2 py-2 text-xl font-bold rounded-md bg-slate-900 text-gray-50 mx-auto mt-5"
            >
              Close modal
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Modal;
