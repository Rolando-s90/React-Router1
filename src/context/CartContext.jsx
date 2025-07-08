import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  
  const addToCart = (pizza) => {
    setCart((prevCart) => {
      const pizzaInCart = prevCart.find((item) => item.id === pizza.id);
      if (pizzaInCart) {
        return prevCart.map((item) =>
          item.id === pizza.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prevCart, { ...pizza, quantity: 1 }];
    });
  };

  
  const removeFromCart = (id) => {
    setCart((prevCart) => {
      const pizzaInCart = prevCart.find((item) => item.id === id);
      if (pizzaInCart.quantity === 1) {
        return prevCart.filter((item) => item.id !== id);
      } else {
        return prevCart.map((item) =>
          item.id === id
            ? { ...item, quantity: item.quantity - 1 }
            : item
        );
      }
    });
  };

 
  const getTotal = () => {
    return cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, getTotal }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
