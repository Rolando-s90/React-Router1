import { useCart } from "../context/CartContext";
import { useUser } from "../context/UserContext";

const Cart = () => {
  const { cart, removeFromCart, updateQuantity, total } = useCart();
  const { user } = useUser();

  return (
    <div className="container mt-5">
      <h2>Tu carrito</h2>
      {cart.length === 0 ? (
        <p>Tu carrito está vacío.</p>
      ) : (
        <>
          <table className="table">
            <thead>
              <tr>
                <th>Pizza</th>
                <th>Precio unitario</th>
                <th>Cantidad</th>
                <th>Subtotal</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item) => (
                <tr key={item.id}>
                  <td className="text-capitalize">{item.name}</td>
                  <td>${item.price.toLocaleString()}</td>
                  <td>{item.quantity}</td>
                  <td>${(item.price * item.quantity).toLocaleString()}</td>
                  <td>
                    <button
                      className="btn btn-sm btn-success me-1"
                      onClick={() => updateQuantity(item.id, 1)}
                    >
                      +
                    </button>
                    <button
                      className="btn btn-sm btn-warning me-1"
                      onClick={() => updateQuantity(item.id, -1)}
                    >
                      -
                    </button>
                    <button
                      className="btn btn-sm btn-danger"
                      onClick={() => removeFromCart(item.id)}
                    >
                      Eliminar
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <h4>Total: ${total.toLocaleString()}</h4>
          <button className="btn btn-primary" disabled={!user}>
            Pagar
          </button>
          {!user && (
            <p className="text-danger mt-2">
              Debes iniciar sesión para poder pagar.
            </p>
          )}
        </>
      )}
    </div>
  );
};

export default Cart;
