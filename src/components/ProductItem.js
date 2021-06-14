import { ProductWrapper } from "../styles";

const ProductItem = (props) => {
    return (
        <ProductWrapper onClick={() => props.setProduct(props.product)}>
            <img src={props.product.image} alt={props.product.name} />
            <p >{props.product.name} </p>
            <p >{props.product.price} KD </p>
        </ProductWrapper>
    );
};

export default ProductItem;