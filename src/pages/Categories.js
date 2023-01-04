import { useContext } from "react"
import { Context } from "../context/Context"
export default function Categories(){

   const {categories} = useContext(Context)
    
    
    return (
        <div className="current-tab">
        <h1>Catagories Page</h1>
        </div>
        )
}