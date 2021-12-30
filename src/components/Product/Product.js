import React, {useEffect, useContext} from "react";
import { Name, ProductBg, ProductBox } from "./productElement";
import { Ingredients } from "../../pages/Home";
import { Products } from "./Products";
import AOS from "aos";
import "aos/dist/aos.css";

const Product = () => {
  useEffect(() => {
    AOS.init({
      duration: 200,
    });
  }, []);

  const context = useContext(Ingredients);
  const { value, method } = context;

  const addIngredient = name => {

    if(value.includes(name)) {
      console.log('jest');
    }
    else if(value.length < 5)
    method([...value, name]);
  };

  console.log(value);

  const product = Products.map((product, index) => 
  (
    <ProductBox key={index} name={product.name} onClick={() => addIngredient(product.name)}>
      <ProductBg src={product.img} />
      <Name>{product.name}</Name>
    </ProductBox>
  )
  );

  return <>{product}</>;
};

export default Product;
