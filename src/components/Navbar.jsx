// src/components/Navbar.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { RiHome4Line } from "react-icons/ri";  // Cleaned icon
import { MdInfoOutline } from "react-icons/md"; // For "About" section
import { FaRegAddressCard } from "react-icons/fa"; // For "Contact" section
import { GiFoodTruck } from "react-icons/gi"; // For "AcharCollection" section
import { IoMdImages } from "react-icons/io"; // For "Gallery" section

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const navItems = [
    { to: "/", label: "Home", icon: <RiHome4Line size={24} /> },
    { to: "/about", label: "About", icon: <MdInfoOutline size={24} /> },
    { to: "/acharcollection", label: "Achar Collection", icon: <GiFoodTruck size={24} /> },
    { to: "/gallery", label: "Gallery", icon: <IoMdImages size={24} /> },
    { to: "/applicationform", label: "Application Form", icon: <FaRegAddressCard size={24} /> },
  ];

  return (
    <nav className="navbar bg-gray-800 shadow-lg  w-full z-50 p-4">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo Section */}
        <div className="text-white font-semibold text-3xl">
          <Link to="/" className="hover:text-gray-400 transition-all duration-300">
            Aavash
          </Link>
        </div>

        {/* Links Section */}
        <div className={`md:flex space-x-8 text-white ${isMenuOpen ? 'block' : 'hidden'}`}>
          {navItems.map((item, index) => (
            <Link
              key={index}
              to={item.to}
              className="flex items-center text-white hover:text-yellow-500 transition-all duration-300 relative group"
            >
              {item.icon}
              <span className="ml-2 text-lg">{item.label}</span>
              {/* Hover Effect */}
              <div className="absolute bottom-0 left-0 w-full h-1 bg-yellow-500 transform scale-x-0 group-hover:scale-x-100 transition-all duration-300" />
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button
            className="text-white focus:outline-none"
            onClick={toggleMenu}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {/* <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'} bg-gray-800 p-4`}>
        {navItems.map((item, index) => (
          <Link
            key={index}
            to={item.to}
            className="block text-white py-2 px-4 hover:text-yellow-500 transition-all duration-300"
            onClick={() => setIsMenuOpen(false)}
          >
            {item.icon} {item.label}
          </Link>
        ))}
      </div> */}
    </nav>
  );
};

export default Navbar;
