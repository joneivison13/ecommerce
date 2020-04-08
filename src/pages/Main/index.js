import React from "react";

import Back from "../../assets/images.jpg";
import Product2 from "../../assets/foto4-mod.jpeg";
import Product4 from "../../assets/foto4-mod.jpeg";
import Product6 from "../../assets/product1.jpg";
import Product7 from "../../assets/product2.jpg";
import Product9 from "../../assets/product4.jpg";
import Product10 from "../../assets/product5.jpg";
import Product11 from "../../assets/product6.jpg";

import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

export default function Main() {
  return (
    <div className="preto">
      <img src={Back} className="banner" alt="" />
      <Carousel infiniteLoop={true} showThumbs={false} showArrows={true} autoPlay={true}>
        <div className="caroussel">
          <img
            src={Product2}
            alt=""
          />
        </div>
        <div className="caroussel">
          <img
            src={Product6}
            alt=""
          />
        </div>
        <div className="caroussel">
          <img
            src={Product4}
            alt=""
          />
        </div>
        <div className="caroussel">
          <img
            src={Product7}
            alt=""
          />
        </div>
        <div className="caroussel">
          <img
            src={Product9}
            alt=""
          />
        </div>
        <div className="caroussel">
          <img
            src={Product10}
            alt=""
          />
        </div>
        <div className="caroussel">
          <img
            src={Product11}
            alt=""
          />
        </div>
      </Carousel>
    </div>
  );
}
