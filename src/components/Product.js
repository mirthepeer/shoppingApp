import {Link} from 'react-router-dom'
export default function Product({item, handleAdd, cart, removeItem}){
    const {rate, count} = item.rating
    const qty = cart.filter(ye=>ye.id===item.id).length
    const  qtyStyle = {fontWeight: qty>0?'400' : ''}
    const linkStyle = {textDecoration: 'none'}
    return (
        
        <div className="card flex-column">
             <Link style={linkStyle} to={`/products/${item.id}`} className="product-link">
                <div className='description'>
                <h4 className="product-title">{item.title} </h4>
                <p className="ratings">{rate}⭐<span className="rating-count">({count})</span></p>
                <div className="card-backdrop" />
                <div className="product-img">
                    <img src={item.image}/> 
                    <h4 className="product-title">${item.price}</h4>
                </div>
                
                </div>
                
           
           </Link> 
           <div className="buttons">
                    <i onClick={()=>handleAdd(item)} class="ri-add-circle-line small"></i>
                    <small style={qtyStyle} className="qty small">{qty}</small>
                    <i  onClick={()=>removeItem(item.id)} class="ri-delete-bin-7-line small"></i>
                </div>
            
            
            
            

        </div>
        
    )
}