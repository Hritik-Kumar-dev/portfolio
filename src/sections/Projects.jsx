// const Projects = () => (
//   <section className="Fourth-Section h-screen  w-screen flex items-center justify-center bg-yellow-100 text-4xl font-bold">
//     Projects Section
//   </section>
// );
// export default Projects;

import React from 'react'
import gsap from 'gsap'
import { useEffect } from 'react';
import lapy from '../assets/lapy.svg'
import Magz from '../assets/Magz.gif'
import '../App.css'
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
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
      <div className='absolute '>
        <section className='Fourth-Section w-[100vw] h-[100vh] relative flex items-center justify-center bg-gray-500'>
          
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
                className='absolute top-[23%] left-[21%] w-[58%] h-[34%] z-[60] hidden' 
                src={Magz} 
                alt="projects" 
              />
            </div>
          </div>
          
        </section>
      </div>
    </>
  )
}

  export default Projects;  