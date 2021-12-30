import React, { useState, useContext } from "react";
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
import { recipe, prepare } from "../Result/test";


const Recipe = () => {

  const context = useContext(Ing);
  const { id } = context;

  const [list, addToList] = useState([]);
  const [listOpened, setListOpened] = useState(false);

  const addItemToShopList = (name) => {
    addToList([...list, name]);
  };

  const deleteItem = index => {
    const elements = [...list];
    elements.splice(index, 1);
    addToList(elements);
  }

  const [details, setDetails] = useState();

  console.log(id);

    

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
          <Image src={recipe[1].image} />
          <Title>{recipe[1].title}</Title>
        </Titlebar>
        <Instructionsbar>
          <IngredientsBox>
            <Subtitle>Shopping list</Subtitle>
            {recipe[1].usedIngredients.map((used) => (
              <Ingredient onClick={() => addItemToShopList(used.name)}>
                {used.name} <PlusIcon />
              </Ingredient>
            ))}
            {recipe[1].missedIngredients.map((used) => (
              <Ingredient onClick={() => addItemToShopList(used.name)}>
                {used.name} <PlusIcon />
              </Ingredient>
            ))}
          </IngredientsBox>
          <StepsBox>
            <Subtitle>Step by step</Subtitle>
            {prepare
              ? prepare[1].steps.map((step) => (
                  <Steps>
                    <strong>Step {step.number}</strong>. {step.step}
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
