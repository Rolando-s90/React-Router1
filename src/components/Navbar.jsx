import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { formatCurrency } from "../utils/format";

const Navbar = () => {
  const { getTotal } = useCart();
  const token = false;

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-4 py-3">
      <span className="navbar-brand mb-0 h1">🍕 Pizzeria Mamma Mia</span>

      <div className="d-flex flex-wrap gap-2 ms-3">
        <Link to="/" className="btn btn-outline-light btn-sm">🍕 Home</Link>

        {token ? (
          <>
            <Link to="/profile" className="btn btn-outline-light btn-sm">🔓 Profile</Link>
            <button className="btn btn-outline-light btn-sm">🔒 Logout</button>
          </>
        ) : (
          <>
            <Link to="/login" className="btn btn-outline-light btn-sm">🔐 Login</Link>
            <Link to="/register" className="btn btn-outline-light btn-sm">🔐 Register</Link>
          </>
        )}
      </div>

      <div className="ms-auto text-white fw-bold">
        <Link to="/cart" className="text-white text-decoration-none">
          🛒 Total: ${formatCurrency(getTotal())}
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
