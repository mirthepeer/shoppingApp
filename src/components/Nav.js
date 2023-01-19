import { Link } from "react-router-dom";
import { Context } from "../context/Context";
import { useContext, useEffect, useState } from "react";

export default function Nav() {
  const { cart, currentPage, setCurrentPage } = useContext(Context);
  const cartIcon =
    cart.length > 0 ? (
      <i class="ri-shopping-cart-fill"></i>
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
          onClick={() => setCurrentPage("home")}
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
        <div className="responsive-items">
          <Link
            to="/cart"
            onClick={() => {
              setCurrentPage("cart");
              setToggle(false);
            }}
          >
            <p
              className={`nav-item accent ${
                currentPage === "cart" ? "active" : ""
              }`}
            >
              {cartIcon}
            </p>
          </Link>
          {hamburgerIcon}
        </div>
      </div>

      <div className="nav-items display-sm">
        <Link
          onClick={() => {
            toggleNav();
            setCurrentPage("about");
          }}
          style={linkStyle}
          to="/about"
        >
          <p className={`nav-item ${currentPage === "about" ? "active" : ""}`}>
            About
          </p>
        </Link>
        <Link
          onClick={() => {
            toggleNav();
            setCurrentPage("categories");
          }}
          style={linkStyle}
          to="/categories"
        >
          <p
            className={`nav-item ${
              currentPage === "categories" ? "active" : ""
            }`}
          >
            Categories
          </p>
        </Link>
        <Link
          onClick={() => {
            toggleNav();
            setCurrentPage("products");
          }}
          style={linkStyle}
          to="/products"
        >
          <p
            className={`nav-item ${currentPage === "products" ? "active" : ""}`}
          >
            Products
          </p>
        </Link>
        <Link
          onClick={() => {
            toggleNav();
            setCurrentPage("orders");
          }}
          style={linkStyle}
          to="/orders"
        >
          <p className={`nav-item ${currentPage === "orders" ? "active" : ""}`}>
            Orders
          </p>
        </Link>
       
      </div>
      <div className="nav-items display">
        <Link
          onClick={() => setCurrentPage("about")}
          style={{ ...linkStyle, display: "block" }}
          to="/about"
        >
          <p className={`nav-item ${currentPage === "about" ? "active" : ""}`}>
            About
          </p>
        </Link>
        
        <Link
          onClick={() => setCurrentPage("categories")}
          style={{ ...linkStyle, display: "block" }}
          to="/categories"
        >
          <p
            className={`nav-item ${
              currentPage === "categories" ? "active" : ""
            }`}
          >
            Categories
          </p>
        </Link>

        <Link
          onClick={() => setCurrentPage("products")}
          style={{ ...linkStyle, display: "block" }}
          to="/products"
        >
          <p
            className={`nav-item ${currentPage === "products" ? "active" : ""}`}
          >
            Products
          </p>
        </Link>
        <Link
          onClick={() => setCurrentPage("orders")}
          style={{ ...linkStyle, display: "block" }}
          to="/orders"
        >
          <p className={`nav-item ${currentPage === "orders" ? "active" : ""}`}>
            Orders
          </p>
        </Link>
        <Link
          onClick={() => setCurrentPage("cart")}
          style={{ ...linkStyle, display: "block" }}
          to="/cart"
        >
          <p className={`nav-item ${currentPage === "cart" ? "active" : ""}`}>
            {cartIcon}
          </p>
        </Link>
      </div>
    </nav>
  );
}
