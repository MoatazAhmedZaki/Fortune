import React, { Component } from "react";

import "../stylesheets/Footer.css";
import {
  Container,
  Form,
  FormControl,
  Button,
  Row,
  Nav,
  Col,
} from "react-bootstrap";
export default class Footer extends Component {
  componentDidMount() {
    console.log("by Moataz A.Zaki");
  }
  render() {
    return (
      <footer className="pt-4">
        <Container className="newletter py-3">
          <h2>Lorem Ipsum is simply dummy text of the printing</h2>
          <Container>
            <Row>
              <Form inline className="mx-auto py-3">
                <FormControl
                  type="text"
                  placeholder="Enter Your Email"
                  className="mx-2 shadow mt-4 "
                />
                <Button className=" mx-auto mt-4 ">Subscribe</Button>
              </Form>
            </Row>
          </Container>
        </Container>

        <div className="text-center black-footer-info">
          <h1 className="footer-logo"> FURTUNE</h1>
          <Nav className="justify-content-center" activeKey="/home">
            <Nav.Item>
              <Nav.Link href="/home">Active</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="link-1">Link</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="link-2">Link</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="link-2">Link</Nav.Link>
            </Nav.Item>
          </Nav>

          <div className="white-footer text-center py-2 ">
            <Container fluid>
              <Row>
                <Col lg={4} md={12} sm={12} className=" py-2 ">
                  <p>@Copyrights</p>
                </Col>
                <Col lg={4} md={12} sm={12}>
                  <img
                    className=" mx-auto "
                    src={require("../../imgs/mastercard1.png")}
                    alt="First slide"
                  />
                </Col>

                <Col lg={4} md={12} sm={12} className=" py-2 ">
                  <p> By Moataz A.Zaki </p>
                </Col>
              </Row>
            </Container>
          </div>
        </div>
      </footer>
    );
  }
}
