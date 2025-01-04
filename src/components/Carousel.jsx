import React, { useState, useEffect } from "react";
// import "../styles/home.css";
import banner1 from "../assets/images/banner1.png";
import banner2 from "../assets/images/banner2.png";
import banner3 from "../assets/images/banner3.png";

const Carousel = () => {
    const banners = [banner1, banner2, banner3];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % banners.length);
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval); // Clean up interval
  }, [banners.length]);

  return (
    <div style={{ width: "100%", height:"100%", overflow: "hidden" }}>
      <img
        src={banners[currentIndex]}
        alt={`Slide ${currentIndex + 1}`}
        style={{
          width: "100%",
          height: "50rem",
          height: "100%", // Adjust height as needed
         objectFit: "cover",
          transition: "opacity 0.5s ease-in-out",
          
        }}
      />
    </div>
  );
};

export default Carousel;
