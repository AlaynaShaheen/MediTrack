import React, { useState } from 'react';

function ShoppingCartPage() {
  const initialCards = [
    {
      id: 1,
      title: 'Product 1',
      medicines: [
        { name: 'Medicine A', manufacturingDate: '01/2023', expiryDate: '01/2025' },
        { name: 'Medicine B', manufacturingDate: '03/2023', expiryDate: '03/2025' },
      ],
      contactName: 'Apollo',
      contactEmail: 'Apollo@gmail.com',
    },
    {
        id: 1,
        title: 'Product 1',
        medicines: [
          { name: 'Medicine A', manufacturingDate: '01/2023', expiryDate: '01/2025' },
          { name: 'Medicine B', manufacturingDate: '03/2023', expiryDate: '03/2025' },
        ],
        contactName: 'Apollo',
        contactEmail: 'Apollo@gmail.com',
      },
      {
        id: 1,
        title: 'Product 1',
        medicines: [
          { name: 'Medicine A', manufacturingDate: '01/2023', expiryDate: '01/2025' },
          { name: 'Medicine B', manufacturingDate: '03/2023', expiryDate: '03/2025' },
        ],
        contactName: 'Apollo',
        contactEmail: 'Apollo@gmail.com',
      },
      {
        id: 1,
        title: 'Product 1',
        medicines: [
          { name: 'Medicine A', manufacturingDate: '01/2023', expiryDate: '01/2025' },
          { name: 'Medicine B', manufacturingDate: '03/2023', expiryDate: '03/2025' },
        ],
        contactName: 'Apollo',
        contactEmail: 'Apollo@gmail.com',
      },
      {
        id: 1,
        title: 'Product 1',
        medicines: [
          { name: 'Medicine A', manufacturingDate: '01/2023', expiryDate: '01/2025' },
          { name: 'Medicine B', manufacturingDate: '03/2023', expiryDate: '03/2025' },
        ],
        contactName: 'Apollo',
        contactEmail: 'Apollo@gmail.com',
      },
      {
        id: 1,
        title: 'Product 1',
        medicines: [
          { name: 'Medicine A', manufacturingDate: '01/2023', expiryDate: '01/2025' },
          { name: 'Medicine B', manufacturingDate: '03/2023', expiryDate: '03/2025' },
        ],
        contactName: 'Apollo',
        contactEmail: 'Apollo@gmail.com',
      },
    // Add more cards as needed
  ];

  const [showAllCards, setShowAllCards] = useState(false);
  const [cards, setCards] = useState(initialCards.slice(0, 4));

  const handleSeeMore = () => {
    if (!showAllCards) {
      setCards(initialCards);
    } else {
      setCards(initialCards.slice(0, 4));
    }
    setShowAllCards(!showAllCards);
  };

  return (
    <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
      {/* Header section */}
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-bold text-gray-900">YOUR CART</h1>
        <button className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-[#63C625] hover:bg-green-700">
          + Add your medicine
        </button>
      </div>

      {/* Cards section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {/* Mapping over cards array */}
        {cards.map((card) => (
          <div key={card.id} className="bg-gray-100 rounded-lg p-6">
            {/* First section - Contact */}
            <div className="bg-[#63C625] text-white rounded-md py-2 px-4 mb-4">
              <div className="flex justify-between">
                <div>{card.contactName}</div>
                <div>{card.contactEmail}</div>
              </div>
            </div>

            {/* Second section - Medicines */}
            <div>
              <h3 className="font-bold mb-2 text-gray-800">Medicines</h3>
              {card.medicines.map((medicine, index) => (
                <div key={index} className="flex justify-between mb-2">
                  <div>{medicine.name}</div>
                  <div>
                    <span className="mr-2">Manufacturing Date:</span>{' '}
                    {medicine.manufacturingDate}
                  </div>
                  <div>
                    <span className="mr-2">Expiry Date:</span> {medicine.expiryDate}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* See more button */}
      <div className="flex justify-center mt-6">
        <button
          onClick={handleSeeMore}
          className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-[#63C625] hover:bg-green-700"
        >
          {showAllCards ? 'Show Less' : 'See More'}
        </button>
      </div>
    </div>
  );
}

export default ShoppingCartPage;
