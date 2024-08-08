import React from 'react';
import { Link } from 'react-router-dom';
import './RecipeCard.css';

const RecipeCard = ({ recipe }) => {
    
  return (
    <div className="recipe-card">
      <Link to={`/recipe/${encodeURIComponent(recipe.label)}`}>
        <img src={recipe.image} alt={recipe.label} />
        <h3>{recipe.label}</h3>
        <p>{recipe.source}</p>
      </Link>
    </div>
  );
}

export default RecipeCard;
