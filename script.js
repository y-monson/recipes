document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('submitBtn').addEventListener('click', displayInput);
  });

function displayInput() {
    let foodName = document.getElementById('name').value;
    let foodType = document.getElementById('type').value;
    let foodIngredients = document.getElementById('ingredients').value;
    let displayArea = document.getElementById('displayArea');

    let displayContent = '';

    if (foodName.trim() !== '') {
        displayContent += '<p>Name: ' + foodName + '</p>';
    }

    if (foodType.trim() !== '') {
        displayContent += '<p>Type: ' + foodType + '</p>';
    }

    if (foodIngredients.trim() !== '') {
        displayContent += '<p>Ingredients: ' + foodIngredients + '</p>';
    }
    displayArea.innerHTML = displayContent;

}



// function displayInput() {
// // Define an array of input field IDs
// var inputFieldIds = ['name', 'type', 'ingredients'];

// // Get input values and display on the same page
// var displayArea = document.getElementById('displayArea');
// displayArea.innerHTML = ''; // Clear previous content

// inputFieldIds.forEach(function(fieldId) {
//     var value = document.getElementById(fieldId).value;
//     if (value.trim() !== '') {
//     displayArea.innerHTML += '<p>' + fieldId.charAt(0).toUpperCase() + fieldId.slice(1) + ': ' + value + '</p>';
//     }
// });
// }

// function displayInput() {
//     // Get input values
//     var name = document.getElementById('name').value;
//     var type = document.getElementById('type').value;
//     var ingredients = document.getElementById('ingredients').value;

//     // Display input on the same page
//     var displayArea = document.getElementById('displayArea');
//     displayArea.innerHTML = '<p>Name: ' + name + '</p>';
//     displayArea.innerHTML = '<p>Type: ' + type + '</p>';
//     displayArea.innerHTML = '<p>Ingredients: ' + ingredients + '</p>';
// }
