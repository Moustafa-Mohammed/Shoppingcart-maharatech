import React from "react";
import { FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";
const Product = ({ product, onIncrement, onDelete, onDecerement }) => {
  return (
    <div className="row">
      <div className="col-2">
        <Link to={`/products/${product.id}`}>{product.name}</Link>
      </div>
      <div className="col">
        <span
          className={`badge ${
            product.count === 0 ? "bg-warning" : "bg-primary"
          } m-2`}
        >
          {product.count}
        </span>
        <button
          className="btn btn-success btn-sm m-2"
          onClick={() => onIncrement(product)}
        >
          +
        </button>
        <button
          className="btn btn-danger btn-sm"
          onClick={() => onDecerement(product)}
        >
          -
        </button>
        <FaTrash
          style={{ cursor: "pointer" }}
          onClick={() => onDelete(product)}
          className="text-danger m-2 pointer"
        />
      </div>
    </div>
  );
};
export default Product;
