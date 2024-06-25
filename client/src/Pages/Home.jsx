import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/layout/Header';
import Footer from '../components/layout/Footer';

const Home = () => {
  const imageUrl = 'https://i.insider.com/6050c416fe6a340019acede2?width=700'
  return (
    <div>
    <Navbar />
    <div
      className="min-h-screen flex items-center justify-center relative"
      style={{
        backgroundImage: `url(${imageUrl})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 w-full h-full absolute mix-blend-multiply opacity-70"></div>
        <div className="relative z-10 flex flex-col items-center text-center px-4">
          <h1 className="text-5xl font-extrabold text-white mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
            Find Your Perfect Match Today
          </h1>
          <p className="text-lg text-gray-100 mb-8" style={{ fontFamily: 'Poppins, sans-serif' }}>
            Start your love story with us.
          </p>
          <Link
            to="/user/signup"
            className="text-white bg-blue-500 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-500 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mb-4"
          >
            Create Account
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
