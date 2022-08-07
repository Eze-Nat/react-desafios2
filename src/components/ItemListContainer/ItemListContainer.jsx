import React, { useState, useEffect } from "react";

import ItemList from "../ItemList/ItemList";
import {useParams} from "react-router-dom";
import Spinner from "../Utilidades/Spinner";
import {getFirestore, collection, getDocs} from "firebase/firestore"

const ItemListContainer = () => {
  const { categoria } = useParams();


  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true)
      

    useEffect(() => {
      setLoading(true);
      const db = getFirestore();
      const itemsCollection = collection(db, "items");
      getDocs(itemsCollection).then((snapshot) => {
        const data = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      setItems(data);
      setLoading(false);
    });
  },[categoria]);

  if(loading) {
    return <Spinner />;
  }

    return ( 
  <>
    <div className='container'>
      <div className="row gap-3">
      <h1 className=" text-center">Pagina en construcción </h1>
      <ItemList items={items} />

      </div>
    </div>

    </>
  );
};

export default ItemListContainer;