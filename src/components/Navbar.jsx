import React from "react";
import { Link } from 'react-scroll';
import { LiaHandshake } from "react-icons/lia";
import { GrContactInfo } from "react-icons/gr";
import { LuLayoutGrid } from "react-icons/lu";
import { TiHomeOutline } from "react-icons/ti";
import { LiaProjectDiagramSolid } from "react-icons/lia";
import { GiGears } from "react-icons/gi";

import '../App.css'
const Navbar = () => {
    return (
        <nav className="flex items-center  justify-center py-2 fixed text-gray-300 shadow-md  w-[100vw]  top-0   z-30   ">
 
            {/* <div className="flex items-center">
                <span className="ml-3 text-xl font-bold">MyWebsite</span>
            </div> */}
<div className="container border-1  max-w-fit p-3 rounded-4xl flex items-center justify-center backdrop-blur-md bg-white/3 ">

            <ul className="flex space-x-4  gap-5.5 poetsen-one-regular ">
                <Link to="home" activeClass="active" spy={true} smooth={true} duration={2000} className=" hover:text-[16.3px] cursor-pointer flex items-center gap-1"> {<TiHomeOutline />} Home </Link>

                <Link to="about" activeClass="active" spy={true} smooth={true} duration={2000} className=" hover:text-[16.3px] cursor-pointer flex items-center gap-1">{<GrContactInfo />}About</Link>

                <Link to="Skills" activeClass="active" spy={true} smooth={true} duration={2900} className=" hover:text-[16.3px] cursor-pointer flex items-center gap-1">{<GiGears />}Skills</Link>

                <Link to="projects" activeClass="active" spy={true} smooth={true} duration={2000} className=" hover:text-[16.3px] cursor-pointer flex items-center gap-1">{<LiaProjectDiagramSolid />}Projects</Link>

                <Link to="contact" activeClass="active" spy={true} smooth={true} duration={2000 } className=" hover:text-[16.3px] cursor-pointer flex items-center gap-0.5 "> {<LiaHandshake />}Contact</Link>
            </ul>
</div>

            {/* <ul className="flex items-center space-x-6 mx-[20px]">

                <li className="hover:cursor-pointer" ><LuLayoutGrid /></li>
            </ul> */}
        </nav>
    );
};


export default Navbar;