import styled from "styled-components";
import { AiOutlineArrowRight } from "react-icons/ai";
import { FaFacebookSquare, FaLinkedin, FaBehanceSquare} from 'react-icons/fa'

export const Content = styled.div`
  width: 100vw;
  height: 100vh;
  padding: 0;
  margin: 0;
`;
export const Background = styled.video`
  height: 100%;
  width: 100%;
  object-fit: cover;
  filter: brightness(0.4);
  z-index: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ContentBox = styled.div`
  width: ${(props) => (props.nextStage ? "100%" : "80%")};
  height: ${(props) => (props.nextStage ? "100%" : "80%")};
  margin: 0;
  padding: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  transition: 1.4s;

  @media screen and (max-width: 1400px) {
  height: ${(props) => (props.nextStage ? "100%" : "60%")};
  }

  
  @media screen and (max-width: 1100px) {
  height: ${(props) => (props.nextStage ? "100%" : "80%")};
  }
`;

export const TextBox = styled.div`
  width: 100%;
  margin-top: 100px;
  margin-left: 100px;
  display: flex;
  flex-direction: column;
`;

export const LeftSide = styled.div`
  @media screen and (max-width: 900px) {
    display: none;
  }
`

export const Title = styled.span`
  color: white;
  font-size: 7vw;
  font-family: "Rozha One", serif;
  line-height: 0.85em;

  @media screen and (max-width: 1200px) {
    font-size: 5vw;
  }
`;

export const Description = styled.div`
  width: 60%;
  margin-top: 100px;
  margin-left: 100px;
  transition: 1s;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  height: 200px;
`;

export const DescriptionText = styled.span`
  color: white;
  font-size: 1.5vw;
  font-weight: lighter;
`;

export const ButtonBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
`;

export const Button = styled.div`
  width: 13vw;
  height: 13vw;
  border-radius: 50%;
  border: 2px solid white;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: 1s;
  opacity: ${({ nextStage }) => (nextStage ? "0" : "1")};
  display: ${({ onDelay }) => (onDelay ? "none" : "flex")};

  &:after {
    content: "";
    display: block;
    position: absolute;
    border-radius: 50%;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
    transition: all 0.5s;
    box-shadow: 0 0 10px 40px white;
  }

  &:active:after {
    box-shadow: 0 0 0 0 white;
    position: absolute;
    border-radius: 50%;
    left: 0;
    top: 0;
    opacity: 1;
    transition: 0s;
  }

  &:hover {
    > * {
      font-size: 8em;
    }
  }
`;

export const Arrow = styled(AiOutlineArrowRight)`
  color: white;
  font-size: 6em;
  transition: 0.2s;
`;

export const Socialbar = styled.div`
    width: 50%;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    height: 50px;
    margin-top: 30px;
    padding-bottom: 50px;
`

export const Facebook = styled(FaFacebookSquare)`
    color: white;
    font-size: 2vw;
    padding: 0;
    margin: 0;
`
export const Linkedin = styled(FaLinkedin)`
    color: white;
    font-size: 2vw;
    padding: 0;
    margin: 0;
`
export const Behance = styled(FaBehanceSquare)`
    color: white;
    font-size: 2vw;
    padding: 0;
    margin: 0;
`