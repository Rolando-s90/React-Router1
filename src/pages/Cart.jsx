import { useState } from "react";

const Carrito = () => {
  const [pizzaCart, setPizzaCart] = useState([
    {
      id: 1,
      nombre: "Mozzarella",
      precio: 8000,
      cantidad: 1,
      imagen: mozz
    },
    {
      id: 2,
      nombre: "Pepperoni",
      precio: 9500,
      cantidad: 2,
      imagen: pepp
    },
    {
    id: 3,
    nombre: "Hawaiana",
    ingredientes: ["Queso", "Jamón", "Piña"],
    precio: 9200,
    imagen: hawa
  },
     {
    id: 4,
    nombre: "Vegetariana",
    ingredientes: ["Pimientos", "Aceitunas", "Cebolla"],
    precio: 8500,
    imagen: vege
  },
  ]);

  const aumentarCantidad = (id) => {
    const nuevoCarrito = pizzaCart.map(pizza =>
      pizza.id === id ? { ...pizza, cantidad: pizza.cantidad + 1 } : pizza
    );
    setPizzaCart(nuevoCarrito);
  };

  const disminuirCantidad = (id) => {
    const nuevoCarrito = pizzaCart
      .map(pizza =>
        pizza.id === id ? { ...pizza, cantidad: pizza.cantidad - 1 } : pizza
      )
      .filter(pizza => pizza.cantidad > 0);
    setPizzaCart(nuevoCarrito);
  };

  const total = pizzaCart.reduce((acc, pizza) => acc + pizza.precio * pizza.cantidad, 0);

  return (
    <div>
      <h2>🛒 Carrito de compras</h2>
      {pizzaCart.map(pizza => (
        <div key={pizza.id}>
          <img src={pizza.imagen} alt={pizza.nombre} width={100} />
          <h3>{pizza.nombre}</h3>
          <p>Precio: ${pizza.precio.toLocaleString()}</p>
          <p>Cantidad: {pizza.cantidad}</p>
          <button onClick={() => aumentarCantidad(pizza.id)}>+</button>
          <button onClick={() => disminuirCantidad(pizza.id)}>-</button>
          <hr />
        </div>
      ))}
      <h3>Total: ${total.toLocaleString()}</h3>
    </div>
  );
};

export default Carrito;
