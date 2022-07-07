import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";



const CartWidget = () => {
  const amount = 0;
  return (
    <>
    <FontAwesomeIcon icon={faShoppingCart} />
    <span className="ps-4">{amount}</span>
    </>
  );
};

export default CartWidget;
