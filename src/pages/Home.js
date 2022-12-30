import { Link } from "react-router-dom"
export default function Home(){
    const linkStyle = {textDecoration: 'none'}
    return (
        <div className="current-tab">
            <div className="hero">
                <p className="hero-description">Shop with us for clothing, jewelry, and electronics. Wide selection, competitive prices. Excellent customer service.</p>
                <Link style={linkStyle} to='/products'><button className="secondary-btn">Browse Products</button></Link>
            </div>
        </div>


        
    )
}