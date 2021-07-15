import { useState } from "react";
import SignupModal from "../modals/SignupModal";

const SignupButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <>
      <p onClick={openModal}>Signup</p>
      <SignupModal isOpen={isOpen} closeModal={closeModal} />
    </>
  );
};

export default SignupButton;
