import ItemCount from "../itemCounter/ItemCount";
import "./style.css";
import { useCart } from "../../context/cartContext";
import { useState } from "react";

function ItemDetail ({product}){

const [count, setCount] = useState(1);

const { addItem } = useCart();

const handleClick = () => {
  addItem(product, count )
 };

  
return ( 
     <div>
     <div className="Product">
       <h1>{product.name}</h1>
       <img width={"350px"} src={product.img} alt={product.name} />
       <p>{product.description}</p>
       <p>{product.price}</p>
     </div>
     <ItemCount count={count} setCount={setCount}/>
     <button onClick={handleClick}>Agregar al Carrito</button>
     </div>
);
}

export default ItemDetail;