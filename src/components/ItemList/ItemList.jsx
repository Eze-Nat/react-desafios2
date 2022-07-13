import React from 'react';
import ItemCount from '../ItemCount/ItemCount';
import ItemListTest from '../ItemListTest';

export default function ItemList(props) {
  return (
    <>
    {
      props.items.map(
        cadaItem => {
          
          return (
        
        
          <div className="card col-md-2" key={cadaItem.id}>
            <img className="card-img-top img-thumbnail img-fluid mx-auto" style={{width: "10rem"}} src={cadaItem.img} alt={cadaItem.nombre}/>
          <div className="card-body">
            <h5 className="card-title">{cadaItem.nombre}</h5>
            <p className="card-text">{cadaItem.descripcion}</p>
          </div>
          <div className="card-footer">
              <ItemCount stock={cadaItem.stock}/>
              <ItemListTest items={cadaItem} test={"Prueba"}/>
          </div>
          </div>
        
        
          )
        }
      )
    }
  </>
  )
}
