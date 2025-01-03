import React from "react";
import Image from "next/image";
const Products = [
  {
    id: 1,
    title: "Chocolate pasteries",
    Categogory: "fixing",
    Price: "400.00",
    Image: "/pasteries1.jpg",
    bgcolor: "bg-violet-500",
  },
  {
    id: 2,
    title: "Red Velvet",
    Categogory: "Chesse Strawbery",
    Price: "2500.00",
    Image: "/images/red white cream.PNG",
    bgcolor: "bg-pink-800",
  },
  {
    id: 3,
    title: " Choco Cup Cake",
    Categogory: "delight",
    Price: "350.00",
    Image: "/pexel/pexels-photo-3081657.jpeg",
    bgcolor: "bg-violet-500",
  },
  {
    id: 4,
    title: "Chocolate Strawbery",
    Categogory: "fixing",
    Price: "500.00",
    Image: "/pexels-vojtech-okenka-127162-1055272.jpg",
    bgcolor: "bg-pink-800",
  },
];
const Productlist2 = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className=" text-4xl text-pink-900 font-bold uppercase ">our most favourite Bites</h1>
    <div className="p-1 flex flex-wrap items-center justify-center mb-6">

      {Products.map((product) => (
    

        <div
  key={product.id}
  className={`flex flex-col shrink-0 m-6 relative overflow-hidden ${product.bgcolor} rounded-lg shadow-lg group max-w-sm`}
>
  <svg
    className="absolute bottom-0 left-0 mb-8 scale-150 group-hover:scale-[1.65] transition-transform"
    viewBox="0 0 375 283"
    fill="none"
    style={{ opacity: 0.1 }}
  >
    <rect
      x="159.52"
      y="152"
      height="152"
      width="152"
      rx="8"
      transform="rotate(-45 .5 175)"
      fill="white"
    />
    <rect
      y="107.48"
      height="152"
      width="152"
      rx="8"
      transform="rotate(-45 .5 107.48)"
      fill="white"
    />
  </svg>

  <div className="relative pt-10 px-10 flex items-center justify-center group-hover:scale-110 transition-transform">
    <div
      className="block absolute w-48 bottom-0 left-0 -mb-24 ml-3"
      style={{
        background: "radial-gradient(circle, black, transparent 50%)",
        transform: "rotate3d(0, 0, 1, 20deg) scale3d(1, 0.6, 1)",
        opacity: 0.2,
      }}
    ></div>

    <Image
      className="relative w-40 h-40 object-contain"
      src={product.Image}
      alt={product.title}
      width={160}
      height={160}
    />
  </div>
  <div className="relative text-white px-6 pb-6 mt-6">
    <span className="block opacity-75 -mb-1">{product.Categogory}</span>
    <div className="flex justify-between items-center">
      <span className="block font-semibold text-xl">{product.title}</span>
      <div className="bg-white rounded-full text-violet-500 text-xs font-bold px-2 py-2  m-2 leading-none">
        {product.Price}
      </div>
    </div>
  </div>
</div>

      ))}
    </div>
    
    
    </div>
  );
};

export default Productlist2;
