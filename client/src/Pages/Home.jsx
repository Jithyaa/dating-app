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

      <div className="bg-white py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-8">Features</h2>
          <div className="flex flex-wrap -mx-4">
            <div className="w-full md:w-1/3 px-4 mb-8">
              <div className="p-6 border rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold mb-4">Matchmaking Algorithms</h3>
                <p>Our advanced algorithms ensure you find the best matches based on your preferences.</p>
              </div>
            </div>
            <div className="w-full md:w-1/3 px-4 mb-8">
              <div className="p-6 border rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold mb-4">Verified Profiles</h3>
                <p>We verify all profiles to ensure genuine connections.</p>
              </div>
            </div>
            <div className="w-full md:w-1/3 px-4 mb-8">
              <div className="p-6 border rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold mb-4">24/7 Support</h3>
                <p>Our support team is available around the clock to assist you.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gray-100 py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-8">What Our Users Say</h2>
          <div className="flex flex-wrap -mx-4">
            <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
              <div className="p-6 border rounded-lg shadow-lg bg-white">
                <p className="italic">"This app changed my life! I found my soulmate here."</p>
                <p className="mt-4 text-right">- John Doe</p>
              </div>
            </div>
            <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
              <div className="p-6 border rounded-lg shadow-lg bg-white">
                <p className="italic">"Amazing experience! The features are top-notch."</p>
                <p className="mt-4 text-right">- Jane Smith</p>
              </div>
            </div>
            <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
              <div className="p-6 border rounded-lg shadow-lg bg-white">
                <p className="italic">"Highly recommend for anyone looking for a serious relationship."</p>
                <p className="mt-4 text-right">- Alice Brown</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-8">Join the Community</h2>
          <div className="flex flex-wrap -mx-4 text-center">
            <div className="w-full md:w-1/3 px-4 mb-8">
              <div className="p-6 border rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold mb-4">500k+</h3>
                <p>Active Users</p>
              </div>
            </div>
            <div className="w-full md:w-1/3 px-4 mb-8">
              <div className="p-6 border rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold mb-4">1M+</h3>
                <p>Messages Sent Daily</p>
              </div>
            </div>
            <div className="w-full md:w-1/3 px-4 mb-8">
              <div className="p-6 border rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold mb-4">200k+</h3>
                <p>Matches Made</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Home;
