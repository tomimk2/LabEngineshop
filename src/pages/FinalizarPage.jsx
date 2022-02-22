import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useCart } from "../context/cartContext";
import { getFirestore } from "../firebase";

const FinalizarPage = () => {
    const { orderId } = useParams();
    const [order, setOrder] = useState({});
    const {cart} = useCart();
  
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
          <div>
            <h1 style={{ fontSize: "50px", marginLeft:"40%",}}>Felicidades {order.buyer.name}!!</h1> 
            <h5 style={{ fontSize: "25px",}}>Su compra se realizo exitosamente</h5>
            <h5>Detalle de su compra:</h5>
            </div>
            {cart.map((compra) => {
          return ( 
           <div style={{
             display: "flex",
             flexDirection: "row",
             justifyContent: "space-arround",
             width: "500px",
            }} key={compra.item.id}>
          <p>{compra.item.name}</p>
          <p>{compra.quantity} Unidades</p>
          <p>= $ {compra.item.price * compra.quantity}</p>
        </div>
        
    );})}<p>  Total: $ {order.total} </p></div> 
    
    );
  };
  export default FinalizarPage;


  