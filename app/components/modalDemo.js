import React, { useState } from "react";

function SearchModal({ isOpen, onClose }) {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = () => {
    // Handle search logic here
    console.log("Searching for:", searchTerm);
  };

  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded-lg p-8 w-96">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-bold">Search</h2>
              <button
                className="text-gray-500 hover:text-gray-700"
                onClick={onClose}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <input
              type="text"
              className="w-full border border-gray-300 rounded-md px-3 py-2 outline-none focus:border-blue-500"
              placeholder="Search..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button
              className="mt-4 w-full bg-blue-500 text-white rounded-md py-2"
              onClick={handleSearch}
            >
              Search
            </button>
          </div>
        </div>
      )}
    </>
  );
}

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div className="min-h-screen flex justify-center items-center">
      <button
        className="bg-blue-500 text-white rounded-md py-2 px-4"
        onClick={toggleModal}
      >
        Open Search Modal
      </button>
      <SearchModal isOpen={isModalOpen} onClose={toggleModal} />
    </div>
  );
}

export default App;
