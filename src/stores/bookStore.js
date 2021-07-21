import { makeAutoObservable } from "mobx";
import instance from "./instance";
import shopStore from "./shopStore";

class BookStore {
  products = [];
  loading = true;

  constructor() {
    makeAutoObservable(this);
  }

  fetchBooks = async () => {
    try {
      const response = await instance.get("/products");
      this.products = response.data;
      this.loading = false;
    } catch (error) {
      console.log("fetchBooks:", error);
    }
  };

  deleteProduct = async (productId) => {
    try {
      shopStore.loading = true;
      await instance.delete(`/products/${productId}`);
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
      const response = await instance.post(
        `/shops/${shop.id}/products`,
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
      const response = await instance.put(
        `/products/${updateProduct.id}`,
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
