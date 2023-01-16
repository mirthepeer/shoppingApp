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
        <div>
            <div className="orders-list">
            {myOrders}
            </div>
        </div>
        
        
        </div>
    )


}