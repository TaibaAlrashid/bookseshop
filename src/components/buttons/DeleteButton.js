/* Styles */
import { DeleteButtonStyled } from "../../styles";

const DeleteButton = (props) => {
  const handleDelete = () => {
    props.deleteProduct(props.productId);
  };
  return (
    <DeleteButtonStyled onClick={handleDelete}> Delete </DeleteButtonStyled>
  );
};

export default DeleteButton;
