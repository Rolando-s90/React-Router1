
import { createContext, useState, useEffect } from "react";

export const PizzaContext = createContext();

export const PizzaProvider = ({ children }) => {
  const [pizzas, setPizzas] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/pizzas")
      .then((res) => res.json())
      .then((data) => setPizzas(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <PizzaContext.Provider value={{ pizzas }}>
      {children}
    </PizzaContext.Provider>
  );
};
