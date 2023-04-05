import React, { useState } from "react";
import './Modal.css'

const Modal = ({open, picture, description, button}) => {
  const [ModalIsOpen, setModalIsOpen] = useState(false)

  const closeModal = () => {
    setTimeout(() => {
      // setModalIsOpen(false)
      // Might want passed down Details state function instead of state here
    }, 400)
  }

  const containerStyles = open ? "modal-container" : "modal-container closed"

  return (
    <div className="modal-container" onClick={closeModal}>
      <div className="modal">
        <div>
          <button>X</button>
        </div>
        <div>
          </div>
            {picture}
          <div>
          {description}
        </div>
        <div>
          <button>Confirm Purchase</button>
          <button>Cancel</button>
        </div>
        {/* close modal button w/ hover state*/}
        {/* modal content with picture, description ect*/}
        {/* button to confirm purchase or putting up on marketplace */}
        {/* button to cancel and quit out of modal */}
      </div>
    </div>
  )
}

export default Modal