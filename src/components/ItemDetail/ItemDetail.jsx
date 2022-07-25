import ItemCount from "../ItemCount/ItemCount";

const ItemDetail = ({ item }) => {
  const { nombre, descripcion, stock, img } = item;
  const onAdd = (amount) => {
    console.log(amount);
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
          <ItemCount stock={stock} initial={0} onAdd={onAdd} />
        </div>
        <div></div>
      </div>
    </>
  );
};

export default ItemDetail;
