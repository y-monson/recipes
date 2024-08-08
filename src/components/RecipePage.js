import React from 'react';
import { useParams } from 'react-router-dom';
import './RecipePage.css';

const RecipePage = ({ recipes }) => {
  const { label } = useParams();
  const recipe = recipes.find(r => r.recipe.label === label);

  if (!recipe) {
    return <div>Recipe not found</div>;
  }

  return (
    <div className="recipe-page">
      <h1>{recipe.recipe.label}</h1>
      <img src={recipe.recipe.image} alt={recipe.recipe.label} />
      <h2>Ingredients</h2>
      <ul>
        {recipe.recipe.ingredientLines.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>
      <h2>Instructions</h2>
      <p>{recipe.recipe.url}</p>
    </div>
  );
}

export default RecipePage;
