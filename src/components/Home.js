import React from 'react';
import Header from './Header';
import Search from './Search';
import RecipeCard from './RecipeCard';

const Home = ({recipes, onSearch}) => {
    return (
        <div className="home">
            <Header />
            <Search onSearch={onSearch} />
            <div className="recipe-cards">
                {recipes.map((recipeData, index) => (
                <RecipeCard key={index} recipe={recipeData.recipe} />
            ))}
        </div>
    </div>
    );
}

export default Home;
