import React from "react";
import Cart from "./Cart";

const Menu = ({ products, handleAddProductToCart }) => {
  // state = {
  //   isAdded: false,
  // };

  // handleAddProduct = () => {
  //   this.setState(
  //     (state) => {
  //       return { isAdded: !state.isAdded };
  //     },
  //     () => console.log(this.state.isAdded)
  //   );
  // };

  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">Name</th>
          <th scope="col">Price</th>
          <th scope="col">Add to cart</th>
        </tr>
      </thead>
      <tbody>
        {products.map((p) => {
          return (
            <tr key={p.id}>
              <td>{p.name}</td>
              <td>{p.price}</td>
              <td>
                <Cart
                  handleAddProductToCart={handleAddProductToCart}
                  product={p}
                />
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default Menu;
