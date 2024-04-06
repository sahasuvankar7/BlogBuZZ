// Modal.js

import React, { useState } from 'react';

const Modal = ({isOpen,toggleModal ,isScrolling}) => {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleModal = () => {
//     setIsOpen(!isOpen);
//   };
console.log(isScrolling)

  return (
    <div className="">
      {/* <button onClick={toggleModal} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Open Modal
      </button> */}
      {isOpen && (
        <div className={`${!isScrolling ?"fixed inset-x-96 -inset-y-24   w-full h-full bg-gray-800 bg-opacity-0 flex items-center justify-center":"fixed inset-x-96 inset-y-32  w-full h-full bg-gray-800 bg-opacity-0 flex items-center justify-center"}`}>
          <div className="bg-white p-8 rounded-lg border-[1px] border-gray-900  shadow-lg">
            <h2 className="text-xl font-semibold mb-4">Modal Content</h2>
            <p>This is the content of the modal.</p>
            <button onClick={toggleModal} className="mt-4 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
              Close Modal
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Modal;
