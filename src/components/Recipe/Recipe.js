import React, { useState, useContext, useEffect } from "react";
import { Ingredients as Ing } from "../../pages/Home";
import {
  Content,
  Image,
  IngredientsBox,
  Instructionsbar,
  StepsBox,
  Ingredient,
  Subtitle,
  Title,
  Titlebar,
  Steps,
  PlusIcon,
  ShoppingList,
  ShoppingListButton,
  ShopIcon,
  CloseIcon,
} from "./recipeElements";
import { recipe as recipies, prepare } from "../Result/test";
import axios from "axios";


const Recipe = () => {

  const context = useContext(Ing);
  const { id, indexOfRecipe, recipies } = context;

  const [list, addToList] = useState([]);
  const [listOpened, setListOpened] = useState(false);
  const [details, setDetails] = useState();

  const addItemToShopList = (name) => {
    addToList([...list, name]);
  };

  const deleteItem = index => {
    const elements = [...list];
    elements.splice(index, 1);
    addToList(elements);
  }

  useEffect(() => (
    axios(
      `https://api.spoonacular.com/recipes/${id}/analyzedInstructions?number=2&apiKey=6665dae6371042fd8fac707a0c5a542d`
    )
    .then((response) => {
     setDetails(response.data[0].steps);
     console.log(response.data[0].steps);

    })
    .catch((error) => {
      console.error("Error fetching data: ", error);
    })
  ),[])

  return (
    <>
      <ShoppingListButton onClick={() => setListOpened(!listOpened)}>
       {listOpened ? <CloseIcon/> : <ShopIcon />}
      </ShoppingListButton>
      <ShoppingList opened={listOpened}>
      {list.map((el, index) => <Ingredient style={{width: '90%', fontWeight: 'bold'}}>{el} <CloseIcon style={{color: 'black'}} onClick={() => deleteItem(index)}/></Ingredient>)}
      </ShoppingList>
      <Content>
        <Titlebar>
          <Image src={recipies[indexOfRecipe].image} />
          <Title>{recipies[indexOfRecipe].title}</Title>
        </Titlebar>
        <Instructionsbar>
          <IngredientsBox>
            <Subtitle>Shopping list</Subtitle>
            {recipies[indexOfRecipe].usedIngredients.map((used) => (
              <Ingredient onClick={() => addItemToShopList(used.name)}>
                {used.name} <PlusIcon />
              </Ingredient>
            ))}
            {recipies[indexOfRecipe].missedIngredients.map((used) => (
              <Ingredient onClick={() => addItemToShopList(used.name)}>
                {used.name} <PlusIcon />
              </Ingredient>
            ))}
          </IngredientsBox>
          <StepsBox>
            <Subtitle>Step by step</Subtitle>
            {details
              ? details.map((step) => (
                  <Steps>
                    <strong>Step {step.number}</strong>{step.step}
                  </Steps>
                ))
              : null}
          </StepsBox>
        </Instructionsbar>
      </Content>
    </>
  );
};

export default Recipe;
