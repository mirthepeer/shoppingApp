import Cart from "../pages/Cart";

import {Link} from 'react-router-dom'
export default function Product({item, handleAdd, cart, removeItem}){
 
    return (
        <div className="card flex-column">
           
            <div className="product-img">
                <img src={item.image}/> 
            </div>
            <Link to={`/products/${item.id}`}><h4 className="product-title">{item.title} </h4></Link> 
            <h4 className="product-title">- ${item.price}</h4>
            
            <div className="product-description">
                <div className="add-btn">
                    <button onClick={()=>handleAdd(item)} className="primary-btn">Add +</button>
                    <small> - {cart.filter(ye=>ye.id===item.id).length} - </small>
                    <button onClick={()=>removeItem(item.id)} className="primary-btn">Remove -</button>
                </div>
            </div>

        </div>
        
    )
}