import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./styles.css";
function ItemCount(){
    const navigate = useNavigate ();
  const GoCart = () => {
         navigate("/carrito")
  };

const [count, setCount] = useState(1);

const sumar = () => {
    setCount (count + 1);
};
const restar = () => {

    if (count > 1)  setCount (count - 1);

};


return (
    <div className="stock">
        <button onClick={restar}>-</button><h3>{count}</h3><button onClick={sumar}>+</button>
        <button onClick={GoCart}>Agregar al Carrito</button>
    </div>

);
}

export default ItemCount;