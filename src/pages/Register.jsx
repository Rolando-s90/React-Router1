import { useState } from "react";
import { useUser } from "../context/UserContext";
import { useNavigate } from "react-router-dom";

const Register = () => {
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
      <h2>Registro</h2>
      <form onSubmit={handleSubmit}>
        <input
          className="form-control my-2"
          type="email"
          placeholder="Correo"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button className="btn btn-primary">Registrarse</button>
      </form>
    </div>
  );
};

export default Register;
