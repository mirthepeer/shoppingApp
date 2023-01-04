import { createContext, useEffect, useState } from 'react';

const Context = createContext();

function ContextProvider({ children }) {
  const [cart, setCart] = useState([]);
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [categoryProducts, setCategoryProducts] = useState({});

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(data => setProducts(data));
  }, []);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products/categories')
      .then(res => res.json())
      .then(data => setCategories(data));
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

  const getCategoryProducts = async (category = '') => {
    if (categoryProducts[category]) return;

    const prodRes = await fetch(`https://fakestoreapi.com/products/category/${category}`)
    const result = await prodRes.json();
    setCategoryProducts({...categoryProducts, [category]: result});
  };

  return (
    <Context.Provider
      value={{
        cart,
        products,
        handleAdd,
        removeItem,
        emptyCart,
        categories,
        setProducts,
        categoryProducts,
        getCategoryProducts
      }}
    >
      {children}
    </Context.Provider>
  );
}

export { Context, ContextProvider };
