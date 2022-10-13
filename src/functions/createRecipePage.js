// Try Fetching data from Edaman API
export default async function createRecipePage(recipe) {
    console.log(recipe);

    const recipeLabel = document.getElementById('recipeLabel');
    recipeLabel.setAttribute('class', '');

    const healthAndNutrients = document.getElementById('healthAndNutrients');
    healthAndNutrients.setAttribute('class', '')

    const recipeInfo = document.getElementById('recipeInfo');
    recipeInfo.setAttribute('class', '');

    const recipeTitle = document.createElement('h1');
    recipeTitle.textContent = recipe.label;

    const recipeImg = document.createElement('img');
    recipeImg.setAttribute('src', `${ recipe.image }`);
    recipeImg.setAttribute('alt', `${ recipe.label }`);

    const ingredientsTag = document.createElement('h4');
    ingredientsTag.innerHTML = 'ingredients';

    const healthLabelTag = document.createElement('h4');
    healthLabelTag.textContent = 'Health labels';

    recipeLabel.appendChild(recipeTitle);
    recipeInfo.appendChild(recipeImg);
    recipeInfo.appendChild(ingredientsTag);
    healthAndNutrients.appendChild(healthLabelTag);
    recipeInfo.appendChild(ArrToList(recipe));



}
function ArrToList(i){
    const ingerdientArr = i.ingredientLines;
    ingerdientArr.forEach(function (item){
        console.log(item)
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
        console.log(item)
        const healthLabel = document.createElement('li');
        healthLabel.textContent = item;

        const listHealthLabel = document.createElement('ul');
        listHealthLabel.textContent = "";

        const healthLabels = document.getElementById('healthAndNutrients');
        healthLabels.setAttribute('class', '');

        listHealthLabel.appendChild(healthLabel);
        healthLabels.appendChild(listHealthLabel);
    });
}






