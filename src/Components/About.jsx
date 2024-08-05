// src/Components/About.js
import React from 'react';
import styled from 'styled-components';

const Section = styled.section`
  padding: 4rem 2rem;
  color: #fff;
  text-align: center;
`;

const Title = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 2rem;
  color: #9c27b0;
`;

const Content = styled.div`
  max-width: 800px;
  margin: 0 auto;
  text-align: left;

  @media (max-width: 768px) {
    text-align: center;
  }
`;

const Text = styled.div`
  padding: 1rem;
`;

const Description = styled.p`
  font-size: 1.125rem;
  margin-bottom: 1.5rem;
`;

const List = styled.ul`
  list-style: none;
  padding: 0;
  margin-bottom: 1.5rem;

  li {
    font-size: 1.125rem;
    margin-bottom: 0.5rem;

    &::before {
      content: '•';
      color: #9c27b0;
      display: inline-block;
      width: 1rem;
      margin-left: -1rem;
    }
  }
`;

const About = () => {
  return (
    <Section id="about">
      <Title>About Us</Title>
      <Content>
        <Text>
          <h3>Who We Are</h3>
          <p>
            We are a team of passionate technologists and visionaries committed to pushing the boundaries of what artificial intelligence can achieve. Our expertise in AI and machine learning drives us to create solutions that are not only cutting-edge but also practical and user-friendly.
          </p>
          <h3>What We Do</h3>
          <p>
            Our flagship product leverages state-of-the-art AI models, like ChatGPT, to assist in generating code, automating repetitive tasks, and providing intelligent insights. We aim to simplify complex software development challenges and help our users build high-quality applications with greater efficiency and fewer errors.
          </p>
          <h3>Why Choose Us</h3>
          <List>
            <li><strong>Innovation:</strong> We stay at the forefront of AI research to bring you the latest advancements and technologies.</li>
            <li><strong>Efficiency:</strong> Our tools are designed to save you time and reduce the complexity of software development.</li>
            <li><strong>Support:</strong> We offer comprehensive support and resources to ensure you get the most out of our solutions.</li>
          </List>
          <p>
            Join us on our journey to transform the software development landscape with AI. Discover how our solutions can elevate your projects and drive your success.
          </p>
        </Text>
      </Content>
    </Section>
  );
};

export default About;
