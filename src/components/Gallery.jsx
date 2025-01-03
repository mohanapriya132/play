import React from 'react'
import '../styles/gallery.css';
import Stone1 from '../assets/images/Stone.mp4';
import Saravanan from '../assets/images/2.jpeg';
import Science from '../assets/images/4.jpeg';
import Muthukumar from '../assets/images/1.jpeg';
import Stone2 from '../assets/images/Stone2.mp4';


const Gallery = () => {
  return (
    <div>
        <section class="gallery">
            <h2>Gallery</h2>
            <p class="subheading">"A beautiful life is a collection of unforgettable movements"</p>
            <section class="ceremony-section">
                <div class="video-container">
                    <div class="video-frame">
                        <video class="video" src={Stone1} alt="Foundation Stone Ceremony" controls="false" width="700px" muted>
                            Your browser does not support the video tag.
                        </video>                        
                    </div>
                    <p class="video-caption">Foundation stone Ceremony Video</p>
                </div>
                <div class="text-container">
                    <h2>Foundation stone laying ceremony</h2>
                    <p>Held on 16.06.2024 at Bungalow surandai.</p>
                </div>
            </section>
            <br></br>
            {/* <!-- Image Grid Section --> */}
            <div class="image-grid">
                <div class="grid-item">
                    <img src={Saravanan} alt="Saravanan Raju"/>
                    <p>Saravanan Raju, Chennai Verti IT Solution Praveen, Surandai Reporter Rajkumar, Surandai</p>
                </div>
                
                <div class="grid-item">
                    <img src={Science} alt="Science Forum"/>
                    <p>Science forum Suresh Kumar, Pothunalamantam Arumugam, Madurai Niki foundation Appa Nagalingam</p>
                </div>

                <div class="grid-item">
                    <img src={Muthukumar} alt="M.Muthukumar"/>
                    <p>M.Muthukumar, SMD Rathinasamy, KTK Kamaraj, Aladipatti Darram Teacher Ponraj</p>
                </div>
                
            </div>
            <br></br>
            <section class="construction-section">
                <div class="video-container">
                    <div class="video-frame">
                        <video class="video" src={Stone2}  alt="Foundation Stone Ceremony" controls="false" width="700px" muted>
                            Your browser does not support the video tag.
                        </video>                        
                    </div>
                    <p class="video-caption">Construction Video</p>
                </div> 
            </section>
        </section>
    </div>
  )
}

export default Gallery