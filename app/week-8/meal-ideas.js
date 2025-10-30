"use client";
import { useState, useEffect } from "react";

async function fetchMealIdeas (ingredient) {
    if (!ingredient) return [];
    
    try {
        const response = await fetch (
            `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`
        );

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();        
        return data.meals ?? [];

    } catch (err) {
        console.error(err);
        return [];
    }
}

export default function MealIdeas ({ ingredient }) {
    const [meals, setMeals] = useState ([]);
    const [error, setError] = useState (null);

    async function loadMealIdeas () {
        try {
        const list = await fetchMealIdeas(ingredient);
        setMeals(list);
        setError(null);
        } catch (err) {
            setError(err);
        }
    }

    useEffect(() => {
        loadMealIdeas();
    }, [ingredient]);

    if (error) {
        return (
            <main>
                <h1>Meal Ideas Fetch Error</h1>
                <p>{error.message}</p>
            </main>
        )
    }
    
    return (
        <main>
            <div className="
                p-6 rounded-lg shadow-md
                bg-[#93B7BE]
                border border-[#93B7BE]/40
                dark:bg-[#2D3047]
                dark:border-[#93B7BE]/30
                "
            >
                <header>
                    <h2 className="mb-4 text-xl font-semibold text-[#2D3047] dark:text-[#93B7BE]">
                        Meal Ideas {ingredient ? `for “${ingredient}”` : "(select an ingredient)"}
                    </h2>
                </header>

                {!ingredient && (
                    <p className = "text-sm text-gray-400">
                        Choose an ingredient to see ideas.
                    </p>
                )}

                {ingredient && meals.length === 0 && (
                    <p className = "text-sm text-gray-400">
                        No meal ideas found.
                    </p>
                )}

                <ul className = "grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {meals.map((meal) => (
                        <li 
                            key = {meal.idMeal}
                            className ="
                                rounded-xl border
                                bg-[#2D3047] text-[#93B7BE] border-[#2D3047]/20
                                dark:bg-[#93B7BE] dark:text-[#2D3047] dark:border-[#93B7BE]/30
                                px-4 py-3 shadow-sm
                                transition hover:shadow-md
                                hover:border-[#2D3047]/40 dark:hover:border-[#93B7BE]/60
                                focus:outline-none focus:ring-2 focus:ring-offset-2
                                focus:ring-[#93B7BE] dark:focus:ring-[#93B7BE] dark:focus:ring-offset-[#0b0b0b]
                            "
                        >
                            <div className="flex items-center gap-3">
                                <img src={meal.strMealThumb} alt="" className="h-12 w-12 rounded-md object-cover" />
                                <span className="font-semibold leading-snug">{meal.strMeal}</span>
                            </div>
                        </li>
                    ))}
                </ul>

            </div>
        </main>
    );
}