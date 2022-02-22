import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../components/ItemDetail/ItemDetail";
import { getFirestore } from "../firebase";


const ProductDetail = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);


  useEffect(() => {
   const db = getFirestore();
   const productsCollection = db.collection("products");
   const selectorProduct = productsCollection.doc(productId);
   
   setIsLoading(true);
   selectorProduct.get().then((response) => {
     if (!response.exists) console.log("el producto existe");
     setProduct({...response.data(), id: response.id})
   }).catch((err) => setError(true)
   ).finally(() => setIsLoading(false));
  }, [productId]);

  if (isLoading || !product) return <p>Cargando...</p>
  else if (error) return <p>ha habido un error;</p>;
  
  return (
    <div>
     <ItemDetail product={product} />
    </div>
  );
};

export default ProductDetail;