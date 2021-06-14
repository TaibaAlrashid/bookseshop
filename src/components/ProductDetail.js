import { DetailWrapper } from "../styles";

const ProductDetail = (props) => {
    return (
        <DetailWrapper>  
            <img src={props.product.image} alt={props.product.name} />
            <p>{props.product.name}</p>
            <p>{props.product.Description}</p>
            <p>{props.product.price} KD</p>
        </DetailWrapper>
    );
};

export default ProductDetail;