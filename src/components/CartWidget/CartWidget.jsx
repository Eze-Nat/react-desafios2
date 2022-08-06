import React, {useContext,} from "react";
import { faShoppingCart, faArrowUp, faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import '@fortawesome/fontawesome-svg-core';
import '@fortawesome/free-solid-svg-icons';
import { GContext } from "../Cart/CartContext";
import { Link } from "react-router-dom";



const CartWidget = ({ styles }) => {
  const { itemsCarrito } = useContext(GContext);
  return (
    <>
{/*     {itemsCarrito.length === 0 ? (
      <></> ) : ( */}
    <div className=" justify-content-between d-flex gap-3">
    <Link to={"/cart"}><FontAwesomeIcon  icon={faShoppingCart} /></Link>
      
    </div>
  {/*     )} */}
    </>
  );
};

export default CartWidget;
