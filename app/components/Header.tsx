
"use client";

import { FC } from "react";
import Image from "next/image";
import { Socials } from "@/constants";

const Header: FC = () => (
  <div className="bg-gradient-to-r  from-pink-500 to-fuchsia-500 top-0 px-10 md:px-20 fixed w-full h-[10%] z-40 flex justify-between items-center">
    <div className="flex flex-row gap-3 items-center">
      <div className="w-[50px] h-[50px]relative">
        <Image
          src="/images/logo.webp"
          alt="Portfolio Logo"
          width={50}
          height={50}
          className="w-full object-contain rounded-full h-full"
        />
      </div>
      <h1 className="text-[25px] hover:scale-110 font-extrabold shadow-lg text-black">
        Portfolio
      </h1>
    </div>
    <div className="flex font-extrabold shadow-sm shadow-fuchsia-700 p-2 hover:scale-110 gap-4 sm:gap-1">
      {Socials.map((social) => (
        <button
          key={social.name}
          onClick={() => window.open(social.href, "_blank")}
          title={`Visit ${social.name}`}
          aria-label={`Visit ${social.name}`}
          className="transition transform hover:scale-110 duration-200"
        >
          <Image
            src={social.src}
            alt={social.name}
            width={50}
            height={50}
            className="transition-transform transform hover:scale-110"
          />
        </button>
      ))}
    </div>
  </div>
);

export default Header;
