import React, { Component } from "react";
import { Container, Row, Button } from "react-bootstrap";
import ProductsCard from "./ProductCard";
import "../stylesheets/ProductsSection.css";

export default class ProductsSection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products6: [1, 2, 3, 4, 5, 6],
      products4: [1, 2, 3, 4],
      products5: [1, 2, 3, 4, 5],
      products3: [1, 2, 3],
      products2: [1, 2],
    };
  }

  render() {
    return (
      <div className="py-5">
        <div className="product-section-title pb-3">
          <h2 className="text-center maintitle">Lorem Ipsum Dummy Text </h2>
          <p className="text-center subtitlle">
            Lorem Ipsum is simply dummy text of the printing
          </p>
        </div>

        <Container>
          <ul class="nav nav-pills mb-3 row" id="pills-tab" role="tablist">
            <li class="nav-item col-lg-auto col-md-12 col-sm-12 mx-auto text-center ">
              <a
                class="nav-link active"
                id="pills-home-tab"
                data-toggle="pill"
                href="#pills-all"
                role="tab"
                aria-controls="pills-all"
                aria-selected="true"
              >
                6 items
              </a>
            </li>

            <li class="nav-item col-lg-auto col-md-12 col-sm-12 mx-auto text-center">
              <a
                class="nav-link"
                id="pills-profile-tab"
                data-toggle="pill"
                href="#pills-tab2"
                role="tab"
                aria-controls="pills-tab2"
                aria-selected="false"
              >
                2 items
              </a>
            </li>

            <li class="nav-item col-lg-auto col-md-12 col-sm-12 mx-auto text-center">
              <a
                class="nav-link"
                id="pills-contact-tab"
                data-toggle="pill"
                href="#pills-tab3"
                role="tab"
                aria-controls="pills-tab3"
                aria-selected="false"
              >
                5 items
              </a>
            </li>
            <li class="nav-item col-lg-auto col-md-12 col-sm-12 mx-auto text-center">
              <a
                class="nav-link"
                id="pills-contact-tab"
                data-toggle="pill"
                href="#pills-tab4"
                role="tab"
                aria-controls="pills-tab4"
                aria-selected="false"
              >
                4 items
              </a>
            </li>

            <li class="nav-item col-lg-auto col-md-12 col-sm-12 mx-auto text-center">
              <a
                class="nav-link"
                id="pills-contact-tab"
                data-toggle="pill"
                href="#pills-tab5"
                role="tab"
                aria-controls="pills-tab5"
                aria-selected="false"
              >
                6 items
              </a>
            </li>
            <li class="nav-item col-lg-auto col-md-12 col-sm-12 mx-auto text-center">
              <a
                class="nav-link"
                id="pills-contact-tab"
                data-toggle="pill"
                href="#pills-tab6"
                role="tab"
                aria-controls="pills-tab6"
                aria-selected="false"
              >
                3 items
              </a>
            </li>
            <li class="nav-item col-lg-auto col-md-12 col-sm-12 mx-auto text-center">
              <a
                class="nav-link"
                id="pills-contact-tab"
                data-toggle="pill"
                href="#pills-tab7"
                role="tab"
                aria-controls="pills-tab7"
                aria-selected="false"
              >
                6 items
              </a>
            </li>
          </ul>
        </Container>
        <Container>
          <div class="tab-content" id="pills-tabContent">
            <div
              class="tab-pane fade show active"
              id="pills-all"
              role="tabpanel"
              aria-labelledby="pills-all"
            >
              <Row>
                {this.state.products6.map((i) => (
                  <ProductsCard />
                ))}
              </Row>
            </div>
            <div
              class="tab-pane fade"
              id="pills-tab2"
              role="tabpanel"
              aria-labelledby="pills-tab2"
            >
              <Row>
                {this.state.products2.map((i) => (
                  <ProductsCard />
                ))}
              </Row>{" "}
            </div>
            <div
              class="tab-pane fade"
              id="pills-tab3"
              role="tabpanel"
              aria-labelledby="pills-tab3"
            >
              <Row>
                {this.state.products5.map((i) => (
                  <ProductsCard />
                ))}
              </Row>{" "}
            </div>
            <div
              class="tab-pane fade"
              id="pills-tab4"
              role="tabpanel"
              aria-labelledby="pills-tab4"
            >
              <Row>
                {this.state.products4.map((i) => (
                  <ProductsCard />
                ))}
              </Row>{" "}
            </div>
            <div
              class="tab-pane fade"
              id="pills-tab5"
              role="tabpanel"
              aria-labelledby="pills-tab5"
            >
              <Row>
                {this.state.products6.map((i) => (
                  <ProductsCard />
                ))}
              </Row>{" "}
            </div>
            <div
              class="tab-pane fade"
              id="pills-tab6"
              role="tabpanel"
              aria-labelledby="pills-tab6"
            >
              <Row>
                {this.state.products3.map((i) => (
                  <ProductsCard />
                ))}
              </Row>{" "}
            </div>
            <div
              class="tab-pane fade"
              id="pills-tab7"
              role="tabpanel"
              aria-labelledby="pills-tab7"
            >
              <Row>
                {this.state.products6.map((i) => (
                  <ProductsCard />
                ))}
              </Row>{" "}
            </div>
          </div>
          <Row>
            <Button className="mx-auto shop-all-btn ">
              {" "}
              shop all products
            </Button>
          </Row>
        </Container>
      </div>
    );
  }
}
