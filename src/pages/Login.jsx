import { useState } from "react";
import { useUser } from "../context/UserContext";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const { login } = useUser();
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    login(email);
    navigate("/profile");
  };

  return (
    <div className="container mt-5">
      <h2>Iniciar Sesión</h2>
      <form onSubmit={handleSubmit}>
        <input
          className="form-control my-2"
          type="email"
          placeholder="Correo"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button className="btn btn-primary">Entrar</button>
      </form>
    </div>
  );
};

export default Login;
