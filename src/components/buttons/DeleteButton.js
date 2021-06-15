import { DeleteButtonStyled } from "../../styles";

const DeleteButton = (props) => {
    const handleDelete = () => {
        props.deleteProduct(props.productId);
        props.setProduct();
    };
    return <DeleteButtonStyled onClick={handleDelete}> Delete </DeleteButtonStyled>;
};

export default DeleteButton;