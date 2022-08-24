import React, { useContext, useEffect, useState } from "react";
import CartItem from "../CartItem/CartItem";
import { Link } from "react-router-dom";
import { GContext } from "../CartContext/CartContext"; 


const Cart = () => {
  
  const { itemsCarrito, sendOrder, removeItem, clear, total } = useContext(GContext);
  const tot = total();

  const handleSubmit = (e) => {
    e.preventDefault();
    const inputs = document.getElementsByTagName("input");
    const data = Array.from(inputs).map((input, index) => input.value);
    sendOrder(tot, { name: data[0], mail: data[1], phone: data[2] });
    // updateOrder();
    // multipleUpdates();
  };
/*   useEffect(() => {
    let total = 0;
    itemsCarrito.forEach(({ item, quantity }) => {
      total += parseInt(item.price) * quantity;
    });
    setTotalPrice(total);
  }, [itemsCarrito]); */
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
          <h1 className=" text-center">El total de la compra es de : ${tot}</h1>
        <form onSubmit={handleSubmit}>
        <input type="text" placeholder="nombre" />
        <input type="email" placeholder="email" />
        <input type="tel" placeholder="celular" />
        
        <button    
          type="submit"
          className="btn btn-info"
        >
          Enviar Pedido
        </button>
      </form>
        </>
      )}
    </>
  );
};

export default Cart;





/* 

import React, { useContext, useState, useEffect } from "react";
import { GContext } from "../CartContext/CartContext"; 
import CartItem from "../CartItem/CartItem";
import { Link } from "react-router-dom";

const Cart = () => {



  const { itemsCarrito, removeItem, clear, total, sendOrder } = useContext(GContext);
  const tot = total();

  const handleSubmit = (e) => {
    e.preventDefault();
    const inputs = document.getElementsByTagName("input");
    const data = Array.from(inputs).map((input, index) => input.value);
    sendOrder(tot, { text: data[0], email: data[1], tel: data[2] });
  };




  return (
    <>
    
     
      
    </>
  );
};

export default Cart;

      <ul>
        {itemsCarrito.map(({ item, quantity }) => (
          <>
            <div key={item.id} className="card" style={{ width: "20rem" }}>
              <img
                className="card-img-top"
                src={item.pictureUrl}
                alt="Card image cap"
              />
              <div className="card-body d-flex flex-column justify-content-center">
                <h5 className="card-title">{item.title}</h5>
                <p className="card-text">{`${item.stock} units available!`}</p>
                <p className="card-text">{`$${
                  ((item.price * item.discount) / 100) * quantity
                } | with a ${item.discount}% discount!`}</p>
              </div>
            </div>
          </>
        ))}
      </ul>
      <h1 className="bg-primary">{`Your total is: $${totalPrice}`}</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" />
        <input type="email" />
        <input type="tel" />
        <button
          // onClick={() => sendOrder(totalPrice)}
          type="submit"
          className="btn btn-info"
        >
          Send order
        </button>
      </form>*/