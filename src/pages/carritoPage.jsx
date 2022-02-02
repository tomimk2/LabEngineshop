import { Link } from "react-router-dom";

const Carrito = () => {
   
    
  return (
    <div>
      <h1>Carrito</h1>
      <button><Link to="/productos" >Seguir comprando</Link></button>

    </div>
  );
};

export default Carrito;