import React from "react";
import ReactMarkdown from 'react-markdown'


export default function ClaudeRecipe(props) {
    return (
        <section className="suggested-recipe-container">
            <ReactMarkdown>{props.aiRecipe}</ReactMarkdown>
        </section>
    )
}