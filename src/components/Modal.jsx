import React from "react";

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) {
    return null;
  }
  return (
    <div className="modal-overlay" style={modalOverlay}>
      <div className="modal">{children}</div>
    </div>
  );
};

export default Modal;

const modalOverlay = {
  position: "fixed",
  top: 0,
  left: 0,
  backgroundColor: "brown",
};
