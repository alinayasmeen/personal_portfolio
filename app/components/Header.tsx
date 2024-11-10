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

      {/* <nav>
        <ul className="flex space-x-6">
          <li>
            <Link href="#hero" className="text-white hover:text-purple-600 transition">
              Home
            </Link>
          </li>
          <li>
            <Link href="/about" className="text-white hover:text-purple-600 transition">
              About
            </Link>
          </li>
          <li>
            <Link href="/skills" className="text-white hover:text-purple-600 transition">
              Skills
            </Link>
          </li>
          <li>
            <Link href="/projects" className="text-white hover:text-purple-600 transition">
              Projects
            </Link>
          </li>
          <li>
            <Link href="/contact" className="text-white hover:text-purple-600 transition">
              Contact
            </Link>
          </li>
        </ul>
      </nav> */}
    
  </div>
);

export default Header;
