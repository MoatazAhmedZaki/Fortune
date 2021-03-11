import React, { Component } from "react";
import "../stylesheets/GalleryGrid.css";
import { Button } from "react-bootstrap";
export default class GalleryGrid extends Component {
  render() {
    return (
      <div className="grid-section pt-5 pb-1">
        <h2>LOREM IPSUM DUMMY TEXT</h2>
        <p>Lorem Ipsum is simply dummy text of the printing</p>

        <div className="grid-container">
          <div className="item1 ">
            <div className="gridinfo ">
              <h5>#FORTUNE</h5>
              <Button className="grid-btn m-2">
                <i class="fab fa-instagram px-2"></i>FORTUNE
              </Button>
              <Button className="grid-btn m-2">
                <i class="fab fa-facebook-f px-2"></i>FORTUNE
              </Button>
            </div>
          </div>
          <div className="item2  "></div>

          <div className="item3  "></div>
          <div className="item4 "></div>

          <div className="item5 "></div>

          <div className="item6  "></div>
          <div className="item7  "></div>

          <div className="item8  "></div>
        </div>
      </div>
    );
  }
}
