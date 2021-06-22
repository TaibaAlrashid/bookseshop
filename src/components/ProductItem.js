/* Styles */
import { ProductWrapper } from "../styles";
/* Components */
import DeleteButton from "./buttons/DeleteButton";

import { Link } from "react-router-dom";

const ProductItem = (props) => {
  return (
    <ProductWrapper>
      <Link to="{`/products/${props.product.slug}`}">
        <img src={props.product.image} alt={props.product.name} />
      </Link>
      <p>{props.product.name} </p>
      <p>{props.product.price} KD </p>
      <DeleteButton
        productId={props.product.id}
        deleteProduct={props.deleteProduct}
      />
    </ProductWrapper>
  );
};

export default ProductItem;
