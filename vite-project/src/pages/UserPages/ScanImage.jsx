import React from 'react';
import Scan from '../../images/Scan.png';
import Scan1 from '../../images/Scan1.png';
import { FaCamera } from 'react-icons/fa';

function ScanImagePage() {
  return (
    <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
      {/* Header section */}
      <h1 className="text-3xl font-bold text-gray-900 mb-6">Scan For Image</h1>

      {/* Image and buttons section */}
      <div className="flex items-center justify-between mb-6">
        {/* Left side image */}
        <div className="w-1/2">
          <img
            src={Scan}
            alt="Left Image"
            className="w-full h-auto mb-2"
          />
        </div>

        {/* Right side image with buttons and text */}
        <div className="w-1/2 flex flex-col items-center">
          <div className="relative border-dotted border-4 border-gray-400 rounded-md p-4 flex items-center justify-center">
            <img
              src={Scan1}
              alt="Right Image"
              className="w-1/2 h-auto"
            />
          </div>
          <button className="mt-4 bg-[#63C625] hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
            Choose Image from Files
          </button>
          <p className="mt-2 mb-1">Or drop an image</p>
          <button className="bg-gray-200 hover:bg-gray-300 text-gray-600 font-bold py-2 px-2 rounded flex items-center justify-center">
          <FaCamera className="h-6 w-6 mr-2" />
          </button>
          <p className="text-center mt-2">Open Camera to Scan</p>
        </div>
      </div>
    </div>
  );
}

export default ScanImagePage;
