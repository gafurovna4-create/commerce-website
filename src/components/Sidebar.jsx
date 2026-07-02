import React, { useState } from 'react';

const Sidebar = () => {
  const [isMensOpen, setIsMensOpen] = useState(false);
  const [isWomansOpen, setIsWomansOpen] = useState(false);

  const electronicsAndOthers = [
    "Electronics", "Home & Lifestyle", "Medicine", 
    "Sports & Outdoor", "Baby's & Toys", "Groceries & Pets", "Health & Beauty"
  ];

  return (
    <div className="w-64 border-r pr-4 mt-10">
      <ul className="space-y-4">
        <li>
          <button 
            onClick={() => setIsWomansOpen(!isWomansOpen)}
            className="flex justify-between w-full hover:text-red-500"
          >
            Woman's Fashion {isWomansOpen ? '▲' : '▼'}
          </button>
          {isWomansOpen && (
            <ul className="pl-4 mt-2 space-y-2 text-sm text-gray-600">
              <li>Dresses</li>
              <li>Accessories</li>
            </ul>
          )}
        </li>

        <li>
          <button 
            onClick={() => setIsMensOpen(!isMensOpen)}
            className="flex justify-between w-full hover:text-red-500"
          >
            Men's Fashion {isMensOpen ? '▲' : '▼'}
          </button>
          {isMensOpen && (
            <ul className="pl-4 mt-2 space-y-2 text-sm text-gray-600">
              {electronicsAndOthers.map((item, index) => (
                <li key={index} className="hover:text-black cursor-pointer">{item}</li>
              ))}
            </ul>
          )}
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;