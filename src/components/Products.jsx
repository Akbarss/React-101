import React from "react";

function ProductList(props) {
  return (
    <ul>
      {props.products.map((product, index) => (
        <li key={index}>
          <p>{product.name}</p>
          <p>{product.price}</p>
        </li>
      ))}
    </ul>
  );
}

export default ProductList;
