
import { useContext, useEffect, useId } from "react"
import { Context } from "../context/Context"
import { useState } from "react"
import BarLoader from "react-spinners/BarLoader";
import uuid from "react-uuid";

export default function(){
    const {cart, removeItem, emptyCart, handleAdd, orderPlaced, setOrderPlaced, setOrders, orders} = useContext(Context)
    const [showBox, setShowbox] = useState(false)
    const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
    })
    const ref = uuid() 

   useEffect(()=>{
    setOrderPlaced(false)
   },[])

    function placeOrder(ref){
        setShowbox(true)
        setTimeout(()=>emptyCart(ref),2000)
        console.log(orders);
       
        
    }


    const total = cart.length > 0 ? cart.map(item=> item.price * item.qty).reduce((a, b) => {
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
        const CheckoutElemets = cart.map((item, i)=>{
        const qty = cart.find(item=>item.id ===item.id).qty
        return (
            <>
            <div className="wrapper">
            <div className="checkout">
                <small className="item-index">{i+1}.</small>
                <small className="cart-item"><span>{item.title}</span> </small>
                <small className="cart-item-price"> ${item.price} x {qty}</small>
                <div className="add-remove">
                <i onClick={()=>removeItem(item.id)} className="primary-btn add normal" class="ri-delete-bin-7-fill"></i>
                <i onClick={()=>handleAdd(item)}  class="ri-add-circle-line normal"></i>
                </div>
            </div>
            </div>
            <hr></hr>
            </>
        
        )
    })

    const message = cart.length === 0 && <p className="light-weight">Your cart is empty</p>
    const checkoutBtn = cart.length>0 &&  <button onClick={()=>placeOrder(ref)} className="primary-btn center">Place Order</button>
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
        { orderPlaced?
        <div className="order-ref">
        <p className="order-status">Order Reference</p>
        <small className="order-status light">{ref}</small>
        </div> : 
        
        ''

        }
        

        </div>
       
        </>
    )
}