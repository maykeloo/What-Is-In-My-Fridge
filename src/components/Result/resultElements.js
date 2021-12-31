import styled from "styled-components";
import { Link } from "react-router-dom";

export const ResultComponent = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  overflow-y: scroll;
  justify-content: space-around;
  -ms-overflow-style: none;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const Boxes = styled.div`
  width: 90%;
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: space-around;
  padding-bottom: 100px;
  gap: 30px;

  @media screen and (max-width: 600px) {
    align-items: center;
    flex-direction: column;
    gap: 40px;
  }
`;

export const ContentTitle = styled.div`
  width: 100%;
  background-color: black;
  color: white;
  display: flex;
  padding: 30px;
  align-items: center;
  font-size: 3vw;
  font-family: "Rozha One", serif;
  margin-bottom: 50px;

  @media screen and (max-width: 600px) {
    font-size: 2em;
  }
`;

export const Top = styled.div`
    display: flex;
    width: 100%;
    gap: 40px;
`
export const Bottom = styled.div`
    display: flex;
    width: 100%;
    gap: 40px;
`

export const Box = styled.div`
  width: 100%;
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 30px;
  border-radius: 5px;

  @media screen and (max-width: 600px) {
    width: 100%;
  }
`;

export const Image = styled.img`
    width:25vh;
height: 25vh;
  object-fit: cover;
  border-radius: 50%;
`;

export const Descriptionbar = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
`;

export const Titlebar = styled.div`
  display: flex;
  justify-content: center;
  align-items: center
`;

export const Title = styled.span`
  font-size: 2.6vw;
  font-weight: 200;
  margin: 0;
  padding: 0;

  @media screen and (max-width: 900px) {
    font-size: 2em;
  }
`;

export const Ingredients = styled.div`
  margin-top: 30px;
  display: flex;
  gap: 30px;
`;

export const Used = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Needed = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Text = styled.p`
  font-size: 20px;
  position: relative;
  z-index: 1;
  font-family: "Rozha One", serif;

  &:after {
      position: absolute;
      content: '';
      width: 45%;
      height: 15px;
      background-color: #2a9d8f;
      bottom: -2px;
      left: 0;
      z-index: -1;
  }
`;

export const IngredientsBoxUsed = styled.div`   
  margin-top: 10px;
  font-weight: bold;
  padding: 5px;
  font-size: 16px;
  filter: blur(0.7px);
-webkit-filter: blur(0.7px);
`;

export const IngredientsBoxMissed = styled.div`
  padding: 5px;
  margin-top: 10px;
  font-weight: bold;
  font-size: 16px;
  filter: blur(0.7px);
-webkit-filter: blur(0.7px);
`;

export const ShowButtonbar = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  margin-top: 20px;


`;

export const ShowButton = styled(Link)`
  width: 25vh;
  height: 25vh;
  background-color: #e9c46a;
  display: flex;
  border: 2px solid #e9c46a;
  font-size: 2.5vw;
  text-align: center;
  justify-content: center;
  flex-direction:column;
  align-items: center;
  color: black;
  text-decoration: none;

  &:hover {
      color: #e9c46a;
      background-color: white;
    }
`;
