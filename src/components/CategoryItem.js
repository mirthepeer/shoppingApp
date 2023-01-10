import {Link} from 'react-router-dom'

export default function CartegoryItem({category}){
    const linkStyle = { textDecoration: 'none' };
    return (
        <div className='card'>
        <Link className='accent' to={`/categories/${category}`} style={linkStyle}>
            <img src='logo192.png'></img>
            <p className="category-item">{category}</p>

        </Link> 
        </div>
    )
}