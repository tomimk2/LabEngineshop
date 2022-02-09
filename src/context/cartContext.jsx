import { createContext, useContext, useState } from "react";

export const CartContext = createContext([]);

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addItem = (item, quantity) => {
    const newItem = { item, quantity };
    setCart((prevState) => [...prevState, newItem]);
  };
  const RemoveItem = (id) => {
 setCart((prev) => prev.filter((element) => element.item.id !== id))
};
  return (
    <CartContext.Provider value={{ cart, addItem, RemoveItem}}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);