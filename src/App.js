import './App.css';
import Home from './components/Home'
import ProductList from "./components/ProductList";

function App() {
  

  return (
    <div>
      <div>
      <Home />
      </div>
      <div className="list">
      <ProductList />
      </div>
    </div>
  );
}

export default App;
