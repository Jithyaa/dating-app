import React from 'react'

const Main = () => {
  return (
    <div className="min-h-screen flex bg-gray-800 text-white">
      {/* Left side */}
      <div className="w-1/3 p-4 bg-gray-700">
        <h2 className="text-xl font-bold mb-4">Left Side</h2>
        <p>This is the left side content.</p>
      </div>

      {/* Right side */}
      <div className="w-2/3 p-4 bg-gray-900">
        <h2 className="text-xl font-bold mb-4">Right Side</h2>
        <p>This is the right side content.</p>
      </div>
    </div>
  )
}

export default Main
