import { makeAutoObservable } from "mobx";
import instance from "./instance";

class ShopStore {
  shops = [];
  loading = true;

  constructor() {
    makeAutoObservable(this);
  }

  fetchShops = async () => {
    try {
      const response = await instance.get("/shops");
      this.shops = response.data;
      this.loading = false;
    } catch (error) {
      console.log("fetchShops:", error);
    }
  };

  createShop = async (newShop) => {
    try {
      const formData = new FormData();
      for (const key in newShop) formData.append(key, newShop[key]);
      const response = await instance.post("/shops", formData);
      this.shops.push(response.data);
    } catch (error) {
      console.log(error);
    }
  };
}

const shopStore = new ShopStore();
shopStore.fetchShops();
export default shopStore;
