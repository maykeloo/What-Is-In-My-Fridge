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
  Copybar,
  CopyButton,
  LeftSide,
} from "./recipeElements";
import axios from "axios";
import {CopyToClipboard} from 'react-copy-to-clipboard';
import Similar from "./Similar";


const Recipe = () => {

  const context = useContext(Ing);
  const { id, indexOfRecipe, recipies } = context;

  const [list, addToList] = useState([]);
  const [listOpened, setListOpened] = useState(false);
  const [details, setDetails] = useState();
  const [nutritionWidget, setNutritionWidget] = useState([]);

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
  ),[id])

  return (
    <>
      <ShoppingListButton onClick={() => setListOpened(!listOpened)}>
       {listOpened ? <CloseIcon/> : <ShopIcon />}
      </ShoppingListButton>
      <ShoppingList opened={listOpened}>
      {list.length < 1 ? "List is empty" : list.map((el, index) => <Ingredient style={{width: '90%', fontWeight: 'bold'}}>{el} <CloseIcon style={{color: 'black'}} onClick={() => deleteItem(index)}/></Ingredient>)} 
        <Copybar>
          <CopyToClipboard text={list}>
            <CopyButton>Copy list</CopyButton>
          </CopyToClipboard>
        </Copybar>
      </ShoppingList>
      <Content>
        <Titlebar>
          <Image src={recipies[indexOfRecipe].image} />
          <Title>{recipies[indexOfRecipe].title}</Title>
        </Titlebar>
        <Instructionsbar>
          <LeftSide>
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
          <Similar/>
          </LeftSide>
          <StepsBox>
            <Subtitle>Step by step</Subtitle>
            {details
              ? details.map((step) => (
                  <Steps>
                    <strong style={{textDecoration: 'underline'}}>Step {step.number}</strong>{step.step}
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
