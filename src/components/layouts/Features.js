import React, { Component } from "react";
import { Container, Row, Col, Media } from "react-bootstrap";

import "../stylesheets/Features.css";
export default class Features extends Component {
  render() {
    return (
      <div className="bg-red">
        <Container>
          <Row className="mx-auto">
            <Col lg={4} md={12} sm={12}>
              <div className="card my-4 p-2">
                <Media>
                  <i className="far fa-star px-2 py-3 fa-2x"></i>

                  <Media.Body>
                    <h5>Card Heading</h5>
                    <p>Lorem Ipsum is simply dummy text</p>
                  </Media.Body>
                </Media>
              </div>
            </Col>
            <Col lg={4} md={12} sm={12}>
              <div className="card my-4 p-2">
                <Media>
                  <i className="far fa-star px-2 py-3 fa-2x"></i>

                  <Media.Body>
                    <h5>Card Heading</h5>
                    <p>Lorem Ipsum is simply dummy text</p>
                  </Media.Body>
                </Media>
              </div>
            </Col>
            <Col lg={4} md={12} sm={12}>
              <div className="card my-4 p-2">
                <Media>
                  <i className="far fa-star px-2 py-3 fa-2x"></i>

                  <Media.Body>
                    <h5>Card Heading</h5>
                    <p>Lorem Ipsum is simply dummy text</p>
                  </Media.Body>
                </Media>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
