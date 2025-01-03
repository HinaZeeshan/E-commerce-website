import React from "react";
import Image from "next/image";

const Carousel = () => {
  return (
    <div>
      <section className="">
        {/* bg-gradient-to-r from-violet-400 to-pink-300 */}
        <div className="py-2 px-2 mx-auto max-w-screen-xl sm:py-4 lg:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4 h-full">
            <div className=" col-span-2 sm:col-span-1 md:col-span-2  h-auto md:h-full flex flex-col ">
              {/*bg-gradient-to-r from-violet-400 to-pink-300  */}
              <a
                href=""
                className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40 flex-grow"
              >
                <Image
                  src="/images/chocolate cake.PNG"
                  alt="cake1"
                  width={300}
                  height={300}
                  className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-violet-500/25 to-violet-500/5"></div>
                <h3 className="z-10 text-2xl font-medium text-white absolute top-0 left-0 p-4 xs:text-xl md:text-0xl">
                  chocolate cake{" "}
                </h3>
              </a>
            </div>

            <div className="col-span-2 sm:col-span-1 md:col-span-2 ">
              {/* bg-gradient-to-r from-violet-400 to-pink-300 */}
              <a
                href=""
                className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40 mb-4 "
              >
                <Image
                  src="/images/cake-7749792_640.jpg"
                  alt="cake bites"
                  width={300}
                  height={320}
                  className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-violet-500/25 to-violet-500/5"></div>
                <h3 className="z-10 text-2xl font-medium text-white absolute top-0 left-0 p-4 xs:text-xl md:text-0xl">
                  Cake Classic Bites{" "}
                </h3>
              </a>

              <div className="grid gap-4 grid-cols-2 sm:grid-cols-2 lg:grid-cols-2">
                <a
                  href=""
                  className=" group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40"
                >
                  <Image
                    src="/images/cupcakes-4944589_640.jpg"
                    alt="cup cakes"
                    width={300}
                    height={300}
                    className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-violet-500/25 to-violet-500/5"></div>
                  <h3 className="z-10 text-2xl font-medium text-white absolute top-0 left-0 p-4 xs:text-xl md:text-0xl">
                    Cup Cakes{" "}
                  </h3>
                </a>
                <a
                  href=""
                  className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40"
                >
                  <Image
                    src="/images/delicious-cake-with-white-brown-chocolate-swirly-with-flowers-blackberries-table_198067-126780.jpg"
                    alt="Delicious White Brown  Chocolate Cake"
                    width={300}
                    height={250}
                    className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-violet-500/25 to-violet-500/5"></div>
                  <h3 className="z-10 text-2xl font-medium text-white absolute top-0 left-0 p-4 xs:text-xl md:text-0xl">
                    White Brown Chocolate Cake{" "}
                  </h3>
                </a>
              </div>
            </div>




<div className="col-span-2 sm:col-span-2 md:col-span-1 bg-gradient-to-r from-violet-400 to-pink-300">
  <a
    href=""
    className="group relative flex flex-col overflow-hidden rounded-lg h-full"
  >
    <Image
      src="/images/istockphoto-1494849874-612x612.jpg"
      alt="Delicious White Brown Chocolate Cake"
      width={300}
      height={350}
      className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
    />
    <div className="absolute inset-0 bg-gradient-to-b from-violet-500/25 to-violet-500/5"></div>
    <h3 className="z-10 text-2xl font-medium text-white absolute top-0 left-0 p-4 xs:text-xl md:text-xl">
      White UniCorn Cake
    </h3>
  </a>
</div>





          </div>
        </div>
      </section>
    </div>
  );
};

export default Carousel;
