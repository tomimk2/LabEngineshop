
import './App.css';
import Navbar from './components/navbar/navbar';
import { getProductos } from "./components/Bd/BaseDatos";
import { useEffect, useState } from 'react';
import UserCard from './components/Item';
import ItemListDetail from './components/ItemListDetail/ItemListDetail';


function App() {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    getProductos()
      .then((data) => setProducts(data))
      .catch((error) => console.error(error))
      .finally(() => setIsLoading(false));
  }, []);
  return (
    <div className='App'>
      <Navbar></Navbar>
      {isLoading ? (
        <p>Cargando...</p>
      ) : (
        products.map((product) => <UserCard key={product.id} product={product} />)
      )}
      <div>
        <ItemListDetail />
      </div>
    
    </div>
  );
}

export default App;
