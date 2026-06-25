import React from 'react';

const TopBanner = () => {
  return (
   <>
    <div className="bg-black text-white w-full h-12 items-center justify-center flex flex-col md:flex-row gap-2"> 
      <div className="flex justify-center items-center text-center py-2 text-sm gap-2">
      <span>Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!</span>
      <a href="#shop" className="underline font-semibold hover:text-gray-300">
        ShopNow
      </a>
    </div>
    <div className ="relative">
        <button></button>
    </div>
    </div>
   
   </>
  );
};

export default TopBanner;