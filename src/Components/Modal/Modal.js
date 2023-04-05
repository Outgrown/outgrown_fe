import React, { useState } from "react";
import "./Modal.css";

const Modal = ({ open, picture, description, button, updateModal }) => {
  const [ModalIsOpen, setModalIsOpen] = useState(false);

  const closeModalHandler = () => {
    setTimeout(() => {
      updateModal(false)
    }, 400);
  };

  const containerStyles = open ? "modal-container" : "modal-container closed";

  return (
    <div className={containerStyles} onClick={closeModalHandler}>
      <div className="modal">
        <div className="x-button-container">
          <button onClick={closeModalHandler}>X</button>
        </div>
        <div>
          <img className="modal-image" src={picture} />
          <div>
            <p>{description}</p>
          </div>
        </div>
        <div>
          <button>Confirm Purchase</button>
          <button onClick={closeModalHandler}>Cancel</button>
        </div>
        {/* close modal button w/ hover state*/}
        {/* modal content with picture, description ect*/}
        {/* button to confirm purchase or putting up on marketplace */}
        {/* button to cancel and quit out of modal */}
      </div>
    </div>
  );
};

export default Modal;
