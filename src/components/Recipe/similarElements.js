import { Link } from "react-router-dom";
import styled from "styled-components";

export const Content = styled.div`
    width: 70%;

    @media screen and (max-width: 600px) {
    width: 100%;
  }
`

export const Box = styled(Link)`
    width: 70%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    color: black;
    margin-bottom: 40px;

    @media screen and (max-width: 600px) {
    width: 100%;
  }
`

export const Image = styled.img`
    width: 100%;
    height: 70%;
    object-fit: cover;
`

export const Title = styled.h3`
    margin: 0;
    font-size: 1.3vw;
`