import React from 'react';
import aboutImage from '../images/about.png';

function AboutSection() {
  return (
    <div className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto lg:flex lg:items-center lg:justify-between">
        {/* Left side image */}
        <div className="lg:w-1/3 mb-8 lg:mb-0">
          <img
            src={aboutImage}
            alt="About Us"
            className="w-full h-auto rounded-lg "
          />
        </div>

        {/* Right side text */}
        <div className="lg:w-2/3 lg:pl-12">
          <h2 className="text-5xl font-bold text-gray-900 mb-4">About Us</h2>
          <div className="border-b-4 border-[#63C625] w-20 mb-8"></div>
          <p className="text-2xl text-gray-700 leading-relaxed">
            Our approach involves imprinting unique alphanumeric codes on the
            front side of each tablet strip, allowing users to access vital
            information about the medicine via our website. Pharmaceutical
            companies can create accounts on our platform to update their
            medicine information.
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutSection;
