

import Header from '../components/Header';
import Login from '../components/Login';

const LoginPages= () => {
  return (
    <div className="container my-4">
      <Header />
      <div className="d-flex flex-wrap justify-content-center">
        <Login/>
      </div>
    </div>
  );
};

export default LoginPages;
