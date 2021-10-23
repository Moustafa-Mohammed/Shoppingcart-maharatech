import React, { useState } from "react";

const ProductForm = () => {
  const [state, setState] = useState({
    name: "",
    price: "",
  });

  // useEffect(() => {
  //   console.log("called");
  // }, []);

  const handleInputChange = (e) => {
    const name = e.target.name;
    setState({ ...state, [name]: e.target.value });
  };
  const handleFormSubmit = (e) => {
    e.preventDefault();
  };
  const { name, price } = state;
  return (
    <React.Fragment>
      <h1>Edit product</h1>
      <form onSubmit={handleFormSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            value={name}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="price" className="form-label">
            Price
          </label>
          <input
            type="text"
            className="form-control"
            id="price"
            name="email"
            value={price}
            onChange={handleInputChange}
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Confirm
        </button>
      </form>
    </React.Fragment>
  );
};

export default ProductForm;
