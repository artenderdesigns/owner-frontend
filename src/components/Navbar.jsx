import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa"; // React Icons for menu button
import logo from "../assets/logo_black.png";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const navigate = useNavigate();

  // Toggle sidebar visibility
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div>
      {/* Navbar for large screens (lg and up) */}
      <div className="hidden lg:flex sticky top-0 w-full h-16 items-center justify-between text-white px-6 bg-gray-700 shadow-md z-50">
        {/* Logo */}
        <div>
          <img className="h-28" src={logo} alt="Logo" />
        </div>

        {/* Navbar links */}
        <ul className="flex gap-x-8">
          <li
            className="cursor-pointer duration-300 transition-transform transform hover:scale-110"
            onClick={() => {
              navigate("/");
            }}
          >
            Home
            <hr className="border-none w-[80%] h-[3px] rounded bg-red-600" />
          </li>
          <li
            onClick={() => {
              navigate("/about-us");
            }}
            className="cursor-pointer duration-300 transition-transform transform hover:scale-110"
          >
            About
            <hr className="border-none w-[80%] h-[3px] rounded bg-red-600" />
          </li>
          <li
            onClick={() => {
              navigate("/work");
            }}
            className="cursor-pointer duration-300 transition-transform transform hover:scale-110"
          >
            Work
            <hr className="border-none w-[80%] h-[3px] rounded bg-red-600" />
          </li>
          <li
            className="cursor-pointer duration-300 transition-transform transform hover:scale-110"
            onClick={() => {
              navigate("/contact-us");
            }}
          >
            Contact
            <hr className="border-none w-[80%] h-[3px] rounded bg-red-600" />
          </li>
        </ul>
      </div>

      {/* Sidebar for smaller screens (md and below) */}
      <div
        className={`lg:hidden fixed top-0 right-0 w-64 h-full bg-gray-800 text-white transform ${
          isSidebarOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out z-40`}
      >
        {/* Logo in the sidebar */}
        <div className="flex justify-center pt-10">
          <img className="h-28" src={logo} alt="Logo" />
        </div>

        {/* Sidebar links */}
        <ul className="flex flex-col items-center space-y-8 pt-10">
          <li className="cursor-pointer duration-300 transition-transform transform hover:scale-110">
            Home
            <hr className="border-none w-[80%] h-[3px] rounded bg-red-600" />
          </li>
          <li className="cursor-pointer duration-300 transition-transform transform hover:scale-110">
            About
            <hr className="border-none w-[80%] h-[3px] rounded bg-red-600" />
          </li>
          <li className="cursor-pointer duration-300 transition-transform transform hover:scale-110">
            Work
            <hr className="border-none w-[80%] h-[3px] rounded bg-red-600" />
          </li>
          <li className="cursor-pointer duration-300 transition-transform transform hover:scale-110">
            Contact
            <hr className="border-none w-[80%] h-[3px] rounded bg-red-600" />
          </li>
        </ul>
      </div>

      {/* Mobile Menu Button (hamburger icon) */}
      <div className="lg:hidden fixed top-4 right-4 z-50">
        <button
          className="text-white p-4 bg-gray-700 rounded-full shadow-md"
          onClick={toggleSidebar}
        >
          {isSidebarOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>
    </div>
  );
}

export default Navbar;
