import React from "react";
import { FaFacebook, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-800 shadow-lg text-white py-6 sm:py-10">
      <div className="container mx-auto px-6">
        {/* Playful Sarcastic Text */}
        <div className="mb-4 sm:mb-6 text-center">
          <p className="text-sm sm:text-base">
            Still searching for achar while missing out on real treasures!
          </p>
          <p className="text-xs sm:text-lg text-gray-400">
            Need to talk to the master himself? Feel free to reach out!
          </p>
        </div>

        {/* Contact Details Section */}
        <div className="mb-6 text-center">
          <a
            href="tel:+917011327067"
            className="text-yellow-400 hover:text-yellow-500 text-xl sm:text-2xl transition-all duration-300"
          >
            Call Aavash at: +91 70113 27067 📞
          </a>
        </div>

        {/* Social Media Section */}
        <div className="mb-6 flex justify-center space-x-6 sm:space-x-8 text-center">
          {/* Facebook Icon with the provided link */}
          <a
            href="https://www.facebook.com/binge07"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-yellow-400 text-2xl sm:text-3xl transition-all duration-300"
          >
            <FaFacebook />
          </a>
          {/* Instagram Icon with the provided link */}
          <a
            href="https://www.instagram.com/hangkimg_sangkim/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-yellow-400 text-2xl sm:text-3xl transition-all duration-300"
          >
            <FaInstagram />
          </a>
        </div>

        {/* Copyright Section */}
        <div className="text-center text-xs sm:text-sm text-gray-400">
          <p>&copy; 2025 Aavash's Achar. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
