import './App.css';
import Home from './components/Home'
import ProductList from "./components/ProductList";
import { ThemeProvider } from "styled-components";
import { GlobalStyle, ThemeButton } from "./styles";
import { useState } from "react";
import ProductDetail from './components/ProductDetail';

const theme = {
  light: {
    mainColor: "#2b2d42",
    backgroundColor: "#f0efeb",
  },
  dark: {
    mainColor: "#f0efeb",
    backgroundColor: "#2b2d42",
  },
};


function App() {
  const [currentTheme, setCurrentTheme] = useState("light");
  const [product, setProduct] = useState(null);

  const toggleTheme = () => { 
  if (currentTheme === "light") setCurrentTheme("dark");
  else setCurrentTheme("light");
  }; 
  
  const setView = () => {
    return product ? (<ProductDetail product={product} /> )
    : ( <ProductList setProduct={setProduct} /> );
  };

  return (
    <div>
    <ThemeProvider theme={theme[currentTheme]}>
    <GlobalStyle />
      <div>
    <ThemeButton onClick={toggleTheme}>{currentTheme === "light"? "dark" : "light"} mode </ThemeButton>
      <Home />
      </div>
    {setView()}  
    </ThemeProvider>
    </div>
    
  );
}

export default App;
