import React, { useContext } from "react";
import { GContext } from "./CartContext";
import CartItem from "./CartItem";
import { Link } from "react-router-dom";

const Cart = () => {
  const { itemsCarrito, removeItem, clear, total } = useContext(GContext);
  const tot = total();
  return (
    <>
    
      {itemsCarrito.length === 0 ? (
        <>
          No hay items! Agrega algunos
          <Link to="/">Volver</Link>
        </>
      ) : (
        <>
          {itemsCarrito.map((element) => (
            <CartItem
              item={element.item}
              quantity={element.quantity}
              removeItem={removeItem}
            />
          ))}
          <div className=" text-center">
          <button className=" align-content-center btn btn-danger m-2" onClick={() => clear()}>
            Vaciar carrito
          </button>
          </div>
          <h1 className=" text-center">El total de la compra es de : {tot}</h1>
        </>
      )}
      
    </>
  );
};

export default Cart;
