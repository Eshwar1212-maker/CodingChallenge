import React, { useState } from "react";
import { Carousel } from "react-bootstrap";
import one from "../assets/carouselProjectPic.jpg";
import video from "../assets/Vid.mp4"



function CarouselSlider() {
  return (
    <div className="m-carousel">
    <Carousel>
    <Carousel.Item interval={2000}>
        <video width="950" height="750" muted controls loop autoPlay="">
          <source src={video} type="video/mp4" />
         </video>
      </Carousel.Item>
      <Carousel.Item interval={5000}
      >
        <img
          className=""
          src={one}   
        />
      </Carousel.Item>
    </Carousel>
    </div>
  );
  }
export default CarouselSlider;