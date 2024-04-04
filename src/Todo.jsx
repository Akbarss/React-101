import React, { useState } from "react";

const Todo = () => {
  const [todos, setTodo] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [editindex, setEditindex] = useState(null);
  const [editValue, setEditValue] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

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
      <input type="text" value={inputValue} onChange={handleInputChage} placeholder="Add Todo" />
      <button onClick={handleAddTodo}>Add Todo</button>
      <ul>
        {todos.map((todo, index) => (
          <li key={index} style={{ textDecoration: todo.completed ? "line-through" : "none" }}>
            {editindex === index ? (
              <div>
                <input type="text" value={editValue} onChange={(e) => setEditValue(e.target.value)} />
                <button onClick={() => handleSaveEdit(index)}>Save</button>
              </div>
            ) : (
              <div>
                <span onClick={() => handleChange(index)}>{todo.task}</span>
                <button onClick={() => handleDeleteTodo(index)}>Delete</button>
                <button onClick={() => handleEditTodo(index)}>Edit</button>
              </div>
            )}
          </li>
        ))}
      </ul>
    </>
  );
};

export default Todo;
