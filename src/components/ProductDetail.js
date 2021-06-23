/* MobX */
import bookStore from "../stores/bookStore";
import { observer } from "mobx-react";
/* Styles */
import { DetailWrapper } from "../styles";
/* Components */
import DeleteButton from "./buttons/DeleteButton";
/* Libraries */
import { useParams, Redirect } from "react-router-dom";

const ProductDetail = () => {
  const productSlug = useParams().productSlug;
  const product = bookStore.products.find(
    (product) => product.slug === productSlug
  );

  if (!product) return <Redirect to="/products" />;

  return (
    <DetailWrapper>
      <img src={product.image} alt={product.name} />
      <p>{product.name}</p>
      <p>{product.Description}</p>
      <p>{product.price} KD</p>
      <DeleteButton productId={product.id} />
    </DetailWrapper>
  );
};

export default observer(ProductDetail);
