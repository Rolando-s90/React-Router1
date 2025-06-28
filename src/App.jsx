import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Inicio from "./components/Inicio";
import Carrito from "./components/Carrito";

import Home from './pages/Home';
import RegisterPage from './pages/RegisterPage';
import LoginPages from './pages/LoginPages';

const App = () => {
  return (
    <>
      <Navbar />
      <Inicio />
      {/* <Carrito /> */}
      {/* <Home /> */}
      {/* <RegisterPage /> */}
      {/* <LoginPages /> */}
      <Footer />
    </>
  );
};

export default App;
