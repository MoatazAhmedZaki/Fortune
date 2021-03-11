import React, { Component } from "react";
import { Container, Row, Col, Button, Carousel } from "react-bootstrap";
import "../stylesheets/CrossBoxs.css";
export default class CrossBoxs extends Component {
  render() {
    return (
      <Container fluid>
        <Row className="py-3">
          <Col
            lg={6}
            md={12}
            sm={12}
            className="p-0  box-500 box-img1 red-box-shadow"
          >
            <div className="box-img1-info">
              <h5>Lorem Ipsum</h5>
              <p>Lorem Ipsum is simply dummy text of the printing</p>
            </div>
          </Col>
          {/* <Col lg={6} md={12} sm={12} className=""> */}

          <Carousel className=" col-lg-6 col-md-12 col-sm-12 text-center py-3 p-0 box-500  ">
            <Carousel.Item className="item-box">
              <Button className="item-box-addbtn1">
                <i class="fas fa-plus"></i>
              </Button>
              <h2>Item Name</h2>
              <img
                className="img-fluid mx-auto "
                src={require("../../imgs/item1.jpg")}
                alt="First slide"
              />
              <p>Lorem Ipsum is simply dummy text of the printing</p>
              <Row>
                <Button className=" mx-auto mb-5 blackbtn">Shop Now</Button>
              </Row>
            </Carousel.Item>
          </Carousel>
        </Row>

        <Row className="col-reverse py-3">
          <Carousel className=" col-lg-6 col-md-12 col-sm-12 text-center py-3 p-0 box-500  ">
            <Carousel.Item className="item-box">
              <Button className="item-box-addbtn2">
                <i class="fas fa-plus"></i>
              </Button>
              <h2>Item Name</h2>
              <img
                className="img-fluid mx-auto "
                src={require("../../imgs/item1.jpg")}
                alt="First slide"
              />
              <p>Lorem Ipsum is simply dummy text of the printing</p>
              <Row>
                <Button className=" mx-auto mb-5 blackbtn">Shop Now</Button>
              </Row>
            </Carousel.Item>
          </Carousel>

          <Col
            lg={6}
            md={12}
            sm={12}
            className="p-0  box-500 box-img2 red-box-shadow"
          >
            <div className="box-img1-info">
              <h5>Lorem Ipsum</h5>
              <p>Lorem Ipsum is simply dummy text of the printing</p>
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
}
