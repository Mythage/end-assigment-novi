
//Import from all created functions
import fetchRecipeData from "./functions/fetchRecipeData";
import randomCardGen from "./functions/randomCardGen";

randomCardGen('pizza')
// Reference to form submit
    const submitForm = document.getElementById('onSubmit');

    // Reference to input fields
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
