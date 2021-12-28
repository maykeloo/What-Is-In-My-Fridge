import axios from "axios";
import React, { useState, createContext } from "react";
import Opener from "../components/Opener/Opener";

export const Ingredients = createContext();

const Home = () => {
  const [ingredients, setIngredients] = useState([]);
  const [recipies, setRecipies] = useState();
  const [loading, setLoading] = useState(false);
  
  const getApi = () => {
    setLoading(true);

    if(ingredients.length >= 1) {
    axios(
      `https://api.spoonacular.com/recipes/findByIngredients?ingredients=
      ${ingredients[0]},
      +${ingredients[1]},
      +${ingredients[2]},
      +${ingredients[3]},
      +${ingredients[4]}
      &number=2&apiKey=6665dae6371042fd8fac707a0c5a542d`
    )
      .then((response) => {
        setRecipies(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
      })
      .finally(() => {
        setLoading(false);
      });
    }
  };
  return (
    <Ingredients.Provider
      value={{
        value: ingredients,
        method: setIngredients,
        show: getApi,
        loading: loading,
        recipies
      }}
    >
        <Opener />
    </Ingredients.Provider>
  );
};

export default Home;