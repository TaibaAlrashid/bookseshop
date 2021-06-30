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
      this.products = response.data;
      console.log(this.products);
    } catch (error) {
      console.log("fetchBooks:", error);
    }
  };

  deleteProduct = async (productId) => {
    try {
      await axios.delete(`http://localhost:8000/products/${productId}`);
      const newProducts = this.products.filter(
        (product) => product.id !== productId
      );
      this.products = newProducts;
    } catch (error) {
      console.log(error);
    }
  };

  createProduct = async (newProduct) => {
    try {
      const response = await axios.post(
        "http://localhost:8000/products",
        newProduct
      );
      this.products.push(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  updateProduct = async (updateProduct) => {
    try {
      await axios.put(
        `http://localhost:8000/products/${updateProduct.id}, updateProduct`
      );
      const product = this.products.find(
        (product) => product.id === updateProduct.id
      );

      product.name = updateProduct.name;
      product.price = updateProduct.price;
      product.Description = updateProduct.Description;
      product.image = updateProduct.image;

      product.slug = slugify(updateProduct.name);
    } catch (error) {
      console.log(error);
    }
  };
}

const bookStore = new BookStore();
bookStore.fetchBooks();
export default bookStore;
