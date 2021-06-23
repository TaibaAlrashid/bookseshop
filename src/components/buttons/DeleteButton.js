/* Mobx */
import bookStore from "../../stores/bookStore";
/* Styles */
import { DeleteButtonStyled } from "../../styles";

const DeleteButton = (props) => {
  const handleDelete = () => {
    bookStore.deleteProduct(props.productId);
  };
  return (
    <DeleteButtonStyled onClick={handleDelete}> Delete </DeleteButtonStyled>
  );
};

export default DeleteButton;
