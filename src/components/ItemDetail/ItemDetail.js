import ItemCount from "../itemCounter/ItemCount";
import "./style.css";
import { useCart } from "../../context/cartContext";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function ItemDetail ({product}){

  const navigate = useNavigate();

       const GoToCarro = () => {
              navigate("/carrito")
       };
const [count, setCount] = useState(1);

const { addItem } = useCart();

const handleClick = () => {
  addItem(product, count )
 };

  
return ( 
    <div className="card">
     <div className="Product">
       <h1>{product.name}</h1>
       <img width={"250px"} src={product.img} alt={product.name} />
       <p>{product.description}</p>
       <p>{product.price}</p>
     </div>
     <ItemCount count={count} setCount={setCount}/>      
       <button onClick={handleClick}>Agregar al Carrito</button>
       <button onClick={GoToCarro}>Ir al Carrito</button>      
    </div>
);
}

export default ItemDetail;