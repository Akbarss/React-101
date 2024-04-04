// App.js
import React, { useState } from "react";
import Modal from "./components/Modal";

function ModalWindow() {
  const [isModalOpen, setIsModalOpen] = useState(true);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <button onClick={openModal}>Открыть модальное окно</button>
      <Modal isOpen={isModalOpen}>
        <>
          <button onClick={closeModal}>close</button>
          <h2>Hello I am Modal React!</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. A praesentium qui alias eos at reiciendis cumque
            aut totam quasi sequi quos in tempore ratione perferendis expedita, velit, architecto, natus sapiente.
          </p>
        </>
      </Modal>
    </div>
  );
}

export default ModalWindow;
