import React from "react"
import ClaudeRecipe from "./ClaudeRecipe.jsx";
import IngredientsList from "./IngredientsList.jsx";
import {getRecipeFromMistral} from "../ai.js";

export default function Main() {

    const [ingredients, setIngredients] = React.useState([])

    function addIngredient(formData) {
        const newIngredient = formData.get("ingredient")
        setIngredients(prevIngredients => [...prevIngredients, newIngredient])
    }

    const [isShown, setIsShown] = React.useState(false)

    const [aiRecipe, setAiRecipe] = React.useState('')

    const getRecipe = async () => {
        setAiRecipe(await getRecipeFromMistral(ingredients))
        setIsShown(prevVal => !prevVal)
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
                getRecipe={getRecipe}
            />: <p>Type in your first component!</p> }
            {isShown &&
                <ClaudeRecipe
                    aiRecipe = {aiRecipe}
                />
            }
        </main>
    )
}