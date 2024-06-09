import React from 'react';
import Navbar from '../components/layout/Header';

const Profile = () => {
  return (
    <div>
        <Navbar/>
    <div className="min-h-screen bg-gray-100 dark:bg-gray-300 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
        <div className="flex flex-col items-center">
          <img
            className="h-24 w-24 rounded-full object-cover mb-4"
            src="https://via.placeholder.com/150"
            alt="Profile"
          />
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">John Doe</h2>
          <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">Software Developer</p>
          <p className="text-center text-gray-700 dark:text-gray-400 mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, pulvinar
            facilisis justo mollis, auctor consequat urna.
          </p>
          <div className="flex space-x-4">
            <button className="text-white bg-blue-500 hover:bg-blue-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
              Edit Profile
            </button>
            <button className="text-white bg-red-500 hover:bg-red-600 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800">
              Logout
            </button>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Profile;
