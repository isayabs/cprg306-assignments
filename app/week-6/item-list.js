"use client";
import { useState } from "react";
import Item from "./item";
import items from "./items.json"

export default function ItemList () {
    const [sortBy, setSortBy] = useState("name");

    const sorted = [...items].sort((a, b) => {
        if (sortBy === "name") {
            return a.name.localeCompare(b.name)
        };

        const byCategory = a.category.localeCompare(b.category);
        return byCategory !== 0 ? byCategory : a.name.localeCompare(b.name);
    });

    const btnBase =
        "px-3 py-1 rounded border text-sm font-medium transition";
    const active =
        "bg-[#2D3047] text-[#93B7BE] border-[#2D3047] dark:bg-[#93B7BE] dark:text-[#2D3047] dark:border-[#93B7BE]";
    const inactive =
        "bg-white text-[#2D3047] border-[#2D3047] hover:bg-[#2D3047]/5 dark:bg-[#2D3047] dark:text-[#93B7BE] dark:border-[#93B7BE] dark:hover:bg-[#93B7BE]/10";

    return (
        <section>
            <div className = "mb-4 flex gap-2">
                <p className = "text-[#93B7BE]">
                    Sort by:
                </p>

                <button
                    onClick={() => setSortBy("name")}
                    className={`${btnBase} ${sortBy === "name" ? active : inactive}`}
                >
                    Name
                </button>

                <button
                    onClick={() => setSortBy("category")}
                    className={`${btnBase} ${sortBy === "category" ? active : inactive}`}
                >
                    Category
                </button>
            </div>

            <ul className="space-y-3">
                {sorted.map((item) => (
                    <Item
                        key={item.id}
                        className="border rounded-lg p-4 shadow-sm max-w-xl mx-auto
                                even:bg-[#93B7BE] even:text-gray-900
                                odd:bg-[#2D3047] odd:text-white"
                        name={item.name}
                        quantity={item.quantity}
                        category={item.category}
                    />
                ))}
            </ul>
        </section>
    );
} 