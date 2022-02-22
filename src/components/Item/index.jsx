import { useNavigate } from "react-router-dom";
import "./styles.css";

export const CategoryList = ({product}) =>{
       const navigate = useNavigate();

       const GoToProducts = () => {
              navigate("/productos")
       };



return ( <div className="card">
       <p>{product.name}</p>
       <p>{product.category}</p>
       <p>{product.price}</p>
       <button onClick={GoToProducts}>
        Ver más Productos
      </button>
</div>
);
}
export const ProductList = ({product}) =>{
       const navigate1 = useNavigate();
       const GoDetail = () => {
              navigate1(`/productos/${product.id}`)
       }
return ( <div className="card">
       <p>{product.name}</p>
       <p>{product.category}</p>
       <p>{product.price}</p>
       <button onClick={GoDetail}>
        Ver más...
      </button>
</div>
);
}

