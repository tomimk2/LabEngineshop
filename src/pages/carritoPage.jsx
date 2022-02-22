import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCart } from "../context/cartContext";
import { getFirestore } from "../firebase";



const Carrito = () => {
   
  const {cart, RemoveItem, ClearAll} = useCart();
  const [name, setName] = useState();
  const [phone, setPhone] = useState();
  let navigate = useNavigate();

  const getTotal = (compra) => {
    let total = 0;
    compra.forEach((element) => {
      total += element.item.price * element.quantity;
    });
    return total;
  };

  const handleSubmit = async (evt) => {
    evt.preventDefault();

    if (!name || !phone) {
      console.log("Por favor llene los campos");
      return false;
    }

    const newOrder = {
      buyer: { name, phone },
      items: cart,
      total: getTotal(cart),
    };

    console.log(newOrder);
    const db = getFirestore();
    const ordersCollection = db.collection("orders");
    const response = await ordersCollection.add(newOrder);
    navigate(`/Finalizar/${response.id}`);
  
  };
  return (
    <div>
      <h1>Carrito</h1>
      <h2>Detalle de la compra:</h2>
      {cart.map((compra) => {
        return ( <div style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          border: "2px solid black",
          width: "550px",
        }}>
            <div style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              width: "500px",
            }} key={compra.item.id}>
              <p>{compra.item.name}</p>
              <p>${compra.item.price}</p>
              <p>{compra.quantity} Unidades</p>
              <p>= $ {compra.item.price * compra.quantity}</p>           
            </div>
            <button onClick={RemoveItem}>X</button></div>
        );
      })}
      <button onClick={ClearAll}>Vaciar Carrito</button>
      <button><Link to="/productos">Seguir comprando</Link></button>
      <h2>Introduzca sus datos:</h2>
      <form style={{
          display: "flex",
          flexDirection: "column",
          border: "4px solid darkblue",
          width: "250px",
        }} onSubmit={handleSubmit}>
        <label htmlFor="name">Nombre</label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Escriba su nombre"
          value={name}
          onChange={(e) => setName(e.target.value)} />
        <label htmlFor="phone">Teléfono</label>
        <input
          type="number"
          id="phone"
          name="phone"
          placeholder="Escriba su teléfono"
          value={phone}
          onChange={(e) => setPhone(e.target.value)} />
        <input type="submit" value="Finalizar compra" />
      </form>
    </div>
  );
};

export default Carrito;