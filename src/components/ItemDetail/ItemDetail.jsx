import { useState } from "react";
import ItemCount from "../ItemCount/ItemCount";
import { Link } from "react-router-dom";

const ItemDetail = ({ item }) => {
  const [amount, setAmount] = useState(0)
  const { nombre, descripcion, stock, img } = item;
  
  const onAdd = (amount) => {
    setAmount(amount);
  
  };
  return (
    <>
      <div className="container m-auto justify-content-center row">
        <div className="card justify-content-center align-items-center" style={{ width: "15rem" }}>
          <img className="card-img-top" src={img} alt={nombre} />
          <div className="card-body d-flex flex-column justify-content-center">
            <h5 className="card-title">{nombre}</h5>
            <p className="card-text">{`${stock} unidades!`}</p>
          </div>
          <p className="">{descripcion}</p>
          {amount === 0 ? <ItemCount stock={stock} initial={0} onAdd={onAdd} /> : <h2>{amount} unidades agregadas al carrito</h2>}
          <Link to="/cart" ><button>Ir Al Carrito</button></Link>
        </div>
        <div></div>
      </div>
    </>
  );
};

export default ItemDetail;
