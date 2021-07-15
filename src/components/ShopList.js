import { useState } from "react";
import { observer } from "mobx-react";
import shopStore from "../stores/shopStore";
import ShopItem from "./ShopItem";
import SearchBar from "./SearchBar";

const ShopList = () => {
  const [query, setQuery] = useState("");

  const shops = shopStore.shops
    .filter((shop) => shop.name.toLowerCase().includes(query.toLowerCase()))
    .map((shop) => <ShopItem shop={shop} />);
  return (
    <div className="container">
      <h4>Shops</h4>
      <SearchBar setQuery={setQuery} />
      {shops}
    </div>
  );
};

export default observer(ShopList);
