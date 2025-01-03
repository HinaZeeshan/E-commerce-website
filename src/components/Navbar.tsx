"use client";

import React, { useState } from "react";
import { MdMenu, MdClose } from "react-icons/md";
import { BsCake2Fill } from "react-icons/bs";
import { FaSearch, FaBolt, FaCartPlus } from "react-icons/fa";
import Link from "next/link";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="w-full bg-zinc-400 ">
      {/* Top Bar */}
      <div className="flex items-center justify-between md:justify-center w-auto h-[6px] gap-4 px-4 md:gap-[40px] font-semibold relative">
        {/* Hamburger Menu Icon */}
        <button
          className="text-[34px] mt-28 ml-28 text-pink-900 md:hidden"
          onClick={toggleMenu}
        >
          {isMenuOpen ? <MdClose /> : <MdMenu />}
        </button>
      </div>

      {/* Main Navbar */}
      <div className="grid xl:grid-cols-1 grid-cols-1">
        <div className="p-5 mt-0">
          <div className="py-3 px-3 rounded-xl border w-full h-auto ">
            <div className="flex justify-between items-center">
              {/* Logo and Search */}
              <div className="flex gap-2 items-center">
                {/* Logo */}
                <BsCake2Fill className="w-10 h-10 text-pink-900 hover:text-yellow-400" />

                {/* Search Input */}
                <div style={{ position: "relative" }}>
                  <input
                    className="bg-slate-200 rounded-3xl py-2 px-4 mx-5 text-sm w-[300px] lg:w-[350px] hidden md:block"
                    placeholder="Search for your cake flavour"
                  />
                  <FaSearch className="w-5 h-5 text-pink-900 absolute right-8 top-1/2 transform -translate-y-1/2 hidden md:block" />
                </div>
              </div>

              
              
              {/* Navigation Links */}
<div
  className={`relative top-3 left-3 w-full mb-1  md:static md:w-auto md:flex transition-transform ${
    isMenuOpen ? "block" : "hidden"
  }`}
>
  <ul className="flex flex-col md:flex-row  md:gap-6 text-pink-900 capitalize font-medium">
    <li className="py-2 md:py-0  hover:text-pink-700"><Link href="/">Home</Link></li>
    <li className="py-2 md:py-0  hover:text-pink-700"><Link href="/ourProduct">Our Product</Link></li>
    <li className="py-2 md:py-0  hover:text-pink-700"><Link href="/deal">Deals & Offers</Link></li>
    <li className="py-2 md:py-0  hover:text-pink-700"><Link href="/contact">Contact</Link></li>
  </ul>
</div>


              {/* Additional Options */}
              <div className="flex items-center gap-2">
                <FaBolt className="w-5 h-5 text-pink-900 hidden lg:block" />
                <p className="text-sm text-gray-800 hidden lg:block">
                  Order now and get it in{" "}
                  <span className="text-pink-900 font-bold">15 Minutes!</span>
                </p>

                {/* Cart Icon */}
                <FaCartPlus className="w-8 h-8 hover:text-yellow-400 text-pink-900" />

                {/* User Profile Image */}
                <img
                  className="inline-block w-8 h-8 rounded-full ring-2 hover:ring-yellow-600"
                  src="/images/WhatsApp Image 2024-09-16 at 1.03.44 PM.jpeg"
                  alt="user"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;









// "use client"
// import React, { useState } from "react";
// import { MdMenu, MdClose } from "react-icons/md";
// import { BsCake2Fill } from "react-icons/bs";
// import { FaSearch } from "react-icons/fa";
// import { FaBolt } from "react-icons/fa";
// import { FaCartPlus } from "react-icons/fa";


// const Navbar = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen);
//   };
// function Navbar() {
//   return (
//     <div>
// <div className="flex items-center justify-between md:justify-center w-auto h-[48px] mt-[32px] gap-4 ml-4 md:gap-[40px] capitalize font-semibold relative">
//         {/* Hamburger Menu Icon */}
//         <button
//           className="text-[24px] text-black md:hidden"
//           onClick={toggleMenu}
//         >
//           {isMenuOpen ? <MdClose /> : <MdMenu />}
//         </button>
// </div>
      {/*  
      <div className="grid xl:grid-cols-1 grid-cols-1">
        <div className="p-5">
          <div className="py-3 px-3 rounded-xl border w-full ">
          
            <div className="flex justify-between items-center">
              <div className="flex justify-items-center gap-2">
                {/* logo cake 
                <BsCake2Fill className="w-10 h-10 text-pink-900 hover:text-yellow-400" />
                {/* search icons 


                
                 <div style={{position:'relative'}}>
                    <input className="bg-slate-200 rounded-3xl py-4 px-12 text-center justify-center out line-none text-xs w-[450] pr-12 hidden lg:block md:block"
                    placeholder ="search for your cake flavour"/>
                    <FaSearch className="w-5 h-5 text-pink-900 absolute right-3 top-1/2 transform -translate-y-1/2 hidden lg:block md:block" />
                   
                  </div>
                 </div>*/}
                   
{/* Navigation Links 
<div
          className={`absolute  top-[-4px] left-12 w-full  p-0 md:p-0 md:static md:bg-transparent md:w-auto md:flex md:items-center transition-transform ${
            isMenuOpen ? "block" : "hidden"
          }`}
        >
          <ul className="flex flex-col md:flex-row md:gap-6 text-black capitalize font-medium">
            <li className="flex items-center">
              Product
          </li>
            <li>Flavours</li>
            <li>new arrivals</li>
            <li>brands</li>
          </ul>
        </div>


                   <div className="flex justify-center gap-2">
                   <FaBolt className=" w-5 h-5 text-pink-900 hidden lg:block md:block " />
                   <p className="text-sm text-white hidden lg:block md:block" >Order now and get it with 
                    <span className="text-pink-900">15 Minutes!</span>
                   </p>*/}
                 
                   {/* cart icon */}
                   {/* <FaCartPlus className="w-8 h-8 rounded-full relative hover:text-amber-600 text-pink-900 mr-6" />
                   <img className="inline-block w-8 h-8 rounded-full ring-2 hover:text-yellow-600"
                   src="/images/WhatsApp Image 2024-09-16 at 1.03.44 PM.jpeg"
                   alt="user image"/>
  </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
//  export default Navbar; */}
