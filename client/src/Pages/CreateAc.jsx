import React from 'react'
import Navbar from '../components/layout/Header'
import Footer from '../components/layout/Footer'

const CreateAc = () => {
  return (
    <div>
        <Navbar/>
      <div className="min-h-screen py-12 bg-gray-800 flex flex-col items-center">
        <div className="font-bold text-white text-3xl text-center mb-8">
          <h1>Create Account</h1>
        </div>
        <div className="flex flex-col md:flex-row items-start w-full max-w-6xl space-y-4 md:space-y-0 md:space-x-8 text-white">
          <div className="w-full md:w-2/3 space-y-4">
            <div>
              <label className="block text-lg font-medium">First name</label>
              <input
                type="text"
                placeholder='First name'
                className="mt-1 block w-full rounded-md border-gray-700 bg-gray-700 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm h-12"
              />
            </div>
            <div>
              <label className="block text-lg font-medium">Email</label>
              <input
                type="email"
                placeholder='Enter email'
                className="mt-1 block w-full rounded-md border-gray-700 bg-gray-700 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm h-12"
              />
            </div>
            <div className="flex space-x-2">
              <div>
                <label className="block text-lg font-medium">Month</label>
                <input
                  type="text"
                  placeholder='MM'
                  className="mt-1 block w-full rounded-md border-gray-700 bg-gray-700 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm h-12"
                />
              </div>
              <div>
                <label className="block text-lg font-medium">Day</label>
                <input
                  type="text"
                  placeholder='DD'
                  className="mt-1 block w-full rounded-md border-gray-700 bg-gray-700 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm h-12"
                />
              </div>
              <div>
                <label className="block text-lg font-medium">Year</label>
                <input
                  type="text"
                  placeholder='YYYY'
                  className="mt-1 block w-full rounded-md border-gray-700 bg-gray-700 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm h-12"
                />
              </div>
            </div>
            <div>
              <label className="block text-lg font-medium">Gender</label>
              <select className="mt-1 block w-full rounded-md border-gray-700 bg-gray-700 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm h-12">
                <option value="" disabled>Select your gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div>
              <label className="block text-lg font-medium">Interested In</label>
              <select className="mt-1 block w-full rounded-md border-gray-700 bg-gray-700 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm h-12">
                <option value="" disabled>Select interest</option>
                <option value="men">Men</option>
                <option value="women">Women</option>
                <option value="everyone">Everyone</option>
              </select>
            </div>
            <div>
              <label className="block text-lg font-medium">Looking For</label>
              <input
                type="text"
                className="mt-1 block w-full rounded-md border-gray-700 bg-gray-700 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm h-12 cursor-pointer"
              />
            </div>
            <div>
              <label className="block text-lg font-medium">Interests</label>
              <input
                type="text"
                className="mt-1 block w-full rounded-md border-gray-700 bg-gray-700 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm h-12 cursor-pointer"
              />
            </div>
            <div>
              <label className="block text-lg font-medium">Sexual Orientation</label>
              <input
                type="text"
                className="mt-1 block w-full rounded-md border-gray-700 bg-gray-700 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm h-12 cursor-pointer"
              />
            </div>
          </div>
          <div className="w-full md:w-1/3 space-y-2">
            <label className="block text-lg font-medium text-white mb-2">Profile Photos</label>
            <div className="grid grid-cols-3 gap-2">
              {Array.from({ length: 6 }).map((_, index) => (
                <div key={index} className="relative">
                  <input
                    type="file"
                    className="hidden"
                    id={`photo-${index}`}
                  />
                  <label
                    htmlFor={`photo-${index}`}
                    className="block w-full h-32 border border-gray-700 bg-gray-700 rounded-md cursor-pointer focus:border-indigo-500 focus:ring-indigo-500"
                  >
                    <span className="flex items-center justify-center w-full h-full text-gray-400">Add Photo</span>
                  </label>
                  
                </div>
              ))}
            </div>
            <div className="font-bold text-sm text-gray-300">
              <p className="mb-4">Upload 2 photos to start. Add 4 or more to make your profile stand out.</p>
            </div>
          </div>
        </div>
        <button
          type="button"
          className="mt-8 w-full md:w-1/3 text-black bg-white hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5"
        >
          Continue
        </button>
      </div>
      <Footer/>
    </div>
  )
}

export default CreateAc
