



import { formatCurrency } from '../utils/format';

const CardPizza = ({ name, price, ingredients, img }) => {
  return (
    <div className="card m-3 shadow" style={{ width: '18rem' }}>
      <img src={img} className="card-img-top" alt={name} />
      <div className="card-body">
        <h5 className="card-title">🍕{name}</h5>
        <ul className="list-group list-group-flush mb-3">
          {ingredients.map((ingredient, index) => (
            <li className="list-group-item" key={index}>
              {ingredient}
            </li>
          ))}
        </ul>
        <p className="card-text fw-bold">Precio: ${formatCurrency(price)}</p>
        <button className="btn btn-primary w-100">Agregar 🛒</button>
      </div>
    </div>
  );

  
};

export default CardPizza;
