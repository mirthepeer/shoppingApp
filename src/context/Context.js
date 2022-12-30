import { createContext, useEffect, useState } from 'react';

const Context = createContext();

function ContextProvider({ children }) {
  const [cart, setCart] = useState([]);
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(data => setProducts(data));
  }, []);

  function handleAdd(newItem) {
    console.log(cart);
    setCart(prev => [...prev, newItem]);
  }

  function removeItem(id) {
    setCart(prev => prev.filter(prod => prod.id !== id));
  }

  function emptyCart() {
    setCart([]);
  }

  return (
    <Context.Provider
      value={{ cart, products, handleAdd, removeItem, emptyCart }}
    >
      {children}
    </Context.Provider>
  );
}

export { Context, ContextProvider };
