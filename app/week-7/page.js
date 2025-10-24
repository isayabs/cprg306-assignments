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
    <main className="min-h-screen p-4">
      <div className="mx-auto w-full max-w-xl">
        <h1 className="mb-4 text-3xl font-bold text-left text-[#2D3047] dark:text-[#93B7BE]">
          Shopping List
        </h1>
        <NewItem onAddItem = {handleAddItem}/>
        <ItemList items = {items}/>
      </div>
    </main>
  );
}
