import React, { useState } from "react";

export default function Form() {
    const [ingredients, setIngredients] = useState([])

    const ingredientsListItems = ingredients.map(ingredient => (
        <li key={ingredient}>{ingredient}</li>
    ))


    function addIngredient(e) {
        e.preventDefault()
        const formData = new FormData(e.currentTarget)
        const newIngredient = formData.get("ingredient")

        setIngredients(prevIngredients => [
            ...prevIngredients, newIngredient
        ])
    }

    return (
        <main>
            <form onSubmit={addIngredient} className="add-ingredient-form">
                <input
                    type="text"
                    placeholder="e.g. oregano"
                    aria-label="Add ingredient"
                    name="ingredient"
                />
                <button type="submit">
                    Add ingredient
                </button>
            </form>
            <ul className="ingredients-list">
                {ingredientsListItems}
            </ul>
        </main>
    )
}