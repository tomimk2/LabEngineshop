import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { getFirestore } from "../firebase";
import { ProductList } from "../components/Item";

const Productos = () => {
  const [products, setProductos] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const db = getFirestore();
  const productsCollection = db.collection("products");
  const getDataFromFirestore = async () => {
    try {
      const response = await productsCollection.get();
      if (response.empty) console.log("no hay productos");
      setProductos(response.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    } catch (err) {
      setError(err);
    } finally {
      setIsLoading(false);
    }
  };
  useEffect(() => {
getDataFromFirestore();
  }, []);
  if (isLoading) {
    return <p>Cargando los productos ..</p>;
  } else if (error) {
    return <p>ha habido un error</p>;
  } else
    return (
      <div>
        {products.map((product) => {
          return <ProductList key={product.id} product={product} />;
        })}
        <Outlet />
      </div>
    );
};
export default Productos;
