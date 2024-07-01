import React from 'react';

const InterestModal = ({ isOpen, onClose, selectedHobbies, handleHobbySelection }) => {
    const hobbies = [
        'Reading', 'Writing', 'Traveling', 'Cooking', 'Sports', 'Music',
        'Art', 'Dancing', 'Gaming', 'Gardening', 'Fishing', 'Hiking',
        'Photography', 'Yoga', 'Meditation', 'Knitting', 'Cycling',
        'Swimming', 'Movies', 'Theater'
      ];

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-8 max-w-md w-full">
        <h2 className="text-xl font-bold mb-4">Select Your Interests</h2>
        <div className="space-y-4">
          {hobbies.map((hobby) => (
            <label key={hobby} className="block">
              <input
                type="checkbox"
                checked={selectedHobbies.includes(hobby)}
                onChange={() => handleHobbySelection(hobby)}
              />
              <span className="ml-2">{hobby}</span>
            </label>
          ))}
        </div>
        <div className="mt-4">
          <button
            type="button"
            className="bg-indigo-500 text-white rounded px-4 py-2"
            onClick={onClose}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default InterestModal;
