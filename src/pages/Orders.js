import { Context } from "../context/Context";
import { useContext } from "react";

export default function Orders(){

    const {orders} = useContext(Context)

    const myOrders = orders.map(item=>{
        return (
            <p>{item.details.ref}</p>
        )
    })
    
    return (
        <div className="current-tab">
        <p>OrderPage</p>
        {myOrders}
        </div>
    )


}