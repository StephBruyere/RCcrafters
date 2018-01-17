import "./non-jets.css";
import Product from "../../product-non-jets.json";
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
            button={Product.button}
          />  
        ))}
      </Section>
    );
  }
}
export default NonJet;
