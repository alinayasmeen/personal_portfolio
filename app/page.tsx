"use client"

import { FC } from "react";
import Link from "next/link";
import Image from "next/image";
import Trees from "@/public/images/trees.webp";
import  Stars from "@/public/images/stars.png";
import Profile from "@/public/images/Hafiza_portrait.jpg"



const Hero: FC = () => (
  <main className="w-screen h-[115vh] overflow-hidden relative">
    <div className="flex justify-between items-center w-full h-full bg-background  bg-cover bg-center"  >
      <div className="pl-20 items-center md:pl-40 pb-56 flex flex-col gap-5 z-[10] max-w-[750px]">
        <div className="rounded-e-full  bg-black">
        <h1 className="text-[50px] text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-pink-600 to-purple-300  font-bold mb-4">
          Hi, I’m HAFIZA ALINA YASMEEN <br />
          <span className="text-[25px] text-cyan-500">
            Make anything possible with WEB DEVELOPMENT
          </span>
        </h1>
        <p className="text-pretty text-xl text-gray-200 hidden md:block">
          A Professional Frontend Developer
        </p>
        <div className="flex-col md:flex-row hidden md:flex gap-5">
          <Link
            href="/my-skills"
            className="rounded-[20px] relative bg-cyan-700 hover:bg-pink-500 px-5 py-3 text-lg text-white group max-w-[200px]"
          >
            Learn More
          </Link>
          <Link
            href="/my-projects"
            className="rounded-[20px] relative bg-cyan-700 hover:bg-pink-500 px-5 py-3 text-lg text-white group max-w-[200px]"
          >
            <div className=" absolute rounded-[20px] z-[1] bg-white border border-white inset-0 opacity-0 group-hover:opacity-20:" />
            My Projects
          </Link>
          <Link
            href="/contact-me"
            className="rounded-[20px] relative bg-cyan-700 hover:bg-pink-500 px-5 py-3 text-lg text-white group max-w-[200px]"
          >
            <div className=" absolute rounded-[20px] z-[1] border border-white bg-white inset-0 opacity-0 group-hover:opacity-20:" />
            Contact Me
          </Link>
        </div>
      </div>
    </div>
      <div className="absolute flex bottom-10 z-[20] right-5 flex-col md:hidden gap-5 ">
        <Link
          href="/my-skills"
          className="rounded-[20px] bg-cyan-700 hover:bg-pink-500 px-5 py-3 text-lg text-white group max-w-[200px]"
        >
          Learn More
        </Link>
        <Link
          href="/my-projects"
          className="rounded-[20px] bg-cyan-700 border border-white hover:bg-pink-500 px-5 py-3 text-lg text-white group max-w-[200px]"
        >
          My Projects
        </Link>
        <Link
          href="/contact-me"
          className="rounded-[20px] bg-cyan-700 border border-white hover:bg-pink-500 px-5 py-3 text-lg text-white group max-w-[200px]"
        > 
          Contact Me
        </Link>
        </div>
   

      <div className="absolute bottom-0 z-[5] w-full h-full inset-0 ">
        <Image
          src={Trees}
          alt="trees"
          layout="fill"
          objectFit="cover"
          className="w-full h-full responsive-image"
          priority
        />
      </div>
      <Image
      src={Stars}
      alt="stars"
      width={300}
      height={300}
      className="absolute top-10 left-0 z-[10]"
    
      priority
      unoptimized/>
      
      <div className="flex flex-col items-center">
      <Image
        src={Profile}  
        alt="image"
        height={500}
        width={500}
        className="profile rounded-full shadow-none z-30"
        priority
      />
         </div>
         </div>
  </main>
);

export default Hero;
