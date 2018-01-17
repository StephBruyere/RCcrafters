import React from "react";
import "./adminForm.css";

const adminForm = props =>
<form className="search">
    <div className="form-group newContainer">
    <div className="header2">Enter a New Product</div>
      <label htmlFor="contact"></label>
      <div className ="title2"> Product</div>
      <input
        value={props.search}
        onChange={props.handleInputChange}
        name="product"
        type="text"
        className="form-control labels"
        placeholder="enter product name"
        id=""
      />
      <div className ="title2"> Description</div>
      <input
        value={props.search}
        onChange={props.handleInputChange}
        name="description"
        type="text"
        className="form-control labels"
        placeholder="enter product description"
        id=""
      />
      <div className ="title2"> Price</div>
      <input
      value={props.search}
      onChange={props.handleInputChange}
      name="price"
      type="text"
      className="form-control labels"
      placeholder="Enter product price"
      id=""
    />
    <div className ="title2">Upload Image</div>
    <input
    value={props.search}
    onChange={props.handleInputChange}
    name="image"
    type="text"
    className="form-control labels"
    placeholder="enter image url"
    id=""
  />

  <form onSubmit={this.handleSubmit}>
  <label>
    Select Jet or Non-Jet:
    <select value={this.state.value} onChange={this.handleChange}>
      <option value="jets">Jets</option>
      <option value="non-jets">Non-Jets</option>
    </select>
  </label>
  <input type="submit" value="Submit" />
</form>

      <button
        type="submit"
        onClick={props.handleFormSubmit}
        className="btn submitBtn float-right" align="right">Submit
      </button>
    </div>
  </form>

export default adminForm;
