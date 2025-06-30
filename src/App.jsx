import React, { useRef, useState, useEffect } from "react";

import { Element } from 'react-scroll';
import Navbar from "./components/Navbar";
import Home from "./sections/Home";
import About from "./sections/About";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";
import Skills from "./sections/Skills";
import SkillBubbles from "./sections/SkillBubbles";
import Footer from "./components/Footer";

function App() {
  

  return (
    <>
      <Navbar/>
      <Element name="home" ><Home /> </Element>
      <Element name="about"><About /> </Element>
      {/* <Element name="skills"><Skills/> </Element> */}
      <Element name="Skills"><SkillBubbles/> </Element>
      <Element name="projects" ><Projects /> </Element>
      <Element name="contact" ><Contact /> </Element>
      <Footer/>
    </>
  );
}

export default App;
