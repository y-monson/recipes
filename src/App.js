import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import RecipePage from './components/RecipePage';
import './App.css';

function App() {
  const [recipes, setRecipes] = useState([]);

  const fetchRecipes = async (query) => {
    const encodedQuery = encodeURIComponent(query);
    const response = await fetch(`https://api.edamam.com/search?q=${encodedQuery}&app_id=1613a6e2&app_key=b113714fc64a34ac2a277abd2643d66b&to=24`);
    const data = await response.json();
    setRecipes(data.hits);
  };

  return (
    <Router basename="/recipes">
      <div className="App">
        <Routes>
          <Route path='/' element={<Home recipes={recipes} onSearch={fetchRecipes}/>} />
          <Route path="/recipe/:label" element={<RecipePage recipes={recipes} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

