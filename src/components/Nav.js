import {Link} from 'react-router-dom'
import {Context} from "../context/Context"
import { useContext } from 'react'


export default function Nav(){
    const {cart} = useContext(Context)
    return (
    <nav>
        <Link style={{textDecoration: 'none', color:' rgb(66, 42, 34)', fontWeight:'800', paddingLeft:'.4em'}} to='/'>EZPlay</Link>
        <div className='nav-items'>
            <Link style={{textDecoration: 'none', color:' rgb(66, 42, 34)'}} to='/products'>Products</Link>
            <Link style={{textDecoration: 'none', color:' rgb(66, 42, 34)'}} to='/cart'>Cart({cart.length})</Link>
      </div>
    </nav>
    )
}