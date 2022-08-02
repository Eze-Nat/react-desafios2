import React, { useState, } from "react";
import { faArrowUp, faArrowDown,} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "@fortawesome/fontawesome-svg-core";
import "@fortawesome/free-solid-svg-icons";



const ItemCount = ({stock, initial = 0, onAdd}) => {

  const [amount, setAmount] = useState(initial);
  

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
    <>
    <div className=" text-center">
      <button onClick={decrease}><FontAwesomeIcon icon={faArrowDown} /></button>
      <span className="p-2">{amount}</span>
      <button onClick={increase}><FontAwesomeIcon icon={faArrowUp} /></button>
    </div>
    <div className="text-center pt-2">
    <button onClick={() => onAdd(amount)} type="button" className="btn btn-info" disabled={amount === 0}>
      Comprar </button>
    </div>
    </>
  );
};

export default ItemCount;
