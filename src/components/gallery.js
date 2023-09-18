import React, { useState } from "react";
import { Carousel } from 'react-carousel-minimal';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./gallery.css";
import Paagetransition from "./pagetransition";

const Gallery = () => {
  const data = [

    {
    image: require('./utils/g9.jpg'),
      caption: "Neurology"
    },
    {
        image: require('./utils/g8.jpg'),
        caption: "Ophthalmology"
    },
    {
        image: require('./utils/g7.jpg'),
        caption: "Gynecology"
    },
    {
        image: require('./utils/g6.jpg'),
        caption: "Otolaryngology"
    },
    {
        image: require('./utils/g5.jpg'),
        caption: "Gastroenterology"
    },
    {
        image: require('./utils/g4.jpg'),
        caption: "Orthopedics"
    },
    {
        image: require('./utils/g3.jpg'),
        caption: "Pediatrics"
    },
    {
        image: require('./utils/g2.jpg'),
        caption: "Dermatology"
    },
    {
        image: require('./utils/g1.jpg'),
        caption: "Cardiology"
    },
    {
      image: require('./utils/g0.jpg'),
      caption: "Pediatrics"
  }
  ];

  const captionStyle = {
    fontSize: '2em',
    fontWeight: 'bold',
    color:'black'
  }
  const slideNumberStyle = {
    fontSize: '20px',
    fontWeight: 'bold',
    color:'black'
  }
  return (
    <Paagetransition>
    <div className="gal-container">
    <div style={{ textAlign: "center" }}>
      <h2 className="gal-h2">WelCome to Our Gallery</h2>
      <div className="gal-div2" style={{
        padding: "0 20px"
      }}>
        <Carousel
          data={data}
          time={2000}
          height="500px"
          width="100%"
          captionStyle={captionStyle}
          radius="10px"
          slideNumber={true}
          slideNumberStyle={slideNumberStyle}
          captionPosition="bottom"
          automatic={true}
          dots={true}
          pauseIconColor="white"
          pauseIconSize="40px"
          slideBackgroundColor="darkgrey"
          slideImageFit="cover"
          thumbnails={true}
          thumbnailWidth="100px"
          style={{
            textAlign: "center",
            maxWidth: "90%",
            maxHeight: "500px",
            margin: "40px auto",
          }}
        />
      </div>
    </div>
  </div>
  </Paagetransition>
  );
};

export default Gallery;
