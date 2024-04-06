import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Modal from "./modal/Modal";

const Navbar = () => {
  const [isOpenModal, setIsOpen] = useState(false);
  const [isScrolling, setIsScrolling] = useState(false);

  useEffect(() => {
    const scrollListener = () => {
      if (window.scrollY > 100) {
        setIsScrolling(true);
      } else {
        setIsScrolling(false);
      }
    };
    window.addEventListener("scroll", scrollListener);
    return () => {
      window.removeEventListener("scroll", scrollListener);
    };
  }, []);

  const toggleModal = () => {
    setIsOpen(!isOpenModal);
  };

  return (
    <div>
      <div
        className={`${
          isScrolling
            ? "fixed bg-white w-full shadow-lg top-0 grid grid-cols-3 place-items-center gap-20 px-10 py-5 text-gray-900 transition-all translate-x-2  duration-200"
            : "grid grid-cols-3 place-items-center gap-20 px-10 py-7 text-gray-900"
        }`}
      >
        <div className="left-col">
          <p className="text-2xl font-bold font-mono">
            <Link to="/">BlogBuZZ</Link>
          </p>
        </div>
        <div className="middle-col text-white px-8 py-3 rounded-full border-[1px] bg-gradient-to-r from-green-400 to-blue-500 ">
          <ul className="flex gap-10">
            <li>
              <Link
                to="/"
                className="hover:text-gray-200 font-bold text-lg font-serif "
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/login"
                className="hover:text-gray-200 font-bold text-lg font-serif"
              >
                Login
              </Link>
            </li>
            <li>
              <Link
                to="/register"
                className="hover:text-gray-200 font-bold text-lg font-serif"
              >
                Register
              </Link>
            </li>
          </ul>
        </div>
        <div className="right-col flex justify-end">
          <button
            onClick={toggleModal}
            className="flex items-center  px-4 py-2 rounded-full text-black text-bold border-[1px] border-gray-950"
          >
            <div>
              <div className="w-6 h-1 bg-black mb-1 rounded-md"></div>
              <div className="w-6 h-1 bg-black mb-1 rounded-md"></div>
              <div className="w-6 h-1 bg-black rounded-md"></div>
            </div>
            <div className="right-col flex justify-end relative">
              <img
                src="/Image/avatar.png"
                alt=""
                width={28}
                height={26}
                className=" bg-white rounded-full object-cover ml-5 cursor-pointer"
              />

            </div>
              <Modal isOpen={isOpenModal} toggleModal={toggleModal} isScrolling={isScrolling} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
