import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCart } from "../context/cartContext";
import { getFirestore } from "../firebase";
import "./style.css";

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
    navigate(`/thanks/${response.id}`);
  };
  return (
    <><div>
      <h1>Carrito</h1>
      <h2>Detalle de la compra:</h2>
      {cart.map((compra) => {
        return (
          <div className="styleCarrito2">
            <div key={compra.item.id}>
              <p>{compra.item.img}</p>
              <p>Nombre:
              {compra.item.name}</p>
              <p>$ {compra.item.price * compra.quantity}</p>
            </div>
          <button onClick={RemoveItem}>X</button>
          </div>
        );
      })}
      <h2>Introduzca sus datos:</h2>
      <form className="styleCarrito"
        onSubmit={handleSubmit}>
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
    <button onClick={ClearAll}>Vaciar Carrito</button>
    <button><Link to="/productos">Seguir comprando</Link></button></>
  );
};

export default Carrito;