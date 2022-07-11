import React, { useState, useEffect } from "react";
import ItemDatabase from "../Productos/Productos";
import ItemList from "./ItemList";

function ItemListContainer(props) {
  

    let [items, setItems] = useState([]);

      useEffect(
        () => {
          let promiseItems = new Promise( (resolve, reject) => {
            setTimeout(
              () => {
                resolve(ItemDatabase);
              },
              2000);
          } );
          
          promiseItems.then(
            (respuesta) => {
              setItems(ItemDatabase);
          
            }
          ).catch(
            (errorMsg) => console.error(errorMsg)
          )
        },
        []
      )



    return ( 
  <>
    <div className='container'>
      <div className="row gap-3" /* style={{width: "18rem"}} */>
      <h1 className=" text-center">{props.saludo} </h1>
      <ItemList items={items} />

      </div>
    </div>

    </>
  );
}

export default ItemListContainer;