import { Context } from "../context/Context";
import { useContext } from "react";
import OrderItem from "../components/OrderItem";

export default function Orders(){
   
    const {orders} = useContext(Context)

    const myOrders = orders.map((item,i)=>{
        return (
            <OrderItem
            item= {item}
            index= {i}
            key = {item.details.ref}
            
            />
        )
    })
    
    const noOrdersMessage = <p className="center accent">No Orders Found</p>
    return (
        <div className="current-tab">
        <h1 className="center accent">Past Orders</h1>
        {myOrders.length>0 ? '' : noOrdersMessage }
        { myOrders.length > 0 && 
        <div className="ordered-item accent margin-top-1em italic peach">
      <div className="order-index flex-column-centered-content">
        <p>No.</p>
      </div>
      <div className="order-date flex-column-centered-content">
        <p className="title">Order Date</p>
      </div>
      <div className="amount-paid flex-column-centered-content">
        <p className="title">Total Paid</p>
      </div>
      <div className="order-reference flex-column-centered-content">
        <p className="title">Reference</p>
      </div>
    </div>
    }
       
        <div>
            <div className="orders-list">
            {myOrders}
            </div>
        </div>
        
        
        </div>
    )


}