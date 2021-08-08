import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { menuData } from '../data/MenuData';

const Nav = styled.nav`
  height: 60px;
  background: red;
`;

const Logo = styled(Link)`
  color: #ffff;
`;

const MenuBars = styled.i``;

const NavMenu = styled.div``;

const Navbar = () => {
  return (
    <Nav>
      <Logo>REMAX</Logo>
      <MenuBars />
      <NavMenu></NavMenu>
      <h1>NavBar</h1>
    </Nav>
  );
};

export default Navbar;
