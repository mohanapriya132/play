import React from 'react'
import '../styles/party.css';
// import banner1 from '../assets/images/banner1.png'; 
// import banner2 from '../assets/images/banner2.png'; 
// import banner3 from '../assets/images/banner3.png'; 
import banner1 from "../assets/images/banner1.png";
import ballon1 from '../assets/images/ballon1.gif'; 
import party from '../assets/images/party.jpg'; 
import cake2 from '../assets/images/cake2.gif'; 
import gift2 from '../assets/images/gift2.gif'; 
import ballon from '../assets/images/ballon.gif'; 
import Carousel from './Carousel';



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
        {/* <div class="carousel">
         <div>
       <img src={banner1} alt="Slide 1" />
       </div>  */}
         {/* <div class="carousel-images" id="carouselImages">
            <img src={banner1} alt="Balloon Party Image 1"/>
            <img src={banner2} alt="Balloon Party Image 2"/>
            <img src={banner2} alt="Balloon Party Image 3"/>
        </div>  */}
       
        {/* <div class="carousel-content" id="carouselContent">
            <h1>Kids Party Time!</h1>
            <p>Brighten Every Celebration</p>
            <p>Discover vibrant balloons perfect for kids' parties and special moments!</p>
        </div> */}
        {/* <div class="carousel-indicators" id="carouselIndicators">
            <button class="active" data-slide="0"></button>
            <button data-slide="1"></button>
            <button data-slide="2"></button>
        </div>  */}
    {/* </div>  */}

    <div >
    <div class="party-image">
       <img src={banner1} alt="Slide 1" />
       </div>
       <div class="carousel-content" id="carouselContent">
            <h1>Kids Party Time!</h1>
            <p>Brighten Every Celebration</p>
            <p>Discover vibrant balloons perfect for kids' parties and special moments!</p>
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

    <div class="quotes">
        <div class="quote">
            <p><b>"Men set up home, toil and earn to tend the guests and do good turn."</b></p>
            <span>~ Kural no:81. Thirukkural</span>
        </div>
        <div class="quote tamil-quote">
            <p><b>இருந்தோம்பி இல்வாழ்வ தெல்லாம் விருந்தோம்பி</b></p>
            <p>வேளாண்மை கூறிப் பெறுட்டு</p>
            <span>- குறள் 81, திருக்குறள்</span>
        </div>
    </div>

    <div class="two-column-layout">
        <div class="content">
            <div class="text-section">
                <p class="subtitle">“ Every day is a gift, but some days are packaged better ”</p>
                <p>
                    Parties are fun for kids and adults of all ages. A birthday celebration is an occasion for joy, laughter, and connection. Birthday, and the perfect birthday party invitation kicks all of this off in style.
                </p>
                <p>
                    Whether it’s a milestone birthday, a themed or surprise party, or a simple, intimate gathering, crafting the right birthday:
                </p>
                <ul>
                    <li>
                        <span class="animated-icon">🎂</span>
                        Turning one year older is an exciting time in your child’s life.
                    </li>
                    <li>
                        <span class="animated-icon">🎁</span>
                        Surprise Birthday Party for your friends and family members.
                    </li>
                    <li>
                        <span class="animated-icon">🎉</span>
                        It’s your special day — get out there and celebrate!
                    </li>
                </ul>
            </div>
        </div>
        <div class="image-section">
            <img src={ballon} alt="Colorful Balloons"/>
        </div>
    </div>
    </div>
  )
}

export default Partytime