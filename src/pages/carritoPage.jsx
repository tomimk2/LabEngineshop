import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCart } from "../context/cartContext";
import { getFirestore } from "../firebase";



const Carrito = () => {
   
  const {cart, ClearAll} = useCart();
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
    ClearAll(cart);
    navigate(`/Finalizar/${response.id}`);
  
  };
  if (cart.length === 0) {
    return (
      <div >
        <div >
          <h1>Carrito</h1>
          <h2>El carrito esta vacio, si quieres puedes ver el catálogo de productos</h2>
          <br />
          <button className="btn btn-primary" onClick={() => navigate("/productos")}>Ver catálogo</button>
        </div>
      </div>
    )
  } else {
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
          width: "500px",
        }}>
            <div style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              width: "500px",
            }} key={compra.item.id}>
              <img src={compra.item.img} style={{ maxHeight: '100px', width: '100px' }} alt={compra.item.name} />
              <p>{compra.item.name}</p>
              <p>${compra.item.price}</p>
              <p>{compra.quantity} Unidades</p>
              <p>= $ {compra.item.price * compra.quantity}</p>    
              </div>    
                
            </div>
            
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
        <input type="submit" value="Finalizar compra" className="btn btn-primary mt-2"/>
      </form>
    </div>
  );}
};

export default Carrito;