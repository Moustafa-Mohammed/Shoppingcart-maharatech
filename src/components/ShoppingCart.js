import React from "react";
import Product from "./Product";

const ShoppingCart = ({
  products,
  handleDecrement,
  handleDeleteProductFromCart,
  handleReset,
  handleIncrement,
}) => {
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
};
export default ShoppingCart;
