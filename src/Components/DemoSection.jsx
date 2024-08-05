// src/Components/DemoSection.js
import React, { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';

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

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Input = styled.input`
  padding: 1rem;
  margin-bottom: 1rem;
  width: 100%;
  max-width: 400px;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
`;

const Button = styled.button`
  padding: 1rem 2rem;
  background: #9c27b0;
  color: #fff;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  cursor: pointer;

  &:hover {
    background: #7b1fa2;
  }
`;

const Result = styled.div`
  margin-top: 2rem;
  padding: 1rem;
  background: #333;
  border-radius: 4px;
  max-width: 800px;
  text-align: left;
`;

const DemoSection = () => {
  const [prompt, setPrompt] = useState('');
  const [result, setResult] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://api.openai.com/v1/engines/davinci-codex/completions', {
        prompt,
        max_tokens: 150,
      }, {
        headers: {
          'Authorization': `Bearer YOUR_OPENAI_API_KEY`,
          'Content-Type': 'application/json',
        },
      });
      setResult(response.data.choices[0].text);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Section>
      <Title>Try Our AI</Title>
      <Form onSubmit={handleSubmit}>
        <Input
          type="text"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder="Enter your prompt here"
        />
        <Button type="submit">Submit</Button>
      </Form>
      {result && (
        <Result>
          <h3>Result:</h3>
          <p>{result}</p>
        </Result>
      )}
    </Section>
  );
};

export default DemoSection;
