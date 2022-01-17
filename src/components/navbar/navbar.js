import CartWidget from '../cartwidget/CartWidget';
import './navbar.css';


function Navbar() {
return (
   
       <nav>
           <ul className="Nav">
               <li><a class="menu" href="">Inicio</a></li>
               <li><a class="menu" href="">Categorias</a></li>
               <li><a class="menu" href="">About Us</a></li>
               <li><a class="menu" href="">Contacto</a></li>
               <CartWidget />
           </ul>
           
        


       </nav>);
}

export default Navbar;