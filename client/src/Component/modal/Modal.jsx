// Modal.js

import axios from "axios";
import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { useContext } from "react";
import { MyContext } from "../../Context/MyContext";


const Modal = ({ isOpen, toggleModal, isScrolling }) => {
  const {loggedInUser} = useContext(MyContext);
  const mobileLogin = async (e) => {
    e.preventDefault();
    const response = axios.post;
  };
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
            <Link to='/'>
              <button className=" w-full text-lg font-bold mb-4 bg-purple-600 rounded-md px-8 py-2 text-white">Home</button>
            </Link>
            <Link to="/login">
              <button className=" w-full text-lg font-bold mb-4 bg-purple-600 rounded-md px-8 py-2 text-white">
                Login
              </button>
            </Link>
            <Link to="/register">
              <button className="w-full text-lg font-bold mb-4 bg-purple-600 rounded-md px-8 py-2 text-white">
                Register
              </button>
            </Link>
            <p>{loggedInUser.name}</p>
            <p>{loggedInUser.email}</p>
            <button
              onClick={toggleModal}
              className="w-[50%] mt-4 p-2 bg-gray-950 rounded-full border-[1px] border-gray-950 font-bold text-gray-50 text-xl hover:bg-gray-50 hover:text-gray-950 mx-auto"
            >
              X
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Modal;
