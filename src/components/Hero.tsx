"use client"
import React, { useEffect, useState } from "react";

const Hero: React.FC = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Background images
  const images = [
    "/images/cake-2558610_960_720.jpg",
   "/images/2lbs-chocolate-bliss-cake-bread-beyond-500x500.jpg",
    "/images/muffins-8693748_640.jpg",
    

  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Change image every 5 seconds
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section
      className="relative h-screen  flex items-center justify-center text-center text-white overflow-hidden"
      style={{
        backgroundImage: `url(${images[currentImageIndex]})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        transition: "background-image 1s ease-in-out",
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-30"></div>

      <div className="z-10 px-6 md:px-12">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Welcome to Cakes Zone</h1>
        <p className="text-lg md:text-xl mb-8">
          Your taste our freshness. Explore our services and solutions.
        </p>
        <button className="px-6 py-3 bg-pink-900 hover:bg-pink-500 rounded-full font-medium transition duration-300">
          Get Started
        </button>
      </div>
    </section>
  );
};

export default Hero;
