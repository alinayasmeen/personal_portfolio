"use client";

import { FC } from "react";
import Image from "next/image";
import { Socials } from "@/constants";

const Header: FC = () => (
  <div className="bg-cyan-900 top-0 px-10 md:px-20 fixed w-full h-[10%] z-40  flex justify-between items-center">
    <div className="flex flex-row gap-3 items-center">
      <div className="w-[60px] h-[60px] relative">
      <Image
      src="/images/logo.webp"
      alt="logo"
      width={40}
      height={40}
      className="w-full object-contain rounded-full h-full"
      />
      </div>
      <h1 className="text-[25px] font-semibold text-purple-600">Portfolio
      </h1>
      </div>
      <div className="flex gap-4">
      {Socials.map((social) => (
        <button
          key={social.name}
          onClick={() => window.open(social.href, "_blank")}
          title={`Visit ${social.name}`} // Accessible title for each button
          aria-label={`Visit ${social.name}`} // Aria-label for screen readers
        >
          <Image
            src={social.src}
            alt={social.name}
            width={40}
            height={40}
          />
        </button>
      ))}
    </div> 
    
  </div>
);

export default Header;
