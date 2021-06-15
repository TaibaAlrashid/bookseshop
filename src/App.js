import './App.css';
import { ThemeProvider } from "styled-components";
//components
import Home from './components/Home'
import ProductList from "./components/ProductList";
import ProductDetail from './components/ProductDetail';
//styles
import { GlobalStyle, ThemeButton } from "./styles";
//useState
import { useState } from "react";
import products from './products';


const theme = {
  light: {
    mainColor: "#2b2d42",
    backgroundColor: "#f0efeb",
    grey: "#6c757d",
  },
  dark: {
    mainColor: "#f0efeb",
    backgroundColor: "#2b2d42",
    grey: "#6c757d",
  },
};


function App() {
  const [currentTheme, setCurrentTheme] = useState("light");
  const [product, setProduct] = useState(null);
  const [_products, setProducts] = useState(products)

  const toggleTheme = () => { 
  if (currentTheme === "light") setCurrentTheme("dark");
  else setCurrentTheme("light");
  }; 

  const deleteProduct = (productId) => {
    const newProducts = _products.filter((product) => product.id !== productId);
    setProducts(newProducts);
  }
  
  const setView = () => {
    return product ? (
    <ProductDetail 
    product={product}
    deleteProduct={deleteProduct}
    setProduct={setProduct}
    /> 
    ): ( 
    <ProductList 
    setProduct={setProduct}
    products={_products}
    deleteProduct={deleteProduct} 
    /> 
    );
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
