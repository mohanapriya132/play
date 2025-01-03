import React from 'react'
import '../styles/party.css';
import banner1 from '../assets/images/banner1.png'; 
import banner2 from '../assets/images/banner2.png'; 
// import banner3 from '../assets/images/banner3.png'; 
import ballon1 from '../assets/images/ballon1.gif'; 
import party from '../assets/images/party.jpg'; 
import cake2 from '../assets/images/cake2.gif'; 
import gift2 from '../assets/images/gift2.gif'; 
// import banner3 from '../assets/images/banner3.png'; 



const Partytime = () => {
  return (
    <div>
        {/* <div class="carousel">
        <div class="carousel-images" id="carouselImages">
            <img src={banner1} alt="Slide 1"/>
            <img src={banner2} alt="Slide 2"/>
            <img src={banner3} alt="Slide 3"/>
        </div>
        <div class="carousel-content" id="carouselContent">
            <h1>Kids Party Time!</h1>
            <p>Brighten Every Celebration</p>
            <p>Discover vibrant balloons perfect for kids' parties and special moments!</p>
        </div>
        <div class="carousel-indicators" id="carouselIndicators">
            <button class="active" data-slide="0"></button>
            <button data-slide="1"></button>
            <button data-slide="2"></button>
        </div>
    </div> */}
       <div class="carousel">
        <div class="carousel-images" id="carouselImages">
            <img src={banner1} alt="Balloon Party Image 1"/>
            <img src={banner2} alt="Balloon Party Image 2"/>
            <img src={banner2} alt="Balloon Party Image 3"/>
        </div>
        <div class="carousel-content" id="carouselContent">
            <h1>Kids Party Time!</h1>
            <p>Brighten Every Celebration</p>
            <p>Discover vibrant balloons perfect for kids' parties and special moments!</p>
        </div>
        <div class="carousel-indicators" id="carouselIndicators">
            <button class="active" data-slide="0"></button>
            <button data-slide="1"></button>
            <button data-slide="2"></button>
        </div>
    </div>

    <h1>Party Time</h1>
    {/* <!-- <p>The Balloons you want when you want them!</p> --> */}
    <div class="balloon-container">
        <div class="balloon-card">
            <img src={ballon1} alt="Birthday Balloons"/>
            <h2>Birthday Balloons</h2>
        </div>
        <div class="balloon-card">
            <img src={party} alt="Christmas Balloons"/>
            <h2>Party Hall</h2>
        </div>
        <div class="balloon-card">
            <img src={cake2} alt="Birthday Balloons"/>
            <h2>Birthday Cake</h2>
        </div>
        <div class="balloon-card">
            <img src={gift2} alt="Giant Balloons"/>
            <h2>Birthday Gift</h2>
        </div>
    </div>
    </div>
  )
}

export default Partytime