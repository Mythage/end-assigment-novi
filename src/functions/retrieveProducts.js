//Declarations for input values for API
import axios from "axios";

const URI = "https://api.edamam.com";
const ENDPOINT = "/api/food-database/v2/parser";
const API_KEY = "0f2d7f3b71b7cbba944b9c705f77c14b";
const API_ID = "0f345a3a";

export async function retrieveProducts(searchQuarry) {

    // extract data from API.
    const response = await axios.get(`${URI}${ENDPOINT}`, {
        params: {
            app_id: API_ID,
            app_key: API_KEY,
            ingr: searchQuarry ?? null
            //...
        }
    })
    // transform into required object.
    return response.data.hints.map(({ food, measures }) => ({
        foodId: food.foodId,
        product: food.label,
        quantity: measures[0].weight,
        measurement: 'gram'
    }))
}
