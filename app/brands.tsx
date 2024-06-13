import Image from "next/image";
import React from "react";

import { Lora } from "next/font/google";

const font = Lora({
  subsets: ["latin"],
  weight: ["400"],
});

const logos = [
  {
    image: "/logo/logoipsum-221.svg",
  },
  {
    image: "/logo/logoipsum-226.svg",
  },
  {
    image: "/logo/logoipsum-231.svg",
  },
  {
    image: "/logo/logoipsum-241.svg",
  },
  {
    image: "/logo/logoipsum-290.svg",
  },
  {
    image: "/logo/stripe.svg",
  },
];

const Brands = () => {
  return (
    <div>
      <div className=" p-4 mx-auto relative z-10  w-full pt-20 md:pt-32">
        <div className="text-4xl md:pb-8 md:text-7xl text-center 
        bg-clip-text text-transparent bg-gradient-to-b from-purple-500 to-sky-200 bg-opacity-50">
          The best brands <br /> choose us
        </div>

        <p className="mt-4 text-lg font-normal  text-neutral-300 max-w-lg text-center mx-auto">
          From small businesses to large corporations, we have helped many
          brands elevate their business.
        </p>

        <div className="grid grid-cols-3  items-center justify-center  mx-auto md:w-3/5 cursor-pointer">
          {logos.map((logo, i) => (
            <div key={i} className="p-4 md:p-20">
              <Image
                priority
                src={logo.image}
                width={500}
                height={500}
                alt="logo"
                className="w-full h-auto max-w-full rounded-lg"
              />
            </div>
          ))}
        </div>

        <div className="items-center flex justify-center flex-col text-white">
          <Image
            src="/logo.svg"
            alt="logo"
            width={1000}
            height={1000}
            className="pt-2 xl:pt-0  w-10 xl:w-14 "
          />
        </div>
      </div>
    </div>
  );
};

export default Brands;