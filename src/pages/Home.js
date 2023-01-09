import { Link } from 'react-router-dom';
export default function Home() {
  const linkStyle = { textDecoration: 'none' };
  return (
    <div className="current-tab">
      <div className="jumbotron-landing">
        <img src="landing.jpg" alt="landing screen" />
        <div className="jumbotron-heading">
          <h1 className="jumbotron-heading-1">Shop</h1>
          <h1 className="jumbotron-heading-2">EZ.</h1>
        </div>
      </div>
      <div className="hero">
        <div className="hero-description">
        <p>
          Shop with us for clothing, jewelry, and electronics. Wide selection,
          competitive prices. Excellent customer service.
        </p>
        
        <Link style={linkStyle} to="/products">
          <button className="secondary-btn">Browse Products</button>
        </Link>
        </div>
      </div>
      <span style={{ visibility: 'hidden' }}>
        <a href="https://www.freepik.com/free-vector/online-shopping-concept-illustration_7010823.htm#query=shopping&position=3&from_view=search&track=sph">
          Image by storyset
        </a>
        on Freepik
      </span>
    </div>
  );
}
