import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useCart } from "../context/cartContext";
import { getFirestore } from "../firebase";

const FinalizarPage = () => {
    const { orderId } = useParams();
    const [order, setOrder] = useState({});
    const {getTotal} = useCart();
  
    useEffect(() => {
      const db = getFirestore();
      db.collection("orders")
        .doc(orderId)
        .get()
        .then((res) => setOrder({ id: res.id, ...res.data() }));
    }, [orderId]);
  
    if (!order.id) {
      return <p>Cargando...</p>;
    }
  
    return (
      <div>
        <h1>Gracias por Elegirnos {order.buyer.name}!</h1>
        <h2>Detalle de su compra:</h2>
        <p>{order.items[0].item.name}</p>
        <p>{getTotal}</p>
      </div>
    );
  };
  export default FinalizarPage;