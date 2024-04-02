import { React, useState } from "react";
import TodoApp from "./Todo";

function App() {
  const [name, setName] = useState("Shahzod");
  //Product State
  const [product, setProduct] = useState([
    { id: 1, name: "Americano", price: 400 },
    { id: 2, name: "Latte", price: 300 },
    { id: 3, name: "Cappuccino", price: 500 },
    { id: 4, name: "Espresso", price: 100 },
  ]);

  const handleChangeName = () => {
    setName("Komil");
  };

  const handleBuy = (productId) => {
    const p = product.find((i) => i.id === productId);
    if (p) {
      alert(`Siz ${p.name} sotib oldingiz. Narxi: ${p.price} dollar`);
    }
  };

  return (
    <div>
      <h1>Hello {name}</h1>
      <button onClick={handleChangeName}>click</button>

      <h1>Menu Qahvaxona</h1>
      <ul>
        {product.map((i) => (
          <>
            <li>{i.name}</li>
            <li>{i.price}</li>
            <button onClick={() => handleBuy(i.id)}>Sotib olish</button>
          </>
        ))}
      </ul>
      <TodoApp />
    </div>
  );
}

export default App;
