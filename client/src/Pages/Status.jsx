import React from 'react'
import { useNavigate } from 'react-router-dom'
import Navbar from '../components/layout/Header'
import Footer from '../components/layout/Footer'

const Status = () => {
    const navigate = useNavigate()
    const handleContinue = ()=>{
        navigate('/user/interestedin')
    }
  return (
    <div>
        <Navbar/>
        <div className='min-h-screen py-12 bg-gray-800 flex flex-col items-center'>
        <div className="font-bold text-white text-3xl text-center mb-8">
          <h1>Relationship intent</h1>
        </div>
        <div className="flex flex-col space-y-4 mb-8 items-center">
                    <button
                        type="button"
                        className="w-full  h-24 text-black bg-white hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-lg px-5 py-8 text-center"
                        // onClick={() => handleContinue('/employee-employer')}
                    >
                        Long term relationship
                    </button>
                    <button
                        type="button"
                        className="w-full  h-24 text-black bg-white hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-lg px-5 py-8 text-center"
                        onClick={() => handleContinue('/user/interestedin')}
                    >
                       Short term relationship
                    </button>
                </div>
      </div>
    <Footer/>
    </div>
  )
}

export default Status
