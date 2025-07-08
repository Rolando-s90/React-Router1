import { useCart } from "../context/CartContext";
import { formatCurrency } from "../utils/format";

const Cart = () => {
  const { cart, addToCart, removeFromCart, getTotal } = useCart();

  return (
    <div>
      <h2>🛒 Carrito de compras</h2>
      {cart.length === 0 && <p>No hay productos en el carrito</p>}
      {cart.map((pizza) => (
        <div key={pizza.id}>
          <h3>{pizza.name}</h3>
          <p>Precio: ${formatCurrency(pizza.price)}</p>
          <p>Cantidad: {pizza.quantity}</p>
          <button onClick={() => addToCart(pizza)}>+</button>
          <button onClick={() => removeFromCart(pizza.id)}>-</button>
          <hr />
        </div>
      ))}
      <h3>Total: ${formatCurrency(getTotal())}</h3>
    </div>
  );
};

export default Cart;
