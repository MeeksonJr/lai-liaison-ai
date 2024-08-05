// src/Components/Navbar.js
import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-scroll';
import { FaBars, FaTimes } from 'react-icons/fa';

const Nav = styled.nav`
  color: white;
  display: flex;
  justify-content: space-between;
  padding: 1rem 2rem;
  align-items: center;
  position: sticky;
  top: 0;
  z-index: 10;
`;

const Logo = styled.h1`
  font-size: 1.5rem;
  color: #fff;
`;

const NavLinks = styled.div`
  display: flex;
  gap: 4rem;

  @media (max-width: 768px) {
    display: none;
  }
`;

const MobileMenuIcon = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: block;
    cursor: pointer;
    font-size: 1.5rem;
  }
`;

const MobileMenu = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  width: 60%;
  height: 100%;
  -webkit-backdrop-filter: blur(8px);
  backdrop-filter: blur(8px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: transform 0.3s ease;
  transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(100%)')};
  z-index: 1000;
`;

const MobileMenuClose = styled.div`
  position: absolute;
  top: 1rem;
  right: 1rem;
  cursor: pointer;
  font-size: 1.5rem;
`;

const NavLink = styled(Link)`
  color: #fff;
  text-decoration: none;
  cursor: pointer;
  margin: 1rem 0;

  &:hover {
    color: #9c27b0;
  }
`;

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <Nav>
      <Logo>LAI</Logo>
      <NavLinks>
        <NavLink to="hero" smooth={true} duration={500}>Home</NavLink>
        <NavLink to="about" smooth={true} duration={500}>About</NavLink>
        <NavLink to="features" smooth={true} duration={500}>Features</NavLink>
        <NavLink to="pricing" smooth={true} duration={500}>Pricing</NavLink>
        <NavLink to="testimonials" smooth={true} duration={500}>Testimonials</NavLink>
        <NavLink to="contact" smooth={true} duration={500}>Contact</NavLink>
      </NavLinks>
      <MobileMenuIcon onClick={toggleMenu}>
        <FaBars />
      </MobileMenuIcon>
      <MobileMenu open={menuOpen}>
        <MobileMenuClose onClick={closeMenu}>
          <FaTimes />
        </MobileMenuClose>
        <NavLink to="hero" smooth={true} duration={500} onClick={closeMenu}>Home</NavLink>
        <NavLink to="about" smooth={true} duration={500} onClick={closeMenu}>About</NavLink>
        <NavLink to="features" smooth={true} duration={500} onClick={closeMenu}>Features</NavLink>
        <NavLink to="pricing" smooth={true} duration={500} onClick={closeMenu}>Pricing</NavLink>
        <NavLink to="testimonials" smooth={true} duration={500} onClick={closeMenu}>Testimonials</NavLink>
        <NavLink to="contact" smooth={true} duration={500} onClick={closeMenu}>Contact</NavLink>
      </MobileMenu>
    </Nav>
  );
};

export default Navbar;
