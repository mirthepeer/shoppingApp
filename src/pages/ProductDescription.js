import {useParams} from 'react-router-dom' 
import { useContext } from 'react'
import { Context } from '../context/Context'


export default function ProductDescription(){
    const {products} = useContext(Context)
    const {id} = useParams()
    const thisProduct = products.find(item=>item.id === parseInt(id))
    const{ title, description, price} = thisProduct
    return(
        <div className='current-tab item-detail container'>
        <h4>{title}</h4>
        <small>{description}</small>
        <small>{price}</small>
        
        </div>
    )

}