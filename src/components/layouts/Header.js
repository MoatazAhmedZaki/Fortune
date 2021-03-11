import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../stylesheets/Header.css";
import LeftCarousel from "./LeftCarousel";
import RightCarousel from "./RightCarousel";

export default class Header extends Component {
  render() {
    return (
      <header>
      <Container fluid>
        <Row>
          <h5 className="black-nav py-4 m-0">
            Lorem Ipsum is simply dummy text of the printing
          </h5>
        </Row>

        <Row>
          <Col lg={8} md={12} sm={12} className="p-0">
            <LeftCarousel />
          </Col>
          <Col lg={4} md={12} sm={12} className="p-0">
            <RightCarousel items={this.props.items} />
          </Col>
        </Row>
      </Container>
      </header>
    );
  }
}
