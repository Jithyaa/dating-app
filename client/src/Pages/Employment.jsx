import React from 'react'
import Navbar from '../components/layout/Header'
import Footer from '../components/layout/Footer'
import { useNavigate } from 'react-router-dom'

const Employment = () => {
    const navigate = useNavigate()
    const handleContinue = ()=>{
        navigate('/user/status')
    }
  return (
    <div>
        <Navbar/>
        <div className='min-h-screen py-12 bg-gray-800 flex flex-col items-center'>
        <div className="font-bold text-white text-3xl text-center mb-8">
          <h1>Add Employment</h1>
        </div>
        <div className="flex flex-col space-y-4 mb-8 items-center">
                    <button
                        type="button"
                        className="w-full  h-24 text-black bg-white hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-lg px-5 py-8 text-center"
                        onClick={() => handleContinue('/employee-employer')}
                    >
                        Employee/Employer
                    </button>
                    <button
                        type="button"
                        className="w-full  h-24 text-black bg-white hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-lg px-5 py-8 text-center"
                        onClick={() => handleContinue('/job-seeker')}
                    >
                        Job Seeker
                    </button>
                </div>
        <button
          type="button"
          className="w-full md:w-1/5 text-black bg-white hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5"
          onClick={handleContinue}
        >
          Continue
        </button>
      </div>
    <Footer/>
    </div>
  )
}

export default Employment
