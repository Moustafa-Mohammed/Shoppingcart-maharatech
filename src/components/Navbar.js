import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = (props) => {
  const { productsCount } = props;
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <h1 className="navbar-brand">Navbar</h1>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink className="nav-link" aria-current="page" to="/menu">
                Menu
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/cart">
                ShoppingCart
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/admin">
                Admin
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/login">
                Login
              </NavLink>
            </li>
          </ul>
        </div>
        <span
          className={`badge ${
            productsCount === 0 ? "bg-warning" : "bg-primary"
          }`}
        >
          {productsCount}
        </span>
      </div>
    </nav>
  );
};
export default Navbar;
