"use client";

import { useState } from "react";
import { useUserAuth } from "../_utils/auth-context";
import ItemList from "./item-list";
import NewItem from "./new-item";
import itemsData from "./items.json"; 
import MealIdeas from "./meal-ideas";

export default function Page() {
  const { user } = useUserAuth();
  const [items, setItems] = useState(itemsData);
  const [selectedItemName, setSelectedItemName] = useState("");

  if (!user) {
    return (
      <main className = "flex items-center justify-center min-h-screen">
        <div className = "text-center bg-[#93B7BE] dark:bg-[#2D3047] p-8 rounded-2xl shadow-lg max-w-md">
          <h1 className = "text-3xl font-bold text-[#2D3047] dark:text-[#93B7BE] mb-4">
            Access Denied
          </h1>

          <p className = "text-[#2D3047] dark:text-[#E8E9EB] mb-6">
            You must be logged in to view the shopping list.
          </p>

          <a
            href="/week-9"
            className ="inline-block rounded-lg bg-[#2D3047] text-[#DDE2E4] px-6 py-2 font-medium shadow transition hover:opacity-80
                        dark:bg-[#93B7BE] dark:text-[#2D3047]"
          >
            Go to Login Page
          </a>
        </div>
      </main>
    );
  }
    

  const handleAddItem = (item) => {
    setItems((prev) => [...prev, item]);
  };

  const handleItemSelect = (item) => {
    if (!item || !item.name) 
    {
      return;
    }

    let name = item.name

    name = name.split(",")[0];

    name = name.replace(
      /([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|\u24C2|\uD83E[\uDD00-\uDDFF])/g,
      ""
    );

    const cleanedName = name.toLowerCase().trim();
    setSelectedItemName(cleanedName);
  };

  return (
    <main className="min-h-screen p-4">
      <div className="mx-auto w-full max-w-6xl">
        <h1 className="mb-6 text-3xl font-bold text-left text-[#2D3047] dark:text-[#93B7BE]">
          Shopping List + Meal Ideas
        </h1>

        <div className="flex flex-col md:flex-row gap-6 items-start">
          <div className="flex-1">
            <NewItem onAddItem={handleAddItem} />
            <ItemList items={items} onItemSelect={handleItemSelect} />
          </div>

          <div className="flex-1">
            <MealIdeas ingredient={selectedItemName} />
          </div>
        </div>
      </div>
    </main>
  );
}
