// Footer.jsx
import React from 'react';
import { FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-50 font-semibold text-gray-800 p-4 border-2 border-t-gray-300 flex justify-center items-center space-x-4">
      <p>Made by Tushar Agrawal </p>
      <a href="https://www.linkedin.com/in/tushar-agrawal-774885261/" target="_blank" rel="noopener noreferrer">
        <FaLinkedin className="text-blue-500 hover:text-blue-700" size={24} />
      </a>
    </footer>
  );
};

export default Footer;
