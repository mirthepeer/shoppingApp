import { Link } from "react-router-dom";
export default function Product({ item, handleAdd, cart, removeItem }) {
  const { rate, count } = item.rating;
  const inCart = cart.find((ye) => ye.id === item.id);
  const qty = inCart ? inCart.qty : 0;
  const qtyStyle = { fontWeight: qty > 0 ? "400" : "" };
  const linkStyle = { textDecoration: "none" };
  console.log(qty);
  return (
    <div className="card flex-column">
      <Link
        style={linkStyle}
        to={`/products/${item.id}`}
        className="product-link"
      >
        <div className="description">
          <h4 className="product-title">{item.title} </h4>
          <p className="ratings accent">
            {rate}⭐<span className="rating-count">({count})</span>
          </p>
          <div className="card-backdrop" />
          <div className="product-img">
            <img src={item.image} />
            <h4 className="product-title">${item.price}</h4>
          </div>
        </div>
      </Link>
      <div className="buttons">
        <i
          onClick={() => removeItem(item.id)}
          class="ri-delete-bin-7-line small accent"
        ></i>
        <small style={qtyStyle} className="qty small">
          {qty}
        </small>
        <i
          onClick={() => handleAdd(item)}
          class="ri-add-circle-line small accent"
        ></i>
      </div>
    </div>
  );
}
