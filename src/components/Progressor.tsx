import React from "react";

const Progressor = () => {
  return (
    // bg-gradient-to-tr from-violet-400 to-pink-300
    <div className=" flex justify-center items-center">
      <div className="flex items-start max-w-screen-lg w-full mx:auto mt-10">
        <div className="w-full">
          <div className="flex items-center w-full">
            <div className="w-8 h-8 shrink-0 mx-[-1px] bg-violet-600 p-1.5 flex items-center justify-center rounded-full">
              <span className="text-white text-base font-bold">1</span>
            </div>
            <div className="w-full h-1 mx-4 rounded-lg bg-pink-900"></div>
          </div>
          <div className="  mt-2 mr-12">
            <h6 className="text-base text-pink-900 font-bold ">
              Step 1: Choose Your Dish{" "}
            </h6>
            <p className="text-xs text-white">
              Explore our Delicious Flavours and select your favourite cake{" "}
            </p>
          </div>
        </div>

        <div className="w-full">
          <div className="flex items-center w-full">
            <div className="w-8 h-8 shrink-0 mx-[-1px] bg-violet-600 p-1.5 flex items-center justify-center rounded-full">
              <span className="text-white text-base font-bold">2</span>
            </div>
            <div className="w-full h-1 mx-4 rounded-lg bg-pink-900"></div>
          </div>
          <div className="mt-2 mr-4 ml-2">
            <h6 className="text-base text-pink-900 font-bold ">
              Step 2: Customize your Order {" "}
            </h6>
            <p className="text-xs text-white">
            Trailer y0ur flavour to your Taste </p>
          </div>
        </div>


        <div className="w-full">
          <div className="flex items-center w-full">
            <div className="w-8 h-8 shrink-0 mx-[-1px] bg-violet-600 p-1.5 flex items-center justify-center rounded-full">
              <span className="text-white text-base font-bold">3</span>
            </div>
            <div className="w-full h-1 mx-4 rounded-lg bg-pink-900"></div>
          </div>
          <div className="mt-2 mr-4 ml-2">
            <h6 className="text-base text-pink-900 font-bold ">
              Step 3:Wait your Order {" "}
            </h6>
            <p className="text-xs text-white">
       Ready to Eat ,fresh creamy and Yummy{" "}
            </p>
          </div>
        </div>






      </div>
    </div>
  );
};

export default Progressor;
