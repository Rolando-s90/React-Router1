import Navbar from './components/Navbar';
import Home from './pages/Home';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className="app-container">
      <Navbar />
      <main className="main-content">
        <Home />
      </main>
      <Footer />
    </div>
  );
};

export default App;
