import React from "react";

const Reservation = () => {
  return ( 
    <section className="bg-zinc-400 py-10">
      <div className="container mx-auto text-center ">
        <h2 className="text-violet-800 font-extrabold text-2xl mb-6 hover:text-violet-500">MAKE A RESERVATION</h2>
        <h6 className="text-violet-800 font-semi-bold mb-4">Make Your Birthday Celebration Memorable With Cake Zone </h6>
        <form className="max-w-md mx-auto">
          <div className="mb-4 text-pink-800">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-3 border border-grey-300 rounded-md"
              required
            />
          </div>
          <div className="mb-4">
            <input
              type="Email"
              placeholder="Your Email"
              className="w-full p-3 border border-grey-300 rounded-md"
              required
            />
          </div>

          <div className="mb-4">
            <input
              type="Date"
              className="w-full p-3 border border-grey-300 rounded-md"
              required
            />
          </div>

          <div className="mb-4">
            <input
              type="Time"
              className="w-full p-3 border border-grey-300 rounded-md"
              required
            />
          </div>
          <div className="mb-4">
            <button className="bg-pink-800 text-white px-4 py-2 hover:bg-pink-700 transition duration-500 hover:scale-105 rounded-sm">
              Reserved Table
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Reservation;
