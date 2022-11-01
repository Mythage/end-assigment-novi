//function to get ingredient or food from API database
import {addProductsToTable} from "./createProductList";
import {retrieveProducts} from "./retrieveProducts";

let products = [];

async function fetchFoodParser(searchQuery){

    //if successfully then extract
    try {


        //place the Hits in const for use in function elsewhere.
       const table = document.getElementById("productTabelList")
        products = await retrieveProducts(searchQuery)
        addProductsToTable(table, products)

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

const chosenProducts = [];

const addToCalculator = document.getElementById('amount-of-servings-button');
addToCalculator.addEventListener('click', (e) =>{
    //prevent from to auto submit.
    e.preventDefault();
    const chosenProduct = document.querySelector('input[name="product"]:checked');
    const amount = document.getElementById('amount-of-servings');
    if(chosenProduct && amount.value) {

        products.forEach(function(foodItem) {
            if(foodItem.foodId === chosenProduct.value) {
                chosenProducts.push({'food':foodItem, 'amount': amount.value });
            }
        })
        console.log(chosenProducts);
    }
})
