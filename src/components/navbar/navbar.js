import { Link } from 'react-router-dom';
import CartWidget from '../cartwidget/CartWidget';
import './navbar.css';


function Navbar() {
return (
   
    <nav className='navb'>
          <ul className="Nav">
           <li>
             <Link to="/" className='menu'>Inicio</Link>
           </li>
           <li>
             <Link to="/productos" className='menu'>productos</Link>
           </li>
           <li>
             <Link to="/about" className='menu'>AboutUs</Link>
           </li>
           <li>
             <Link to="/contacto" className='menu'>Contacto</Link>
           </li>
               <CartWidget />
         </ul>
           
        


    </nav>);
}

export default Navbar;
