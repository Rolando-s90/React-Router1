import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const Pizza = () => {
  const { id } = useParams();
  const [pizza, setPizza] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:5000/api/pizzas/${id}`)
      .then((res) => res.json())
      .then((data) => setPizza(data))
      .catch((err) => console.error(err));
  }, [id]);

  if (!pizza) return <p>Cargando...</p>;

  return (
    <div>
      <h1>{pizza.name}</h1>
      <img src={pizza.img} alt={pizza.name} />
      <p>{pizza.desc}</p>
      <p>Precio: ${pizza.price}</p>
    </div>
  );
};

export default Pizza;
