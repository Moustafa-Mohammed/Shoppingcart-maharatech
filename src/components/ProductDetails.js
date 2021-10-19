import React from "react";

const ProductDetails = (props) => {
  console.log(props);
  const product = props.products.filter(
    (p) => p.id === parseInt(props.match.params.id)
  )[0];
  return (
    <React.Fragment>
      <h3>Product Id {product.id}</h3>
      <h3>Product Name {product.name}</h3>
      <h3>Num of products {product.count}</h3>
    </React.Fragment>
  );
};

export default ProductDetails;
