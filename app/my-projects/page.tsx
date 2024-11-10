"use client"

import React from 'react'
import ProjectCard from '../components/ProjectCard';
import { Projects } from '@/constants';


const page = () => {
  return (
    <div 
    style={{backgroundImage: 'url(../image1.png)'}}
    className='w-screen h-[115vh] flex items-center justify-center bg-center bg-cover'>
      <div className='grid grid-cols-2 gap-5 max-w-[90%] max-h-[80%] '>
      {Projects.map((project, index) => (
        <ProjectCard
          key={index}
          title={`${project.title} - ${project.href}`}
          text={project.text}
          Image={project.src} href={''}          

        />
      ))}

      </div>
    </div>
  )
}

export default page