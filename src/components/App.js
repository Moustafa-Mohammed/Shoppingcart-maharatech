import React, { useState, useEffect } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import axios from "axios";
import Menu from "./Menu";
import Navbar from "./Navbar";
import ProductDetails from "./ProductDetails";
import ShoppingCart from "./ShoppingCart";
import NotFound from "./NotFound";
import Login from "./Login";
import Admin from "./Admin";
import ProductForm from "./ProductForm";

const App = () => {
  const [state, setState] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const { data } = await axios.get("http://localhost:3000/products");
      setState(data);
    }
    fetchData();
    // fetch("https://jsonplaceholder.typicode.com/posts")
    //   .then((response) => response.json())
    //   .then((data) => console.log(data));
  }, []);

  const handleIncrement = (product) => {
    const products = [...state];
    const indexOfProd = products.indexOf(product);
    products[indexOfProd] = { ...products[indexOfProd] };
    products[indexOfProd].count = products[indexOfProd].count + 1;
    setState(products);
  };

  const handleDecrement = (product) => {
    const products = [...state];
    const indexOfProd = products.indexOf(product);

    if (products[indexOfProd].count > 0) {
      products[indexOfProd] = { ...products[indexOfProd] };
      products[indexOfProd].count = products[indexOfProd].count - 1;
      setState(products);
    }
  };

  const handleAddProductToCart = (p) => {
    const products = [...state];
    const index = products.indexOf(p);
    products[index] = { ...products[index] };
    products[index].isAdded = !products[index].isAdded;
    setState(products);
  };

  const handleDeleteProductFromCart = (product) => {
    const products = [...state];
    const index = products.indexOf(product);
    products[index] = { ...products[index] };
    products[index].isAdded = false;
    setState(products);
  };

  const handleRemoveProductPermenantly = (product) => {
    let filteredProducts = state.filter((p) => p.id !== product.id);
    setState(filteredProducts);
  };

  const handleReset = () => {
    // clone and edit
    const resettedProducts = state.map((product) => {
      product.count = 0;
      return product;
    });
    // set the state
    setState(resettedProducts);
  };

  const displayedProducts = state.filter((p) => p.isAdded);
  return (
    <div>
      <Navbar productsCount={state.filter((p) => p.count > 0).length} />
      <div className="container	">
        <Switch>
          <Route
            path="/products/:id"
            render={(props) => <ProductDetails products={state} {...props} />}
          />
          <Route
            path="/cart"
            render={(props) => (
              <ShoppingCart
                handleDecrement={handleDecrement}
                handleDeleteProductFromCart={handleDeleteProductFromCart}
                handleIncrement={handleIncrement}
                handleReset={handleReset}
                products={displayedProducts}
                {...props}
              />
            )}
          />
          <Route
            path="/menu"
            render={() => (
              <Menu
                products={state}
                handleAddProductToCart={handleAddProductToCart}
              />
            )}
          />
          <Route
            path="/admin"
            render={(props) => (
              <Admin
                products={state}
                handleRemoveProductPermenantly={handleRemoveProductPermenantly}
                {...props}
              />
            )}
          />
          <Route path="/login" component={Login} />
          <Route path="/productform/:id" component={ProductForm} />
          <Route path="/notfound" component={NotFound} />
          <Redirect push to="/notfound" component={NotFound} />
        </Switch>
      </div>
    </div>
  );
};

export default App;
