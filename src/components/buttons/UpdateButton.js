import { useState } from "react";
import ProductModal from "../../modals/ProductModal";
import products from "../../products";
import { UpdateButtonStyled } from "../../styles";

const UpdateButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <div>
      <UpdateButtonStyled onClick={openModal}>Update</UpdateButtonStyled>
      <ProductModal
        isOpen={isOpen}
        closeModal={closeModal}
        oldProduct={products}
      />
    </div>
  );
};

export default UpdateButton;
