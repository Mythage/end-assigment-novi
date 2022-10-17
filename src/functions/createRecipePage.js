// Try Fetching data from Edaman API
export default async function createRecipePage(recipe) {
    console.log(recipe);

    //all information for filling the Nutrients tabel on the page
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

    const recipeLabel = document.getElementById('recipeLabel');
    recipeLabel.setAttribute('class', '');

    const healthAndNutrients = document.getElementById('healthAndNutrients');
    healthAndNutrients.setAttribute('class', '')

    const recipeInfo = document.getElementById('recipeInfo');
    recipeInfo.setAttribute('class', '');

    const recipeImg = document.getElementById('img-container');
    recipeInfo.setAttribute('class', '');

    const recipeTitle = document.createElement('h1');
    recipeTitle.textContent = recipe.label;

    const coverImg = document.createElement('img');
    coverImg.setAttribute('src', `${ recipe.image }`);
    coverImg.setAttribute('alt', `${ recipe.label }`);

    const ingredientsTag = document.createElement('h4');
    ingredientsTag.innerHTML = 'ingredients';

    const healthLabelTag = document.createElement('h4');
    healthLabelTag.textContent = 'Health labels';

    recipeLabel.appendChild(recipeTitle);
    recipeImg.appendChild(coverImg);
    recipeInfo.appendChild(ingredientsTag);
    healthAndNutrients.appendChild(healthLabelTag);
    recipeInfo.appendChild(ArrToList(recipe));
}
// <td>${recipe.totalNutrients.FAT}</td>
// <td>${recipe.totalNutrients.CHOCDF}</td>
// <td>${recipe.totalNutrients.SUGER}</td>
// <td>${recipe.totalNutrients.PROCNT}</td>
// <td>${recipe.totalNutrients.NA}</td>
function ArrToList(i){
    const ingerdientArr = i.ingredientLines;
    ingerdientArr.forEach(function (item){

        const listIngerdient = document.createElement('li');
        listIngerdient.textContent = item;

        const recipeInfo = document.getElementById('recipeInfo');
        recipeInfo.setAttribute('class', '');

        const ingredients = document.createElement("ul");
        ingredients.textContent = "";

        ingredients.appendChild(listIngerdient)
        recipeInfo.appendChild(ingredients)
    });

    const healthArr = i.healthLabels;
    healthArr.forEach(function (item){

        const healthLabel = document.createElement('li');
        healthLabel.setAttribute('class', 'button button--health')
        healthLabel.textContent = item;

        const listHealthLabel = document.createElement('ul');
        listHealthLabel.textContent = "";

        const healthLabels = document.getElementById('healthAndNutrients');
        healthLabels.setAttribute('class', '');

        listHealthLabel.appendChild(healthLabel);
        healthLabels.appendChild(listHealthLabel);
    });

}







