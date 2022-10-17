import axios from "axios";
import createRecipeCardHeader from "./createRecipeCardHeader";


// Try Fetching data from Edaman API
 export default async function randomCardGen( searchQuarry ) {

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
                q: searchQuarry,
                random: true

            }
        } )

        // Store last three hits in const for later use in different function
        const arrayOfRecipes = response.data.hits.splice(0,3);
        createRecipeCardHeader( arrayOfRecipes);

        // Catching error message and show them in the UI
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
