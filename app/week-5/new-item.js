"use client"; 

import { useState } from "react";

export default function NewItem() {
    const [quantity, setQuantity] = useState(1);
    const [name, setName] = useState("");
    const [category, setCategory] = useState("produce");

    const increment = () => {
        setQuantity((qty) => Math.min(20, qty + 1));
    };

    const decrement = () => {
        setQuantity((qty) => Math.max(1, qty - 1));
    };

    return (
        <section className="p-4">
            <div className="flex flex-col items-center gap-2 mb-2">
                <p>
                    <span className="font-medium text-[#2D3047] dark:text-[#93B7BE]">
                        Quantity:
                    </span>{" "}
                    <span className="text-lg font-semibold text-[#2D3047] dark:text-[#93B7BE]">
                        {quantity}
                    </span>
                </p>

                <div className="flex gap-2">
                   <button
                        onClick = {decrement}
                        disabled = {quantity === 1}
                        className="px-3 py-1 rounded  text-[#2D3047] dark:text-[#93B7BE] disabled:opacity-50 outline outline-2 outline-[#2D3047] dark:outline dark:outline-2 dark:outline-[#93B7BE]"
                        >
                        -
                    </button>

                    <button
                        onClick = {increment}
                        disabled = {quantity === 20}
                        className="px-3 py-1 rounded bg-[#2D3047] dark:bg-[#93B7BE] text-[#93B7BE] dark:text-[#2D3047] disabled:opacity-50 outline outline-2 outline-[#2D3047] dark:outline dark:outline-2 dark:outline-[#93B7BE]"
                        >
                        +
                    </button> 
                </div>
            </div>

            <p className="mt-4 text-sm text-gray-600 dark:text-gray-400 text-center">
                Allowed range: 1-20
            </p>
        </section>
    );
}