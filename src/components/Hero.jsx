import React from 'react';
import iphone from '../assets/iphone.png'; 

const Hero = () => {
  return (
    <div className="flex-1 bg-black text-white p-12 mt-10 rounded-sm flex items-center justify-between">
      <div className="flex-1">
        <h2 className="text-xl mb-4">iPhone 14 Series</h2>
        <h1 className="text-5xl font-bold mb-6">Up to 10% off Voucher</h1>
        <button className="underline underline-offset-8">Shop Now</button>
      </div>
      
      <div className="flex-1">
        <img 
          src={iphone} 
          alt="iPhone 14" 
          className="w-full h-auto object-contain"
        />
      </div>
    </div>
  );
};

export default Hero;