export default function Item({ name, quantity, category, className = "", onSelect }) {
  const handleClick = () => {
    if (onSelect) onSelect({ name, quantity, category })
  }

  return (
    <div 
      onClick={handleClick}
      className={className}
    >
      <p className="font-semibold">{name}</p>
      <p>Quantity: {quantity}</p>
      <p className="capitalize">Category: {category}</p>
    </div>
  );
}