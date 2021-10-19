import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import axios from "axios";
import Menu from "./Menu";
import Navbar from "./Navbar";
import ProductDetails from "./ProductDetails";
import ShoppingCart from "./ShoppingCart";
import NotFound from "./NotFound";
import Login from "./Login";

export default class App extends Component {
  state = {
    products: [
      { name: "Burger", id: 1, count: 0, price: "$200", isAdded: false },
      { name: "Fries", id: 2, count: 0, price: "$150", isAdded: false },
      { name: "Cola", id: 3, count: 0, price: "$10", isAdded: false },
    ],
  };

  async componentDidMount() {
    try {
      const { data } = await axios.get(
        "https://jsonplaceholder.typicode.com/postss"
      );
      console.log(data);
    } catch (err) {
      console.log(err);
    }

    // fetch("https://jsonplaceholder.typicode.com/posts")
    //   .then((response) => response.json())
    //   .then((data) => console.log(data));
  }

  handleIncrement = (product) => {
    const products = [...this.state.products];
    const indexOfProd = products.indexOf(product);
    products[indexOfProd] = { ...products[indexOfProd] };
    products[indexOfProd].count = products[indexOfProd].count + 1;
    this.setState({ products });
  };

  handleDecrement = (product) => {
    const products = [...this.state.products];
    const indexOfProd = products.indexOf(product);

    if (products[indexOfProd].count > 0) {
      products[indexOfProd] = { ...products[indexOfProd] };
      products[indexOfProd].count = products[indexOfProd].count - 1;
      this.setState({ products });
    }
  };

  handleDeleteProductFromCart = (product) => {
    const products = [...this.state.products];
    const index = products.indexOf(product);
    products[index] = { ...products[index] };
    products[index].isAdded = false;
    this.setState(() => {
      return {
        products,
      };
    });
  };

  handleReset = () => {
    // clone and edit
    const resettedProducts = this.state.products.map((product) => {
      product.count = 0;
      return product;
    });
    // set the state
    this.setState(() => {
      return {
        products: resettedProducts,
      };
    });
  };

  handleAddProductToCart = (p) => {
    const products = [...this.state.products];
    const index = products.indexOf(p);
    products[index] = { ...products[index] };
    products[index].isAdded = !products[index].isAdded;
    this.setState(() => {
      return {
        products,
      };
    });
  };
  render() {
    const displayedProducts = this.state.products.filter((p) => p.isAdded);
    return (
      <div>
        <Navbar
          productsCount={this.state.products.filter((p) => p.count > 0).length}
        />
        <div className="container	">
          <Switch>
            <Route
              path="/products/:id"
              render={(props) => (
                <ProductDetails products={this.state.products} {...props} />
              )}
            />
            <Route
              path="/cart"
              render={(props) => (
                <ShoppingCart
                  handleDecrement={this.handleDecrement}
                  handleDeleteProductFromCart={this.handleDeleteProductFromCart}
                  handleIncrement={this.handleIncrement}
                  handleReset={this.handleReset}
                  products={displayedProducts}
                  {...props}
                />
              )}
            />
            <Route
              path="/menu"
              render={() => (
                <Menu
                  products={this.state.products}
                  handleAddProductToCart={this.handleAddProductToCart}
                />
              )}
            />
            <Route path="/notfound" component={NotFound} />
            <Route path="/login" component={Login} />
            <Redirect push to="/notfound" component={NotFound} />
          </Switch>
        </div>
      </div>
    );
  }
}
