import React, { useEffect } from "react";
import {
  AddBox,
  DeleteIcon,
  Element,
  ElementsBar,
  GoForArrow,
  GoForBox,
  GoForText,
  Input,
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
import {Products} from '../Product/Products'

const List = () => {
  useEffect(() => {
    AOS.init({
      duration: 200,
    });
  }, []);

  return (
    <>
      <ListBox >
        <Routes>
        <Route  path='/' element={<FirstPage/>}/>
        <Route  path='/result' element={<Result/>}/>
        </Routes>
      </ListBox>
    </>
  );
};

const FirstPage = () => {
  const input = createRef();

  const context = useContext(Ingredients);
  const { value, method, show } = context;

  const addIngredient = () => {

    if(value.includes(input.current.value)) {
      console.log('jest');
    }
    else if(value.length < 5)  
    method([...value, input.current.value]);
  };

  const element = value.map((element, index) => <Element key={index}>{element}<DeleteIcon onClick={() => deleteElement(index)}/></Element>)

  const deleteElement = index => {
    const elements = [...value];
    elements.splice(index, 1);
    method(elements)
  }

  return (
    <>
      <Titlebar>
        <Title>
          Choose <span style={{ textDecoration: "underline" }}>five</span>{" "}
          indegrents that you can use.
        </Title>
      </Titlebar>
      <ProductsList>
        <Product />
      </ProductsList>
      <AddBox>
        <div style={{ display: "flex", gap: "30px" }}>
          <Input placeholder="Add your indegrent..." ref={input} />
          <Submit onClick={addIngredient}>+</Submit>
        </div>
        <GoForBox  to={value.length >= 1 ? '/result' : '/'} onClick={show}>
          <GoForText>Go for recipe</GoForText>
          <GoForArrow id="arrow" />
        </GoForBox>
      </AddBox>
      <ElementsBar>
        {element}
      </ElementsBar>
    </>
  );
};

export default List;
