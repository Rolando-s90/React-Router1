const Profile = () => {
  const email = "usuario@correo.com"; 

  const handleLogout = () => {
    alert("Sesión cerrada (aún no funcional)");
  };

  return (
    <div className="container text-center my-5">
      <h2>👤 Perfil del Usuario</h2>
      <p>Email: <strong>{email}</strong></p>
      <button className="btn btn-danger mt-3" onClick={handleLogout}>
        Cerrar sesión
      </button>
    </div>
  );
};

export default Profile;
