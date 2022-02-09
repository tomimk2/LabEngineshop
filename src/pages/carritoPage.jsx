import { Link } from "react-router-dom";
import { useCart } from "../context/cartContext";

const Carrito = () => {
   
  const {cart, RemoveItem} = useCart();




  return (
    <div>
      <h1>Carrito</h1>
      <div>
      {cart.map((compra) => {
        return (
           <div>
             <p>{compra.item.name}</p>
             <p>{compra.quantity}</p>
             <p>{compra.item.price}</p>
             <button onClick={() => RemoveItem(compra.item.id)}>x</button>
           </div>
        );
      })}
      </div>
      <button><Link to="/productos" >Seguir comprando</Link></button>

    </div>
  );
};

export default Carrito;