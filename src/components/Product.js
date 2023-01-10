import {Link} from 'react-router-dom'
export default function Product({item, handleAdd, cart, removeItem}){
    const {rate, count} = item.rating
    const qty = cart.filter(ye=>ye.id===item.id).length
   const  qtyStyle = {fontWeight: qty>0?'400' : ''}
    return (
        <div className="card flex-column">
            <div className="card-backdrop" />
            <div className="product-img">
                <img src={item.image}/> 
            </div>
            <small className="ratings">{rate}⭐<span className="rating-count">({count})</span></small>
            <Link to={`/products/${item.id}`} className="product-link"><h4 className="product-title">{item.title} </h4></Link> 
            <h4 className="product-title">${item.price}</h4>
            
            
            <div className="product-description">
                <div className="buttons">
                    <i onClick={()=>handleAdd(item)} class="ri-add-circle-line small"></i>
                    <small style={qtyStyle} className="qty small">{qty}</small>
                    <i  onClick={()=>removeItem(item.id)} class="ri-delete-bin-7-line small"></i>
                </div>
            </div>

        </div>
        
    )
}