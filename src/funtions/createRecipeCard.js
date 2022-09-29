 export default function createRecipeCard( arr ) {

     const recipeList = document.getElementById('recipe-card-list');
    recipeList.innerHTML = "";
    recipeList.setAttribute('class', 'card--ulStyle inner-container full-width')
     arr.map(( item ) => {

         // Create a list item for each recipe.
         const recipeItem = document.createElement('li');
         recipeItem.setAttribute('class', 'card__main card--style card__text');

         // create a H3 element for recipe
         const recipeLabel = document.createElement('h3');
         recipeLabel.setAttribute('class', 'card--label');
         recipeLabel.textContent = `${ item.recipe.label }`

         //create a img element
         const recipeImg = document.createElement('img');
         recipeImg.setAttribute('src', `${ item.recipe.image }`);
         recipeImg.setAttribute('alt', `${ item.recipe.label }`);
         recipeImg.setAttribute('class', 'card--img')

         // Create paragraph text in element
         const recipeText = document.createElement('p');
         recipeText.setAttribute('class', 'card--label');
         recipeText.textContent = `${Math.round( item.recipe.calories)} Calories  | ${item.recipe.ingredientLines.length} ingredients`

         // Create Time Paragraph in element
         const recipeTime = document.createElement('p');
         recipeTime.setAttribute('class', 'card--time');
         recipeTime.textContent = `${ item.recipe.totalTime} min`

         // Append li with h3 & img
         recipeItem.appendChild(recipeImg);
         recipeItem.appendChild(recipeLabel);
         recipeItem.appendChild(recipeText);
         recipeItem.appendChild(recipeTime);

         // Append ul with li
         recipeList.appendChild(recipeItem);


     })

 }