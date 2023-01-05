import {Link} from 'react-router-dom'
import {Context} from "../context/Context"
import { useContext } from 'react'


export default function Nav(){
    const {cart} = useContext(Context)
    const linkStyle = {textDecoration: 'none', color:' rgb(66, 42, 34)', fontSize:'1.5rem'}
    const cartIcon = cart.length>0? <i class="ri-shopping-cart-fill">({cart.length})</i> : <i class="ri-shopping-cart-2-line"></i>
    return (
    <nav>
        <Link style={{textDecoration: 'none', color:' rgb(66, 42, 34)', fontSize:'1.8rem', fontWeight:'800', paddingLeft:'.4em'}} to='/'>ShopEZ.</Link>
        <div className='nav-items'>
            <Link style={linkStyle} to='/categories'><p className='nav-item'>Categories</p></Link>
            <Link style={linkStyle} to='/about'><p className='nav-item'>About</p></Link>
            <Link style={linkStyle} to='/products'><p className='nav-item'>Products</p></Link>
            <Link style={linkStyle} to='/cart'><p className='nav-item'>{cartIcon}</p></Link>
      </div>
    </nav>
    )
}