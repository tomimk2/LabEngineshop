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

  const getTotal = (compra) => {
    let total = 0;
    compra.forEach((element) => {
      total += element.item.price * element.quantity;
    });
    return total;
  };
  const addItem = (item, quantity) => {
    const newItem = { item, quantity };
    setCart((prevState) => [...prevState, newItem]);
  };
  const RemoveItem = (id) => {
 setCart((prev) => prev.filter((element) => element.item.id !== id))
};

const ClearAll = () => {
  setCart ([]);
};
  return (
    <CartContext.Provider value={{ cart, addItem, RemoveItem, ClearAll, cartQuantity, getTotal}}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);