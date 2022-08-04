import React from "react";
import { Routes, Route } from "react-router-dom";
import ItemListContainer from "../Item/ItemListContainer";
import ItemDetailContainer from "../ItemDetail/ItemDetailContainer";
import Cart from "../Cart/Cart";

const RoutesDef = () => {
  return (
    <Routes>
    <Route index path='/' element={<ItemListContainer saludo="Pagina En Construcción!" />}/>
    <Route path='/categoria/:categoria' element={<ItemListContainer/>} />
    <Route path='/productos' element={<ItemListContainer/>} />
    <Route path='/item/:id' element={<ItemDetailContainer/>} />
    <Route path='*' element={<div style={{backgroundColor: "green"}}>ERROR </div>} />
    <Route path='/cart' element={<Cart />} />
    

  </Routes>
  );
};

export default RoutesDef;