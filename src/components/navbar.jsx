import React from 'react'
import { Link } from 'react-router-dom'
import Home from '../pages/Home'
import About from '../pages/About'  
import Contact from '../pages/Contact'    
import SignUp from '../pages/SignUp'
import { Heart, Search, ShoppingCart } from 'lucide-react';
import { useState } from 'react'


const Navbar = () => {
  const [wishlistCount, setWishlistCount] = useState(0);
  const [carCount, setCartCount] = useState(0);
  return (

    <div className="flex container max-w-6xl mx-auto justify-between items-start pt-10">
      <h1 className="text-2xl font-bold text-black">Exclusive</h1>
        <div className="flex gap-10 items-start text-black">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/signup">Sign Up</Link>
        </div>
          <div className="flex gap-6 items-center">
            <div className="relative flex items-center">
              <input type="text" placeholder="What are you looking for?" className="bg-[#F5F5F5] w-60.75 rounded-md py-2 pr-3 pl-5  focus:outline-none  text-xs" />
              <button className="absolute right-3 text-gray-500">
              <Search size={16} />
              </button>
            </div>
              <button oncCick={() => setWishlistCount(wishlistCount + 1)} className="relative">
              <Heart size={30} />
              {wishlistCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-4 h-4 
              flex items-center justify-between text-xs">{wishlistCount}</span>
              )}
              </button>
              <button onClick={() => setCartCount(carCount + 1)} className="relative">
                <ShoppingCart size={30} />
                {carCount > 0 && (
                  <span classNmae="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-4 h-4
                  flex items-center text-xs">{carCount}</span>
                )}

              </button>
          </div>
    </div>
  )  
}


export default Navbar                                           