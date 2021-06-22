/* Styles */
import { DetailWrapper } from "../styles";
/* Components */
import DeleteButton from "./buttons/DeleteButton";
/* Libraries */
import { useParams, Redirect } from "react-router-dom";

const ProductDetail = (props) => {
  const productSlug = useParams().productSlug;
  const product = props.products.find(
    (product) => product.slug === productSlug
  );

  if (!product) return <Redirect to="/products" />;

  return (
    <DetailWrapper>
      <img src={product.image} alt={product.name} />
      <p>{product.name}</p>
      <p>{product.Description}</p>
      <p>{product.price} KD</p>
      <DeleteButton
        deleteProduct={props.deleteProduct}
        productId={product.id}
      />
    </DetailWrapper>
  );
};

export default ProductDetail;
