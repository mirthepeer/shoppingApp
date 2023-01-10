import {useParams} from 'react-router-dom' 
import { useContext, useEffect } from 'react'
import { Context } from '../context/Context'
import Product from '../components/Product'


export default function ProductDescription(){
    const {products, handleAdd, removeItem, cart} = useContext(Context)
    const {id} = useParams()
    const thisProduct = products.find(item=>item.id === parseInt(id))
    const{ title, description, price, image} = thisProduct
    const {rate, count} = thisProduct.rating
    const qty = cart.filter(item=>item.id === parseInt(id)).length
    const suggestions = products.filter(item=> item.id!= id && item.category===thisProduct.category)
    const suggestedItems = suggestions.map(item=>{
        return (
            <Product 
            key={item.id}
            item={item}
            handleAdd={handleAdd}
            cart={cart}
            removeItem={removeItem}
           />
            
        )
    })

    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])

    


    return(
        <>
        <div className='current-tab'>
            <div className='item-detail'>
                <h1 className='item-title'>{title}</h1>
                <img src={image}></img>
                <p className='item-description'>{description}</p>
                <p>{rate} ⭐ <span className='rating-count'>({count})</span></p>
                <p>${price}</p>
                <div className='buttons'>
                    <i onClick={()=>handleAdd(thisProduct)} class="ri-add-circle-line"></i>
                    <p className="qty">{qty}</p>
                    <i onClick={()=>removeItem(thisProduct.id)} class="ri-delete-bin-7-line"></i>
            </div>
        
        
        </div>
        </div>
        <div className='suggestions'>
            <h2 className='center'>You may also like</h2>
            <div className='container'>
                {suggestedItems}
            </div>
        </div>
        
        </>
    )

}