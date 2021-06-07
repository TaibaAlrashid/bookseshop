import './App.css';
import bkst1 from "./images/bkst1.jpg";
import products from "./products";

function App() {
  const productsList = products.map((product) => (
    <div key={product.id}>
      <img alt={product.name} className="book" src={product.image}/>
      <p className="text">{product.name}</p>
      <p className="text">{product.price} KD</p>
    </div>
  ));
  return (
    <div>
      <div>
      <h1 className="text">BookBerries</h1>
      <h4 className="text">A store that helps you to find a good friend‟BOOK”.</h4>
      <img alt="store" src={bkst1}/>
    </div>
    <div className="list">
      {productsList}
    </div>
    </div>
  );
}

export default App;
