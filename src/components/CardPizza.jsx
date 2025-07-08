import { useCart } from "../context/CartContext";

const CardPizza = ({ pizza }) => {
  const { addToCart } = useCart();
  const { name, price, ingredients, img } = pizza;


  return (
    <div className="card m-2" style={{ width: "18rem" }}>
      <img src={img} className="card-img-top" alt={name} />
      <div className="card-body">
        <h5 className="card-title text-capitalize">{name}</h5>
        <p className="card-text">
          <strong>Ingredientes:</strong>
          <ul className="mb-2">
            {ingredients.map((ing, index) => (
              <li key={index}>{ing}</li>
            ))}
          </ul>
        </p>
        <p className="card-text">
          <strong>Precio:</strong> ${price.toLocaleString("es-CL")}
        </p>
        <button
          className="btn btn-primary"
          onClick={() => addToCart(pizza)} 
        >
          Añadir al carrito
        </button>
      </div>
    </div>
  );
};

export default CardPizza;
