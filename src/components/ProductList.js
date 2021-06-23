/* Styles */
import { ListWrapper } from "../styles";
/* Components */
import ProductItem from "./ProductItem";
import SearchBar from "./SearchBar";
/* useState */
import { useState } from "react";
/* Mobx */
import bookStore from "../stores/bookStore";
import { observer } from "mobx-react";

const ProductList = () => {
  const [query, setQuery] = useState("");
  const productsList = bookStore.products
    .filter((product) =>
      product.name.toLowerCase().includes(query.toLowerCase())
    )
    .map((product) => <ProductItem product={product} id={product.id} />);

  return (
    <div>
      <SearchBar setQuery={setQuery} />
      <ListWrapper>{productsList}</ListWrapper>
    </div>
  );
};

export default observer(ProductList);
