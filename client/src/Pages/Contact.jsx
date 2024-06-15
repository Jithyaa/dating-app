import React from 'react'
import Navbar from '../components/layout/Header'
import Footer from '../components/layout/Footer'

const Contact = () => {
  return (
    <div>
      <Navbar />
      <div className="min-h-screen py-12 bg-gray-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="p-6 text-black">
              <div className="text-center mb-6">
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900">Contact Us</h3>
              </div>
              <div className="text-gray-700 font-semibold dark:text-gray-800">
                <p className="mb-4">
                  Have questions or feedback? We'd love to hear from you! Reach out to us using the contact information below, and we'll get back to you as soon as possible.
                </p>
                <h4 className="text-lg font-bold mb-2">Email</h4>
                <p className="mb-4">support@datify.com</p>
                <h4 className="text-lg font-bold mb-2">Phone</h4>
                <p className="mb-4">(91) 8976553322</p>
                <h4 className="text-lg font-bold mb-2">Address</h4>
                <p className="mb-4">123 Main Street, City, State, ZIP</p>
                <p className="mb-4">Country</p>
                <h4 className="text-lg font-bold mb-2">Social Media</h4>
                {/* <div className="flex space-x-4">
                  <a href="#" className="text-gray-900 dark:text-white hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Facebook</a>
                  <a href="#" className="text-gray-900 dark:text-white hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Twitter</a>
                  <a href="#" className="text-gray-900 dark:text-white hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Instagram</a>
                  <a href="#" className="text-gray-900 dark:text-white hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">LinkedIn</a>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Contact
