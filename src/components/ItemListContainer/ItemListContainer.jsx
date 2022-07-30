import React, { useState, useEffect } from "react";
import ItemDatabase from "../Productos/Productos";
import ItemList from "../ItemList/ItemList";
import {useParams} from "react-router-dom";
import Spinner from "../Utilidades/Spinner";
import {getDoc, doc, getFirestore} from "firebase/firestore"

function ItemListContainer(props) {
  const { categoria } = useParams();

  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false)
  const promise = new Promise( (resolve) => {
    setTimeout(() => resolve(ItemDatabase), 2000);
      });
      
  useEffect(() => {
    const db = getFirestore();
    const docRef = doc(db, "items", "1");
    getDoc(docRef).then((snapshot) => console.log(snapshot));
  
  
      setLoading(true);
      promise.then((respuesta) => {
        const products = respuesta;
        if (categoria) {
          setItems(products.filter(producto => producto.categoria == categoria));
        }else{
          setItems(products);
        }
        setLoading(false)
      });
  
  
  }, [categoria])


        
        


    if(loading) return <Spinner />


    return ( 
  <>
    <div className='container'>
      <div className="row gap-3">
      <h1 className=" text-center">{props.saludo} </h1>
      <ItemList items={items} />

      </div>
    </div>

    </>
  );
}

export default ItemListContainer;