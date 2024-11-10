"use client"
import React, { useState } from 'react'
import {motion} from 'framer-motion';
import { Projects } from '../../constants/index';



interface Props {
    Image: string;
    title: string;
    text: string;
}


const ProjectCard = ({ Image, title, text } :Props) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  function handleFlip() {
    if (!isAnimating) {
      setIsFlipped(!isFlipped);
      setIsAnimating(true);
    }
  }

  return (
    <div 
    onClick={handleFlip}
    className='w-[450px] h-[240px] rounded-md cursor-pointer'>

        <motion.div
        className='flip-card-inner w-full h-full '
        initial={false}
        animate={ {rotateY:isFlipped? 180: 360}}
        transition={{duration: 0.6, animationDirection:'normal'}}
        onAnimationComplete={() => setIsAnimating(false)}
        >
            <div
            className='h-full group relative w-full bg-cover bg-center flip-card-front text-white rounded-lg p-4'
            style={{backgroundImage: `url(${Image})`}}
            >
                <div 
                className='inset-0 absolute w-full h-full rounded-md bg-black opacity-0 group-hover:opacity-40'/>
                 <div 
                className='inset-0 absolute w-full h-full text-[20px] pb-10 hidden group-hover:flex items-center z-20 justify-center'>
                     Learn more &gt;
                </div>
                       
            </div>  
            <div
            className='h-full group bg-cover bg-center relative w-full flip-card-back text-white rounded-lg p-4'
            style={{backgroundImage: `url(${Image})`}}
            >
                <div 
                className='inset-0 absolute w-full h-full z-[-1] rounded-md bg-black opacity-50'/>
                
                <button type="button" key={title} onClick={() => window.open(Projects.href, "_blank")} className="text-xl font-semibold">
                    {title}
                </button>
                <p className='text-lg'>{text}</p>
            </div>
        </motion.div>


    </div>
  );
};

export default ProjectCard