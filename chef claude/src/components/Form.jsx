export default function Form() {
    const ingredients = ["Chicken", "Oregano", "Tomatoes"]

    const ingredientsListItems = ingredients.map(ingredient => (
        <li key={ingredient}>{ingredient}</li>
    ))

    function addIngredient(e) {
        e.preventDefault()
        const formData = new FormData(e.currentTarget)
        const newIngredient = formData.get("ingredient")

        ingredients.push(newIngredient);
        console.log(ingredients)
    }

    return (
        <main>
            <form className="add-ingredient-form" onSubmit={addIngredient}>
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
            <ul>
                {ingredientsListItems}
            </ul>
        </main>
    )
}