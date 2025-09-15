import React, { useRef, useState, useEffect } from "react";

import { Element } from 'react-scroll';
import Navbar from "./components/Navbar";
import Home from "./sections/Home";
import About from "./sections/About";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";
import Skills from "./sections/Skills";
// import SkillBubbles from "./sections/SkillBubbles";
import Footer from "./components/Footer";
import CanvasContainer from "./sections/CanvasContainer";
import CanvasLaptop2 from "./sections/CanvasLaptop2";




function App() {
   

  return (
    <>
      <Navbar/>
      
      
      <div className="h-screen w-full fixed top-0 z-40"><CanvasContainer /></div>
     
     

      <Element name="home" ><Home /> </Element>
      <Element name="about"><About /> </Element>
      
      <div className="h-screen w-full fixed top-0 z-40 " ><CanvasLaptop2 /></div>
      <Element name="Skills"><Skills /></Element>
      {/* <Element name="Skills"><SkillBubbles/> </Element> */}
      <Element name="projects" ><Projects /> </Element>
      <Element name="contact" ><Contact /> </Element>
      <Footer/>
    </>
  );
}

export default App;
