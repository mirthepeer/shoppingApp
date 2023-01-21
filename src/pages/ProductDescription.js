import { useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { Context } from "../context/Context";
import Product from "../components/Product";

export default function ProductDescription() {
  const { products, handleAdd, removeItem, cart } = useContext(Context);
  const { id } = useParams();
  const [thisProduct, setThisProduct] = useState({
    title: '',
    description:'',
    price:'',
    image:'',
    rating:{rate:'',count:''}
  })
  const { title, description, price, image } = thisProduct;
  const { rate, count } = thisProduct.rating;
  const thisProductInCart = cart.find((item) => item.id === thisProduct.id);
  const qty = thisProductInCart ? thisProductInCart.qty : 0;
  const suggestions = products.filter(
    (item) => item.id != id && item.category === thisProduct.category
  );

    useEffect(()=>{
      if(products.length>0){
        setThisProduct(products.find((item) => item.id === parseInt(id)))
      }else{
        fetch(`https://fakestoreapi.com/products/${parseInt(id)}`)
        .then(res=>res.json()).then(data=>setThisProduct(data))
      }

    },[])

  const suggestedItems = suggestions.map((item) => {
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
      <div className="current-tab">
        <div className="item-detail">
          <h1 className="item-title title-1 accent">{title}</h1>
          <p className="rating">
            {rate} ⭐ <span className="rating-count">({count})</span>
          </p>
          <img src={image}></img>
          <p className="item-description">{description}</p>

          <p className="bold accent">${price}</p>
          <div className="buttons">
            <i
              onClick={() => removeItem(thisProduct.id)}
              class="ri-delete-bin-7-line accent"
            ></i>
            <p className="qty">{qty}</p>

            <i
              onClick={() => handleAdd(thisProduct)}
              class="ri-add-circle-line accent"
            ></i>
          </div>
        </div>
      </div>
      <div className="suggestions">
        <h2 className="center accent title-1">You may also like</h2>
        <div className="container">{suggestedItems}</div>
      </div>
    </>
  );
}
