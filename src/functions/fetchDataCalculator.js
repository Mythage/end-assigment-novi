//function to get ingredient or food from API database
import axios from "axios";
import dataProductSearch from "./dataProductSearch";

export default async function fetchFoodParser(searchQuarry){

    //Declarations for input values for API
    const URI = "https://api.edamam.com";
    const ENTPOINT = "/api/food-database/v2/parser";
    const API_KEY = "0f2d7f3b71b7cbba944b9c705f77c14b";
    const API_ID = "0f345a3a";

    //if successfully then...
    try{
        const response = await axios.get(URI + ENTPOINT,{
            params:{
                app_id: API_ID,
                app_key: API_KEY,
                ingr: searchQuarry || null
                // upc: searchQuarry || null
            }
        })
        console.log(response)

        //place the Hits in const for use in function elsewhere.
        const arrayOfPruducts = response.data.hints;
        dataProductSearch(arrayOfPruducts);
    } catch (e){
    const error = document.getElementById('error-message');

    if (e.response.status === 404) {
        //Execute page not found massage
        error.innerContent = 'page not found'
    } else if (e.response.status === 500) {
        //Execute internal server error massage
        error.innerContent = 'internal server error'
    }
}

}
//reference to from element on the calculator page.
const productSearch = document.getElementById('calorieFrom');

//reference to inputFields on the calculator page.
const product = document.getElementById('product-field');

//send request to function with the data.
productSearch.addEventListener('submit', (e) =>{
    //prevent from to auto submit.
    e.preventDefault();

    fetchFoodParser(product.value);
})