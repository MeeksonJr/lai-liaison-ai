// src/Components/Hero.js
import React from 'react';
import styled from 'styled-components';
import HeroImg from '../assets/Connect-Img.jpg';

const Section = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4rem 2rem;
  color: #fff;
  text-align: left;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`;

const LeftSide = styled.div`
  flex: 1;
  padding: 2rem;

  @media (max-width: 768px) {
    order: 2;
  }
`;

const RightSide = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  padding: 2rem;

  @media (max-width: 768px) {
    order: 1;
    margin-bottom: 2rem;
  }
`;

const Title = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 1rem;
`;

const Subtitle = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: #9c27b0;
`;

const Description = styled.p`
  font-size: 1rem;
  margin-bottom: 1.5rem;
`;

const Image = styled.img`
  max-width: 100%;
  height: auto;
  border-radius: 8px;
  filter: drop-shadow(purple 1rem 1rem 50px);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const Hero = () => {
  return (
    <Section id="hero">
      <LeftSide>
        <Title>Welcome to Our AI Software</Title>
        <Subtitle>Creating Software with AI</Subtitle>
        <Description>
          Our AI software helps you create robust and efficient software solutions using the power of AI like ChatGPT.
        </Description>
      </LeftSide>
      <RightSide>
        <Image src={HeroImg} alt="AI Illustration" />
      </RightSide>
    </Section>
  );
};

export default Hero;
