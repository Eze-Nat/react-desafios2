import React, {useEffect, useState} from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import ItemDetallado from "../ProductDetail/ProductDetail";
import Spinner from "../Utilidades/Spinner";
import { getFirestore, doc, getDoc } from "firebase/firestore";


const ItemDetailContainer = () => {
    const [item, setItem] = useState({});
    const [loading, setLoading] = useState(false);
    const params = useParams();
;

    useEffect( () => {
        setLoading(true);
        const db = getFirestore();
      const docRef = doc(db, "items", params.id)
      getDoc(docRef).then((snapshot) => {
        const data = {id: snapshot.id, ...snapshot.data()};
        setItem(data);
      setLoading(false);
    })

    },[]);
    return ( 
        loading ? <Spinner /> : <ItemDetail item={item} />
     );
}
 
export default ItemDetailContainer;