
import './App.css';
import Navbar from './components/navbar/navbar';
import { getProductos } from "./components/Bd/BaseDatos";
import { useEffect, useState } from 'react';


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
        products.map((product) => <Item key={product.id} product={product} />)
      )}
      <div>
      </div>
    
    </div>
  );
}

export default App;
