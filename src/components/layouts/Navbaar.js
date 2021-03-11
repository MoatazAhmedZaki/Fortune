import React, { Component } from "react";
import {
  Navbar,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";
import "../stylesheets/Navbaar.css";
export default class Navbaar extends Component {
  constructor(props) {
    super(props);
    this.state = { numberOfItems: this.props.number };
  }
  componentDidUpdate(lastprops) {
    if (lastprops !== this.props) {
      this.setState({
        numberOfItems: this.props.number,
      });
    }
  }

  componentDidMount() {}
  render() {
    return (
      <div>
        <Navbar bg="light" expand="lg" className="shadow">
          <Navbar.Toggle aria-controls="basic-navbar-nav" className="mx-auto" />
          <Navbar.Collapse id="basic-navbar-nav" className="mx-auto">
            <Nav className="mr-auto">
              <Nav.Link href="#link">Link</Nav.Link>

              <Nav.Link href="#link">Link</Nav.Link>
              <Nav.Link href="#link">Link</Nav.Link>
            </Nav>
            <img
              className=" navbar-mastercard  mx-1"
              src={require("../../imgs/mastercard1.png")}
              alt="First slide"
            />

            <img
              className=" navbar-egypt-flag  mx-1"
              src={require("../../imgs/Egypt-Flag.png")}
              alt="First slide"
            />

            <NavDropdown title="EGB" id="mydrop ">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            </NavDropdown>
          </Navbar.Collapse>
        </Navbar>

        <Navbar bg="light" expand="lg">
          <Navbar.Brand href="#home">FORTUNE</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Link</Nav.Link>
              <Nav.Link href="#link">Link</Nav.Link>
              <Nav.Link href="#link">Link</Nav.Link>

              <Nav.Link href="#link">Link</Nav.Link>

              <Nav.Link href="#link">Link</Nav.Link>

              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Form inline>
              <FormControl
                type="text"
                placeholder="Search"
                className="mr-sm-2"
              />
              <Button className=" m-2 searchBtn">Search</Button>
            </Form>

            <Button className=" m-2  shoppingBtn">
              <span className="number ">{this.state.numberOfItems}</span>
              <i className="fas fa-shopping-cart"></i>
            </Button>

            <Button className="m-2 loginBtn">
              <i className="far fa-smile-beam"></i> Login
            </Button>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}
