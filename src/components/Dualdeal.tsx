import React from "react";
import Image from "next/image";
const Dualdeal = () => {
  return (
    <section className="container mx-auto py-10 flex flex-col md:flex-row items-center ">
      <div className="md:w-1/2 md:pr-10 ">
        <h2 className="text-3xl font-bold mb-4 text-violet-800">
          Delicious cakes
        </h2>
        <p className="text-white mb-4">
          experience the delicious ,soft and yummy cakes , made with fresh
          ingredient in cake zone{" "}
        </p>
        <button className="bg-pink-800 text-white px-4 py-2 rounded hover:bg-pink-900 transition duration-200">
          order Now
        </button>

        <h3 className="text-2xl font-semibold mt-6 mb-2 text-center text-pink-800 ">
          Coming Soon: Our New cake series{" "}
        </h3>
        <ul className="text-white">
          <li>
            {" "}
            <strong className="text-violet-800">
              Salted Caramel Cake :
            </strong>{" "}
            Sweet with a buttery caramel richness and a hint of salt for
            balance.{" "}
          </li>
          <br />

          <li>
            {" "}
            <strong className="text-violet-800">
              Peanut Butter Cake :
            </strong>{" "}
            Rich, creamy, and nutty, with a savory-sweet balance.{" "}
          </li>
          <br />

          <li>
            {" "}
            <strong className="text-violet-800"> Almond Cake:</strong> Nutty and
            subtly sweet with a hint of marzipan-like richness.{" "}
          </li>
          <br />

          <li>
            {" "}
            <strong className="text-violet-800">Black Forest Cake :</strong> A
            mix of chocolate and tart cherries with a hint of kirsch (cherry
            liqueur).{" "}
          </li>
          <br />

          <li>
            {" "}
            <strong className="text-violet-800"> Coconut Cake :</strong>{" "}
            Tropical and sweet, with a soft, nutty coconut flavor.
          </li>
          <br />
        </ul>
      </div>

      <div className="md:w-1/2 mt-6 md:mt-0">
        <Image
          src="/images/f8403c421bef668ad381b5e82e546060.jpeg"
          alt="cakes images"
          width={500}
          height={300}
          className="w-full h-auto rounded-lg shadow-lg transition-transform duration-500 ease-in-out transform hover:scale-105 mr-7"
        />
      </div>
    </section>
  );
};

export default Dualdeal;
