import { DetailWrapper } from "../styles";
import DeleteButton from "./buttons/DeleteButton";

const ProductDetail = (props) => {
    return (
        <DetailWrapper>  
            <img src={props.product.image} alt={props.product.name} />
            <p>{props.product.name}</p>
            <p>{props.product.Description}</p>
            <p>{props.product.price} KD</p>
            <DeleteButton 
                productId={props.product.id}
                deleteProduct={props.deleteProduct}
                setProduct={props.setProduct}
            />
        </DetailWrapper>
    );
};

export default ProductDetail;