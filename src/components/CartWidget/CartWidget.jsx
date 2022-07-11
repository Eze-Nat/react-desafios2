import { faShoppingCart, faArrowUp, faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import '@fortawesome/fontawesome-svg-core';

import '@fortawesome/free-solid-svg-icons';


const CartWidget = () => {
  const amount = 0;
  return (
    <>
    <div className=" justify-content-between d-flex gap-3">
    <FontAwesomeIcon  icon={faShoppingCart} />
      <div>
      
      <span className="p-2">{amount}</span>
        
      </div>
    </div>
    </>
  );
};

export default CartWidget;
