import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { getproductos } from "../components/Bd/BaseDatos";
import { ProductList } from "../components/Item";


const Productos = () => {
  const [products, setProducts] = useState([]);
const [isLoading, setIsLoading] = useState(false);
  
 useEffect(() => {
  setIsLoading(true);
  getproductos()
    .then((data) => setProducts(data))
    .catch((error) => console.error(error))
     .finally(() => setIsLoading(false));}, []);

  return (
    <div>
      <h1>productos</h1>
      {isLoading ? (
    <p>Cargando...</p>
  ) : (
    products.map((product) => <ProductList key={product.id} product={product} />)
  )}
      <Outlet />
    </div>
  );
};

export default Productos;
