/* Styles */
import { ListWrapper } from "../styles";
/* Components */
import ProductItem from "./ProductItem";
import SearchBar from "./SearchBar";
import AddButton from "./buttons/AddButton";
/* useState */
import { useState } from "react";
/* Mobx */
import { observer } from "mobx-react";
import ProductModal from "../modals/ProductModal";
/* Stores */
import authStore from "../stores/authStore";

const ProductList = ({ products, shop }) => {
  const [query, setQuery] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  const productsList = products
    .filter((product) =>
      product.name.toLowerCase().includes(query.toLowerCase())
    )
    .map((product) => <ProductItem product={product} id={product.id} />);

  return (
    <div>
      <SearchBar setQuery={setQuery} />
      {authStore.user && <AddButton onClick={openModal} />}
      <ProductModal isOpen={isOpen} closeModal={closeModal} shop={shop} />
      <ListWrapper>{productsList}</ListWrapper>
    </div>
  );
};

export default observer(ProductList);
