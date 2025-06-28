
const TarjetaPizza = ({ pizza, cantidad, aumentar, disminuir }) => {
  console.log(`Pizza: ${pizza.nombre}, Cantidad: ${cantidad}, Total individual: ${pizza.precio * cantidad}`);

  return (
    <div className="tarjeta" style={{ border: "1px solid #ccc", padding: "1rem", marginBottom: "1rem", borderRadius: "10px" }}>
      <img
        src={pizza.imagen}
        alt={pizza.nombre}
        style={{ width: "100%", borderRadius: "10px" }}
      />
      <h2>{pizza.nombre}</h2>

      <ul>
        {pizza.ingredientes.map((ing, i) => (
          <li key={i}>🍕 {ing}</li>
        ))}
      </ul>

      <p><strong>Precio unitario:</strong> ${pizza.precio.toLocaleString()}</p>

      <div style={{ margin: "10px 0" }}>
        <button onClick={() => disminuir(pizza.id)}>-</button>
        <span style={{ margin: "0 10px" }}>{cantidad}</span>
        <button onClick={() => aumentar(pizza.id)}>+</button>
      </div>

      <p>
        <strong>Total por esta pizza:</strong> ${ (pizza.precio * cantidad).toLocaleString() }
      </p>
    </div>
  );
};

export default TarjetaPizza;
