/* Styles */
import { ProductWrapper } from "../styles";
/* Components */
import DeleteButton from "./buttons/DeleteButton";
import UpdateButton from "./buttons/UpdateButton";
/* Libraries */
import { Link } from "react-router-dom";
import { observer } from "mobx-react";

const ProductItem = (props) => {
  return (
    <ProductWrapper>
      <Link to={`/products/${props.product.slug}`}>
        <img src={props.product.image} alt={props.product.name} />
      </Link>
      <p>{props.product.name} </p>
      <p>{props.product.price} KD </p>
      <UpdateButton product={props.product} />
      <DeleteButton productId={props.product.id} />
    </ProductWrapper>
  );
};

export default observer(ProductItem);
