import React, { useState } from "react";

const Modal = () => {
  const [ModalIsOpen, setModalIsOpen] = useState(false)

  const closeModal = () => {
    setTimeout(() => {
      setModalIsOpen(false)
    }, 400)
  }

  return (
    <div className="modal-container" onClick={closeModal}>
      <div className="modal">

      </div>
    </div>
  )
}

export default Modal