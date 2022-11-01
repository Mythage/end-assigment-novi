// Try Fetching data from Edaman API
export default async function createRecipePage(recipe) {
    // console.log(recipe);

    //all information for filling the Nutrients tabel on the page.
    const nutrientEngery = document.getElementById('energy');
    nutrientEngery.innerHTML =`${Math.round(recipe.totalNutrients.ENERC_KCAL.quantity)}`
    const nutrientFat = document.getElementById('fat');
    nutrientFat.innerHTML =`${Math.round(recipe.totalNutrients.FAT.quantity)}`
    const nutrientCarb = document.getElementById('carbs');
    nutrientCarb.innerHTML =`${Math.round(recipe.totalNutrients.CHOCDF.quantity)}`
    const nutrientSuger = document.getElementById('suger');
    nutrientSuger.innerHTML =`${Math.round(recipe.totalNutrients.SUGAR.quantity)}`
    const nutrientProtein = document.getElementById('protein');
    nutrientProtein.innerHTML =`${Math.round(recipe.totalNutrients.PROCNT.quantity)}`
    const nutrientSoduim = document.getElementById('soduim');
    nutrientSoduim.innerHTML =`${Math.round(recipe.totalNutrients.NA.quantity)}`

    //creating the const for getting the required elements that need to be filled with API data.
    const recipeTitel = document.getElementById('recipeName');
    recipeTitel.textContent = recipe.label;

    //creating the elements for the page and fill them with data.
    const img = document.getElementById('recipeImg');
    const coverImg = document.createElement('img');
    coverImg.setAttribute('src', `${ recipe.image }`);
    coverImg.setAttribute('alt', `${ recipe.label }`);
    coverImg.setAttribute('class', 'recipe--img')
// linking the elements to one and other.
    img.appendChild(coverImg);


    //call for function that makes the ingredient list and Nutrients tabel
    ArrToList(recipe);
}
//A function that takes the array of an object location in the APi to make a list from it.
function ArrToList(i){

    // Mapping through the array and creating the list for the ingredients within the Function.
    const ingerdientArr = i.ingredientLines;
    ingerdientArr.forEach(function (item){

        const recipeIngredient = document.getElementById('ingredientList');

        const listIngerdient = document.createElement('li');
        listIngerdient.textContent = item;

        const ingredients = document.createElement("ul");
        ingredients.textContent = "";

        ingredients.appendChild(listIngerdient)
        recipeIngredient.appendChild(ingredients)
    });

    //Mapping through the array and creating the list for the health labels within the Function.
    const healthLabelArr = i.healthLabels;
    healthLabelArr.forEach(function (item){

        const healthLabels = document.getElementById('healthAndNutrients');
        healthLabels.setAttribute('class', 'label__list');

        const healthLabel = document.createElement('li');
        healthLabel.setAttribute('class', 'button button--health')
        healthLabel.textContent = item;

        const listHealthLabel = document.createElement('ul');
        listHealthLabel.setAttribute('class', '')
        listHealthLabel.textContent = "";

        listHealthLabel.appendChild(healthLabel);
        healthLabels.appendChild(listHealthLabel);
    });

}







