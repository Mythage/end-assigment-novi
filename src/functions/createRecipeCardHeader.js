export default function createRecipeCardHeader( arr ) {

    const recipeList = document.getElementById('header-card-one');
    recipeList.innerHTML = "";
    recipeList.setAttribute('class', 'card--ulStyle container__headerCards full-width')
    arr.map(( item ) => {

        // Create a list item for each recipe.
        const recipeItem = document.createElement('section');
        recipeItem.setAttribute('class', 'card__header card--style card__text card__header');

        // create a H3 element for recipe
        const recipeLabel = document.createElement('h3');
        recipeLabel.setAttribute('class', 'card--label');
        if (item.recipe.label.length > 30){
            recipeLabel.textContent = `${ item.recipe.label.slice(0,30) + '...'}`
        } else recipeLabel.textContent = `${ item.recipe.label}`


        //create a img element
        const recipeImg = document.createElement('img');
        recipeImg.setAttribute('src', `${ item.recipe.image }`);
        recipeImg.setAttribute('alt', `${ item.recipe.label }`);
        recipeImg.setAttribute('class', 'card--img')

        // Create paragraph text in element
        const recipeText = document.createElement('p');
        recipeText.setAttribute('class', 'card--label');
        recipeText.textContent = `${Math.round( item.recipe.calories)} Calories  | ${item.recipe.ingredientLines.length} ingredients  |`

        // Create Time Paragraph in element
        const recipeTime = document.createElement('p');
        recipeTime.setAttribute('class', 'card--time');

        if(item.recipe.totalTime > 0) {
            recipeTime.textContent = `${item.recipe.totalTime} min`
        } else {
            recipeTime.textContent = `unknown`
        }

        const link = document.createElement('a');
        let url = new URL(item.recipe.uri);
        let recipeId = url.hash.replace('#recipe_','');
        link.setAttribute('href', '/pages/recipe-page.html#' + recipeId);
        // Append li with h3 & img
        recipeItem.appendChild(link);

        link.appendChild(recipeImg);
        link.appendChild(recipeLabel);
        link.appendChild(recipeText);
        link.appendChild(recipeTime);

        // Append ul with li
        recipeList.appendChild(recipeItem);


    })

}