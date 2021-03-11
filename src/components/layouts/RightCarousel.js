import React, { Component } from "react";
import { Carousel, Button, Row } from "react-bootstrap";
import "../stylesheets/RightCarousel.css";
export default class RightCarousel extends Component {
  render() {
    return (
      <Carousel fade className=" text-center py-2">
        <Carousel.Item>
          <h2>Item Name</h2>
          <img
            className="d-block w-75 mx-auto "
            src={require("../../imgs/item1.jpg")}
            alt="First slide"
          />
          <p>Lorem Ipsum is simply dummy text of the printing</p>
          <Row>
            <Button
              className=" mx-auto mb-5 itemBtn"
              onClick={this.props.items}
            >
              Shop Now
            </Button>
          </Row>
        </Carousel.Item>
        <Carousel.Item>
          <h2>Item Name</h2>
          <img
            className="d-block w-75 mx-auto "
            src={require("../../imgs/item1.jpg")}
            alt="First slide"
          />
          <p>Lorem Ipsum is simply dummy text of the printing</p>
          <Row>
            <Button
              className=" mx-auto mb-5 itemBtn"
              onClick={this.props.items}
            >
              Shop Now
            </Button>
          </Row>
        </Carousel.Item>
      </Carousel>
    );
  }
}
