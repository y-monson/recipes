# Recipe Finder

Recipe Finder is a React application that allows users to search for recipes using the Edamam Recipe Search API. Users can enter a search term to find recipes, view recipe details, and navigate through different recipes.

### Features

- Search for recipes using the Edamam Recipe Search API.
- Display a list of recipes based on the user's search query.
- View detailed information about a selected recipe.
- Responsive design for a better user experience on different devices.

#### Usage 

- Open the application in your browser.
- Enter a search term in the search box and press Enter or click the search icon.
- Browse through the list of recipes.
- Click on a recipe to view detailed information.

## Installation

1. **Clone the repository:**
   ```sh
   git clone https://github.com/your-username/recipe-finder.git
   cd recipe-finder

2. **Install dependencies:**
   ```sh
   npm install

3. **Start the development server:**
   ```sh
   npm start

## Code Overview

### Components

- **App:** The main component that sets up routing and state management.
- **Header:** Displays the title of the application.
- **Home:** The home page component that includes the search box and displays the list of recipes.
- **Search:** Handles the search input and triggers the search query.
- **RecipeCard:** Displays a brief overview of each recipe.
- **RecipePage:** Displays detailed information about a selected recipe.

### API Integration

The application uses the Edamam Recipe Search API to fetch recipes based on the user's search query.

- The API call is made in the fetchRecipes function in the App component.
- The search query is encoded and sent as a parameter to the API.
- The response is parsed, and the list of recipes is stored in the component's state.

### Fetching Recipes

The fetchRecipes function in App.js:

   ```jsx
   const fetchRecipes = async (query) => {
     const encodedQuery = encodeURIComponent(query);
     const response = await fetch(`https://api.edamam.com/search?q=${encodedQuery}&app_id=YOUR_APP_ID&app_key=YOUR_APP_KEY&to=20`);
     const data = await response.json();
     setRecipes(data.hits);
   };
```

### Styling

The application is styled using CSS, with a focus on responsiveness and usability. Key styles are defined for the search box, recipe cards, and detailed recipe views.

## Next Steps

1. Pagination: Implement pagination to load more recipes as the user scrolls or clicks a "Load More" button.
2. Favorites: Allow users to save their favorite recipes for quick access.
3. Filters: Add filtering options (e.g., by cuisine, dietary restrictions).
4. Enhanced Styling: Improve the UI/UX with advanced styling and animations.
5. Unit Tests: Add unit tests to ensure the reliability of the components.


## Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
