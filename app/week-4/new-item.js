"use client"; 

import { useState } from "react";

export default function NewItem() {
    const [quantity, setQuantity] = useState(1);

    const increment = () => {
        setQuantity((qty) => Math.min(20, qty + 1));
    };

    const decrement = () => {
        setQuantity((qty) => Math.max(1, qty - 1));
    };

    return (
        <div>
            <p>Quantity: {quantity}</p>

            <button
                onClick = {decrement}
                disabled = {quantity === 1}
                >
                -
            </button>

            <button
                onClick = {increment}
                disabled = {quantity === 20}
                >
                +
            </button>
        </div>
    );
}