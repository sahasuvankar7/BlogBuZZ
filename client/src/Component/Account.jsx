import React, { useContext, useEffect } from "react";
import { MyContext } from "../Context/MyContext";
import { Link } from "react-router-dom";

const Account = () => {
  const { user } = useContext(MyContext);

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center">
      <div className="bg-white rounded-lg shadow-lg p-6 w-11/12 md:max-w-md">
        <h2 className="text-3xl font-bold mb-6 text-center">
          Account Information
        </h2>
        <div className="mb-6">
          <p className="text-lg text-gray-700 mb-2">
            Name: <span className="font-semibold">{user.name}</span>
          </p>
          <p className="text-lg text-gray-700">
            Email: <span className="font-semibold">{user.email}</span>
          </p>
        </div>
        <div className="flex flex-col md:flex-row md:justify-center space-y-4 md:space-y-0 md:space-x-4">
          <Link to="/create">
            <button className="bg-green-500 hover:bg-green-600 text-white py-2 px-6 rounded-lg focus:outline-none transition duration-300 w-full md:w-auto">
              Create New Post
            </button>
          </Link>
          <Link to='/update'>
            <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-6 rounded-lg focus:outline-none transition duration-300 w-full md:w-auto">
              Update Post
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Account;
