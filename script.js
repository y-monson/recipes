const form = document.querySelector('form');
const recipeList = document.querySelector('#recipe-list');
const noRecipes = document.getElementById('no-recipes');

let recipes = [];

function handleSubmit(event) {
    // Prevent default form submission behavior
    event.preventDefault();

    // Get recipe name, ingredients, and method input values
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

    if (nameValue && ingrValue.length > 0 && typeValue) {
        const newRecipe = { nameValue, countryValue, ingrValue, typeValue, methodValue };
        recipes.push(newRecipe);

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
    noRecipes.style.display = recipes.length > 0 ? 'none' : 'flex';
    recipeList.innerHTML = '';

    recipes.forEach((recipe, index) => {
        const recipeDiv = document.createElement('div');
        recipeDiv.innerHTML = `
            <h3>${recipe.nameValue}</h3>
            <p><strong>Country: </strong>${recipe.countryValue}</p>
            <p><strong>Type: </strong>${recipe.typeValue}</p>
            <p><ul><strong>Ingredients: </strong>${recipe.ingrValue.map(ingr => `<li>${ingr}</li>`).join(', ')}</ul></p>
            <p><strong>Cooking method: </strong>${recipe.methodValue}</p>
            <button class="delete-button" data-index="${index}"><i class="fa-sharp fa-solid fa-xmark"></i></i></button>`;
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
