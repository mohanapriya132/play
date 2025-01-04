import React from 'react'
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { TbWorld } from "react-icons/tb";
import { FaBook } from "react-icons/fa";
import { FaPuzzlePiece } from "react-icons/fa6";
import { FaCakeCandles } from "react-icons/fa6";
import { FaImages } from "react-icons/fa";
import { FaUserTie } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { FaEnvelope } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";

const Footer = () => {
  return (
    <div>
        <footer>
    <div class="footer-container">
        {/* <!-- About Section --> */}
        <div class="footer-column">
            <h3>Play&Learn</h3>
            <p>Play and Learn is a concept that combines education with fun and interactive activities</p>
            <div class="social-icons">
                <a href="#" aria-label="Facebook"><FaFacebookF /></a>
                <a href="#" aria-label="Twitter"><FaTwitter /></a>
                <a href="#" aria-label="Pinterest"><FaPinterest /></a>
                <a href="#" aria-label="LinkedIn"><FaLinkedin /></a>
            </div>
        </div>

        {/* <!-- Details Info Section --> */}
        <div class="footer-column">
            <h3>Details Info</h3>
            <ul>
                <li><a href="index.html"><TbWorld /> Our World</a></li>
                <li><a href="ourstory.html"><FaBook /> Our Story</a></li>
                <li><a href="#Activities"><FaPuzzlePiece /> Activities</a></li>
                <li><a href="partytime.html"><FaCakeCandles /> Party Time</a></li>
                <li><a href="gallery.html"><FaImages /> Gallery</a></li>
                <li><a href="advisor.html"><FaUserTie /> Advisor</a></li>
            </ul>
        </div>

        {/* <!-- Map Link Section --> */}
        <div class="footer-column">
            <h3>Find Us</h3>
            <div class="map-link">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15763.684079822628!2d77.41593365!3d8.9794152!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b042783f161560f%3A0xaaf9292d94be27c9!2sSurandai%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1735619813952!5m2!1sen!2sin" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </div>

         {/* Contact Us Section  */}
        <div class="footer-column">
            <h3>Contact Us</h3>
            <p><FaLocationDot />Yemaraja Gardens,
                Periyar Nagar,ThaayaarThooppu Road, ,
                Bungalow Surandai, Surandai - 627 859, Tenkasi District, Tamilnadu, India.</p>
            <p><FaEnvelope /> playlearn@gmail.com</p>
            <p><FaPhone />91 9444069888</p>
        </div>
    </div>

    <div class="footer-bottom">
        Copyright 2025 Play and Learn. All Rights Reserved<br></br>
        Developed by VetriIT System Private Limited
    </div>
</footer>
    </div>
  )
}

export default Footer