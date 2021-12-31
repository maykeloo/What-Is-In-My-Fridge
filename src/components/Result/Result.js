import React, { useContext, useState } from "react";
import {
  Box,
  Descriptionbar,
  Image,
  Ingredients,
  IngredientsBoxUsed,
  IngredientsBoxMissed,
  Needed,
  ResultComponent,
  Text,
  Title,
  Titlebar,
  Used,
  ShowButtonbar,
  ShowButton,
  ContentTitle,
  Boxes,
  Top,
  Bottom,
} from "./resultElements";
import { Ingredients as Ing } from "../../pages/Home";
import { recipe as recipeTest } from "./test";
import Loading from "../Loading/Loading";

const Result = () => {
  const context = useContext(Ing);
  const { recipies, loading, setId, setIndexOfRecipe } = context;

  return (
    <>
      <ResultComponent>
        <ContentTitle>Recipies</ContentTitle>
        <Boxes>
          {loading ? (
            <Loading />
          ) : (
            recipies.map((recipe, index) => (
              <Box key={recipe.id}>
                <Top>
                  <Image src={recipe.image} />
                  <Titlebar>
                    <Title>{recipe.title}</Title>
                  </Titlebar>
                </Top>
                <Bottom>
                  <Descriptionbar>
                    <Ingredients>
                      <Used>
                        <Text>
                          Used ingredients:
                        </Text>
                        {recipe.usedIngredients.map((used) => (
                            <IngredientsBoxUsed key={used.id}>
                              {used.name}
                            </IngredientsBoxUsed>
                          ))}
                      </Used>
                      <Needed>
                        <Text>
                          Needed ingredients:
                        </Text>
                        {recipe.missedIngredients.map((miss) => (
                            <IngredientsBoxMissed key={miss.id}>
                              {miss.name}
                            </IngredientsBoxMissed>
                          ))}{" "}
                      </Needed>
                    </Ingredients>
                  </Descriptionbar>
                  <ShowButtonbar>
                    <ShowButton
                      to={`/result/${recipe.id}`}
                      onClick={() => {
                        setId(recipe.id);
                        setIndexOfRecipe(index);
                      }}
                    >
                      <span style={{fontStyle: 'italic', fontWeight: '200'}}>Show</span> <span style={{fontFamily: '"Rozha One", serif'}}>recipe</span> 
                    </ShowButton>
                  </ShowButtonbar>
                </Bottom>
              </Box>
            ))
          )}
        </Boxes>
      </ResultComponent>
    </>
  );
};

export default Result;
