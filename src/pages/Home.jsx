import { useEffect, useState } from "react";
import Header from '../components/Header';
import CardPizza from '../components/CardPizza';

const Home = () => {
  const [pizzas, setPizzas] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/pizzas")
      .then(res => res.json())
      .then(data => setPizzas(data))
      .catch(err => console.error("Error al cargar las pizzas:", err));
  }, []);

  return (
    <div className="container my-4">
      <Header />
      <div className="d-flex flex-wrap justify-content-center">
        {pizzas.map(pizza => (
          <CardPizza
            key={pizza.id}
            name={pizza.name}
            price={pizza.price}
            ingredients={pizza.ingredients}
            img={pizza.img}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
