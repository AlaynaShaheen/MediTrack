import React, { useState } from 'react';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-lg relative z-10 h-20">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 h-full">
        <div className="relative flex items-center justify-between h-full">
          {/* Logo and title */}
          <div className="flex-shrink-0 ml-[-0rem] sm:ml-[-0.5rem] md:ml-[-1.5rem] lg:ml-[-1.8rem] xl:ml-[-5rem]">
            <span className="text-[#63C625] font-extrabold text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl">
              MEDI
            </span>
            <span className="text-black font-extrabold text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl">
              TRACK
            </span>
          </div>

          {/* Hamburger menu button (for mobile) */}
          <div className="absolute inset-y-0 right-0 flex items-center sm:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 focus:outline-none focus:text-gray-500 transition duration-150 ease-in-out"
            >
              <svg
                className="h-6 w-6"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  className={`${isOpen ? 'hidden' : 'inline-flex'}`}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
                <path
                  className={`${isOpen ? 'inline-flex' : 'hidden'}`}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          {/* Desktop menu links */}
          <div className="hidden sm:flex sm:items-center sm:ml-6">
            <div className="flex">
              <a
                href="#"
                className="text-black px-3 py-6 rounded-md text-xl font-medium hover:text-gray-900 focus:outline-none focus:text-gray-900 transition duration-150 ease-in-out"
              >
                Home
              </a>
              <a
                href="#"
                className="text-black px-3 py-6 rounded-md text-xl font-medium hover:text-gray-900 focus:outline-none focus:text-gray-900 transition duration-150 ease-in-out"
              >
                About
              </a>
              <a
                href="#"
                className="text-black px-3 py-6 rounded-md text-xl font-medium hover:text-gray-900 focus:outline-none focus:text-gray-900 transition duration-150 ease-in-out"
              >
                Guide
              </a>
              <a
                href="#"
                className="text-black px-3 py-6 rounded-md text-xl font-medium hover:text-gray-900 focus:outline-none focus:text-gray-900 transition duration-150 ease-in-out"
              >
                Contact
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Responsive menu (shown on mobile) */}
      <div className={`${isOpen ? 'block' : 'hidden'} sm:hidden`}>
        <div className="px-2 pt-2 pb-3">
          <a
            href="#"
            className="block text-black px-3 py-2 rounded-md text-base font-medium hover:text-gray-900 focus:outline-none focus:text-gray-900 transition duration-150 ease-in-out"
          >
            Home
          </a>
          <a
            href="#"
            className="block text-black px-3 py-2 rounded-md text-base font-medium hover:text-gray-900 focus:outline-none focus:text-gray-900 transition duration-150 ease-in-out"
          >
            About
          </a>
          <a
            href="#"
            className="block text-black px-3 py-2 rounded-md text-base font-medium hover:text-gray-900 focus:outline-none focus:text-gray-900 transition duration-150 ease-in-out"
          >
            Guide
          </a>
          <a
            href="#"
            className="block text-black px-3 py-2 rounded-md text-base font-medium hover:text-gray-900 focus:outline-none focus:text-gray-900 transition duration-150 ease-in-out"
          >
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
