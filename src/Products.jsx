// App.js
import React from "react";
import ProductList from "./components/Products";

function Products() {
  const products = [
    { name: "Шоколад", price: 10, description: "Вкусный шоколад" },
    { name: "Молоко", price: 5, description: "Полезное молоко" },
    { name: "Хлеб", price: 3, description: "Свежий хлеб" },
  ];

  return (
    <>
      <ProductList products={products} />
    </>
  );
}

export default Products;
