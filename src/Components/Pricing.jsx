// src/Components/Pricing.js
import React from 'react';
import styled from 'styled-components';
import { pricingPlans } from '../constants/pricing';

const PricingSection = styled.section`
  color: black;
  padding: 4rem 2rem;
  text-align: center;

  h2 {
  color: #9c27b0;
  }
`;

const PricingTable = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  gap: 2rem;

  @media (max-width: 768px) {
    flex-direction: column;
    display: flex;
    allign-items: center;
    justify-content: center;
  }
`;

const PricingCard = styled.div`
  background: white;
    filter: drop-shadow(purple 1rem 1rem 50px);
  padding: 2rem;
  border-radius: 8px;
  width: 300px;

  h3 {
    margin-bottom: 1rem;
    color: #9c27b0;
  }

  ul {
    list-style-type: none;
    padding: 0;
    margin: 1rem 0;

    li {
      margin: 0.5rem 0;
    }
  }
`;

const Pricing = () => {
  return (
    <PricingSection id="pricing">
      <h2>Pricing Plans</h2>
      <PricingTable>
        {pricingPlans.map((plan, index) => (
          <PricingCard key={index}>
            <h3>{plan.plan}</h3>
            <h4>{plan.price}</h4>
            <ul>
              {plan.features.map((feature, i) => (
                <li key={i}>{feature}</li>
              ))}
            </ul>
          </PricingCard>
        ))}
      </PricingTable>
    </PricingSection>
  );
};

export default Pricing;
