import styled from 'styled-components';
import React from 'react';
import Carousel from './components-home/Carousel';
import QuemSomos from './components-home/QuemSomos';
import Menu from './components-home/Menu';
import SocialMedias from './components-home/SocialMedias';

export default function Home() {
  return (
    <MainContainer>
      <Carousel />
      <SectionContainer id="quem-somos">
        <QuemSomos />        
      </SectionContainer >
      <SectionContainer id="cardapio">
        <Menu />
      </SectionContainer>
      <SectionContainer id="redes-sociais">
        <SocialMedias />
      </SectionContainer>
    </MainContainer>
  );
}

const MainContainer = styled.section`
  width: 100%;
  height: 100vh;
  gap: 20px;
`;

const SectionContainer = styled.div`
  width: 100%;
  height: auto;
  margin: 10px 0px auto;
  
  h2 {
    height: 50px;

    font-family: 'Oregano';
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    line-height: 31px;
    display: flex;
    align-items: center;
    text-align: center;
    
    color: #102B07;
    
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  }
`;
