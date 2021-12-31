import React, { useEffect, useState } from "react";
import {
  AddBox,
  ButtonsBar,
  DeleteIcon,
  Element,
  ElementsBar,
  GoForArrow,
  GoForBox,
  GoForText,
  Input,
  LeftButton,
  ListBox,
  ProductsList,
  Submit,
  Title,
  Titlebar,
} from "./listElements";
import AOS from "aos";
import "aos/dist/aos.css";
import Product from "../Product/Product";
import { useContext, createRef } from "react";
import { Ingredients } from "../../pages/Home";
import { Route, Routes } from "react-router-dom";
import Result from "../Result/Result";
import Recipe from "../Recipe/Recipe";

const List = () => {
  useEffect(() => {
    AOS.init({
      duration: 200,
    });
  }, []);

  return (
    <>
      <ListBox>
        <Routes>
          <Route path="/" element={<FirstPage />} />
          <Route path="/result" element={<Result />} />
          <Route path="/result/:recipeId" element={<Recipe/>}/>
        </Routes>
      </ListBox>
    </>
  );
};

const FirstPage = () => {

  const [clicked, setClicked] = useState({});

  const input = createRef();
  const context = useContext(Ingredients);
  const { value, method, show } = context;

  const addIngredient = () => {
    if (value.includes(input.current.value)) {
      console.log("jest");
    } else if (value.length < 5 && input.current.value) method([...value, input.current.value]);
    input.current.value = '';
  };

  const element = value.map((element, index) => (
    <Element key={index}>
      {element}
      <DeleteIcon onClick={() => deleteElement(index)} />
    </Element>
  ));

  const deleteElement = (index) => {
    const elements = [...value];
    elements.splice(index, 1);
    method(elements);
  };

  return (
    <>
      <div
        style={{ position: "relative", width: "100%", height: "100%" }}
      ></div>
      <Titlebar>
        <Title>
          Choose max <span style={{ textDecoration: "underline" }}>five</span>{" "}
          indegrents that you can use.
        </Title>
      </Titlebar>
      <ProductsList>
        <Product />
      </ProductsList>
      <AddBox>
       {value.length >= 1 && <ElementsBar>{element}</ElementsBar>}
        <ButtonsBar>
          <LeftButton>
            <Input placeholder="Add your indegrent..." ref={input} />
            <Submit onClick={addIngredient}>+</Submit>
          </LeftButton>
          <GoForBox to={value.length >= 1 ? "/result" : "/"} onClick={show}>
            <GoForText>Go for recipe</GoForText>
            <GoForArrow id="arrow" />
          </GoForBox>
        </ButtonsBar>
      </AddBox>
    </>
  );
};

export default List;
