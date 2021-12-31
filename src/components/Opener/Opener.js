import React, { useState, useEffect } from "react";
import {
  Arrow,
  Background,
  Behance,
  Button,
  ButtonBox,
  Content,
  ContentBox,
  Description,
  DescriptionText,
  Facebook,
  LeftSide,
  Linkedin,
  Socialbar,
  TextBox,
  Title,
} from "./openerElements";
import AOS from "aos";
import "aos/dist/aos.css";

import bg from "../../video/fridge_1.mp4";
import List from "../List/List";

const Opener = () => {
  const [nextStage, setNextStage] = useState(false);
  const [onDelay, setOnDelay] = useState(false);

  const setting = () => {
    setNextStage(true);
    setTimeout(() => setOnDelay(true), 1400);
  };


  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);

  return (
    <>
      <Content>
        <Background src={bg} playsInline autoPlay muted loop={true} />
        <ContentBox nextStage={nextStage}>
          <LeftSide>
          <TextBox>
            <Title>
              What is in your 
              <span style={{ fontFamily: '"Inspiration", serif' }}>
                 fridge?
              </span>
            </Title>
          </TextBox>
          <Description>
              <DescriptionText nextStage={nextStage}>
                This tool will allow you to use every ingredient in your fridge
                to make great dishes without wasting any of them!
              </DescriptionText>
            <Socialbar>
              <Facebook />
              <Linkedin />
              <Behance />
            </Socialbar>
          </Description>
          </LeftSide>
          <ButtonBox>
            {onDelay ? (
              <List onDelay={nextStage}/>
            ) : (
              <Button onClick={setting} nextStage={nextStage} onDelay={onDelay}>
                <Arrow />
              </Button>
            )}
          </ButtonBox>
        </ContentBox>
      </Content>
    </>
  );
};

export default Opener;
