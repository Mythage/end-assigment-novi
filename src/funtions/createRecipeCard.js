 export default function createRecipeCard( arr ) {

     const recipeList = document.getElementById('recipe-card-list');

     arr.map(( item ) => {

         // Create a list item for eatch recipe.
         const recipeItem = document.createElement('li');
         recipeItem.setAttribute('class', 'card__main card--style');
         // recipeItem.setAttribute('class', 'card--style');

         // craete a H3 element for recipe
         const recipeLabel = document.createElement('h3');
         recipeLabel.setAttribute('class', 'recipe-lable');
         recipeLabel.textContent = `${ item.recipe.label }`

         //create a img element
         const recipeImg = document.createElement('img');
         recipeImg.setAttribute('src', `${ item.recipe.image }`);
         recipeImg.setAttribute('alt', `${ item.recipe.label }`);
         recipeImg.setAttribute('class', 'card--img')

         // Append li with h3 & img
         recipeItem.appendChild(recipeImg);
         recipeItem.appendChild(recipeLabel);

         // Append ul with li
         recipeList.appendChild(recipeItem);


     })

 }