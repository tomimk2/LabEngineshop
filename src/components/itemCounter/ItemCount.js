import { useState } from "react";
import "./styles.css";
function ItemCount(){

const [count, setCount] = useState(1);

const sumar = () => {
    setCount (count + 1);
};
const restar = () => {
    setCount (count - 1);
};

return (
    <div className="stock">
        <h2>Fichas</h2>
        <button onClick={restar}>-</button><h3>{count}</h3><button onClick={sumar}>+</button>
    </div>

);
}

export default ItemCount;