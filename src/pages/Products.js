import { useContext } from "react"
import { Context } from "../context/Context"
import Product from "../components/Product"


export default function Products(){
    const {products, handleAdd, cart, removeItem} = useContext(Context)
    console.log(products);
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
        <div className="current-tab">
        <h1 >Products Page</h1>
        </div>
        <hr></hr>
        <div className="container">
        {productElements}
        </div>
        
        
        
        </>
        
    )
}