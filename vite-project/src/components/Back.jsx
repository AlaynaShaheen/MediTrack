import React from 'react';
import { useNavigate } from 'react-router-dom';

const Back = ({ to, text }) => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(to);
  };

  const firstHalf = text.substring(0, 4);
  const secondHalf = text.substring(4);

  return (
    <div className='flex flex-row gap-2 items-center text-2xl font-bold'>
      <button onClick={handleBack}>&lt;</button>
      <span>
          <span className="text-[#63C625]">{firstHalf}</span>
          <span className="text-black">{secondHalf}</span>
      </span>
    </div>
  );
};

export default Back;
