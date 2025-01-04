import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/images/Logo fi.png'; 
import { TbWorld } from "react-icons/tb";
import { FaBook } from "react-icons/fa";
import { FaPuzzlePiece } from "react-icons/fa6";
import { FaCakeCandles } from "react-icons/fa6";
import { FaImages } from "react-icons/fa";
import { FaUserTie } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div>
          <nav class="navbar">
        <div class="logo">
            <img src={logo} alt="Logo" /> 
        </div>
         <ul class="nav-links" className={`nav-links ${isOpen ? "show" : ""}`}>

           <Link to="/">
           <li><a href="#"><TbWorld /> Our World</a></li>
           </Link>
           <Link to="/story">
           <li><a href="#"><FaBook /> Our Story</a></li>
           </Link>
           <Link to="/activities">
           <li><a href="#"><FaPuzzlePiece /> Activities</a></li>
           </Link>
           <Link to="/party">
           <li><a href="#"><FaCakeCandles /> Party Time</a></li>
           </Link>
           <Link to="/gallery">
           <li><a href="#"><FaImages /> Gallery</a></li>
           </Link>
           <Link to="/advisor">
           <li><a href="#"><FaUserTie /> Advisor</a></li>
           </Link>
        </ul>
        <button class="hamburger" className={`hamburger ${isOpen ? "active" : ""}`} onClick={toggleMenu}>
            <span></span>
            <span></span>
            <span></span>
        </button> 
       
      <Link to="/contact">
      <button className="join-btn">
        <FaEnvelope /> Contact Us
      </button>
    </Link>
    </nav>
  </div> 
 
  
    
  )
}

export default Navbar