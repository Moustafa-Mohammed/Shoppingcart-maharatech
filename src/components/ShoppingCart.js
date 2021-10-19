import React, { Component } from "react";
import Product from "./Product";

export default class ShoppingCart extends Component {
  render() {
    const {
      products,
      handleDecrement,
      handleDeleteProductFromCart,
      handleReset,
      handleIncrement,
    } = this.props;
    return (
      <div>
        <h1>Shopping cart</h1>
        <button className="btn btn-secondary btn-sm" onClick={handleReset}>
          Reset
        </button>
        {products.map((product) => (
          <Product
            onDelete={handleDeleteProductFromCart}
            key={product.id}
            product={product}
            onIncrement={handleIncrement}
            onDecerement={handleDecrement}
          />
        ))}
      </div>
    );
  }
}
