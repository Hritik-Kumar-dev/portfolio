import React, { useRef, useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Home from "./sections/Home";
import About from "./sections/About";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";

function App() {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, options);

    const sections = [homeRef, aboutRef, projectsRef, contactRef];
    sections.forEach((ref) => {
      if (ref.current) observer.observe(ref.current);
    });

    return () => {
      sections.forEach((ref) => {
        if (ref.current) observer.unobserve(ref.current);
      });
    };
  }, []);

  const scrollTo = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <Navbar
        scrollTo={scrollTo}
        refs={{ homeRef, aboutRef, projectsRef, contactRef }}
        activeSection={activeSection}
      />
      <div id="home" ref={homeRef}><Home /></div>
      <div id="about" ref={aboutRef}><About /></div>
      <div id="projects" ref={projectsRef}><Projects /></div>
      <div id="contact" ref={contactRef}><Contact /></div>
    </>
  );
}

export default App;
