// Modal.js

import React, { useState,useEffect } from "react";

const Modal = ({ isOpen, toggleModal, isScrolling }) => {
  //   const [isOpen, setIsOpen] = useState(false);

  //   const toggleModal = () => {
  //     setIsOpen(!isOpen);
  //   };
  console.log(isScrolling);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const resizeListener = () => {
      // Check the window width
      const isSmall = window.innerWidth < 768; // Example threshold for small screens
      setIsSmallScreen(isSmall);
    };

    // Add event listener for window resize
    window.addEventListener("resize", resizeListener);

    // Cleanup function to remove event listener
    return () => {
      window.removeEventListener("resize", resizeListener);
    };
  }, []); // Empty dependency array to run effect only once

  return (
    <div className="">
      {isSmallScreen?(
        <div></div>
      ):(
        <div>
 {isOpen && (
        <div
          className={`${
            !isScrolling
              ? "fixed inset-x-2 inset-y-32 md:inset-x-48 md:inset-y-32 lg:inset-x-96 lg:inset-y-32 w-full h-full bg-gray-800 bg-opacity-0 flex items-center justify-center"
              : "fixed inset-x-2 inset-y-32 lg:inset-x-96 lg:inset-y-32  w-full h-full bg-gray-800 bg-opacity-0 flex items-center justify-center"
          }`}
        >
          <div className=" bg-white p-8 rounded-lg border-[1px] border-gray-900  shadow-lg">
            <h2 className="text-lg font-bold mb-4">Modal Content</h2>
            <p>This is the content of the modal.</p>
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
      )}
      {/* <button onClick={toggleModal} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Open Modal
      </button> */}
     
    </div>
  );
};

export default Modal;
