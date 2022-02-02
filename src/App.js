import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/HomePage';
import Productos from './pages/productos';
import AboutPage from './pages/about';
import ContactPage from './pages/contacto';
import Navbar from './components/navbar/navbar';
import ProductDetail from './pages/productDetail';
import NotFoundPage from './pages/NotFoundPage';
import Carrito from './pages/carritoPage';


function App() {
 
  return (
    <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path='/'>
       <Route index element={<Home /> } />
       <Route path='/productos'>
         <Route index  element={<Productos/>  }/>
         <Route path=":productId" element={<ProductDetail />} />
       </Route>
       <Route path='/about' element={<AboutPage /> }/>
       <Route path='/contacto' element={<ContactPage /> }/>
       <Route path='/carrito' element={<Carrito />}/>
       <Route path="*" element={<NotFoundPage />} />

      </Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
