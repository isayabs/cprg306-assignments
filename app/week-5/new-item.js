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

    const submitHandler = (event) => {
        event.preventDefault();

        const item = {
            name,
            quantity,
            category,
        };

        console.log(item);

        alert(`Name: ${name} \nQuantity: ${quantity} \nCategory: ${category}`);

        setName("");
        setQuantity(1);
        setCategory("produce");
    };

    return (
        <section className="p-4">
            <form onSubmit={submitHandler}>
                    <div>
                        <label>
                            Item Name: 
                        </label>
                        <input
                            type = "text"
                            value = {name}
                            onChange = {(e) => setName(e.target.value)}
                            required
                            placeholder = " Enter item name"
                        />
                    </div>

                    <div>
                        <label>
                            Category: 
                        </label>
                        <select
                            value = {category}
                            onChange = {(e) => setCategory(e.target.value)}
                        >
                            <option value = "produce">Produce</option>
                            <option value = "dairy">Dairy</option>
                            <option value = "bakery">Bakery</option>
                            <option value = "meat">Meat</option>
                            <option value = "frozen">Frozen Foods</option>
                            <option value = "canned">Canned Goods</option>
                            <option value = "dry">Dry Goods</option>
                            <option value = "beverages">Beverages</option>
                            <option value = "snacks">Snacks</option>
                            <option value = "household">Househodld</option>
                            <option value = "other">Other</option>
                        </select>
                    </div>

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

                    <button
                        type = "submit"
                    >
                        Add Item
                    </button>
                </form>
        </section>
    );
}