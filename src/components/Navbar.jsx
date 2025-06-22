import React from "react";
import { LiaHandshake } from "react-icons/lia";
import { GrContactInfo } from "react-icons/gr";
import { LuLayoutGrid } from "react-icons/lu";
import { TiHomeOutline } from "react-icons/ti";
import { LiaProjectDiagramSolid } from "react-icons/lia";
import '../app.css'
const Navbar = () => {
  return (
    <nav className="flex items-center justify-between px-6 py-4  text-gray-800 shadow-md  w-screen sticky top-0 bg-white z-10   ">
     
      <div className="flex items-center">
       
        <span className="ml-3 text-xl font-bold">MyWebsite</span>
      </div>

      
      <ul className="flex space-x-10 -translate-x-55 gap-5.5 poetsen-one-regular ">
        <li className="hover:underline hover:text-[16.3px] cursor-pointer flex items-center gap-1"> {<TiHomeOutline />} Home </li>
        <li className="hover:underline hover:text-[16.3px] cursor-pointer flex items-center gap-1">{<GrContactInfo/>}About</li>
        <li className="hover:underline hover:text-[16.3px] cursor-pointer flex items-center gap-1">{<LiaProjectDiagramSolid/>}Projects</li>
        <li className="hover:underline hover:text-[16.3px] cursor-pointer flex items-center gap-0.5 "> {<LiaHandshake/>}Contact</li>
      </ul>

      <ul className="flex items-center space-x-6 mx-[20px]">
       
        <li className="hover:cursor-pointer" ><LuLayoutGrid /></li>
      </ul>
    </nav>
  );
};

export default Navbar;
