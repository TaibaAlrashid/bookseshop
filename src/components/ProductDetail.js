import { DetailWrapper } from "../styles";

const ProductDetail = (props) => {
    return (
        <DetailWrapper>  
            <img src={props.products.image} alt={props.products.name} />
            <p>{props.products.name}</p>
            <p>{props.products.description}</p>
            <p>{props.products.price} KD</p>
        </DetailWrapper>
    );
};

export default ProductDetail;