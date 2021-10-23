import React from "react";
import { FiEdit } from "react-icons/fi";
import { FaTrash } from "react-icons/fa";

const Admin = ({ products, handleRemoveProductPermenantly, history }) => {
  return (
    <React.Fragment>
      <button
        onClick={() => history.push("/productform/new")}
        className="btn btn-primary m-2"
      >
        Add product
      </button>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Price</th>
            <th scope="col"></th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          {products.map((p) => {
            return (
              <tr key={p.id}>
                <td>{p.name}</td>
                <td>{p.price}</td>
                <td>
                  <FiEdit
                    onClick={() => history.push(`/productform/${p.id}`)}
                    product={p}
                    style={{ cursor: "pointer" }}
                  />
                </td>
                <td>
                  <FaTrash
                    product={p}
                    style={{ cursor: "pointer", color: "red" }}
                    onClick={() => handleRemoveProductPermenantly(p)}
                  />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </React.Fragment>
  );
};
export default Admin;
