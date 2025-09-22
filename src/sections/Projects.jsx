
import { useState } from 'react';
import React from 'react'
import gsap from 'gsap'
import { useEffect } from 'react';
import lapy from '../assets/lapy.svg'
import Magz from '../assets/Magz.gif'

import '../App.css'
import { ScrollTrigger } from "gsap/ScrollTrigger";


gsap.registerPlugin(ScrollTrigger);


const DataArray = [
  {
    id: 1,
    title: "Portfolio Website",
    desc: "A personal portfolio website showcasing projects, skills, and resume with a 3D animated design.",
    stack_array: ["React", "Tailwind CSS", "Three.js", "Framer Motion"],
    videosrc: "/giphy (1).webp"
  },
  {
    id: 2,
    title: "Food Ordering App",
    desc: "An interactive food ordering platform with category-based filtering, real-time cart, and secure checkout.",
    stack_array: ["React", "Redux", "Firebase", "Stripe API"],
    videosrc: "/giphy (2).webp"
  },
  {
    id: 3,
    title: "Chat Application",
    desc: "A real-time chat application with authentication, group chat, and media sharing features.",
    stack_array: ["React", "Node.js", "Socket.io", "MongoDB"],
    videosrc: "/giphy (3).webp"
  },
  {
    id: 4,
    title: "E-commerce Store",
    desc: "A full-stack e-commerce platform with product catalog, search, cart, and payment gateway integration.",
    stack_array: ["Next.js", "Tailwind CSS", "Express.js", "MongoDB"],
    videosrc: "/giphy (4).webp"
  }
];
const Projects = () => {

  const [video, setVideo] = useState(Magz);

  const handleClick = (src) => {
    setVideo(src);

  };





  useEffect(() => {
    // Show/hide laptop container
    ScrollTrigger.create({
      trigger: ".Fourth-Section",
      start: "top 7%",
      end: "top -200%",
      // markers: true,
      toggleActions: "play reverse play reverse",
      onEnter: () => gsap.set("#laptop-container", { display: "block", autoAlpha: 1 }),
      onLeave: () => gsap.set("#laptop-container", { display: "none", autoAlpha: 0 }),
      onLeaveBack: () => gsap.set("#laptop-container", { display: "none", autoAlpha: 0 }),
      onEnterBack: () => gsap.set("#laptop-container", { display: "block", autoAlpha: 1 }),
    });

    // Move laptop container (both images move together)
    gsap.to("#laptop-container", {
      x: -300,
      duration: 3,
      scrollTrigger: {
        trigger: ".Fourth-Section",
        start: "top top",
        end: "top -40%",
        scrub: true,
        // markers: true,
        pin: ".Fourth-Section",
      },
    });

    // Show/hide screen image with delay
    ScrollTrigger.create({
      trigger: ".Fourth-Section",
      start: "top 3%",
      end: "top -200%",
      // markers: true,
      delay: 1.5,
      toggleActions: "play reverse play reverse",
      onEnter: () => gsap.set("#screen", { display: "block", autoAlpha: 1 }),
      onLeave: () => gsap.set("#screen", { display: "none", autoAlpha: 0 }),
      onLeaveBack: () => gsap.set("#screen", { display: "none", autoAlpha: 0 }),
      onEnterBack: () => gsap.set("#screen", { display: "block", autoAlpha: 1 }),
    });

    return () => {
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, []);

  return (
    <>
      <div className=''>
        <section className='Fourth-Section w-[100vw] h-[100vh] relative flex items-center justify-center'>

          <div className='w-[82%] h-auto flex items-center justify-center relative'>
            {/* Container for both images - they'll move together */}
            <div id='laptop-container' className='relative w-[55%] h-auto hidden'>
              {/* Laptop image as base */}
              <img
                id='lapy'
                className='w-full h-auto relative z-50'
                src={lapy}
                alt="laptop model"
              />

              {/* Project/screen image overlapped on top */}
              <img
                id='screen'
                className='absolute top-[23%] left-[21%] w-[58%] h-[34%] z-[60] hidden drop-shadow-[0_0_1px_gray]'
                src={video}
                alt="projects"
              />
            </div>
          </div>


          <div className="master p-5 flex w-[100vw] h-[100vh] absolute justify-end m items-center z-40 ">


            <div className="blank w-auto"></div>

            <div className="list_container w-[40%] h-[90%]  overflow-y-hidden p-3  mt-2.5 mr-10 justify-center flex  z-80 backdrop-blur-md bg-cyan-200/10 rounded-[28px] shadow-xl items-center flex-col gap-3 poetsen-one-regular text-gray-300 text-lg ">
              {DataArray.map((item) => (
                <div className='h-[25%] w-full p-2 backdrop-blur-md bg-blue-200/1 hover:bg-blue-200/20 hover:cursor-pointer shadow-xl rounded-[20px]
        '>
                  <ul key={item.id} onClick={() => handleClick(item.videosrc)} className='flex flex-col gap-0.5 '>
                    <li className='font-bold text-2xl text-white'>{item.title}</li>
                    <li className='text-gray-200 font-light '>{item.desc}</li>
                    {/* <li className='text-gray-400'>{stack_array.map((item, index) => (
                      <span key={index}>{item}{index < stack_array.length - 1 && ', '}</span>
                    ))}</li> */}
                    <li>{item.stack_array.join(', ')}</li>

                  </ul> 
                </div>

              ))}


            </div>


          </div>

        </section>
      </div>
    </>
  )
}

export default Projects;  