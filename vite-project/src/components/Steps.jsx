import React from 'react';
import img1 from "../images/step1img.png";
import img2 from '../images/step2img.png';
import img3 from '../images/step3img.png';

const HowToUse = () => {
  return (
    <div className="p-20">
      <h1 className="text-3xl font-bold mb-6 ml-20">HOW TO USE...</h1>
      
      <div className="border border-[#63C625] border-2 rounded-lg p-4 mb-6 shadow-lg mx-14">
        <div className="flex flex-row gap-4 items-start">
          <img src={img1} alt="Step 1" className="mx-4 my-3 w-48 h-48" />
          <div className="my-3 flex-1">
            <h2 className="text-4xl font-semibold">Step 1</h2>
            <p style={{  wordBreak: 'break-word' }} className="my-3 text-3xl break-words">qwertyuiopasdfghjklzxcvbnmqwertyuiopsdfghjklzxcvbnmqwertyuiopasdfghjkzxcvbnm</p>
          </div>
        </div>
      </div>

      <div className="border border-[#63C625] border-2 rounded-lg p-4 mb-6 shadow-lg mx-14">
        <div className="flex flex-row gap-4 items-start">
          <div className="my-3 flex-1">
            <h2 className="text-4xl font-semibold">Step 2</h2>
            <p style={{  wordBreak: 'break-word' }} className="my-3 text-3xl break-words">qwertyuiopasdfghjklzxcvbnmqwertyuiopasdfghjklzxcvbnmqwertyuiopasdfghjklzcvbnm</p>
          </div>
          <img src={img2} alt="Step 2" className="mx-4 my-3 w-48 h-48" />
        </div>
      </div>

      <div className="border border-[#63C625] border-2 rounded-lg p-4 shadow-lg mx-14">
        <div className="flex flex-row gap-4 items-start">
          <img src={img3} alt="Step 3" className="mx-4 my-3 w-48 h-48" />
          <div className="my-3 flex-1">
            <h2 className="text-4xl font-semibold">Step 3</h2>
            <p style={{  wordBreak: 'break-word' }} className="my-3 text-3xl break-words">qwertyuiopasdfghjklzxcvbnmqwertyuiopasdfghjklzxcvbnmqwertyuiopasdfghjklzcvbnmmm</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HowToUse;
