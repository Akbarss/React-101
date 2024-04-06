import React, { useState } from "react";
import Modal from "./components/Modal";

const Todo = () => {
  const [isModal, setIsModal] = useState(false);

  const openModal = () => {
    setIsModal(true);
  };

  const closeModal = () => [setIsModal(false)];
  return (
    <>
      <button onClick={openModal}>Open</button>
      <Modal isOpen={isModal}>
        <>
          <button onClick={closeModal}>Close</button>
          <h2>Hello Modal</h2>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex voluptatem aspernatur facere, consequatur
            reprehenderit nostrum molestiae. Cupiditate ab consequuntur quidem quas totam, cum quos laudantium facilis
            molestias unde suscipit reprehenderit?
          </p>
        </>
      </Modal>
    </>
  );
};

export default Todo;
