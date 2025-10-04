"use client"; 

import { useState } from "react";

export default function NewItem() {
    const [quantity, setQuantity] = useState(1);

    return (
        <div>
            <p>Quantity: {quantity}</p>
        </div>
    );
}