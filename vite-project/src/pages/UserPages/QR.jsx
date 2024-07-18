import React from 'react';
import Image1 from '../../images/qr1.png';
import Image2 from '../../images/qr2.png';

function QRImagePage() {
  return (
    <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
      {/* Centered text */}
      <div className="text-center mb-6">
        <h1 className="text-2xl font-bold text-gray-900">
          Get QR image link: <a href="http://q.ro/baptHf" className="text-purple-600">http://q.ro/baptHf</a>
        </h1>
      </div>

      {/* Images section */}
      <div className="flex items-center justify-center">
        {/* Left side image */}
        <div className="w-2/5 p-2">
          <img
            src={Image1}
            alt="Left Image"
            className="w-full h-auto"
          />
        </div>

        {/* Right side image */}
        <div className="w-1/5 p-2">
          <img
            src={Image2}
            alt="Right Image"
            className="w-full h-auto"
          />
        </div>
      </div>
    </div>
  );
}

export default QRImagePage;
