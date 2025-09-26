export default function Item ({name, quantity, category}) {
    return (
        <li>
            <p>{name}</p>
            <p>Quantity: {quantity}</p>
            <p>Category: {category}</p>
        </li>
    )
}