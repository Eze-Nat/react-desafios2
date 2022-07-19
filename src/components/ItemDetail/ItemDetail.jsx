import ItemCount from "../ItemCount/ItemCount";


const ItemDetail = ({item, test}) => {
    const {nombre, descripcion, precio, stock, img} = item;
    return (
        <>
        <div className="card" style={{ width: "15rem" }}>
          <img className="card-img-top" src={img} alt={nombre} />
          <div className="card-body d-flex flex-column justify-content-center">
            <h5 className="card-title">{nombre}</h5>
            <p className="card-text">{`${stock} unidades!`}</p>
            <ItemCount stock={item.stock}/>

          </div>
        
        </div>
        <div>
          <p className="">{descripcion}</p>
          </div>

        </>
      );
}
 
export default ItemDetail;