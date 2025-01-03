import React, { Children } from 'react'
import '../styles/story.css';
import child from '../assets/images/123.jpg'; 
import Arumugam from '../assets/images/4.jpg'; 
import Manohar from '../assets/images/7.jpeg'; 
 import Chairmakani from '../assets/images/5ca.jpg'; 
import Selvi from '../assets/images/5c.jpg'; 
import  Murugan from '../assets/images/8.jpg'; 
import Jayaram from '../assets/images/6.jpeg'; 
// import li from '../assets/images/li.jpg'; 


const Ourstory = () => {
  return (
    <div>
       {/* <!-- Main Content --> */}
<section class="our-story">
    <h1 class="title">Our Story</h1>
    <div class="quotes">
      <p>"A timely benefit, ~though thing of little worth, the gift itself, ~in excellence transcends the earth."<br></br>- Kural no:102.Thirukural</p>
      <p>“காலத்தி னாற்செய்த நன்றி சிறிதெனினும் ஞாலத்தின் மாணப் பெரிது”<br></br>- குறள் 102 இவ்வார்த்தைக்கு அர்த்தம்</p>
    </div>
    <div class="description">
        <div class="description_s1">
        <div class="para">
            <h3>Pothunala Mantram </h3>
            <p class="para">To raise the Social, Educational, Economic, and Health status of the poor and underprivileged living in this nation, Pothunala Mantram Trust is established by garnering the support of good-hearted people for the expression of our heart gratitude for having received higher education and upliftment in life in spite of being born in an illiterate poor farming family at Keelasurandai village, Tenkasi district, Tamil Nadu, India.
           </p>
        </div>
        <div>
<p class="para"><span>Pothunala Mantram</span> Trust is a non-profitable, non-religious, non-political, non-government social service organization. Its Government registration number is 1947-2005 on the date of 12-07-2005, located in Keelasurandai, Tenkasi District, Tamil Nadu, India. It does not receive any government funds and as such depends entirely on the generous donations of kind and socially responsible individuals. This trust is working on key issues of students' Education & Literacy, Science & Technology, Sports, and Vocational Training.</p>
        </div>
    </div>
    <div class="description_s2" >
        <img src={child} alt="childrens"/>
    </div>
    </div>
  </section>

  {/* <!-- Board of Trustees --> */}
  <section class="trustees">
    <h2 class="title">Board of Trustees</h2>
    <p class="title_s1">"Our cooperation can achieve more than we could on our own."</p>
    <div class="trustee-list">
      <div class="trustee">
        <img src={Arumugam} alt="M. Arumugam"/>
        <h3>M. Arumugam</h3>
        <p>Managing Trustee</p>
        <p>SDE BSNL (Rtd), Keela Surandai, Tenkasi District</p>
      </div>
      <div class="trustee">
        <img src={Manohar} alt="C. Manohar"/>
        <h3>C. Manohar</h3>
        <p>Trustee</p>
        <p>Director, EdifiCademy, Batalakundu, Dindigul District</p>
      </div>
      <div class="trustee">
        <img src={Chairmakani} alt="U. Chairmakani"/>
        <h3>U. Chairmakani</h3>
        <p>Trustee</p>
        <p>Innovate Micro Power System Pvt Ltd, Chennai</p>
      </div>
      
      <div class="trustee">
        <img src={Selvi} alt="Mrs. Selvi"/>
        <h3>Mrs. Selvi</h3>
        <p>Trustee & Treasurer</p>
        <p>Women Self Help Group Organizer, Surandai, Tenkasi District</p>
      </div>
      <div class="trustee">
        <img src={ Murugan} alt="T. Murugan"/>
        <h3>T. Murugan</h3>
        <p>Trustee</p>
        <p>Engineer, Keelasurandai, Tenkasi District</p>
      </div>
      <div class="trustee">
        <img src={Jayaram} alt="G. Jayaram"/>
        <h3>G. Jayaram</h3>
        <p>Trustee</p>
        <p>Teacher, Mentor, Social Worker, Kadayanallur, Tenkasi District</p>
      </div>
    </div>
  </section>
   
    </div>
  )
}

export default Ourstory