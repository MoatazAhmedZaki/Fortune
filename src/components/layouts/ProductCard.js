import React, { Component } from "react";
import { Col } from "react-bootstrap";
import "../stylesheets/ProductCard.css";
export default class ProductsCard extends Component {
  render() {
    return (
      <Col lg={4} md={6} sm={12} className="p-5 text-center my-3 mx-auto">
        <img
          className="d-block w-100 mx-auto "
          src={require("../../imgs/item1.jpg")}
          alt="product img"
        />
        <h2 className="cardname">Item Name</h2>

        <p className="cardinfo">Last Update 00/00/0000 </p>

        <button className="cardbtn px-4 py-2 mx-2">Shop Now</button>

        <div className="cardprice p-2 mx-2">19$</div>
      </Col>
    );
  }
}
