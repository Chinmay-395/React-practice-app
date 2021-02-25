import React, { useState, useEffect } from "react";
import Recipe from "./Recipe";
import "./App.css";

const App = () => {
  const APP_ID = "dec8a8fe";
  const APP_KEY = "cddf2b90a7b847abff0c308e51abeded";
  // const exampleReq = `https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`;

  const [recipes, setRecipes] = useState(null);

  useEffect(() => {
    getRecipes();
  }, []);

  const getRecipes = async () => {
    const response = await fetch(
      `https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`
    );
    const data = response.json();
    setRecipes(data.hits);
    console.log(data.hits);
  };

  return (
    <div className="App">
      <h1>Hello React</h1>
      <form className="search-form">
        <input className="search-bar" type="text" />
        <button className="search-button" type="submit">
          search
        </button>
      </form>
      {recipes == null ? <></> : recipes.map((recipe) => <Recipe />)}
    </div>
  );
};

export default App;
