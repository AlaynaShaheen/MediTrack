import React from 'react';
import doctors from '../images/doctors.png';
import { useNavigate } from 'react-router-dom';

function HeroSection() {
  const navigate = useNavigate();
  return (
    <div className="bg-white py-8 px-4 sm:px-6 lg:px-8 lg:py-16 mt-[-4rem]">
      <div className="max-w-7xl mx-auto lg:flex lg:items-center lg:justify-between">
        {/* Left side text */}
        <div className="lg:w-1/2">
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl mb-10 " style={{ letterSpacing: '0.03em' }}>
            Empowering Health, Eliminating Waste
          </h1>
          <p className="mt-4 text-3xl text-gray-600">
            From shelf to health, We got you covered
          </p>
          <div className="mt-8 flex">
            <button className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-2xl font-medium rounded-md text-white bg-[#63C625] hover:bg-green-700"
            onClick={() => navigate(`/login?role=PHARMA`)}>
              Pharma login
            </button>
            <button className="ml-4 inline-flex items-center justify-center px-5 py-3 border border-transparent text-2xl font-medium rounded-md text-white bg-[#63C625] hover:bg-green-700 "
            onClick={() => navigate(`/login?role=USER`)}>
              User login
            </button>
          </div>
        </div>
        {/* Right side image */}
        <div className="relative lg:w-1/2 mt-10 lg:mt-0 flex justify-end items-center">
          <div className="relative z-10">
            <img
              src={doctors}
              alt="Doctors"
              className="w-100 h-70 object-cover rounded-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
