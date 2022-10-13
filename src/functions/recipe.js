import fetchRecipe from "./fetchRecipe";

let recipeId = (window.location.hash.replace('#',''));

fetchRecipe(recipeId);

