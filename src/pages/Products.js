import { useContext, useEffect } from "react";
import { Context } from "../context/Context";
import Product from "../components/Product";
import BarLoader from "react-spinners/BarLoader";

export default function Products() {
  const { products, handleAdd, cart, removeItem } = useContext(Context);
  console.log(products)

  const loadingMessage = products.length>0? <BarLoader
   loading={false}
   
  /> :  
  <BarLoader
    color={	`#422a22`}
    loading={true}
    size={65}
    aria-label="Loading Spinner"
    data-testid="loader"
  />

  const productElements = products.map((item) => {
    return (
      <Product
        key={item.id}
        item={item}
        handleAdd={handleAdd}
        cart={cart}
        removeItem={removeItem}
      />
    );
  });

  return (
    <>
      <div className="current-tab center">
        <h1 className="accent">Shop All Products</h1>
      </div>
      <div className="centered-div">
        {loadingMessage}
      </div>
      <div className="container">
        {productElements}
        </div>
    </>
  );
}
