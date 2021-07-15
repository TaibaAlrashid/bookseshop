import { makeAutoObservable } from "mobx";
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

  createProduct = async (newProduct, shop) => {
    try {
      const formData = new FormData();
      for (const key in newProduct) formData.append(key, newProduct[key]);
      const response = await axios.post(
        `http://localhost:8000/shops/${shop.id}/products`,
        formData
      );
      this.products.push(response.data);
      shop.products.push({ id: response.data.id });
    } catch (error) {
      console.log(error);
    }
  };

  updateProduct = async (updateProduct) => {
    try {
      const formData = new FormData();
      for (const key in updateProduct) formData.append(key, updateProduct[key]);
      const response = await axios.put(
        `http://localhost:8000/products/${updateProduct.id}`,
        formData
      );
      const product = this.products.find(
        (product) => product.id === response.data.id
      );

      for (const key in product) product[key] = response.data[key];
    } catch (error) {
      console.log(error);
    }
  };

  getProductById = (productId) =>
    this.products.find((product) => product.id === productId);
}

const bookStore = new BookStore();
bookStore.fetchBooks();
export default bookStore;
