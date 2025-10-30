import React from "react"
import ClaudeRecipe from "./ClaudeRecipe.jsx";
import IngredientsList from "./IngredientsList.jsx";

export default function Main() {

    const [ingredients, setIngredients] = React.useState([])

    const ingredientsListItems = ingredients.map(ingredient => (
        <li key={ingredient}>{ingredient}</li>
    ))

    function addIngredient(formData) {
        const newIngredient = formData.get("ingredient")
        setIngredients(prevIngredients => [...prevIngredients, newIngredient])
    }

    const [isShown, setIsShown] = React.useState(false)

    const getARecipe = () => {
        setIsShown(prevState => !prevState)
    }

    return (
        <main>
            <form action={addIngredient} className="add-ingredient-form">
                <input
                    type="text"
                    placeholder="e.g. oregano"
                    aria-label="Add ingredient"
                    name="ingredient"
                />
                <button>Add ingredient</button>
            </form>
            { ingredients.length > 0 ? <IngredientsList
                ingredients={ingredients}
                ingredientsListItems={ingredientsListItems}
                getARecipe={getARecipe}
            />: <p>Type in your first component!</p> }
            {isShown &&
                <ClaudeRecipe />
            }
        </main>
    )
}