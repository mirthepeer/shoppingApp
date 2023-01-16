import { Context } from "../context/Context";
import { useContext } from "react";

export default function Orders(){

    const {orders} = useContext(Context)

    const myOrders = orders.map(item=>{
        console.log(item.details.ref)
    })
    
    return (
        <div className="current-tab">
        <p>OrderPage</p>
        </div>
    )


}