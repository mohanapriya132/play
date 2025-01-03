import React from 'react'
import { FaClock } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";
import { PiWhatsappLogoBold } from "react-icons/pi";
import { FaFacebookF } from "react-icons/fa";
import { GrInstagram } from "react-icons/gr";
import { FaTwitter } from "react-icons/fa";


const Header = () => {
  return (
    <div>
        <header class="header-section">
        <div class="header-content">
            <div class="header-left">
                <div class="info-item"><FaClock /> 9:30 AM - 6:30 PM | Mon - Sun</div>
                <div class="info-item"><FaPhone />91 9444069888</div>
                <div class="info-item"><IoLocationSharp />Periyar Nagar,Bungalow Surandai, Surandai - 627 859</div>
            </div>
            <div class="header-right">
                <a href="https://wa.me/1234567890" target="_blank"><PiWhatsappLogoBold /></a>
                <a href="https://www.facebook.com" target="_blank"><FaFacebookF /></a>
                <a href="https://www.instagram.com" target="_blank"><GrInstagram /></a>
                <a href="https://www.twitter.com" target="_blank"><FaTwitter /></a>
            </div>
        </div>
    </header>
    </div>
  )
}

export default Header