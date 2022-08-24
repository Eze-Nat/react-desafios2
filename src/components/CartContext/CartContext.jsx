import { createContext, useState } from "react";
import {
  addDoc,
  collection,
  getFirestore,
  writeBatch,
  query,
  where,
  getDocs,
  documentId,
} from "firebase/firestore";

export const GContext = createContext();

const CartContext = ({ children }) => {
  const [itemsCarrito, setItemCarrito] = useState([]);

/*   const sendOrder = async (totalPrice, buyerData) => {
    const db = getFirestore();
    const orderCollection = collection(db, "orders");
    const order = {
      items: itemsCarrito,
      total: totalPrice,
      buyer: buyerData,
    };

    const batch = writeBatch(db);
    const idList = itemsCarrito.map((product) => product.item.id);
    const withoutStock = [];
    const collectionRef = collection(db, "item");
    const docsResponse = await getDocs(
      query(collectionRef, where(documentId(), "in", idList))
    );
    docsResponse.docs.forEach((doc) => {
      const dataDoc = doc.data();
      const prod = itemsCarrito.find((prod) => prod.item.id === doc.id);

      if (dataDoc.stock >= prod.quantity) {
        batch.update(doc.ref, { stock: dataDoc.stock - prod.quantity });
      } else {
        withoutStock.push({ prod });
      }
    });
    if (withoutStock.length === 0) {
      const addResponse = await addDoc(orderCollection, order);
      batch.commit();
      alert(`Tu compra es: ${addResponse.id}`);
    } else {
      alert(
        "No se pudo completar la compra, no hay items en el carrito"
      );
    }
  };
 */
  const addItem = (item, quantity) => {
    const newItem = isInCart(item);
    if (newItem) {
      quantity = quantity + newItem.quantity;
      setItemCarrito(
        itemsCarrito.splice(
          itemsCarrito.findIndex((element) => element.item.id === item.id),
          1
        )
      );
    }
    setItemCarrito([...itemsCarrito, { item, quantity }]);
  };

  const isInCart = (item) => {
    return itemsCarrito.find((element) => element.item === item);
  };

  const clear = () => {
    setItemCarrito([]);
  };

  const removeItem = (itemId) => {
    setItemCarrito(
      itemsCarrito.filter((element) => element.item.id !== itemId)
    );
  };

  const total = () => {
    return itemsCarrito.reduce(
      (valorAnterior, valorActual) =>
        valorAnterior + valorActual.item.precio * valorActual.quantity,
      0
    );
  };

  return (
    <GContext.Provider
      value={{ itemsCarrito, addItem, removeItem, clear, total, setItemCarrito, /* sendOrder */ }}
/* value={{itemsCarrito, setItemCarrito, sendOrder}} */
    >
      {children}
    </GContext.Provider>
  );
};

export default CartContext;
