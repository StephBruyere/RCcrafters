import React from "react";
import Description from "../../components/description";
import Menu from "../../components/menu";

const ProductPrice = React.createClass({
	
	@return {String}

render: function() {
	return (
		<div className="product-price">
			<h3>{this.planes.price} <span className="price">Price:</span></h3>
			</div>
			)};

module.exports = ProductPrice;
