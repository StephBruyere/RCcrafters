import "./jet.css";
import Product from "../../product-jets.json";
import Section from "./section";
import Cards1 from "./cards";
import React, { Component } from "react";

class NonJet extends Component {
  state = {
    Product
  }

  render() {
    return (
      <Section>
        {this.state.Product.map(
          Product => (
          <Cards1
            id={Product.id}
            key={Product.id}
            name={Product.name}
            price={Product.price}
            image={Product.image}
          />  
        ))}
      </Section>
    );
  }
}
export default NonJet;
