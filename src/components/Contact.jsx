import React from 'react'
import '../styles/contact.css';
import contactbanner from '../assets/images/contact-banner.jpg'; 
import locationcontact from '../assets/images/location-contact.png'; 
import phonecontact from '../assets/images/phone-contact.png'; 
 import mailcontact from '../assets/images/mail-contact.png'; 


const Contact = () => {
  return (
    <div>
        <div class="header1">
        <img src={contactbanner} alt="Header Background"/>
        <div class="header-overlay">
            <h1>Contact</h1>
        </div>
    </div>

    <div class="container">
        {/* <!-- Form Section --> */}
        <div class="form-section">
            <h2>Play & Learn - Let's Connect!</h2>
            <p>Discover the joy of learning through fun, interactive, and creative activities. Reach out to us with your questions, suggestions, or feedback. We’d love to hear from you!</p>
            <form id="contact-form">
                <div class="form-group">
                    <label for="name">Enter Your Name*</label>
                    <input type="text" id="name"  required/>
                </div>
                <div class="form-group">
                    <label for="email">Enter Your Email*</label>
                    <input type="email" id="email" required/>
                </div>
                <div class="form-group">
                    <label for="message">Type Message*</label>
                    <textarea id="message"  required></textarea>
                </div>
                <div class="form-group">
                    <button type="submit">Send Now</button>
                </div>
            </form>
        </div>

        {/* <!-- Information Section --> */}
        <div class="info-section2">
            <h2>Our Information</h2>
            <div class="info-item2">
                <img src={locationcontact} alt="Location Icon"/>
                <div>
                    <strong>Address:</strong>
                        <p>Yemaraja Gardens,
                        Periyar Nagar,<br></br>
                        ThaayaarThooppu Road,
                        Bungalow Surandai, Surandai - 627 859, <br></br>Tenkasi District, Tamilnadu, India.</p>
                </div>
            </div>
            <div class="info-item2">
                <img src={phonecontact} alt="Phone Icon"/>
                <div>
                    <strong>Call Us</strong>
                    <p>91 9444069888</p>
                </div>
            </div>
            <div class="info-item2">
                <img src={mailcontact} alt="Mail Icon"/>
                <div>
                    <strong>Mail Info:</strong>
                    <p>playlearn@gmail.com</p>
                </div>
            </div>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509803!2d144.95373531531692!3d-37.81627997975171!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf5772cfbc8fc0e6d!2sEnvato!5e0!3m2!1sen!2sau!4v1638281442024!5m2!1sen!2sau"></iframe>
        </div>
    </div>
    </div>
  )
}

export default Contact