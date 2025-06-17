function Header() {
  return (
    <header
       className="text-center"
      style={{
        backgroundImage: 'url("/src/assets/img.jpg/header.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
         padding: '80px 20px',
        color: 'white',
        
     
        
      }}
    >
      <h1>¡Pizzeria Mamma mia!</h1>
      <p>Disfruta de las mejores pizzas artesanales hechas con amor y queso extra 🧀🍕</p>
    </header>
  );
}

export default Header;
