import "./styles.css";


function ItemCount({count, setCount}){
  

const sumar = () => {
    setCount (count + 1);
};
const restar = () => {

    if (count > 1)  setCount (count - 1);

};

return (
    <div className="stock">
        <button onClick={restar}>-</button><h3>{count}</h3><button onClick={sumar}>+</button>
    </div>
);}

export default ItemCount;