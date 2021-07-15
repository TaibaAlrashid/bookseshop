import { makeAutoObservable } from "mobx";
import axios from "axios";

class ShopStore {
  shops = [];
  loading = true;

  constructor() {
    makeAutoObservable(this);
  }

  fetchShops = async () => {
    try {
      const response = await axios.get("http://localhost:8000/shops");
      this.shops = response.data;
      this.loading = false;

      console.log(this.shops);
    } catch (error) {
      console.log("fetchShops:", error);
    }
  };

  createShop = async (newShop) => {
    try {
      const formData = new FormData();
      for (const key in newShop) formData.append(key, newShop[key]);
      const response = await axios.post(
        "http://localhost:8000/shops",
        formData
      );
      this.shops.push(response.data);
    } catch (error) {
      console.log(error);
    }
  };
}

const shopStore = new ShopStore();
shopStore.fetchShops();
export default shopStore;
