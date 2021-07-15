import { useParams } from "react-router";
import { observer } from "mobx-react";
import shopStore from "../stores/shopStore";
import bookStore from "../stores/bookStore";
import { DetailWrapper } from "../styles";
import ProductList from "./ProductList";

const ShopDetail = () => {
  const { shopSlug } = useParams();
  const shop = shopStore.shops.find((shop) => shop.slug === shopSlug);

  const products = shop.products.map((product) =>
    bookStore.getProductById(product.id)
  );

  return (
    <>
      <DetailWrapper>
        <h4>{shop.name}</h4>
        <img src={shop.image} alt={shop.name} />
      </DetailWrapper>
      <ProductList products={products} shop={shop} />
    </>
  );
};

export default observer(ShopDetail);
