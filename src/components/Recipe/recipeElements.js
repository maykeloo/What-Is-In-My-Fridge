import styled, { keyframes } from "styled-components";
import { BsPlusSquare } from "react-icons/bs";
import { RiShoppingBagLine } from "react-icons/ri";
import { MdClose } from "react-icons/md";

const rotateShop = keyframes`
 0% {
    -webkit-transform: rotate(0);
            transform: rotate(0);
  }
  33% {
    -webkit-transform: rotate(30deg);
            transform: rotate(30deg);
  }
  66% {
    -webkit-transform: rotate(-30deg);
            transform: rotate(-30deg);
  }
  100% {
    -webkit-transform: rotate(0);
            transform: rotate(0);
  }
  `;

const slideIn = keyframes`
  0% {
    -webkit-transform: translateY(-1000px) scaleY(2.5) scaleX(0.2);
            transform: translateY(-1000px) scaleY(2.5) scaleX(0.2);
    -webkit-transform-origin: 50% 0%;
            transform-origin: 50% 0%;
    -webkit-filter: blur(40px);
            filter: blur(40px);
    opacity: 0;
  }
  100% {
    -webkit-transform: translateY(0) scaleY(1) scaleX(1);
            transform: translateY(0) scaleY(1) scaleX(1);
    -webkit-transform-origin: 50% 50%;
            transform-origin: 50% 50%;
    -webkit-filter: blur(0);
            filter: blur(0);
    opacity: 1;
  }
  `;

export const Content = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Titlebar = styled.div`
  width: 80%;
  margin-top: 100px;
  display: flex;
  gap: 40px;
`;

export const Image = styled.img`
  width: 30%;
  object-fit: cover;
  border-radius: 5px;
`;

export const Title = styled.span`
  font-size: 3vw;
  font-weight: bold;
  font-family: "Rozha One", serif;

  @media screen and (max-width: 800px) {
    font-size: 2em;
  }
`;

export const Instructionsbar = styled.div`
  width: 80%;
  display: flex;
  margin-top: 40px;

  @media screen and (max-width: 600px) {
    flex-direction: column-reverse;
  }
`;

export const IngredientsBox = styled.div`
  width: 100%;
  
    @media screen and (max-width: 600px) {
    width: 100%;
  }
`;

export const StepsBox = styled.div`
  width: 50%;
  padding-bottom: 100px;
  
    @media screen and (max-width: 600px) {
    width: 100%;
  }
`;

export const Subtitle = styled.h2`
  padding-bottom: 25px;
  font-size: 2.4em;
  text-transform: uppercase;
  font-family: "Rozha One", serif;
  position: relative;
  width: 70%;
  border-bottom: 2px solid black;
`;

export const Steps = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 30px;
`;

export const Ingredient = styled.p`
  text-transform: uppercase;
  width: 70%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media screen and (max-width: 600px) {
    width: 100%;
  }
`;

export const PlusIcon = styled(BsPlusSquare)`
  color: black;
  transition: 0.2s;
  cursor: pointer;

  &:hover {
    color: green;
  }
`;

export const ShoppingListButton = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: red;
  position: absolute;
  top: 50px;
  right: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  box-shadow: 0px 0px 21px 0px rgba(169, 169, 169, 1);
  animation-name: ${slideIn};
  animation-duration: 2s;
  z-index: 10;


  &:hover {
    > * {
        animation: ${rotateShop};
        animation-duration: 0.5s;
        animation-iteration-count: infinite;
    }
  }

  @media screen and (max-width: 600px) {
    position: fixed;
    top: 25px;
    rigth: 25px;
  }
`;

export const ShopIcon = styled(RiShoppingBagLine)`
  color: white;
`;

export const ShoppingList = styled.div`
  width: 10vw;
  z-index: 100;
  background-color: white;
  border: 1px solid black;
  padding: 15px;
  position: absolute;
  top: 120px;
  right: 50px;
  box-shadow: 0px 0px 21px 0px rgba(169, 169, 169, 1);
  display: ${({ opened }) => (opened ? "block" : "none")};

  @media screen and (max-width: 600px) {
    position: fixed;
    width: 100%;
    top: 100px;
    left: 0;
    z-index: 3;
    padding: 0;
    padding-left: 10px;
  }
`;

export const CloseIcon = styled(MdClose)`
  color: white;
  cursor: pointer;
`;

export const Copybar = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: flex-start;
  padding: 20px 0;
`

export const CopyButton  = styled.button`
  width: 100px;
  background-color: #2a9d8f;
  border: 0;
  padding: 5px;
  color: white;
  font-weight: bold;
  cursor: pointer;
  border: 1px solid #2a9d8f;
  transition: 0.2s;

  &:hover {
    background-color: white;
    color: #2a9d8f;
  }
`

export const LeftSide = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  gap: 50px;

  @media screen and (max-width: 600px) {
    width: 100%;
  }
`