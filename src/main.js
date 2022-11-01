
//Import from all created functions
import fetchRecipeData from "./functions/fetchRecipeData";
import headerCardGen from "./functions/headerCardGen";

//function to generate 3 random cards in the header with the searchQuarry cake.
headerCardGen('cake')

    // Reference to form submit for main cards on index page.
    const submitForm = document.getElementById('recipeSearchForm');

    // Reference to input fields on the index page.
    const ingredients = document.getElementById('ingredients-field');
    const mealType = document.getElementById('meal-type-field');
    const cuisineType = document.getElementById('cuisine-type');
    const dietType = document.getElementById('diet-type');
    const time = document.getElementById('time');

    // send form with data
submitForm.addEventListener('submit', (e) => {
    // Prevent form to auto submit
        e.preventDefault();

        // Execute function to fetch data and parse out values as argument
        fetchRecipeData(
            ingredients.value,
            mealType.value,
            cuisineType.value,
            dietType.value,
            time.value
        )
    }
);
