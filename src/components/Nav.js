import { Link } from "react-router-dom";
import { Context } from "../context/Context";
import { useContext, useEffect, useState } from "react";

export default function Nav() {
  const { cart } = useContext(Context);
  const cartIcon =
    cart.length > 0 ? (
      <i class="ri-shopping-cart-fill">({cart.length})</i>
    ) : (
      <i class="ri-shopping-cart-2-line"></i>
    );
  const [toggle, setToggle] = useState(false);
  const linkStyle = {
    textDecoration: "none",
    color: " rgb(66, 42, 34)",
    fontSize: "1.5rem",
    display: toggle ? "block" : "none",
  };

  const toggleNav = () => setToggle((prev) => !prev);

  const hamburgerIcon = toggle ? (
    <i onClick={() => toggleNav()} class="ri-close-line hamburger"></i>
  ) : (
    <i onClick={() => toggleNav()} class="ri-menu-line hamburger"></i>
  );

  return (
    <nav>
      <div className={`nav-responsive ${toggle ? "border-bottom" : ""}`}>
        <Link
          style={{
            textDecoration: "none",
            color: " rgb(66, 42, 34)",
            fontSize: "1.8rem",
            fontWeight: "800",
            paddingLeft: ".4em",
          }}
          to="/"
        >
          ShopEZ.
        </Link>
        {hamburgerIcon}
      </div>

      <div className="nav-items display-sm">
        <Link onClick={() => toggleNav()} style={linkStyle} to="/about">
          <p className="nav-item">About</p>
        </Link>
        <Link onClick={() => toggleNav()} style={linkStyle} to="/categories">
          <p className="nav-item">Categories</p>
        </Link>
        <Link onClick={() => toggleNav()} style={linkStyle} to="/products">
          <p className="nav-item">Products</p>
        </Link>
        <Link onClick={() => toggleNav()} style={linkStyle} to="/cart">
          <p className="nav-item">{cartIcon}</p>
        </Link>
      </div>
      <div className="nav-items display">
        <Link style={{ ...linkStyle, display: "block" }} to="/about">
          <p className="nav-item">About</p>
        </Link>
        <Link style={{ ...linkStyle, display: "block" }} to="/categories">
          <p className="nav-item display">Categories</p>
        </Link>

        <Link style={{ ...linkStyle, display: "block" }} to="/products">
          <p className="nav-item">Products</p>
        </Link>
        <Link style={{ ...linkStyle, display: "block" }} to="/cart">
          <p className="nav-item">{cartIcon}</p>
        </Link>
      </div>
    </nav>
  );
}
