import React from 'react';
import styled, { css } from 'styled-components/macro';
import { Link } from 'react-router-dom';
import { menuData } from '../data/MenuData';
import { Button } from './Button';
import Bars from '../images/bars.svg';
// import { FaBars } from 'react-icons/fa';

const Nav = styled.nav`
  height: 60px;
  display: flex;
  justify-content: space-between;
  padding: 1rem 2rem;
  z-index: 100;
  position: fixed;
  width: 100%;
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
`;

const MenuBars = styled.i`
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
    background-image: url(${Bars});
    background-size: contain;
    height: 40px;
    width: 40px;
    cursor: pointer;
    //     position: absolute;
    top: 0;
    rigth: 0;
    transform: tranlate(-50%, 25%);
  }
`;

const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-rigth: -48px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const NavMenuLinks = styled(Link)`
  ${NavLink}
  color: #fff;
`;

const NavBtn = styled.div`
  display: flex;
  align-items: center;

  @media screen and (max-width: 768px) {
    display: none;
  }
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
    </Nav>
  );
};

export default Navbar;
