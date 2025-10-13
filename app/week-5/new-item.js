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
            <form 
                onSubmit = {submitHandler}
                className = "mx-auto flex w-full max-w-sm flex-col gap-5"
            >

                {/* Name */}
                <div className = "flex flex-col">
                    <label className = "mb-1 text-sm font-medium text-[#2D3047] dark:text-[#93B7BE]">
                        Item Name:  
                    </label>
                    <input
                        type = "text"
                        value = {name}
                        onChange = {(e) => setName(e.target.value)}
                        required
                        placeholder = "e.g., bananas 🍌"
                        className = "rounded-lg border border-[#2D3047]/40 bg-white px-3 py-2 text-[#2D3047] outline-none ring-0 transition focus:border-[#93B7BE] focus:ring-2 focus:ring-[#93B7BE] dark:border-[#93B7BE]/40 dark:bg-[#2D3047] dark:text-[#93B7BE] dark:focus:border-[#93B7BE]"
                    />
                </div>

                {/* Category */}
                <div className = "flex flex-col">
                    <label className="mb-1 text-sm font-medium text-[#2D3047] dark:text-[#93B7BE]">
                        Category: 
                    </label>
                    <select
                        value = {category}
                        onChange = {(e) => setCategory(e.target.value)}
                        className = "rounded-lg border border-[#2D3047]/40 bg-white px-3 py-2 text-[#2D3047] outline-none transition focus:border-[#93B7BE] focus:ring-2 focus:ring-[#93B7BE] dark:border-[#93B7BE]/40 dark:bg-[#2D3047] dark:text-[#93B7BE]"
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

                {/* Quantity */}
                <div className="rounded-xl border border-[#2D3047]/10 bg-white/70 p-3 text-center shadow-sm
                                dark:border-[#93B7BE]/10 dark:bg-[#2D3047]/60">
                    <p className="mb-2 text-sm text-[#2D3047] dark:text-[#93B7BE]">
                    Quantity:
                    <span className="ml-2 inline-block rounded-full px-2 py-0.5 text-base font-semibold
                                    text-[#2D3047] dark:text-[#93B7BE]">
                        {quantity}
                    </span>
                    </p>

                    <div className="flex items-center justify-center gap-3">
                    <button
                        type="button"
                        onClick={decrement}
                        disabled={quantity === 1}
                        className="h-9 w-9 rounded-lg border border-[#2D3047] text-lg font-bold text-[#2D3047]
                                transition hover:bg-[#2D3047]/5 disabled:cursor-not-allowed disabled:opacity-50
                                dark:border-[#93B7BE] dark:text-[#93B7BE] dark:hover:bg-[#93B7BE]/10"
                    >
                        –
                    </button>

                    <button
                        type="button"
                        onClick={increment}
                        disabled={quantity === 20}
                        className="h-9 w-9 rounded-lg bg-[#2D3047] text-lg font-bold text-[#93B7BE]
                                transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-50
                                dark:bg-[#93B7BE] dark:text-[#2D3047]"
                    >
                        +
                    </button>
                    </div>

                    <p className="mt-2 text-xs text-gray-600 dark:text-gray-400">Allowed range: 1–20</p>
                </div>

                {/* Submit */}
                <button
                    type="submit"
                    className="inline-flex items-center justify-center rounded-xl bg-[#2D3047] px-4 py-2
                            font-semibold text-[#93B7BE] shadow transition hover:opacity-90
                            dark:bg-[#93B7BE] dark:text-[#2D3047]"
                >
                    Add Item
                </button>
            </form>
        </section>
    );
}