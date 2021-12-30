import styled from "styled-components";
import { Link } from "react-router-dom";

export const ResultComponent = styled.div`
    width: 100%;
    display: flex;  
    flex-wrap: wrap;
    align-items: flex-start;
    overflow-y: scroll;
    justify-content: space-around;
    padding-bottom: 100px;
`

export const ContentTitle = styled.div`
    width: 90%;
    display: flex;
    padding: 30px 0;
    align-items: center;
    font-size: 3vw;
    font-weight: bold;
    font-family: "Rozha One", serif;
`

export const Box = styled.div`
    width: 45%;
    min-height: 90vh;
    background-color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 1px solid black;
    justify-content: space-between;
    padding-bottom: 30px;
    border-radius: 5px;
`


export const Image = styled.img`
    width: 100%;
    height: 60%;
    object-fit: cover;
`

export const Descriptionbar = styled.div` 
    width: 80%;
    display: flex;
    flex-direction: column;
`

export const Titlebar = styled.div`
    width: calc(100% - 30px);
    display: flex;
    justify-content: center;

`

export const Title = styled.span`
    font-size: 2.3em;
    font-weight: bold;
    font-family: "Rozha One", serif;
    margin: 0;
    padding: 0;
`

export const Ingredients = styled.div`
    margin-top: 30px;
    display: flex;
    gap: 30px;
`

export const Used = styled.div`
    display: flex;
`

export const Needed = styled.div`
    display: flex;
`

export const Text = styled.span`
    font-size: 20px;
`

export const IngredientsBoxUsed = styled.div`
    background-color: #d9d9d9;
    margin-top: 10px;
    font-weight: bold;
    padding: 5px;
    font-size: 16px;
`

export const IngredientsBoxMissed = styled.div`
    background-color: #d9d9d9;
    padding: 5px;
    margin-top: 10px;
    font-weight: bold;
    font-size: 16px;
`

export const ShowButtonbar = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    margin-top: 20px;
`

export const ShowButton = styled(Link)`
    width: 80%;
    background-color: green;
    color: white;
    display: flex;
    justify-content: center;
    padding: 10px 0;
    text-decoration: none;
`