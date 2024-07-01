import React from 'react'
import Navbar from '../components/layout/Header'
import Footer from '../components/layout/Footer'

const InterestedIn = () => {
  return (
    <div>
      <Navbar/>
      <div className='min-h-screen py-12 bg-gray-800 flex flex-col items-center'>
        <h1 className="font-bold text-white text-3xl text-center mb-8">Interested In</h1>
        <div className="w-full max-w-md bg-white rounded-lg shadow-md p-6">
          <div className="flex flex-col space-y-4">
            <div className="flex items-center">
              <input
                type="radio"
                id="interested-men"
                name="interested"
                value="men"
                className="hidden peer"
              />
              <label
                htmlFor="interested-men"
                className="peer-checked:bg-indigo-500 peer-checked:text-white mt-1 block w-full rounded-md border-gray-300 bg-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm h-14 flex items-center justify-center cursor-pointer"
              >
                Men
              </label>
            </div>
            <div className="flex items-center">
              <input
                type="radio"
                id="interested-women"
                name="interested"
                value="women"
                className="hidden peer"
              />
              <label
                htmlFor="interested-women"
                className="peer-checked:bg-indigo-500 peer-checked:text-white mt-1 block w-full rounded-md border-gray-300 bg-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm h-14 flex items-center justify-center cursor-pointer"
              >
                Women
              </label>
            </div>
            <div className="flex items-center">
              <input
                type="radio"
                id="interested-everyone"
                name="interested"
                value="everyone"
                className="hidden peer"
              />
              <label
                htmlFor="interested-everyone"
                className="peer-checked:bg-indigo-500 peer-checked:text-white mt-1 block w-full rounded-md border-gray-300 bg-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm h-14 flex items-center justify-center cursor-pointer"
              >
                Everyone
              </label>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default InterestedIn
