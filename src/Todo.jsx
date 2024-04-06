import React, { useState } from "react";
import ProductList from "./components/Products";

const Todo = () => {
  const products = [
    { name: "Product 1", price: 100 },
    { name: "Product 2", price: 200 },
    { name: "Product 3", price: 300 },
  ];
  const [count, setCount] = useState(0);

  const incriment = () => {
    setCount(count + 1);
  };

  return (
    <>
      <div>
        <ProductList products={products} />
      </div>
    </>
  );
};

export default Todo;
