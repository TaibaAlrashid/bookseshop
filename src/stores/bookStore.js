import products from "../products";
import { makeAutoObservable } from "mobx";

class BookStore {
  products = products;

  constructor() {
    makeAutoObservable(this);
  }

  deleteProduct = (productId) => {
    const newProducts = this.products.filter(
      (product) => product.id !== productId
    );
    this.products = newProducts;
  };
}

const bookStore = new BookStore();
export default bookStore;
