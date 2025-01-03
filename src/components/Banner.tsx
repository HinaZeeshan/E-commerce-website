import React from "react";

const Banner = () => {
  return (
    <div className="relative  overflow-hidden font-sans px-6 py-12 mb-7 ">
      <div className="absolute inset-0 opacity-30">
        <img
          src="/images/delicious-cake-with-white-brown-chocolate-swirly-with-flowers-blackberries-table_198067-126780.jpg"
          alt="yummy cake"
          className="w-full h-full object-cover"
        />
    </div> 
        <div className="relative z-10 container mx-auto flex flex-col justify-center items-center text-center">
          <h2 className="text-yellow-50 sm:text-5xl font-bold mb-4">
            Discover our menu
          </h2>
          <p className="text-white text-lg text-center mb-6 max-w-xl">
            Shop Now for exclusive cakes Discount
          </p>
          <button type="button" className="bg-violet-800 text-white text-sm font-semibold py-3 px-6 rounded-full shadow-lg hover:bg-violet-400 transition duration-300">
           Exciting Deal launch at 6pm!
          </button>
        </div>
      
    </div>
  );
};

export default Banner;
