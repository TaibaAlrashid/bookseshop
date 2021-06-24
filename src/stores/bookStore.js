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

  updateProduct = (updateProduct) => {
    const product = this.products.find(
      (product) => product.id === updateProduct
    );
    product.name = updateProduct.name;
    product.price = updateProduct.price;
    product.Description = updateProduct.Description;
    product.image = updateProduct.image;

    product.slug = slugify(updateProduct.name);
  };
}

const bookStore = new BookStore();
export default bookStore;
