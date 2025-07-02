const CardPizza = ({ name, price, ingredients, img }) => {
  return (
    <div className="card m-2" style={{ width: "18rem" }}>
      <img src={img} className="card-img-top" alt={name} />
      <div className="card-body">
        <h5 className="card-title text-capitalize">{name}</h5>
        <p className="card-text">
          <strong>Ingredientes:</strong>
            {ingredients.map((ing, index) => (
              <li key={index}>{ing}</li>
            ))}
        </p>
        <p className="card-text">
          <strong>Precio:</strong> ${price.toLocaleString("es-CL")}
        </p>
        <button className="btn btn-primary">Añadir al carrito</button>
      </div>
    </div>
  );
};

export default CardPizza;
