import React from "react";
import { LiaHandshake } from "react-icons/lia";
import { GrContactInfo } from "react-icons/gr";
import { LuLayoutGrid } from "react-icons/lu";
import { TiHomeOutline } from "react-icons/ti";
import { LiaProjectDiagramSolid } from "react-icons/lia";
import "../app.css";

const Navbar = ({ scrollTo, refs, activeSection }) => {
  const navItems = [
    { name: "home", label: "Home", icon: <TiHomeOutline />, ref: refs.homeRef },
    { name: "about", label: "About", icon: <GrContactInfo />, ref: refs.aboutRef },
    { name: "projects", label: "Projects", icon: <LiaProjectDiagramSolid />, ref: refs.projectsRef },
    { name: "contact", label: "Contact", icon: <LiaHandshake />, ref: refs.contactRef },
  ];

  return (
    <nav className="flex items-center justify-between px-6 py-4 text-gray-800 shadow-md w-screen sticky top-0 bg-white z-10">
      <div className="flex items-center">
        <span className="ml-3 text-xl font-bold">MyWebsite</span>
      </div>

      <ul className="flex gap-6 poetsen-one-regular">
        {navItems.map((item) => (
          <li
            key={item.name}
            className={`cursor-pointer flex items-center gap-1 transition-all duration-200 ${
              activeSection === item.name ? "text-blue-600 font-bold" : ""
            }`}
            onClick={() => scrollTo(item.ref)}
          >
            {item.icon} {item.label}
          </li>
        ))}
      </ul>

      <ul className="flex items-center space-x-6 mx-[20px]">
        <li className="hover:cursor-pointer">
          <LuLayoutGrid />
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
