import { useContext, useState } from "react";
import ItemCount from "../ItemCount/ItemCount";
import { Link } from "react-router-dom";
import { GContext } from "../CartContext/CartContext";

const ItemDetail = ({ item }) => {
  const [amount, setAmount] = useState(0)
  const {addItem} = useContext(GContext)
  const { nombre, descripcion, stock, img } = item;
  
  const onAdd = (amount) => {
    setAmount(amount);
    addItem(item, amount)
  
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
          {amount === 0 && <ItemCount stock={stock} initial={0} onAdd={onAdd} />}
      <div className="d-flex justify-content-center my-3">
        <Link to="/cart/">
          <button className="btn btn-warning">Ir al carrito</button>
        </Link>
      </div>
        </div>
        <div></div>
      </div>
    </>
  );
};

export default ItemDetail;
