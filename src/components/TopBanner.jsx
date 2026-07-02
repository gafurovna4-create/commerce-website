import React from 'react';
import { useTranslation } from 'react-i18next';

const TopBanner = () => {
  const {t, i18n } = useTranslation();
  return (
    <div className="bg-black"> 
      <div className=' text-white w-full h-12 items-center container max-w-6xl mx-auto  flex flex-col md:flex-row gap-2'>
        <div className="flex text-center bg-black text-white w-full h-12 justify-center items-center py-2 text-sm gap-2">
      <span>Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!</span>
      <a href="#shop" className="underline font-semibold hover:text-gray-300">
        ShopNow
      </a>
    </div>
    <div className ="relative">
        <select onChange={(e) => i18n.changeLanguage(e.target.value)} value={i18n.language} 
        className='bg-black text-white border-none outline-none cursor-pointer'>
          <option value="en">English</option>
          <option value="ru">Russian</option>
          <option value="uz">Uzbek</option>
        </select>
    </div>
      </div>
    </div>
   
  );
};

export default TopBanner;