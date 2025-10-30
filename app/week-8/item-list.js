"use client";
import { useState } from "react";
import Item from "./item";

export default function ItemList ({ items, onItemSelect }) {
    const [sortBy, setSortBy] = useState("name");

    const btnBase =
        "px-3 py-1 rounded border text-sm font-medium transition";
    const active =
        "bg-[#2D3047] text-white border-[#2D3047] dark:bg-[#93B7BE] dark:text-[#2D3047] dark:border-[#93B7BE]";
    const inactive =
        "bg-white text-[#2D3047] border-[#2D3047] hover:bg-[#2D3047]/5 dark:bg-[#2D3047] dark:text-white dark:border-[#93B7BE] dark:hover:bg-[#93B7BE]/10";

    const sorted = [...items].sort((a, b) => {
        if (sortBy === "name") {
            return a.name.localeCompare(b.name)
        };

        const byCategory = a.category.localeCompare(b.category);
        return byCategory !== 0 ? byCategory : a.name.localeCompare(b.name);
    });


    const grouped =
    sortBy === "group"
        ? Object.entries(
                [...items].reduce((acc, item) => {
                (acc[item.category] ??= []).push(item);
                return acc;
                }, {})
            )
            .sort(([a], [b]) => a.localeCompare(b))
            .map(([cat, list]) => [cat, list.sort((a, b) => a.name.localeCompare(b.name))])
        : [];


    return (
        <section className = "mt-4 w-full text-left">
            <div className = "mb-3 flex flex-wrap items-center gap-2">
                <p className = "text-[#2D3047] dark:text-[#93B7BE]">
                    Filter:
                </p>

                <button
                    onClick = {() => setSortBy("name")}
                    className = {`${btnBase} ${sortBy === "name" ? active : inactive}`}
                >
                    Sort by Name
                </button>

                <button
                    onClick = {() => setSortBy("category")}
                    className = {`${btnBase} ${sortBy === "category" ? active : inactive}`}
                >
                    Sort by Category
                </button>

                <button
                    onClick = {() => setSortBy("group")}
                    className = {`${btnBase} ${sortBy === "group" ? active : inactive}`}
                >
                    Group by Category
                </button>
            </div>

            {sortBy !== "group" ? (
                <ul className="space-y-3">
                    {sorted.map((item) => (
                        <Item
                            key = {item.id}
                            className="border rounded-lg p-4 shadow-sm max-w-xl mx-auto
                                        even:bg-[#93B7BE] even:text-gray-900
                                        odd:bg-[#2D3047] odd:text-white
                                        transition cursor-pointer
                                        hover:shadow-md hover:scale-[1.01]
                                        hover:border-[#93B7BE] dark:hover:border-[#93B7BE]/80
                                        hover:brightness-110"
                            name = {item.name}
                            quantity = {item.quantity}
                            category = {item.category}
                            onSelect={() => onItemSelect?.(item)}
                        />
                    ))}
                </ul>
            ) : (
                <div className="space-y-6">
                    {grouped.map(([category, list]) => (
                        <section key = {category}>
                            <h2 className ="mb-2 text-lg font-semibold capitalize text-[#2D3047] dark:text-[#93B7BE]">
                                {category}
                            </h2>
                            <ul className = "space-y-3">
                                {list.map((item) => (
                                    <Item
                                        key = {item.id}
                                        className="border rounded-lg p-4 shadow-sm max-w-xl mx-auto
                                            even:bg-[#93B7BE] even:text-gray-900
                                            odd:bg-[#2D3047] odd:text-white
                                            transition cursor-pointer
                                            hover:shadow-md hover:scale-[1.01]
                                            hover:border-[#93B7BE] dark:hover:border-[#93B7BE]/80
                                            hover:brightness-110"
                                        name = {item.name}
                                        quantity = {item.quantity}
                                        category = {item.category}
                                        onSelect={() => onItemSelect?.(item)}
                                    />
                                ))}
                            </ul>
                        </section>
                    ))}
                </div>
            )}
        </section>
    );
} 