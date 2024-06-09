import React from 'react'
import Navbar from '../components/layout/Header'
import Footer from '../components/layout/Footer'

const About = () => {
  return (
    <div>
      <Navbar />
      <div className="min-h-screen py-12 bg-gray-300">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="p-6">
              <div className="text-center mb-6">
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900">About Datify❤️</h3>
              </div>
              <div className="text-gray-700 font-semibold dark:text-gray-800">
                <p className="mb-4">
                  Welcome to Datify, your premier destination for finding meaningful connections and lasting relationships. At Datify, we believe that love knows no boundaries, and we strive to connect people from all walks of life.
                </p>
                <h4 className="text-lg font-bold mb-2">Our Mission</h4>
                <p className="mb-4">
                  Our mission is to create a safe and welcoming space where individuals can find true companionship. We are committed to fostering genuine connections through innovative features and a user-friendly interface.
                </p>
                <h4 className="text-lg font-bold mb-2">Why Choose Us?</h4>
                <ul className="list-disc ml-5 mb-4">
                  <li>Advanced matching algorithms that bring compatible people together.</li>
                  <li>User privacy and security are our top priorities.</li>
                  <li>A diverse community of members looking for serious relationships.</li>
                  <li>24/7 customer support to assist you with any queries or issues.</li>
                </ul>
                <h4 className="text-lg font-bold mb-2">Join Us Today</h4>
                <p className="mb-4">
                  Take the first step towards finding your perfect match. Join Datify today and embark on a journey to discover meaningful relationships that can last a lifetime.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default About
