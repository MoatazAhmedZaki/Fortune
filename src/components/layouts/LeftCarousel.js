import React, { Component } from "react";
import { Carousel } from "react-bootstrap";
import "../stylesheets/LeftCarousel.css";
export default class LeftCarousel extends Component {
  render() {
    return (
      <Carousel className=" leftCarousel">
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={require("../../imgs/car4.jpg")}
            alt="First slide"
          />
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src={require("../../imgs/car5.jpg")}
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
    );
  }
}
