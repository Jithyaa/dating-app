import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/layout/Header';
import Footer from '../components/layout/Footer';

const Home = () => {
  const imageUrl = 'https://media.restless.co.uk/uploads/2024/01/what-to-avoid-when-starting-a-conversation-on-a-dating-app.jpg'
  return (
    <div>
      <Navbar />
      <div
        className="min-h-screen flex items-center justify-center"
        style={{
          backgroundImage: `url(${imageUrl})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
         <div className="bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 w-full h-full absolute mix-blend-multiply opacity-70"></div>
        <div className="relative z-10 flex flex-col items-center">
          <h1 className="text-5xl font-extrabold text-white mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
            Find Your Perfect Match Today
          </h1>
          <p className="text-lg text-gray-100 mb-8" style={{ fontFamily: 'Poppins, sans-serif' }}>
            Start your love story with us.
          </p>
          <div className="flex space-x-4 justify-center">
            <Link
              to="/user/signup"
              className="text-white bg-green-500 hover:bg-green-700 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-green-500 dark:hover:bg-green-700 dark:focus:ring-green-800"
            >
              Create account
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
