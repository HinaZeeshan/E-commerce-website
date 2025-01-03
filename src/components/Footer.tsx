import Link from "next/link";
import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <div className="bg-zinc-400">
      <footer className=" flex flex-col space-y-10 justify-center items-center ">
        <nav className="flex justify-center flex-wrap gap-6 text-pink-800 font-semibold mt-6 ">
          <Link href="#" className="text-pink-800 hover:text-pink-600">
            Home
          </Link>
          <Link href="#" className="text-pink-800 hover:text-pink-600">
            OurProduct
          </Link>
          <Link href="#" className="text-pink-800 hover:text-pink-600">
            Deal&Offers
          </Link>
          <Link href="#" className="text-pink-800 hover:text-pink-600">
            Contact
          </Link>
        </nav>

        <div className="flex justify-center space-x-5 transition-transform duration-500 ease-in-out transform:hover:scale-105">
          <Link
            href={"http://facebook.com"}
            target="blank"
            rel="nofollow nopper"
          >
            <Image
              src={"/images/icons8-facebook-48.png"}
              alt="facebook"
              width={100}
              height={100}
            />
          </Link>
          <Link
            href={"http://intagram.com"}
            target="blank"
            rel="nofollow nopper"
          >
            <Image
              src={"/images/download (2).png"}
              alt="facebook"
              width={100}
              height={100}
            />
          </Link>
          <Link
            href={"http://linkdin.com"}
            target="blank"
            rel="nofollow nopper"
          >
            <Image
              src={"/images/download.png"}
              alt="facebook"
              width={100}
              height={100}
            />
          </Link>
          <Link
            href={"http://twitter.com"}
            target="blank"
            rel="nofollow nopper"
          >
            <Image
              src={"/images/download (1).png"}
              alt="facebook"
              width={100}
              height={100}
            />
          </Link>
        </div>
        <p className="text-center text-pink-800 hover:text-pink-700 font-medium mb-8 ">2024 Hina zeeshan.All Rights Reserved</p>
     <br/>
     <br/>
     <br/>
     <br/>
      </footer>
    </div>
  );
};

export default Footer;
