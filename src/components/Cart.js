import React from "react";
import { AiOutlineShoppingCart as EmptyCart } from "react-icons/ai";
import { BsFillCartCheckFill as FilledCart } from "react-icons/bs";

const Cart = ({ handleAddProductToCart, product }) => {
  return (
    <div onClick={() => handleAddProductToCart(product)}>
      {product.isAdded ? <FilledCart /> : <EmptyCart />}
    </div>
  );
};

export default Cart;
