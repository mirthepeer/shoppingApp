import { Context } from "../context/Context"
import { useContext, useEffect } from "react"
import { useParams } from "react-router-dom"
import Product from "../components/Product"

export default function CategoryItems(){
    const {category} = useParams()
    const  {setProducts, products, handleAdd, cart, removeItem} = useContext(Context)
    
    useEffect(()=>{
        fetch(`https://fakestoreapi.com/products/category/${category}`)
        .then(res=>res.json())
        .then(data=>setProducts(data))
    },[])

    const catagoryItemsList = products.map(item=>{
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
            <h1>Shop <span className="category-item">{category}</span></h1>
        </div>
        <div className="container">
            {catagoryItemsList}
        </div>
        </>
    )
}