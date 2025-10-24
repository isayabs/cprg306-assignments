"use client";

import { useState } from "react";
import ItemList from "./item-list";
import NewItem from "./new-item";
import itemsData from "./items.json"; 

export default function Page() {
  const [items, setItems] = useState(itemsData);

  const handleAddItem = (item) => {
    setItems((prev) => [...prev, item]);
  };

  return (
    <main className="min-h-screen flex items-center justify-center p-4">
      <div className="max-w-xl w-full">
        <h1 className="text-3xl font-bold text-[#2D3047] dark:text-[#93B7BE] text-left mb-3">
          Shopping List
        </h1>
        <NewItem onAddItem = {handleAddItem}/>
        <ItemList items = {items}/>
      </div>
    </main>
  );
}
