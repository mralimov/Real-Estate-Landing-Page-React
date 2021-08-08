import React from 'react';
import styled, { css } from 'styled-components/macro';
import { Link } from 'react-router-dom';
import { menuData } from '../data/MenuData';
import { Button } from './Button';

const Nav = styled.nav`
  height: 60px;
  display: flex;
  justify-content: space-between;
  padding: 1rem 2rem;
  z-index: 100;
  position: fixed;
  width: 100%;
  background: #000;
`;

const NavLink = css`
  color: #fff;
  display: flex;
  padding: 0 1rem;
  align-items: center;
  height: 100%;
  cursor: pointer;
  text-decoration: none;
`;

const Logo = styled(Link)`
  ${NavLink}
  color: #ffff;
  font-style: italic;
  font-size: 2rem;
`;

const MenuBars = styled.i``;

const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-rigth: -48px;
`;

const NavMenuLinks = styled(Link)`
  ${NavLink}
  color: #fff;
  font-size: 1.6rem;
`;

const NavBtn = styled.div`
  display: flex;
  align-items: center;
`;
const Navbar = () => {
  return (
    <Nav>
      <Logo>REMAX</Logo>
      <MenuBars />
      <NavMenu>
        {menuData.map((item, i) => (
          <NavMenuLinks key={item.title} to={item.link}>
            {item.title}
          </NavMenuLinks>
        ))}
      </NavMenu>
      <NavBtn>
        <Button to='/contact' primary='true'>
          Contact Us
        </Button>
      </NavBtn>
      <h1>NavBar</h1>
    </Nav>
  );
};

export default Navbar;
