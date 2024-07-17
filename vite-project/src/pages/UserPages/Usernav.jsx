import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaChevronLeft, FaBell, FaSearch } from 'react-icons/fa'; // Assuming you're using react-icons for icons

function Navbar() {
  const navigate = useNavigate();

  return (
    <nav className="bg-white shadow-lg px-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between h-16">
          {/* Left section */}
          <div className="flex items-center">
            <button className="text-gray-600 focus:outline-none"
            onClick={() => navigate('/')}>
              <FaChevronLeft className="h-24 w-6" />
            </button>
            <div className="ml-10 text-[#63C625] font-extrabold text-lg sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl">
              <span className="text-[#63C625] font-extrabold text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl">
                MEDI
              </span>
              <span className="text-black font-extrabold text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl">
                TRACK
              </span>
            </div>
          </div>

          {/* Right section */}
          <div className="flex items-center ml-auto">
            <div className="relative">
              <input
                type="text"
                placeholder="Search"
                className="py-1 pl-8 pr-12 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#63C625] focus:border-transparent w-64 md:w-80"
                // Adjust width as needed
              />
              <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
                <FaSearch className="text-gray-400" />
              </div>
            </div>
            <button
              className="ml-2 text-gray-400 focus:outline-none"
              onClick={() => navigate('/notifications')}
            >
              <FaBell className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
