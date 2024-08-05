// src/Components/Testimonials.js
import React from 'react';
import styled from 'styled-components';
import { testimonials } from '../constants/testimonials';

const TestimonialsSection = styled.section`
  color: white;
  padding: 3rem 7rem;
  text-align: center;

  h2 {
    color: #9c27b0;
    margin-bottom: 2rem;
  }
`;

const TestimonialsGrid = styled.div`
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  align-items: start;
  justify-items: center;

  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (min-width: 768px) and (max-width: 1023px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
  }

  @media (max-width: 767px) {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
`;

const TestimonialCard = styled.div`
  background: #444;
  padding: 1.5rem;
  border-radius: 8px;
  transition: transform 0.5s ease-in-out;
  width: 100%;
  max-width: 350px;

  &:hover {
    transform: translateY(-10px);
  }

  img {
    display: block;
    margin: 0 auto 1rem;
    height: 100px;
    width: 100px;
    object-fit: cover;
    border-radius: 50%;
      filter: drop-shadow(purple 10px 0 20px);
  }

  h3 {
    color: #9c27b0;
    margin-bottom: 1rem;
  }

  p {
    margin: 0;
  }
`;

const Testimonials = () => {
  return (
    <TestimonialsSection id="testimonials">
      <h2>Testimonials</h2>
      <TestimonialsGrid>
        {testimonials.map((testimonial, index) => (
          <TestimonialCard key={index}>
            <img src={testimonial.img} alt={testimonial.title} />
            <h3>{testimonial.title}</h3>
            <p>{testimonial.description}</p>
          </TestimonialCard>
        ))}
      </TestimonialsGrid>
    </TestimonialsSection>
  );
};

export default Testimonials;
