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
            <div>
                <header>
                    <h3>
                        Meal ideas {ingredient ? `for “${ingredient}”` : "(select an item)"}
                    </h3>
                </header>

                {!ingredient && (
                    <p>
                        Choose an ingredient to see ideas.
                    </p>
                )}

                {ingredient && meals.length === 0 && (
                    <p>
                        No meal ideas found.
                    </p>
                )}

                <ul>
                    {meals.map((meal) => (
                        <li key = {meal.idMeal}>
                            <p>{meal.strMeal}</p>
                        </li>
                    ))}
                </ul>

            </div>
        </main>
    );
}