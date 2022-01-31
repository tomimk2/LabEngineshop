import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/HomePage';
import Productos from './pages/productos';
import AboutPage from './pages/about';
import ContactPage from './pages/contacto';
import Navbar from './components/navbar/navbar';
import ProductDetail from './pages/productDetail';


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
      </Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
