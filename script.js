// The following program takes the input from the user and stores it in the list. 
// Once the user clicks the submit button, it creates the div and displays the input. 
// Additional functionality includes a delete button and searching through the recipes names. 

// Declair global variables
const form = document.querySelector('form');
const recipeList = document.querySelector('#recipe-list');
const noRecipes = document.getElementById('no-recipes');
const searchBox = document.getElementById('search-box');

let recipes = [];

function handleSubmit(event) {
    // Prevent default form submission behavior
    event.preventDefault();

    // Get recipe input values
    const nameInput = document.querySelector('#name');
    const countryInput = document.querySelector('#country');
    const typeInput = document.querySelector('#type');
    const ingrInput = document.querySelector('#ingredients');
    const methodInput = document.querySelector('#method');
    const nameValue = nameInput.value.trim();
    const ingrValue = ingrInput.value.trim().split(',').map(i => i.trim());
    const typeValue = typeInput.value.trim();
    const methodValue = methodInput.value.trim();
    const countryValue = countryInput.value.trim();

    // Input validation
    if (nameValue && ingrValue.length > 0 && typeValue) {
        const newRecipe = { nameValue, countryValue, ingrValue, typeValue, methodValue };
        recipes.push(newRecipe);

        // Clear the input fields
        nameInput.value = '';
        typeInput.value = '';
        ingrInput.value = '';
        methodInput.value = '';
        countryInput.value = '';

        displayRecipes();
    }
}

document.getElementById('submitBtn').addEventListener('click', handleSubmit);

function displayRecipes() {
    const query = searchBox.value.toLowerCase();
    /* Go through the recipes list and store recipe name matching the query from the recipe list 
    into the variable filteredRecipes. If the search box is emplt, all recipes are added to the array */
    const filteredRecipes = recipes.filter(recipe => recipe.nameValue.toLowerCase().includes(query));

    // Remove the message at the top 'You have no recipes'
    noRecipes.style.display = filteredRecipes.length > 0 ? 'none' : 'flex';
    recipeList.innerHTML = '';

    filteredRecipes.forEach((recipe, index) => {
        const recipeDiv = document.createElement('div');
        recipeDiv.innerHTML = `
            <h3>${recipe.nameValue}</h3>
            <p><strong>Country: </strong>${recipe.countryValue}</p>
            <p><strong>Type: </strong>${recipe.typeValue}</p>
            <p><ul><strong>Ingredients: </strong>${recipe.ingrValue.map(ingr => `<li>${ingr}</li>`).join(', ')}</ul></p>
            <p><strong>Cooking method: </strong>${recipe.methodValue}</p>
            <button class="delete-button" data-index="${index}"><i class="fas fa-trash"></i></button>`;
        recipeDiv.classList.add('recipe');
        recipeList.appendChild(recipeDiv);
    });

    // Add event listeners for delete buttons
    const deleteButtons = document.querySelectorAll('.delete-button');
    deleteButtons.forEach(button => {
        button.addEventListener('click', handleDelete);
    });
}

function handleDelete(event) {
    const indexToDelete = event.currentTarget.dataset.index;
    recipes.splice(indexToDelete, 1);
    displayRecipes();
}

searchBox.addEventListener('input', displayRecipes);

// Initialize the display with all recipes
displayRecipes();
