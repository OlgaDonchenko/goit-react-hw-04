import React from "react";
import Modal from "react-modal";

export default function ImageModal({ imageUrl, closeModal }) {
  return (
    <Modal isOpen={true} onRequestClose={closeModal}>
      <img src={imageUrl} alt="Large Image" />
      <button onClick={closeModal}>Close Modal</button>
    </Modal>
  );
}
