import React, { Component } from "react";
import { Container, Row } from "react-bootstrap";

export default class BrandsLogo extends Component {
  render() {
    return (
      <Container>
        <Row>
          <img
            className="  mx-auto col-md-2 col-sm-12 px-3 py-5  "
            src={require("../../imgs/logo.png")}
            alt="BrandsLogo"
          />

          <img
            className="  mx-auto col-md-2 col-sm-12 px-3 py-5 "
            src={require("../../imgs/logo.png")}
            alt="BrandsLogo"
          />
          <img
            className="  mx-auto col-md-2 col-sm-12 px-3 py-5   "
            src={require("../../imgs/logo.png")}
            alt="BrandsLogo"
          />
          <img
            className="  mx-auto col-md-2 col-sm-12 px-3 py-5  "
            src={require("../../imgs/logo.png")}
            alt="BrandsLogo"
          />
          <img
            className="  mx-auto col-md-2 col-sm-12 px-3 py-5  "
            src={require("../../imgs/logo.png")}
            alt="BrandsLogo"
          />
          <img
            className="  mx-auto col-md-2 col-sm-12 px-3 py-5  "
            src={require("../../imgs/logo.png")}
            alt="BrandsLogo"
          />
        </Row>
      </Container>
    );
  }
}
