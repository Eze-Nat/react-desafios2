/* import { Link } from "react-router-dom"; */

import ItemCount from "../ItemCount/ItemCount";

const Item = ({ item }) => {
  const { nombre, stock, img } = item;
  return (
    <div className="card" style={{ width: "15rem" }}>
      <img className="card-img-top" src={img} alt={nombre} />
      <div className="card-body d-flex flex-column justify-content-center">
        <h5 className="card-title">{nombre}</h5>
        <p className="card-text">{`${stock} unidades!`}</p>
        <ItemCount stock={item.stock}/>
       {/*  <Link to={"/detail"}> */}
        
          <button className="btn btn-primary">Detalles de producto</button>
        {/* </Link> */}
      </div>
    </div>
  );
};

export default Item;