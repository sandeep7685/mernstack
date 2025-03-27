import React, { useState, useEffect } from 'react';
import './App.css';
import SearchBar from './components/SearchBar';
import RecipeList from './components/RecipeList';

function App() {
  const [recipes, setRecipes] = useState([]);
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const allRecipes = [
    {
      title: 'Chow chow bath',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThH886QbJLascyfyS2mFLVhhN3DqXnEUGA4w&s',
      ingredients: ['Semolina', 'Sugar', 'Ghee', 'Vegetables', 'Spices'],
      instructions: 'Prepare khara bath and kesari bath, serve together.'
    },
    {
      title: 'Bisibele bath',
      image: 'https://www.indianhealthyrecipes.com/wp-content/uploads/2021/07/bisi-bele-bath-recipe.jpg',
      ingredients: ['Rice', 'Lentils', 'Vegetables', 'Tamarind', 'Spices'],
      instructions: 'Cook rice and lentils, mix with spices and veggies, serve hot.'
    },
    {
      title: 'Paneer 65',
      image: 'https://static.toiimg.com/photo/75490988.cms',
      ingredients: ['Paneer', 'Spices', 'Cornflour', 'Yogurt'],
      instructions: 'Marinate paneer, fry with spices, garnish with onions.'
    },
    {
      title: 'Corn Soup',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXMIEC4MTWQ3rFYvmYK2uC38avvzQLJNUGVw&s',
      ingredients: ['Corn', 'Vegetable Stock', 'Cream', 'Salt'],
      instructions: 'Boil corn with stock, blend, add cream, season.'
    },
    {
      title: 'Veggie Pizza',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGsO8_BXeu1PTx2mLrb7OPazuxz4hJp273FQ&s',
      ingredients: ['Pizza Dough', 'Cheese', 'Veggies', 'Tomato Sauce'],
      instructions: 'Spread sauce on dough, add veggies and cheese, bake.'
    },
    {
      title: 'Palak Paneer',
      image: 'https://www.vegrecipesofindia.com/wp-content/uploads/2021/06/palak-paneer-1.jpg',
      ingredients: ['Paneer', 'Spinach', 'Spices', 'Cream', 'Onions'],
      instructions: 'Blanch spinach, blend, cook with spices, add paneer and cream.'
    },
    {
      title: 'Masala Dosa',
      image: 'https://www.indianhealthyrecipes.com/wp-content/uploads/2021/06/masala-dosa.jpg',
      ingredients: ['Rice', 'Urad Dal', 'Potatoes', 'Spices', 'Ghee'],
      instructions: 'Ferment batter, make dosa, fill with potato masala, serve with chutney.'
    },
    {
      title: 'Chole Bhature',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLV7xAZVR-Kq2eFVM7H5HDiaHRESqwCeu40w&s',
      ingredients: ['Chickpeas', 'Flour', 'Spices', 'Yogurt', 'Oil'],
      instructions: 'Cook chickpeas with spices, make bhature dough, fry, serve together.'
    },
    {
      title: 'Pav Bhaji',
      image: 'https://www.cookwithmanali.com/wp-content/uploads/2018/05/Best-Pav-Bhaji-Recipe.jpg',
      ingredients: ['Mixed Vegetables', 'Pav Bread', 'Butter', 'Spices', 'Onions'],
      instructions: 'Cook and mash veggies with spices, toast pav with butter, serve.'
    },
    {
      title: 'Aloo Paratha',
      image: 'https://smithakalluraya.com/wp-content/uploads/2015/02/image.1024x1024-95.jpg',
      ingredients: ['Wheat Flour', 'Potatoes', 'Spices', 'Ghee', 'Salt'],
      instructions: 'Make dough, stuff with spiced potatoes, roll, cook with ghee.'
    },
    {
      title: 'Manchurian',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTU_ttDk97HXDDPI5LfxVcHS_ipTDmtTJ6QXA&s',
      ingredients: ['Vegetables', 'Soy Sauce', 'Cornflour', 'Garlic', 'Spring Onions'],
      instructions: 'Make veggie balls, fry, toss in manchurian sauce, garnish.'
    },
    {
      title: 'Idli Sambar',
      image: 'https://cdn.dotpe.in/longtail/store-items/8743301/z0ykB96v.webp',
      ingredients: ['Rice', 'Urad Dal', 'Lentils', 'Vegetables', 'Spices'],
      instructions: 'Ferment batter, steam idlis, cook sambar with lentils and veggies.'
    },
    {
      title: 'Gulab Jamun',
      image: 'https://www.cookwithmanali.com/wp-content/uploads/2014/10/Gulab-Jamun-Recipe.jpg',
      ingredients: ['Milk Powder', 'Flour', 'Sugar', 'Ghee', 'Cardamom'],
      instructions: 'Make dough, form balls, fry, soak in sugar syrup, serve.'
    }
  ];

  useEffect(() => {
    console.log('Recipes State:', recipes);
  }, [recipes]);

  const handleSearch = (query) => {
    setIsLoading(true);
    setTimeout(() => {
      console.log('Search Query:', query);
      if (query.trim() === '') {
        setRecipes([]);
      } else {
        const filtered = allRecipes.filter((recipe) =>
          recipe.title.toLowerCase().includes(query.toLowerCase())
        );
        console.log('Filtered:', filtered);
        setRecipes(filtered);
      }
      setIsLoading(false);
    }, 500);
  };

  const handleRecipeClick = (recipe) => {
    setSelectedRecipe(recipe);
  };

  const handleCloseDetails = () => {
    setSelectedRecipe(null);
  };

  return (
    <div className="App">
      <h1>Recipe Search App</h1>
      <SearchBar onSearch={handleSearch} />
      {isLoading ? (
        <div className="loading">Loading...</div>
      ) : (
        <>
          <RecipeList recipes={recipes} onRecipeClick={handleRecipeClick} />
          {selectedRecipe && (
            <div className="recipe-details">
              <h3>{selectedRecipe.title}</h3>
              <img src={selectedRecipe.image} alt={selectedRecipe.title} className="details-image" />
              <h4>Ingredients:</h4>
              <ul>
                {selectedRecipe.ingredients.map((ingredient, index) => (
                  <li key={index}>{ingredient}</li>
                ))}
              </ul>
              <h4>Instructions:</h4>
              <p>{selectedRecipe.instructions}</p>
              <button onClick={handleCloseDetails}>Close</button>
            </div>
          )}
        </>
      )}
    </div>
  );
}

export default App;