import { InferenceClient } from '@huggingface/inference';

const SYSTEM_PROMPT = `
You are an assistant that receives a list of ingredients that a user has and suggests a recipe they could make with some or all of those ingredients. You don't need to use every ingredient they mention in your recipe. The recipe can include additional ingredients they didn't mention, but try not to include too many extra ingredients. Format your response in markdown to make it easier to render to a web page
`;

const apiKey = import.meta.env.VITE_HF_ACCESS_TOKEN;

export async function getRecipeFromMistral(ingredientsArr) {
    // Validierung der Eingabe
    if (!Array.isArray(ingredientsArr) || ingredientsArr.length === 0) {
        throw new Error("Ingredients must be a non-empty array.");
    }

    // Umgebungsvariable prüfen
    if (!apiKey) {
        throw new Error("Hugging Face access token is not set in the environment variables.");
    }

    const hf = new InferenceClient(apiKey);
    const ingredientsString = ingredientsArr.join(", ");

    try {
        const response = await hf.chatCompletion({
            model: "mistralai/Mixtral-8x7B-Instruct-v0.1",
            provider: "together",
            messages: [
                { role: "system", content: SYSTEM_PROMPT },
                { role: "user", content: `I have ${ingredientsString}. Please give me a recipe you'd recommend I make!` },
            ],
            max_tokens: 1024,
            temperature: 0.7
        });

        // API-Antwort validieren
        if (!response || !response.choices || !response.choices[0] || !response.choices[0].message) {
            throw new Error("Invalid response from Mistral API.");
        }

        return response.choices[0].message.content;
    } catch (err) {
        console.error(err.message);
        throw new Error("Failed to fetch recipe from Mistral API.");
    }
}
