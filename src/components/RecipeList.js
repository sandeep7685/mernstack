import React from 'react';

function RecipeList({ recipes, onRecipeClick }) {
  return (
    <div>
      <h2>Recipes</h2>
      {recipes.length > 0 ? (
        <ul>
          {recipes.map((recipe, index) => (
            <li
              key={index}
              className="recipe-item"
              onClick={() => onRecipeClick(recipe)}
            >
              <img src={recipe.image} alt={recipe.title} className="recipe-image" />
              <span>{recipe.title}</span>
            </li>
          ))}
        </ul>
      ) : (
        <p>No recipes found.</p>
      )}
    </div>
  );
}

export default RecipeList;