import React from 'react'
import { IoLogoLinkedin } from "react-icons/io5";
import { FaGithubSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
const SocialLinks = () => {
  return (

    <div className="flex gap-1.5  text-white text-5xl " >

    
        <div className="flex items-center mx-2  gap-1.5" >
          <a href= 'www.linkedin.com/in/hritik-kumar-a05b572a9'><IoLogoLinkedin /></a>
        </div>

        <div className="flex items-center mx-2  gap-1.5" >
          <a href= 'https://github.com/Hritik-Kumar-dev'><FaGithubSquare /></a>
        </div>
        
        <div className="flex items-center mx-2  gap-1.5" >
          <a href= 'https://www.instagram.com/hritikkumar3972/?next=%2F'><FaInstagramSquare /></a>
        </div>
     
        
        <div className="flex items-center mx-2  gap-1.5" >
          <a href= 'https://x.com/HritikKuma22829'><FaSquareXTwitter /></a>
        </div>
     

    </div>
  )
}


export default SocialLinks

