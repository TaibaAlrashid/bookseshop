import { useState } from "react";
import { BiBookAddStyled } from "../../styles";
import ProductModal from "../../modals/ProductModal";

const AddButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <div>
      <BiBookAddStyled size="2em" onClick={openModal} />
      <ProductModal isOpen={isOpen} closeModal={closeModal} />
    </div>
  );
};

export default AddButton;
