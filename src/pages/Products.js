import { useContext, useEffect } from "react"
import { Context } from "../context/Context"
import Product from "../components/Product"


export default function Products(){
    const {products, handleAdd, cart, removeItem, setProducts} = useContext(Context)
    useEffect(()=>{
        fetch('https://fakestoreapi.com/products')
        .then(res=>res.json())
        .then(data=> setProducts(data))
    },[])

    const productElements = products.map(item=>{
        
        return (
            <Product key={item.id}
             item={item}
              handleAdd={handleAdd}
               cart={cart}
               removeItem={removeItem}
            />
        )
    })

    return (
        <>
        <div className="current-tab center">
        <h1 >Products Page</h1>
        </div>
        <hr></hr>
        <div className="container">
        {productElements}
        </div>
        
        
        
        </>
        
    )
}