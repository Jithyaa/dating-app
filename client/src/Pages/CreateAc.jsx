import React from 'react'
import Navbar from '../components/layout/Header'
import Footer from '../components/layout/Footer'
import InterestModal from '../components/layout/InterestModal'
import { useNavigate } from 'react-router-dom'

const CreateAc = () => {
  // const [isModalOpen, setIsModalOpen] = useState(false);
  // const [selectedHobbies, setSelectedHobbies] = useState([]);

  // const handleModalOpen = () => {
  //   setIsModalOpen(true);
  // };

  // const handleModalClose = () => {
  //   setIsModalOpen(false);
  // };

  // const handleHobbySelection = (hobby) => {
  //   setSelectedHobbies((prevSelectedHobbies) => {
  //     if (prevSelectedHobbies.includes(hobby)) {
  //       return prevSelectedHobbies.filter((h) => h !== hobby);
  //     } else {
  //       return [...prevSelectedHobbies, hobby];
  //     }
  //   });
  // };

  const navigate = useNavigate()
  const handleContinue = ()=>{
    navigate('/user/employment')
  }
  return (
    <div>
      <Navbar />
      <div className="min-h-screen py-12 bg-gray-800 flex flex-col items-center">
        <div className="font-bold text-white text-3xl text-center mb-8">
          <h1>Create Account</h1>
        </div>
        <div className="flex flex-col md:flex-row items-start w-full max-w-6xl space-y-4 md:space-y-0 md:space-x-8 text-white">
          <div className="w-full md:w-2/3 space-y-4">
            <div>
              <label className="block  text-lg font-medium">First name</label>
              <input
                type="text"
                placeholder='First name'
                className="mt-1 block w-full p-2.5 rounded-md border-gray-700 bg-gray-700 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm h-12"
              />
            </div>
            <div>
              <label className="block text-lg font-medium">Email</label>
              <input
                type="email"
                placeholder='Enter email'
                className="mt-1 block w-full p-2.5 rounded-md border-gray-700 bg-gray-700 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm h-12"
              />
            </div>
            <div className="flex space-x-2">
              <div>
                <label className="block text-lg font-medium">Month</label>
                <input
                  type="text"
                  placeholder='MM'
                  className="mt-1 block w-full p-2.5 rounded-md border-gray-700 bg-gray-700 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm h-12"
                />
              </div>
              <div>
                <label className="block text-lg font-medium">Day</label>
                <input
                  type="text"
                  placeholder='DD'
                  className="mt-1 block w-full p-2.5 rounded-md border-gray-700 bg-gray-700 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm h-12"
                />
              </div>
              <div>
                <label className="block text-lg font-medium">Year</label>
                <input
                  type="text"
                  placeholder='YYYY'
                  className="mt-1 block w-full p-2.5 rounded-md border-gray-700 bg-gray-700 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm h-12"
                />
              </div>
            </div>
            <div>
              <label className="block text-lg font-medium mb-2">Gender</label>
              <div className="flex space-x-4">
                <label className="block text-center">
                  <input
                    type="radio"
                    name="gender"
                    value="male"
                    className="hidden peer"
                  />
                  <div className="peer-checked:bg-indigo-500 peer-checked:text-white mt-1 block w-full rounded-md border-gray-700 bg-gray-700 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm h-12 w-32 flex items-center justify-center cursor-pointer">
                    Male
                  </div>
                </label>
                <label className="block text-center">
                  <input
                    type="radio"
                    name="gender"
                    value="female"
                    className="hidden peer"
                  />
                  <div className="peer-checked:bg-indigo-500 peer-checked:text-white mt-1 block w-full rounded-md border-gray-700 bg-gray-700 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm h-12 w-32 flex items-center justify-center cursor-pointer">
                    Female
                  </div>
                </label>
                <label className="block text-center">
                  <input
                    type="radio"
                    name="gender"
                    value="other"
                    className="hidden peer"
                  />
                  <div className="peer-checked:bg-indigo-500 peer-checked:text-white mt-1 block w-full rounded-md border-gray-700 bg-gray-700 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm h-12 w-32 flex items-center justify-center cursor-pointer">
                    Other
                  </div>
                </label>
              </div>
            </div>


            <div>
              <label className="block text-lg font-medium mb-2">Interested in</label>
              <div className="flex space-x-4">
                <label className="block text-center">
                  <input
                    type="radio"
                    name="interested"
                    value="men"
                    className="hidden peer"
                  />
                  <div className="peer-checked:bg-indigo-500 peer-checked:text-white mt-1 block w-full rounded-md border-gray-700 bg-gray-700 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm h-12 w-32 flex items-center justify-center cursor-pointer">
                    Men
                  </div>
                </label>
                <label className="block text-center">
                  <input
                    type="radio"
                    name="interested"
                    value="women"
                    className="hidden peer"
                  />
                  <div className="peer-checked:bg-indigo-500 peer-checked:text-white mt-1 block w-full rounded-md border-gray-700 bg-gray-700 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm h-12 w-32 flex items-center justify-center cursor-pointer">
                    Women
                  </div>
                </label>
                <label className="block text-center">
                  <input
                    type="radio"
                    name="interested"
                    value="everyone"
                    className="hidden peer"
                  />
                  <div className="peer-checked:bg-indigo-500 peer-checked:text-white mt-1 block w-full rounded-md border-gray-700 bg-gray-700 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm h-12 w-32 flex items-center justify-center cursor-pointer">
                    Everyone
                  </div>
                </label>
              </div>
            </div>

            {/* <div>
              <label className="block text-lg font-medium">Looking For</label>
              <input
                type="text"
                className="mt-1 block w-full rounded-md border-gray-700 bg-gray-700 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm h-12 cursor-pointer"
              />
            </div> */}
           -------- {/* <div>
              <label className="block text-lg font-medium">Interests</label>
              <button
                type="button"
                className="mt-1 block w-full p-2.5 rounded-md border-gray-700 bg-gray-700 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm h-12 cursor-pointer"
                onClick={handleModalOpen}
              >
                Add Interests
              </button>
            </div> */}------
            {/* <div>
              <label className="block text-lg font-medium">Sexual Orientation</label>
              <input
                type="text"
                className="mt-1 block w-full rounded-md border-gray-700 bg-gray-700 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm h-12 cursor-pointer"
              />
            </div> */}
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
          onClick={handleContinue}
        >
          Continue
        </button>
      </div>
      <Footer />
      {/* {isModalOpen && (
        <InterestModal
          isOpen={isModalOpen}
          onClose={handleModalClose}
          selectedHobbies={selectedHobbies}
          handleHobbySelection={handleHobbySelection}
        />
      )} */}
    </div>
  )
}

export default CreateAc
