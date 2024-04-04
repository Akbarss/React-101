import React, { useState } from "react";
import Modal from "./components/Modal";

const Todo = () => {
  const [todos, setTodo] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [editindex, setEditindex] = useState(null);
  const [editValue, setEditValue] = useState("");

  console.log(useState(1));

  const handleInputChage = (event) => {
    setInputValue(event.target.value);
  };

  const handleAddTodo = () => {
    if (inputValue.trim() !== "") {
      setTodo([...todos, { task: inputValue, completed: false }]);
      setInputValue("");
    }
  };

  const handleChange = (index) => {
    setTodo(todos.map((todo, i) => (i === index ? { ...todo, completed: !todo.completed } : todo)));
  };

  const handleDeleteTodo = (index) => {
    setTodo(todos.filter((_, i) => i !== index));
  };

  const handleEditTodo = (index) => {
    setEditindex(index);
    setEditValue(todos[index].task);
  };

  const handleSaveEdit = (index) => {
    setTodo(todos.map((todo, i) => (i === index ? { ...todo, task: editValue } : todo)));
    setEditindex(null);
  };

  return (
    <>
      <Modal>
        <h1>Hello</h1>
      </Modal>
    </>
  );
};

export default Todo;
