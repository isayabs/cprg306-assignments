"use client";
import { useState } from "react";
import Item from "./item";
import items from "./items.json"

export default function ItemList () {
    return (
    <ul className="space-y-3">
      {items.map((item) => (
        <Item
          key={item.name}
          className="border rounded-lg p-4 shadow-sm max-w-xl mx-auto
                     even:bg-[#93B7BE] even:text-gray-900
                     odd:bg-[#2D3047] odd:text-white"
          name={item.name}
          quantity={item.quantity}
          category={item.category}
        />
      ))}
    </ul>
  );
} 