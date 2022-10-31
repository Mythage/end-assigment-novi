//function to get ingredient or food from API database
import axios from "axios";
import {dataProductSearch} from "./dataProductSearch";

export default async function retrieveProducts(searchQuarry) {
    //Declarations for input values for API
    const URI = "https://api.edamam.com";
    const ENDPOINT = "/api/food-database/v2/parser";
    const API_KEY = "0f2d7f3b71b7cbba944b9c705f77c14b";
    const API_ID = "0f345a3a";
    // extract
    const response = await axios.get(URI + ENDPOINT, {
        params: {
            app_id: API_ID,
            app_key: API_KEY,
            ingr: searchQuarry || null
        }
    })
    // transform
    // console.log(response)
    // return response.data.hints.map(({food, measures}, i) => ({
    //     id: i,
    //     product: food.label,
    //     quantity: measures[0].weight,
    //     measurement: 'gram'
    //
    // }))

    // place the Hits in const for use in function elsewhere.
    const arrayOfPruducts = response.data.hints;
    dataProductSearch(arrayOfPruducts);
}
//reference to from element on the calculator page.
const productSearch = document.getElementById('calorieFrom');
//reference to inputFields on the calculator page.
const product = document.getElementById('product-field');
//send request to function with the data.
productSearch.addEventListener('submit', (e) =>{
    //prevent from to auto submit.
    e.preventDefault();

    retrieveProducts(product.value);
})
