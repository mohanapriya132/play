import React from "react";
import "../styles/home.css";

import carslider from "../assets/images/car-slider.svg";
import lolypop from "../assets/images/lolypop.png";
import starsm from "../assets/images/star-sm.png";
import star from "../assets/images/star.png";
import li from "../assets/images/li.jpg";
import bub from "../assets/images/bub.jpg";
import party from "../assets/images/party.jpg";
import cafe5 from "../assets/images/cafe5.gif";
import super1 from "../assets/images/super1.jpg";
import sa from "../assets/images/sa.jpg";
import hospital1 from "../assets/images/hospital1.jpg";
import fire from "../assets/images/fire.jpg";
import grand from "../assets/images/grand.png";
import castle from "../assets/images/castle.gif";
import sciencelab from "../assets/images/science lab (2).gif";
import chess from "../assets/images/chess.jpg";
import pet from "../assets/images/pet.jpg";
import excer from "../assets/images/excer.jpg";
import sta from "../assets/images/sta.jpg";
import music from "../assets/images/music.gif";
import draw from "../assets/images/draw.jpg";
import roadsafetygif from "../assets/images/road safety gif.gif";
import posto from "../assets/images/posto.jpg";
import globekid from "../assets/images/globekid.jpg";
import shapeslide1 from "../assets/images/shape-slide-1.png";
import shapeslide2 from "../assets/images/shape-slide-2.png";
import shapeslide3 from "../assets/images/shape-slide-3.png";
import butterfly from "../assets/images/butterfly-4.png";

import { FaBook } from "react-icons/fa";
import { FaRegCircle } from "react-icons/fa6";
import { FaCakeCandles } from "react-icons/fa6";
import { MdLocalCafe } from "react-icons/md";
import { FaCartShopping } from "react-icons/fa6";
import { FaScissors } from "react-icons/fa6";
import { FaRegHospital } from "react-icons/fa6";
import { FaFireExtinguisher } from "react-icons/fa";
import { FaHouseUser } from "react-icons/fa";
import { FaShieldAlt } from "react-icons/fa";
import { FaFlask } from "react-icons/fa";
import { FaChessBoard } from "react-icons/fa6";
import { FaGasPump } from "react-icons/fa6";
import { FaDumbbell } from "react-icons/fa6";
import { FaMasksTheater } from "react-icons/fa6";
import { FaGuitar } from "react-icons/fa";
import { FaPalette } from "react-icons/fa";
import { FaCarCrash } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import { FaGlobe } from "react-icons/fa";
import Carousel from "./Carousel";
import Activities from "./Activities";


const Home = () => {
  
  return (
    <div>
      <div class="banner">
         {/* <div class="carousel">
          <img src={banner1} alt="Slide 1" />
          <img src={banner2} alt="Slide 2" />
          <img src={banner3} alt="Slide 3" />
        </div>  */}
        <Carousel />
        <div class="overlay">
          <div class="overlay-content">
            <h1>Play and Learn</h1>
            <p>
              Where fun meets education! Our programs nurture creativity,
              curiosity, and confidence.
            </p>
            <button>Discover More</button>
          </div>
          <img src={carslider} alt="Animated Car" class="animated-car" />
        </div>
      </div>

      <div class="container1">
        {/* <!-- Text Section with Education Through Play Content --> */}
        <div class="text-side">
          <h2>Education Through Play</h2>
          <ul>
            <li>
              <span class="icon">🎓</span>
              <span>
                "Education should never be imposed! Education is all about
                liberation and participation!"
              </span>
            </li>
            <li>
              <span class="icon">🎨</span>
              <span>
                We strive to provide a rich environment that stimulates
                children's curiosity and creativity through play.
              </span>
            </li>
            <li>
              <span class="icon">🏫</span>
              <span>
                Thus began our pioneering project Play & Learn Science Park at
                Keela Surandai. To make our children's schooling a lot livelier,
                we have embarked upon this project.
              </span>
            </li>
          </ul>
        </div>
        {/* <!-- Carousel Section --> */}
        <div class="carousel-images">
          <img src={shapeslide1} class="active" alt="Child Playing" id="img1" />
          <img src={shapeslide2} alt="Child Smiling" id="img2" />
          <img src={shapeslide3} alt="Child Learning" id="img3" />
        </div>
      </div>

     <Activities />

    

      {/* <!-- enrollment --> */}

      <div class="enrollment-section">
        <img src={butterfly} alt="Rainbow" class="rainbow" />
        <img src={butterfly} alt="Butterfly" class="butterfly" />
        <h2>Join Our New Session</h2>
        <h1>Call To Enroll Your Child</h1>
        <p>91 9444069888</p>
        <a href="contact.html" class="btn">
          Contact Us
        </a>
        <div class="wave"></div>
      </div>
    </div>
  );
};

export default Home;
