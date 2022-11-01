//function to get ingredient or food from API database
import {addRowtoTable} from "./createProductList";
import {retrieveProducts} from "./retrieveProducts";

async function fetchFoodParser(searchQuarry){

    //if successfully then extract
    try {

        //place the Hits in const for use in function elsewhere.
        const table = document.getElementById("productTabelList")
        const products = await retrieveProducts(searchQuarry)
        addRowtoTable(table, products)

    } catch (e) {
        console.error(e)
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
