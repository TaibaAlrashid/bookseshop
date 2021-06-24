import products from "../products";
import { makeAutoObservable } from "mobx";
import slugify from "react-slugify";

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

  createProduct = (newProduct) => {
    newProduct.id = this.products.length + 1;
    newProduct.slug = slugify(newProduct.name);
    this.products.push(newProduct);
  };
}

const bookStore = new BookStore();
export default bookStore;
