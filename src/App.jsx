import React, { useRef, useState, useEffect } from "react";

import { Element } from 'react-scroll';
import Navbar from "./components/Navbar";
import Home from "./sections/Home";
import About from "./sections/About";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";

function App() {
  

  return (
    <>
      <Navbar/>
      <Element name="home" style={{ height: '100vh' }}><Home /> </Element>
      <Element name="about" style={{ height: '100vh' }}><About /> </Element>
      <Element name="projects" style={{ height: '100vh' }}><Projects /> </Element>
      <Element name="contact" style={{ height: '100vh' }}><Contact /> </Element>
    </>
  );
}

export default App;
