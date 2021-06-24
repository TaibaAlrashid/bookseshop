import { useState } from "react";
import Modal from "react-modal";
import bookStore from "../stores/bookStore";
import { ModalButton } from "../styles";

const ProductModal = (props) => {
  const [product, setProduct] = useState(
    props.oldProduct
      ? props.oldProduct
      : {
          name: "",
          price: 0,
          Description: "",
          image: "",
        }
  );

  const handleChange = (event) => {
    setProduct({ ...product, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (props.oldProduct) bookStore.updateProduct(product);
    else bookStore.createProduct(product);
    props.closeModal();
  };

  return (
    <div>
      <Modal
        isOpen={props.isOpen}
        onRequestClose={props.closeModal}
        contentLabel="Books Modal"
      >
        <form className="row g-3" onSubmit={handleSubmit}>
          <div className="col-md-6">
            <label>Name</label>
            <input
              className="form-control"
              type="text"
              onChange={handleChange}
              name="name"
            />
          </div>
          <div className="col-md-6">
            <label>Price</label>
            <input
              className="form-control"
              type="price"
              min="0"
              onChange={handleChange}
              name="price"
            />
          </div>
          <div className="col-12">
            <label>Description</label>
            <input
              className="form-control"
              type="text"
              onChange={handleChange}
              name="Description"
            />
          </div>
          <div className="col-12">
            <label for="inputAddress2" className="form-label">
              Image
            </label>
            <input
              className="form-control"
              type="text"
              onChange={handleChange}
              name="image"
            />
          </div>
          <div className="col-12">
            <ModalButton>{props.oldProduct ? "Update" : "Add"}</ModalButton>
          </div>
        </form>
      </Modal>
    </div>
  );
};

export default ProductModal;
