export default function Item({ name, quantity, category, className = "", onSelect }) {
  const handleClick = () => {
    if (onSelect) onSelect({ name, quantity, category })
  }

  return (
    <li 
      onClick={handleClick}
      className={className}
    >
      <p className="font-semibold">{name}</p>
      <p>Quantity: {quantity}</p>
      <p className="capitalize">Category: {category}</p>
    </li>
  );
}