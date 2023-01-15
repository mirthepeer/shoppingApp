
import { useContext, useEffect } from "react"
import { Context } from "../context/Context"
import { useState } from "react"
import BarLoader from "react-spinners/BarLoader";

export default function(){
    const {cart, removeItem, emptyCart, handleAdd, orderPlaced, setOrderPlaced} = useContext(Context)
    const [showBox, setShowbox] = useState(false)
    const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
    })

   useEffect(()=>{
    setOrderPlaced(false)
   },[])

    function placeOrder(){
        setShowbox(true)
        setTimeout(emptyCart,2000)
       
        
    }


    const total = cart.length > 0 ? cart.map(product=> product.price * product.qty).reduce((a, b) => {
        return a + b;
      }) : 0
    
      let orderMessage =  orderPlaced? 'Your order is on its way!' : 
      <BarLoader
      color={	`#422a22`}
      loading={true}
      size={65}
      aria-label="Loading Spinner"
      data-testid="loader"
    />
        const CheckoutElemets = cart.map((product, i)=>{
        const qty = cart.find(item=>item.id ===product.id).qty
        return (
            <>
            <div className="wrapper">
            <div className="checkout">
                <small className="item-index">{i+1}.</small>
                <small className="cart-item"><span>{product.title}</span> </small>
                <small className="cart-item-price"> ${product.price} x {qty}</small>
                <div className="add-remove">
                <i onClick={()=>removeItem(product.id)} className="primary-btn add normal" class="ri-delete-bin-7-fill"></i>
                <i onClick={()=>handleAdd(product)}  class="ri-add-circle-line normal"></i>
                </div>
            </div>
            </div>
            <hr></hr>
            </>
        
        )
    })

    const message = cart.length === 0 && <p className="light-weight">Your cart is empty</p>
    const checkoutBtn = cart.length>0 &&  <button onClick={()=>placeOrder()} className="primary-btn center">Place Order</button>
    const boxVisiblityStyle =  {display: showBox? '' : 'none' } 
    function closeBox(){
        setShowbox(false)
        setOrderPlaced(false)

    }

    return (
        <>
        <div className="current-tab center">
        <h3 className="accent heading medium">Check Out</h3>
        {message}
        
        
        </div>
        <div className="checkout-elements">
        {CheckoutElemets}
        </div>
        <div className="checkout-summary flex flex-column">
        {checkoutBtn}

        {cart.length > 0 && <p className="total"><span>Total: </span>{formatter.format(total)}</p>}
        </div>

        <div style={boxVisiblityStyle} className="order-placed">
        <i onClick={() => closeBox()} class="ri-close-line cross-icon"></i>
        <p className="order-status">{orderMessage}</p>

        </div>
       
        </>
    )
}