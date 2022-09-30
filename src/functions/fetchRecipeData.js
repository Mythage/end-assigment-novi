import axios from "axios";
import createRecipeCard from "./createRecipeCard";

// Try Fetching data from Edaman API
export default async function fetchRecipeData(searchQuery, mealType, cuisineType, diet, time) {

    //Declaration of input values for API
    const URI = "https://api.edamam.com";
    const ENDPOINT = "/api/recipes/v2";
    const API_KEY = "d9ee381f552a7f704393ade7c82cffc0";
    const API_ID = "305c6b1f";

    // if successful then ...
    try {
        //fetch data from API with a fallback to NUll for the parameters
        const response = await axios.get(URI + ENDPOINT,{
            params: {
                type:"public",
                app_id: API_ID,
                app_key: API_KEY,
                q: searchQuery,
                mealType: mealType || null,
                cuisineType: cuisineType || null,
                diet: diet || null,
                time: time || null,
                random: true

            }
        } )
        console.log(response)
        // Store recipe hits to use later in JS
        const arrayOfRecipes = response.data.hits;


        createRecipeCard( arrayOfRecipes);

        // Catching error massage and show them in the UI
    } catch (e) {
        const error = document.getElementById('error-message')

        if (e.response.status === 404) {
            //Execute page not found massage
            error.innerContent = 'page not found'
        } else if (e.response.status === 500) {
            //Execute internal server error massage
            error.innerContent = 'internal server error'
        }
    }
}