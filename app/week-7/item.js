export default function Item({ name, quantity, category, className = "" }) {
  return (
    <li className={className}>
      <p className="font-semibold">{name}</p>
      <p>Quantity: {quantity}</p>
      <p className="capitalize">Category: {category}</p>
    </li>
  );
}