import React from "react";
import "../styles/home.css";
import banner1 from "../assets/images/banner1.png";
import banner2 from "../assets/images/banner2.png";
import banner3 from "../assets/images/banner3.png";
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
const Home = () => {
  return (
    <div>
      <div class="banner">
        <div class="carousel">
          <img src={banner1} alt="Slide 1" />
          <img src={banner2} alt="Slide 2" />
          <img src={banner3} alt="Slide 3" />
        </div>
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

      <section class="services-section">
          <div class="decorations">
            <img src={lolypop} alt="Lollipop" class="lollipop" />
            <img src={starsm} alt="Small Star" class="star-sm" />
            <img src={star} alt="Big Star" class="star" />
          </div>
        <div class="container">
          <h3 class="section-subtitle">Activities We Provide</h3>
          <h2 class="section-title">Explore Fun and Engaging Activities</h2>
          <div class="services-grid">
            {/* <!-- Service Cards --> */}
            <div class="service-card card-pink">
              <div class="front">
                <div class="icon">
                  <FaBook />
                </div>
                <h4 class="service-title">Library</h4>
                <p class="service-desc">
                  Discover the joy of reading and explore a wide variety of
                  books.
                </p>
              </div>
              <div class="back">
                <img src={li} alt="Library" />
              </div>
            </div>
            <div class="service-card card-purple">
              <div class="front">
                <div class="icon">
                  <FaRegCircle />
                </div>
                <h4 class="service-title">Bubble Dance</h4>
                <p class="service-desc">
                  Celebrate special moments with friends and family.
                </p>
              </div>
              <div class="back">
                <img src={bub} alt="Party Hall" />
              </div>
            </div>
            <div class="service-card card-yellow">
              <div class="front">
                <div class="icon">
                  <FaCakeCandles />
                </div>
                <h4 class="service-title">Party Hall</h4>
                <p class="service-desc">
                  Celebrate in style with a perfect blend of ambiance, music,
                  and culinary delights.
                </p>
              </div>
              <div class="back">
                <img src={party} alt="Cafe" />
              </div>
            </div>
            <div class="service-card card-blue">
              <div class="front">
                <div class="icon">
                  {/* <!-- <i class="fa-solid fa-music"></i> --> */}
                  <MdLocalCafe />
                </div>
                <h4 class="service-title">Cafe</h4>
                <p class="service-desc">
                  Relax, sip your favorite coffee, and enjoy the cozy ambiance.
                </p>
              </div>
              <div class="back">
                <img src={cafe5} alt="Music" />
              </div>
            </div>
            <div class="service-card card-green">
              <div class="front">
                <div class="icon">
                  <FaCartShopping />
                </div>
                <h4 class="service-title">Super Market</h4>
                <p class="service-desc">
                  Discover fresh produce, household essentials, and great deals
                  at your convenience.
                </p>
              </div>
              <div class="back">
                <img src={super1} alt="Gym" />
              </div>
            </div>
            <div class="service-card card-pink">
              <div class="front">
                <div class="icon">
                  <FaScissors />
                </div>
                <h4 class="service-title">Salon</h4>
                <p class="service-desc">
                  Pamper yourself with our expert beauty and grooming services.
                </p>
              </div>

              <div class="back">
                <img src={sa} alt="Healthcare" />
              </div>
            </div>
            <div class="service-card card-purple">
              <div class="front">
                <div class="icon">
                  <FaRegHospital />
                  {/* <!-- Updated icon for Hospital --> */}
                </div>
                <h4 class="service-title">Hospital</h4>
                <p class="service-desc">
                  Receive top-quality medical care from our expert healthcare
                  professionals.
                </p>
              </div>

              <div class="back">
                <img src={hospital1} alt="Chess" />
              </div>
            </div>
            <div class="service-card card-yellow">
              <div class="front">
                <div class="icon">
                  <FaFireExtinguisher />
                  {/* <!-- Updated icon for Fire Station --> */}
                </div>
                <h4 class="service-title">Fire Station</h4>
                <p class="service-desc">
                  Dedicated to protecting lives and property with quick and
                  professional emergency services.
                </p>
              </div>

              <div class="back">
                <img src={fire} alt="Art" />
              </div>
            </div>
            <div class="service-card card-blue">
              <div class="front">
                <div class="icon">
                  <FaHouseUser />
                  {/* <!-- Updated icon for Grandma House --> */}
                </div>
                <h4 class="service-title">Grandma's House</h4>
                <p class="service-desc">
                  Enjoy homemade meals, heartwarming stories, and cozy moments
                  with grandma.
                </p>
              </div>

              <div class="back">
                <img src={grand} alt="Coding" />
              </div>
            </div>
            <div class="service-card card-green">
              <div class="front">
                <div class="icon">
                  <FaShieldAlt />
                </div>
                <h4 class="service-title">Castle</h4>
                <p class="service-desc">
                  Explore the grandeur and history of our majestic castle with
                  guided tours.
                </p>
              </div>

              <div class="back">
                <img src={castle} alt="Basketball" />
              </div>
            </div>
            {/* <!-- Service Cards --> */}
            <div class="service-card card-pink">
              <div class="front">
                <div class="icon">
                  <FaFlask />
                  {/* <!-- Updated icon for Science Lab --> */}
                </div>
                <h4 class="service-title">Science Lab</h4>
                <p class="service-desc">
                  Explore the world of science through hands-on experiments and
                  cutting-edge research.
                </p>
              </div>

              <div class="back">
                <img src={sciencelab} alt="Library" />
              </div>
            </div>
            <div class="service-card card-purple">
              <div class="front">
                <div class="icon">
                  <FaChessBoard />
                  {/* <!-- Updated icon for Gigantic Chess --> */}
                </div>
                <h4 class="service-title">Gigantic Chess</h4>
                <p class="service-desc">
                  Engage in an exciting game of chess with oversized pieces and
                  challenging strategies.
                </p>
              </div>

              <div class="back">
                <img src={chess} alt="Party Hall" />
              </div>
            </div>
            <div class="service-card card-yellow">
              <div class="front">
                <div class="icon">
                  <FaGasPump />
                  {/* <!-- Updated icon for Petrol Bunk --> */}
                </div>
                <h4 class="service-title">Petrol Bunk</h4>
                <p class="service-desc">
                  Refuel your vehicle with high-quality fuel and enjoy
                  convenient services.
                </p>
              </div>

              <div class="back">
                <img src={pet} alt="Cafe" />
              </div>
            </div>
            <div class="service-card card-blue">
              <div class="front">
                <div class="icon">
                  <FaDumbbell />
                  {/* <!-- Updated icon for Exercise --> */}
                </div>
                <h4 class="service-title">Exercise</h4>
                <p class="service-desc">
                  Stay fit and healthy by engaging in various exercise routines
                  and workouts.
                </p>
              </div>

              <div class="back">
                <img src={excer} alt="Music" />
              </div>
            </div>
            <div class="service-card card-green">
              <div class="front">
                <div class="icon">
                  <FaMasksTheater />
                  {/* <!-- Updated icon for Stage --> */}
                </div>
                <h4 class="service-title">Stage</h4>
                <p class="service-desc">
                  Experience thrilling performances and showcase your talent on
                  the stage.
                </p>
              </div>

              <div class="back">
                <img src={sta} alt="Gym" />
              </div>
            </div>
            <div class="service-card card-pink">
              <div class="front">
                <div class="icon">
                  <FaGuitar />
                  {/* <!-- Updated icon for Music Instruments --> */}
                </div>
                <h4 class="service-title">Music Instruments</h4>
                <p class="service-desc">
                  Explore a wide variety of music instruments and unleash your
                  musical creativity.
                </p>
              </div>

              <div class="back">
                <img src={music} alt="Healthcare" />
              </div>
            </div>
            <div class="service-card card-purple">
              <div class="front">
                <div class="icon">
                  <FaPalette />
                  {/* <!-- Updated icon for Drawing Time --> */}
                </div>
                <h4 class="service-title">Drawing Time</h4>
                <p class="service-desc">
                  Express your creativity through drawing and painting in our
                  art workshops.
                </p>
              </div>

              <div class="back">
                <img src={draw} alt="Chess" />
              </div>
            </div>
            <div class="service-card card-yellow">
              <div class="front">
                <div class="icon">
                  <FaCarCrash />
                  {/* <!-- Updated icon for Road Safety Rules --> */}
                </div>
                <h4 class="service-title">Road Safety Rules</h4>
                <p class="service-desc">
                  Learn essential road safety rules and ensure your safety on
                  the road.
                </p>
              </div>

              <div class="back">
                <img src={roadsafetygif} alt="Art" />
              </div>
            </div>
            <div class="service-card card-blue">
              <div class="front">
                <div class="icon">
                  <FaEnvelope />
                  {/* <!-- Envelope Icon --> */}
                </div>
                <h4 class="service-title">Post Office</h4>
                <p class="service-desc">
                  Send and receive letters, parcels, and enjoy postal services
                  at your convenience.
                </p>
              </div>

              <div class="back">
                <img src={posto} alt="Coding" />
              </div>
            </div>
            <div class="service-card card-green">
              <div class="front">
                <div class="icon">
                  <FaGlobe />
                  {/* <!-- Updated icon for Globe --> */}
                </div>
                <h4 class="service-title">Globe</h4>
                <p class="service-desc">
                  Explore the world, learn about different cultures, and expand
                  your global knowledge.
                </p>
              </div>

              <div class="back">
                <img src={globekid} alt="Basketball" />
              </div>
            </div>
          </div>
        </div>
      </section>

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
