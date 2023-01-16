export default function OrderItem({ item, index }) {
  const { ref, total, date } = item.details;

  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
})

  return (
    <div className="ordered-item accent">
      <div className="order-index flex-column-centered-content">
        <p>{index + 1}.</p>
      </div>
      <div className="order-date flex-column-centered-content">
        <p className="title">Order Date</p>
        <p className="info"> {date}</p>
      </div>
      <div className="amount-paid flex-column-centered-content">
        <p className="title">Total Paid</p>
        <p>{formatter.format(total)}</p>
      </div>
      <div className="order-reference flex-column-centered-content">
        <p className="title">Reference</p>
        <p className="ref">{ref}</p>
      </div>
    </div>
  );
}
