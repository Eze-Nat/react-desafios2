import React from "react";

const CartItem = ({ item, quantity, removeItem }) => {
  const { nombre, precio, img } = item;
  return (
    <div className="flex">
    <div className=" text-center">
       {nombre} - ${precio} - Cantidad: {quantity} 
      <button className="btn btn-info m-2" onClick={() => removeItem(item.id)}>
        Eliminar
      </button>
    </div>
    </div>
  );
};

export default CartItem;