import React, { useEffect, useState } from "react";
import "./Gallery.css";

const images = [
  "image/i1.JPG",
  "image/i2.JPG",
  "image/i3.jpg",
  "image/i4.JPG",
  "image/i5.jpg",
];

function Gallery() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prevIndex => (prevIndex + 1) % images.length);
    }, 5000); // Change image every 3 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="gallery-wrapper">
      <div className="gallery-image">
        <img src={images[currentIndex]} alt={`Slide ${currentIndex + 1}`} />
      </div>
    </div>
  );
}

export default Gallery;
