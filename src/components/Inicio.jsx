import { useState } from "react";
import pizzas from "../data/pizzas";
import TarjetaPizza from "./TarjetaPizza";

const Inicio = () => {
  const [cantidades, setCantidades] = useState(
    pizzas.map(pizza => ({ id: pizza.id, cantidad: 0 }))
  );

  const aumentar = (id) => {
    setCantidades(prev =>
      prev.map(p =>
        p.id === id ? { ...p, cantidad: p.cantidad + 1 } : p
      )
    );
  };

  const disminuir = (id) => {
    setCantidades(prev =>
      prev.map(p =>
        p.id === id && p.cantidad > 0 ? { ...p, cantidad: p.cantidad - 1 } : p
      )
    );
  };

  const obtenerCantidad = (id) => {
    const pizza = cantidades.find(p => p.id === id);
    return pizza ? pizza.cantidad : 0;
  };

  const total = cantidades.reduce((acc, item) => {
    const pizza = pizzas.find(p => p.id === item.id);
    return acc + (pizza ? pizza.precio * item.cantidad : 0);
  }, 0);

  return (
    <>
      <div className="contenedor-pizzas">
        {pizzas.map(pizza => (
          <TarjetaPizza
            key={pizza.id}
            pizza={pizza}
            cantidad={obtenerCantidad(pizza.id)}
            aumentar={aumentar}
            disminuir={disminuir}
          />
        ))}
      </div>

      <h2 style={{ textAlign: "center", marginBottom: "2rem" }}>
        🧾 Total a pagar: <strong>${total.toLocaleString()}</strong>
      </h2>
    </>
  );
};

export default Inicio;
