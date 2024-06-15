// src/components/Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { FaUser, FaComments } from 'react-icons/fa';
import { AiFillFire } from 'react-icons/ai';

const Navbar = () => {
  return (
    <nav className="bg-black bg-opacity-60 shadow-md sticky top-0 z-50">
    <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
      <div className="relative flex items-center justify-between h-16">
        <div className="absolute inset-y-0 left-0 flex items-center">
          <Link to="/user/" className="p-2 text-gray-900 dark:text-white font-bold text-2xl hover:text-white ">
            Dating-app❤️
          </Link>
        </div>
       
        <div className="absolute inset-y-0 right-0 flex items-center">
        <Link to="/user/login" className="text-black bg-white hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-600">
              Log in
            </Link>
        </div>
      </div>
    </div>
  </nav>
  );
};

export default Navbar;
