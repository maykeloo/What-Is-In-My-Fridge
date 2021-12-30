import styled from "styled-components";
import { BsArrowRightCircle } from "react-icons/bs";
import { Link } from "react-router-dom";
import {GrFormClose} from 'react-icons/gr'

export const ListBox = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  background-color: white;
  flex-direction: column;
  overflow-y: scroll;
  -ms-overflow-style: none;
  scrollbar-width: none;
  position: relative;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const ProductsList = styled.div`
  width: 80%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding-bottom: 50px;
`;

export const Titlebar = styled.div`
  width: 80%;
  padding: 20px 0;
  margin-top: 30px;
`;

export const Title = styled.h3`
  font-size: 3vw;
  margin: 0;
`;

export const AddBox = styled.div`
  width: 100%;
  padding: 30px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  background-color: white;
  border-top: 2px solid black;
  position: sticky;
  bottom: 0;
  right: 0;
  transition: 0.3s;
`;

export const ButtonsBar = styled.div`
  display: flex;
  justify-content: space-between;
  width: 80%;
  gap: 40px;
`

export const Input = styled.input`
  padding: 10px;
  outline: none;
  border: 2px solid black;
  border-radius: 5px;
`;

export const Submit = styled.button`
  background-color: #ffffff;
  border: 2px solid grey;
  border-radius: 8px;
  box-sizing: border-box;
  color: grey;
  cursor: pointer;
  display: inline-block;
  font-size: 16px;
  font-weight: 600;
  line-height: 20px;
  margin: 0;
  outline: none;
  padding: 13px 23px;
  position: relative;
  text-align: center;
  text-decoration: none;
  touch-action: manipulation;
  transition: box-shadow 0.2s, -ms-transform 0.1s, -webkit-transform 0.1s,
    transform 0.1s;
  user-select: none;
  -webkit-user-select: none;
  width: auto;

  &:focus-visible {
    box-shadow: #222222 0 0 0 2px, rgba(255, 255, 255, 0.8) 0 0 0 4px;
    transition: box-shadow 0.2s;
  }

  &:active {
    background-color: #f7f7f7;
    border-color: #000000;
    transform: scale(0.96);
  }

  &:disabled {
    border-color: #dddddd;
    color: #dddddd;
    cursor: not-allowed;
    opacity: 1;
  }
`;

export const GoForBox = styled(Link)`
  background-color: green;
  border: 2px solid green;
  border-radius: 8px;
  box-sizing: border-box;
  color: white;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 16px;
  font-weight: 600;
  line-height: 20px;
  margin: 0;
  outline: none;
  padding: 10px;
  position: relative;
  text-align: center;
  text-decoration: none;
  touch-action: manipulation;
  transition: 0.2s, -ms-transform 0.1s, -webkit-transform 0.1s, transform 0.1s;
  user-select: none;
  -webkit-user-select: none;
  width: auto;

  &:focus-visible {
    box-shadow: #222222 0 0 0 2px, rgba(255, 255, 255, 0.8) 0 0 0 4px;
    transition: 0.2s;
  }

  &:active {
    background-color: #f7f7f7;
    border-color: green;
    transform: scale(0.96);
  }

  &:disabled {
    border-color: green;
    color: #dddddd;
    cursor: not-allowed;
    opacity: 1;
  }

  &:hover {
    background-color: white;
    > * {
      color: green;
    }
    > #arrow {
      transform: rotate(-45deg);
    }
  }
`;

export const GoForText = styled.span`
  color: white;
  transition: 0.3s;
`;

export const GoForArrow = styled(BsArrowRightCircle)`
  color: white;
  transition: 0.7s;
  font-size: 16px;
`;

export const ElementsBar = styled.div`
  width: 80%;
  display: flex;
  gap: 15px;
  flex-wrap: wrap;
  margin-bottom: 30px;
`;

export const Element = styled.div`
  background-color: #d9d9d9;
  color: black;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  border-radius: 5px;
  display: flex;
  gap: 10px;
  align-items: center;

`

export const DeleteIcon = styled(GrFormClose)`
  cursor: pointer;
  font-size: 16px;
`