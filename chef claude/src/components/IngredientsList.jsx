import React from "react";

export default function IngredientsList({ingredients, ingredientsListItems, getARecipe}) {

    return (
        <section>
            <h2>Ingredients on hand:</h2>
            <ul className="ingredients-list" aria-live="polite">{ingredientsListItems}</ul>
            {ingredients.length > 3 ? <div className="get-recipe-container">
                <div>
                    <h3>Ready for a recipe?</h3>
                    <p>Generate a recipe from your list of ingredients.</p>
                </div>
                <button onClick={getARecipe}>Get a recipe</button>
            </div> : <p>Add at least 4 ingredients and see Claude´s magic!</p>}
        </section>
    )
}