import React, {useEffect, useState} from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import ItemDetallado from "../ProductDetail/ProductDetail";
import Spinner from "../Utilidades/Spinner";


const ItemDetailContainer = () => {
    const [item, setItem] = useState({});
    const [loading, setLoading] = useState(false);
    const params = useParams();
    console.log(params);
    const promise = new Promise( (resolve, reject) => {
        setTimeout(() => resolve(ItemDetallado) , 2000)

    });

    useEffect( () => {
        setLoading(true);
        promise.then( (response) => {
            const itemEncontrado = response.filter((item) => item.id == params.id )
            setItem(itemEncontrado[0]);
            setLoading(false);
        })

    },[]);
    return ( 
        loading ? <Spinner /> : <ItemDetail item={item} />
     );
}
 
export default ItemDetailContainer;