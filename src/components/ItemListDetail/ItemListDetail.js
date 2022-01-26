import { useEffect, useState } from "react";
import { getItem } from "../Bd/BaseDatos";
import ItemDetail from "../ItemDetail/ItemDetail";

function ItemListDetail (){
    const [detailProducts, setDetailProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    
    useEffect(() => {
      setIsLoading(true);
      getItem()
        .then((data) => setDetailProducts(data))
        .catch((error) => console.error(error))
        .finally(() => setIsLoading(false));
    }, []);
    
    return (
      <div>
      {isLoading ? (
        <p>Cargando...</p>
      ) : (
        detailProducts.map((product) => <ItemDetail key={product.id} product={product} />)
      )}
    
    
    </div>
    
    );
}

export default ItemListDetail;
  
