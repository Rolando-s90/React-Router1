

import Header from '../components/Header';
import CardPizza from '../components/CardPizza';
import Register from '../components/Register';

const RegisterPage = () => {
  return (
    <div className="container my-4">
      <Header />
      <div className="d-flex flex-wrap justify-content-center">
        <Register />
      </div>
    </div>
  );
};

export default RegisterPage;
