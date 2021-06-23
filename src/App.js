import "./App.css";
/* Global */
import { ThemeProvider } from "styled-components";
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
    backgroundColor: "#ede0d4",
    grey: "#e63946",
  },
  dark: {
    mainColor: "#ede0d4",
    backgroundColor: "#24272b",
    grey: "#e63946",
  },
};

function App() {
  const [currentTheme, setCurrentTheme] = useState("light");

  const toggleTheme = () => {
    if (currentTheme === "light") setCurrentTheme("dark");
    else setCurrentTheme("light");
  };

  return (
    <div>
      <ThemeProvider theme={theme[currentTheme]}>
        <GlobalStyle />
        <NavBar currentTheme={currentTheme} toggleTheme={toggleTheme} />
        <Switch>
          <Route path="/products/:productSlug">
            <ProductDetail />
          </Route>
          <Route path="/products">
            <ProductList />
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
