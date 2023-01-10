import {Link} from 'react-router-dom'

export default function CartegoryItem({category}){
    const linkStyle = { textDecoration: 'none' };
    let icon
    if(category===`men's clothing`){
        icon = 'ri-men-line large'
    }else if(category===`women's clothing`){
        icon = 'ri-women-line large'
    }else if(category ==='jewelery'){
        icon = 'ri-vip-diamond-line large'
    }else if(category==='electronics'){
        icon= 'ri-computer-line large'
    }
    
    return (
        <div className='card padding'>
        <Link className='accent' to={`/categories/${category}`} style={linkStyle}>
            <i class={icon}></i>
            <p className="category-item">{category}</p>

        </Link> 
        </div>
    )
}