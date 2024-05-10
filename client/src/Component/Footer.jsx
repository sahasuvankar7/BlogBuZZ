import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h2 className="text-lg font-semibold mb-4">About Us</h2>
            <p className="text-sm">
            BlogBuzz is a blogging platform where users can read, create, update, and delete posts. Authenticated users have full control over their content, while others can enjoy a diverse range of articles, stories, and insights shared by our vibrant community.
            </p>
          </div>
          <div>
            <h2 className="text-lg font-semibold mb-4">Contact Us</h2>
            <p className="text-sm">Park Street ,Kolkata - 7004012 , WB , INDIA</p>
            <p className="text-sm">suvankarsaha701@gmail.com</p>
            <p className="text-sm">+91-9876543210 IN</p>
          </div>
          <div>
            <h2 className="text-lg font-semibold mb-4">Follow Us</h2>
            <div className="flex space-x-4">
              <a
                href="https://github.com/sahasuvankar7"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-gray-400"
              >
                <FontAwesomeIcon icon={faGithub} size="2x" />
              </a>
              <a
                href="https://www.linkedin.com/in/suvankar-saha-256b96214/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-gray-400"
              >
                <FontAwesomeIcon icon={faLinkedin} size="2x" />
              </a>
              <a
                href="https://twitter.com/Suvankar1331"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-gray-400"
              >
                <FontAwesomeIcon icon={faTwitter} size="2x" />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-800 pt-8 md:flex md:items-center md:justify-between">
          <p className="text-sm">© 2024 Your Company. All rights reserved.</p>
          <p className="text-sm mt-4 md:mt-0">
            Designed by{" "}
            <a href="" className="text-blue-400 font-semibold text-base hover:underline">
              Suvankar Saha
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
