import React, { useState, } from "react";
import { faArrowUp, faArrowDown,} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "@fortawesome/fontawesome-svg-core";
import "@fortawesome/free-solid-svg-icons";



function ItemCount (props) {
    const {stock} = props;  

  const [amount, setAmount] = useState(0);
  

  const decrease = () => {
    if (amount > 0) {
      setAmount(amount - 1);
    }
  };

  const increase = () => {
    if (amount < stock)
    setAmount(amount + 1);
  };

  return (
    <div className=" text-center">
      <button onClick={decrease}><FontAwesomeIcon icon={faArrowDown} /></button>
      <span className="p-2">{amount}</span>
      <button onClick={increase}><FontAwesomeIcon icon={faArrowUp} /></button>
    </div>
  );
};

export default ItemCount;
