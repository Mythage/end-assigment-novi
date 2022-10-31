//function to get ingredient or food from API database
import {addRowtoTable} from "./createProductList";
import {retrieveProducts} from "./Test";

export default async function fetchFoodParser(searchQuarry){



    //if successfully then extract
    try{

        //place the Hits in const for use in function elsewhere.
        const products = await retrieveProducts(searchQuarry)

        const table = document.getElementById("productTabelList")
        addRowtoTable(table, products)

    } catch (e){
    const error = document.getElementById('error-message');
    console.error(e)
    // if (e.response.status === 404) {
    //     //Execute page not found massage
    //     error.innerContent = 'page not found'
    // } else if (e.response.status === 500) {
    //     //Execute internal server error massage
    //     error.innerContent = 'internal server error'
    // }
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
