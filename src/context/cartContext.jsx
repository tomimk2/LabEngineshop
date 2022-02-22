import { createContext, useContext, useEffect, useState } from "react";

export const CartContext = createContext([]);

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [cartQuantity, setCartQuantity] = useState(0);

  useEffect(() => {
    const getQuantity = () => {
      let quantity = 0;
      cart.forEach((order) => {
        quantity += order.quantity;
      });
      setCartQuantity(quantity);
    };
    getQuantity();
  }, [cart]);

  const addItem = (item, quantity) => {
    const newItem = cart.some((order) => order.item.id === item.id);
  
    if (newItem) {
      const updatedCart = cart.map((order) => {
        if (order.item.id === item.id) {
          return { ...order, quantity: quantity + order.quantity };
        } else {
          return order;
        }
      });
      setCart(updatedCart);
    } else {
    
      setCart((prev) => [...prev, { item, quantity }]);
    }
  };
  const RemoveItem = (id) => {
    setCart((prev) => prev.filter((element) => element.item.id !== id));
  };

const ClearAll = () => {
  setCart ([]);
};
  return (
    <CartContext.Provider value={{ cart, addItem, RemoveItem, ClearAll, cartQuantity}}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);

