import { useContext, useState } from "react";
import ItemCount from "../ItemCount/ItemCount";
import { Link, useNavigate } from "react-router-dom";
import { GContext } from "../Cart/CartContext";

const ItemDetail = ({ item }) => {
  const navigate = useNavigate();
  const [amount, setAmount] = useState(0)

  const {addItem} = useContext(GContext);
  
  const { nombre, descripcion, stock, img } = item;
  
  const onAdd = (amount) => {
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
          {amount === 0 ? <ItemCount stock={stock} initial={0} onAdd={onAdd} /> : <div className="mt-auto">
                    <button title="Continuar comprando" action={() => navigate(-1)}></button>
                    <button
                      title="Terminar mi compra"
                      bgColor="bg-blue-600"
                      hover="hover:bg-sky-800"
                      action={() => navigate("/cart")}></button>
                  
                  </div>}
          <Link to="/cart" ><button>Ir Al Carrito</button></Link>
        </div>
        <div></div>
      </div>
    </>
  );
};

export default ItemDetail;
