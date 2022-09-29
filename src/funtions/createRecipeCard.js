 export default function createRecipeCard( arr ) {

     const recipeList = document.getElementById('recipe-card-list');

     arr.map(( item ) => {

         // Create a list item for eatch recipe.
         const recipeItem = document.createElement('li');
         recipeItem.setAttribute('class', 'recipe-cards');

         // craete a H3 element for recipe
         const recipeLabel = document.createElement('h3');
         recipeLabel.setAttribute('class', 'recipe-lable');
         recipeLabel.textContent = `${ item.recipe.label }`

         //create a img element
         const recipeImg = document.createElement('img');
         recipeImg.setAttribute('scr', `${ item.recipe.image }`);
         recipeImg.setAttribute('alt', `${ item.recipe.label }`);

         // Append li with h3 & img
         recipeItem.appendChild(recipeLabel);
         recipeItem.appendChild(recipeImg);

         // Append ul with li
         recipeList.appendChild(recipeItem);


     })

 }