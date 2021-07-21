import Modal from "react-modal";
import { useState } from "react";
import shopStore from "../stores/shopStore";
import { ModalButton } from "../styles";

const ShopModal = (props) => {
  const [shop, setShop] = useState({
    name: "",
    image: "",
  });

  const handleChange = (event) => {
    setShop({ ...shop, [event.target.name]: event.target.value });
  };

  const handleImage = (event) => {
    setShop({ ...shop, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    shopStore.createShop(shop);
    props.closeModal();
  };

  return (
    <div>
      <Modal
        isOpen={props.isOpen}
        onRequestClose={props.closeModal}
        contentLabel="Shop Modal"
      >
        <form className="row g-3" onSubmit={handleSubmit}>
          <div className="col-md-6">
            <label>Name</label>
            <input
              className="form-control"
              type="text"
              onChange={handleChange}
              name="name"
              value={shop.name}
            />
          </div>
          <div className="col-md-6">
            <label>Image</label>
            <input
              className="form-control"
              type="file"
              onChange={handleImage}
              name="image"
              value={shop.image}
            />
          </div>
          <div className="col-12">
            <ModalButton>Add</ModalButton>
          </div>
        </form>
      </Modal>
    </div>
  );
};

export default ShopModal;
