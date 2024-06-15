import React, { useState } from 'react'


const Main = () => {
    const profileImageUrl = 'https://img.freepik.com/premium-vector/female-user-profile-avatar-is-woman-character-screen-saver-with-emotions_505620-617.jpg';
    const [activeSection,setActiveSection]=useState('messages');

    const messages = [
        { id: 1, name: 'Alice', profileUrl: 'https://via.placeholder.com/150' },
        { id: 2, name: 'Bob', profileUrl: 'https://via.placeholder.com/150' },
        { id: 3, name: 'Carol', profileUrl: 'https://via.placeholder.com/150' },
        { id: 4, name: 'Dave', profileUrl: 'https://via.placeholder.com/150' },
        { id: 5, name: 'Eve', profileUrl: 'https://via.placeholder.com/150' },
        { id: 6, name: 'Frank', profileUrl: 'https://via.placeholder.com/150' },
        { id: 7, name: 'Grace', profileUrl: 'https://via.placeholder.com/150' },
        { id: 8, name: 'Heidi', profileUrl: 'https://via.placeholder.com/150' },
        { id: 9, name: 'Ivan', profileUrl: 'https://via.placeholder.com/150' },
    ];
    
      const matches = [
        { id: 1, name: 'Charlie', profileUrl: 'https://via.placeholder.com/150' },
        { id: 2, name: 'Diana', profileUrl: 'https://via.placeholder.com/150' },
        { id: 3, name: 'Carol', profileUrl: 'https://via.placeholder.com/150' },
        { id: 4, name: 'Dave', profileUrl: 'https://via.placeholder.com/150' },
      ];

      const [currentIndex, setCurrentIndex] = useState(matches.length - 1);

      const handleSwipe = (direction) => {
          if (direction === 'left' || direction === 'right') {
              setCurrentIndex(prevIndex => (prevIndex > 0 ? prevIndex - 1 : 0));
          }
      };

    return (
        <div className="min-h-screen flex bg-gray-900 text-white">
            {/* Left side */}
            <div className="w-1/3 p-4 bg-gray-900">
                <div className="bg-blue-500 p-4 rounded-lg -mt-4 -ml-4 -mr-4 flex justify-between items-center">
                        {/* Profile image */}
          <img
            src={profileImageUrl}
            alt="Profile"
            className="w-16 h-16 rounded-full"
          />
          {/* Right content */}
          <div className="flex space-x-4">
            <button onClick={() => setActiveSection('messages')} className="text-lg font-bold">Messages</button>
            <button onClick={() => setActiveSection('matches')} className="text-lg font-bold">Matches</button>
          </div>
        </div>

        {/* Conditionally render Messages or Matches */}
        <div className="mt-4 bg-gray-800 p-4 rounded-lg overflow-y-auto max-h-screen">
          {activeSection === 'messages' ? (
            messages.map(message => (
              <div key={message.id} className="flex items-center mb-4">
                <img src={message.profileUrl} alt={message.name} className="w-12 h-12 rounded-full mr-4" />
                <p className="text-lg">{message.name}</p>
              </div>
            ))
          ) : (
            matches.map(match => (
              <div key={match.id} className="flex items-center mb-4">
                <img src={match.profileUrl} alt={match.name} className="w-12 h-12 rounded-full mr-4" />
                <p className="text-lg">{match.name}</p>
              </div>
            ))
          )}
        </div>
      </div>

            {/* Right side */}
            <div className="w-2/3 p-4 bg-black">
                <h2 className="text-xl font-bold mb-4">Right Side</h2>
                <p>This is the right side content.</p>
            </div>
        </div>
    )
}

export default Main
