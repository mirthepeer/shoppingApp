import { useContext } from "react"
import { Context } from "../context/Context"
import {Link} from 'react-router-dom'


export default function Categories(){
    const linkStyle = { textDecoration: 'none' };

   const {categories} = useContext(Context)
    console.log(categories)
    
    const categoryList = categories.map(category=>{
        return (
           <Link to={`/categories/${category}`} style={linkStyle}><p className="category-item">{category}</p></Link> 
        )
    })
    
    return (
        <div className="current-tab center">
        <h1>Catagories Page</h1>
        {categoryList}
        </div>
        )
}