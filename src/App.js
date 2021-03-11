import React, { Component } from "react";
import "./App.css";
import Navbaar from "./components/layouts/Navbaar";
import Header from "./components/layouts/Header";
import Features from "./components/layouts/Features";
import ProductsSection from "./components/layouts/ProductsSection";
import LiveSection from "./components/layouts/LiveSection";
import BrandsLogos from "./components/layouts/BrandsLogos";
import CrossBoxs from "./components/layouts/CrossBoxs";
import GalleryGrid from "./components/layouts/GalleryGrid";
import Footer from "./components/layouts/Footer";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { items: [1, 2, 3], numberOfItems: 0 };
  }

  componentWillMount() {
    var length = this.state.items.length;
    this.setState({ numberOfItems: length });
  }

  addItem = (e) => {
    this.state.items.push(e);
    const items = this.state.items;
    const itemsLength = items.length;
    this.setState({ numberOfItems: itemsLength });
  };

  render() {
    return (
      <div className="App">
        <Navbaar number={this.state.numberOfItems} />
        <Header items={this.addItem} />
        <Features />
        <ProductsSection/>
        <LiveSection/>
        <BrandsLogos/>
        <CrossBoxs/>
        <GalleryGrid/>
        <Footer/>
      </div>
    );
  }
}
