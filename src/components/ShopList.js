import { useState } from "react";
import { observer } from "mobx-react";
import shopStore from "../stores/shopStore";
import ShopItem from "./ShopItem";
import SearchBar from "./SearchBar";
import AddButton from "./buttons/AddButton";
import ShopModal from "../modals/ShopModal";
import authStore from "../stores/authStore";
import { ListTitle } from "../styles";

const ShopList = () => {
  const [query, setQuery] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  const shops = shopStore.shops
    .filter((shop) => shop.name.toLowerCase().includes(query.toLowerCase()))
    .map((shop) => <ShopItem shop={shop} />);
  return (
    <div className="container">
      <SearchBar setQuery={setQuery} />
      <ListTitle>Shops</ListTitle>
      {authStore.user && <AddButton onClick={openModal} />}
      <ShopModal isOpen={isOpen} closeModal={closeModal} />
      {shops}
    </div>
  );
};

export default observer(ShopList);
