import React, { useContext } from "react";
import { Box, Descriptionbar, Image, Ingredients, IngredientsBoxUsed, IngredientsBoxMissed, Needed, ResultComponent, Text, Title, Titlebar, Used, ShowButtonbar, ShowButton } from "./resultElements";
import { Ingredients as Ing } from "../../pages/Home";
import { recipe as recipeTest } from "./test";

const Result = () => {
  const context = useContext(Ing);
  const { recipies, loading } = context;

  return (
    <>
      <ResultComponent>
      {loading ? null : recipies.map((recipe) => (
    <Box key={recipe.id}>
      <Image src={recipe.image}/>
      <Descriptionbar>
          <Titlebar>
            <Title>{recipe.title}</Title>
          </Titlebar>
          <Ingredients>
            <Used>
              <Text>Used ingredients: {recipe.usedIngredients.map(used => <IngredientsBoxUsed key={used.id}>{used.name}</IngredientsBoxUsed>)}</Text>
            </Used>
            <Needed>
              <Text>Needed ingredients: {recipe.missedIngredients.map(miss => <IngredientsBoxMissed key={miss.id}>{miss.name}</IngredientsBoxMissed>)} </Text>
            </Needed>
          </Ingredients>
      </Descriptionbar>
      <ShowButtonbar>
        <ShowButton to=''>
          Show recipe
        </ShowButton>
      </ShowButtonbar>
    </Box>
  ))}
      </ResultComponent>
    </>
  );
};

export default Result;