import React, { useRef, useState, useEffect } from "react";

import CanvasContainer from "./sections/CanvasContainer";
import CanvasLaptop2 from "./sections/CanvasLaptop2";
import { Element } from 'react-scroll';
import Navbar from "./components/Navbar";
import Home from "./sections/Home";
import About from "./sections/About";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";
import Skills from "./sections/Skills";
// import SkillBubbles from "./sections/SkillBubbles";
import Footer from "./components/Footer";




function App() {
   


  
  return (
    <>
    
      <Navbar/> 
      <Element name="home" ><Home /> </Element>
      <Element name="about"><About /> </Element>
      <div className="h-screen w-full fixed top-0 z-0"><CanvasContainer /></div>

      <div className="h-screen w-full fixed top-0 z-0 " ><CanvasLaptop2 /></div>
      <Element name="Skills"><Skills /></Element>
      {/* <Element name="Skills"><SkillBubbles/> </Element> */}
      <Element name="projects" ><Projects /> </Element>
      <div className="w-[100vw] h-[140vh] ">

      </div>
      <Element name="contact" ><Contact /> </Element>
      <Footer/>
    </>
  );
}

export default App;
