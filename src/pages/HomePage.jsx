import { useEffect, useState } from "react";
import { getCategorias } from "../components/Bd/BaseDatos";
import { CategoryList } from "../components/Item/index";


const Home = () => {
const [products, setProducts] = useState([]);
const [isLoading, setIsLoading] = useState(false);
  
 useEffect(() => {
  setIsLoading(true);
  getCategorias()
    .then((data) => setProducts(data))
    .catch((error) => console.error(error))
     .finally(() => setIsLoading(false));}, []);

    return (
        <div>
        <h1>HomePage</h1>
  {isLoading ? (
    <p>Cargando...</p>
  ) : (
    products.map((product) => <CategoryList key={product.id} product={product} />)
  )}
      </div>);
}

export default Home;

