import Modal from "react-modal";
/* usestate */
import { useState } from "react";
/* stores */
import bookStore from "../stores/bookStore";
/* styles */
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
    else bookStore.createProduct(product, props.shop);
    props.closeModal();
  };

  const handleImage = (event) => {
    setProduct({ ...product, image: event.target.files[0] });
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
              value={product.name}
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
              value={product.price}
            />
          </div>
          <div className="col-12">
            <label>Description</label>
            <input
              className="form-control"
              type="text"
              onChange={handleChange}
              name="Description"
              value={product.Description}
            />
          </div>
          <div className="col-12">
            <label for="inputAddress2" className="form-label">
              Image
            </label>
            <input
              className="form-control"
              type="file"
              onChange={handleImage}
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
