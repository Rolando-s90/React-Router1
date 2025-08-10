import { useUser } from "../context/UserContext";

const Profile = () => {
  const { user } = useUser();
  return (
    <div className="container mt-5">
      <h2>Perfil</h2>
      <p>Email: {user.email}</p>
    </div>
  );
};

export default Profile;
