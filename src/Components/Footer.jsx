// src/Components/Footer.js
import React from 'react';
import styled from 'styled-components';
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone } from 'react-icons/fa';

const FooterSection = styled.footer`
  color: white;
  padding: 2rem 1rem;
  text-align: center;
`;

const SocialIcons = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem;
  margin-bottom: 1rem;
`;

const IconLink = styled.a`
  color: #9c27b0;
  font-size: 1.5rem;

  &:hover {
    color: white;
  }
`;

const Footer = () => {
  return (
    <FooterSection id="contact">
      <h2>Contact Us</h2>
      <SocialIcons>
        <IconLink href="https://github.com/MeeksonJr" target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </IconLink>
        <IconLink href="www.linkedin.com/in/mohamed-datt-b60907296" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </IconLink>
        <IconLink href="d.mohamed1504@gmail.com">
          <FaEnvelope />
        </IconLink>
        <IconLink href="tel:+1234567890">
          <FaPhone />
        </IconLink>
      </SocialIcons>
      <p>&copy; 2024 AI Software. All rights reserved.</p>
    </FooterSection>
  );
};

export default Footer;
