import { formatCurrency } from '../utils/format';

const Navbar = () => {
  const total = 25000;
  const token = false;

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-4 py-3">
      <span className="navbar-brand mb-0 h1">🍕 Pizzeria Mamma Mia</span>

      <div className="d-flex flex-wrap gap-2 ms-3">
        <button className="btn btn-outline-light btn-sm">🍕 Home</button>

        {token ? (
          <>
            <button className="btn btn-outline-light btn-sm">🔓 Profile</button>
            <button className="btn btn-outline-light btn-sm">🔒 Logout</button>
          </>
        ) : (
          <>
            <button className="btn btn-outline-light btn-sm">🔐 Login</button>
            <button className="btn btn-outline-light btn-sm">🔐 Register</button>
          </>
        )}
      </div>

      <div className="ms-auto text-white fw-bold">
        🛒 Total: ${formatCurrency(total)}
      </div>
    </nav>
  );
};
export default Navbar;