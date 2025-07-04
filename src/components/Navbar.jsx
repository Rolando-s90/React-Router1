import { Link } from "react-router-dom";
import { formatCurrency } from "../utils/format";

const Navbar = () => {
  const total = 25000;
  const token = false;

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-4 py-3">
      <Link to="/" className="navbar-brand mb-0 h1 text-light text-decoration-none">
        🍕 Pizzería Mamma Mia
      </Link>

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

      <Link to="/cart" className="ms-auto btn btn-success fw-bold">
        🛒 Total: ${formatCurrency(total)}
      </Link>
    </nav>
  );
};

export default Navbar;
