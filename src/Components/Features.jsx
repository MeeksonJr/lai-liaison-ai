// src/Components/Features.js
import React from 'react';
import styled from 'styled-components';
import { features } from '../constants/features';

const FeaturesSection = styled.section`
  color: black;
  padding: 4rem 2rem;
  text-align: center;

  h2 {
  color: #9c27b0
  }
`;

const FeatureItem = styled.div`
  margin: 2rem 4rem;
  padding: 1rem;
  border-radius: 8px;
  background: white;
  filter: drop-shadow(purple 1rem 0 20px);
  

  h3 {
    color: #9c27b0;
    margin-bottom: 1rem;
  }

  p {
    max-width: 600px;
    margin: 0 auto;
  }
`;

const Features = () => {
  return (
    <FeaturesSection id="features">
      <h2>Our Features</h2>
      {features.map((feature, index) => (
        <FeatureItem key={index}>
          <h3>{feature.title}</h3>
          <p>{feature.description}</p>
        </FeatureItem>
      ))}
    </FeaturesSection>
  );
};

export default Features;
