import styled from "styled-components";

export const ProductBox = styled.div`
    margin-top: 20px;
    width: 40%;
    border-radius: 5px;
    position: relative;
    overflow: hidden;
    cursor: pointer;
    transition: 0.3s;
    padding: 100px 10px;
    display:flex;
    justify-content: center;
    align-items:center;

    &:hover {
        transform: scale(0.97);
    }
`

export const ProductBg = styled.img`
    position: absolute;
    width: 100%;
    height: 100%;
    object-fit: cover;  
`

export const Name = styled.span`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: #ffede1;
    font-weight: bold;
    font-size: 3em;
    font-family: "Rozha One", serif;
`