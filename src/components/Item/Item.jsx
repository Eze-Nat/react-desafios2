/* import { Link } from "react-router-dom"; */

import ItemCount from "../ItemCount/ItemCount";

const Item = ({ item }) => {
  const { nombre, precio, stock, img } = item;
  return (
    <div className="card" style={{ width: "15rem" }}>
      <img className="card-img-top" src={img} alt="Card image cap" />
      <div className="card-body d-flex flex-column justify-content-center">
        <h5 className="card-title">{nombre}</h5>
        <p className="card-text">{`${stock} unidades!`}</p>
       {/*  <Link to={"/detail"}> */}
       <ItemCount />
          <button className="btn btn-primary">Detalles de producto</button>
        {/* </Link> */}
      </div>
    </div>
  );
};

export default Item;