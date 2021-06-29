import { makeAutoObservable } from "mobx";
import slugify from "react-slugify";
import axios from "axios";

class BookStore {
  products = [];

  constructor() {
    makeAutoObservable(this);
  }

  fetchBooks = async () => {
    try {
      const response = await axios.get("http://localhost:8000/products");
      this.books = response.data;
    } catch (error) {
      console.log("fetchBooks:", error);
    }
  };

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
bookStore.fetchBooks();
export default bookStore;
