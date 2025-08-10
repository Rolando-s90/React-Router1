import { Link, useNavigate } from "react-router-dom";
import { useUser } from "../context/UserContext";
import { useCart } from "../context/CartContext";

const Navbar = () => {
  const { user, logout } = useUser();
  const { total } = useCart();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-3">
      <Link className="navbar-brand" to="/">Pizzería Mamma Mía</Link>
      <div className="ms-auto d-flex align-items-center">
        {user ? (
          <>
            <span className="text-white me-3">Hola, {user.email}</span>
            <button className="btn btn-outline-light me-3" onClick={handleLogout}>
              Logout
            </button>
          </>
        ) : (
          <>
            <Link className="btn btn-outline-light me-2" to="/login">Login</Link>
            <Link className="btn btn-outline-light me-3" to="/register">Registro</Link>
          </>
        )}
        <Link className="btn btn-success" to="/cart">
          🛒 Total: ${total.toLocaleString()}
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
