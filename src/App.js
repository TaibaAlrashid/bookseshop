import "./App.css";
/* Global */
import { ThemeProvider } from "styled-components";
/* Data */
import products from "./products";
/* Components */
import Home from "./components/Home";
import ProductList from "./components/ProductList";
import ProductDetail from "./components/ProductDetail";
import NavBar from "./components/NavBar";
/* Styles */
import { GlobalStyle } from "./styles";
/* useState */
import { useState } from "react";
/* Libraries */
import { Route, Switch } from "react-router";

const theme = {
  light: {
    mainColor: "#24272b",
    backgroundColor: "#f0efeb",
    grey: "#6c757d",
  },
  dark: {
    mainColor: "#f0efeb",
    backgroundColor: "#24272b",
    grey: "#6c757d",
  },
};

function App() {
  const [currentTheme, setCurrentTheme] = useState("light");
  const [_products, setProducts] = useState(products);

  const toggleTheme = () => {
    if (currentTheme === "light") setCurrentTheme("dark");
    else setCurrentTheme("light");
  };

  const deleteProduct = (productId) => {
    const newProducts = _products.filter((product) => product.id !== productId);
    setProducts(newProducts);
  };

  return (
    <div>
      <ThemeProvider theme={theme[currentTheme]}>
        <GlobalStyle />
        <NavBar currentTheme={currentTheme} toggleTheme={toggleTheme} />
        <Switch>
          <Route path="/products/:productSlug">
            <ProductDetail products={_products} deleteProduct={deleteProduct} />
          </Route>
          <Route path="/products">
            <ProductList products={_products} deleteProduct={deleteProduct} />
          </Route>
          <Route>
            <Home exact path="/" />
          </Route>
        </Switch>
      </ThemeProvider>
    </div>
  );
}

export default App;
