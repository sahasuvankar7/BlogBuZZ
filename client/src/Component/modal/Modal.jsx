// Modal.js

import axios from "axios";
import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";

const Modal = ({ isOpen, toggleModal, isScrolling }) => {
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
              ? "fixed inset-x-2 inset-y-48 md:inset-x-48 md:inset-y-32 lg:inset-x-96 lg:inset-y-32 w-full h-full bg-gray-800 bg-opacity-0 flex items-center justify-center"
              : "fixed inset-x-2 inset-y-48 lg:inset-x-96 lg:inset-y-32  w-full h-full bg-gray-800 bg-opacity-0 flex items-center justify-center"
          }`}
        >
          <div className=" w-9/12 flex flex-col bg-white p-8 rounded-lg border-[1px] border-gray-900  shadow-lg">
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
            {/* <p>This is the content of the modal.</p> */}
            <div
              onClick={toggleModal}
              className="mt-4 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-2 rounded"
            >
              Close Modal
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Modal;
