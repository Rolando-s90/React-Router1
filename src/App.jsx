import Navbar from './components/Navbar';
import Home from './pages/Home';
import RegisterPage from './pages/RegisterPage';
import Footer from './components/Footer';
import LoginPages from './pages/LoginPages';

const App = () => {
  return (
    <div className="app-container">
      <Navbar />
      <main className="main-content">
        {/* <Home /> */}
        {/* <RegisterPage/> */}
        <LoginPages />
      </main>
      <Footer />
      <div></div>
    </div>
    
  );
};

export default App;
