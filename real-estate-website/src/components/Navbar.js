import React, { useEffect, useState } from 'react';
import styled, { css } from 'styled-components/macro';
import { Link, useLocation } from 'react-router-dom';
import { menuData } from '../data/MenuData';
import { Button } from './Button';
import Bars from '../images/bars.svg';

const Navbar = ({ toggle }) => {
  const [navBar, setNavbar] = useState(false);

  const location = useLocation();

  const changeBackground = () => {
    if (window.scrollY >= 60) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  useEffect(() => {
    const watchScroll = () => {
      window.addEventListener('scroll', changeBackground);
    };

    watchScroll();

    return () => {
      window.removeEventListener('scroll', changeBackground);
    };
  }, []);

  let style = {
    backgroundColor:
      navBar || location.pathname !== '/' ? '#cd853f' : 'transparent',
    transition: '0.4s',
  };

  return (
    <Nav style={style}>
      <Logo to='/'>REMAX</Logo>
      <MenuBars onClick={toggle} />
      <NavMenu>
        {menuData.map((item, i) => (
          <NavMenuLinks key={i} to={item.link}>
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

const Nav = styled.nav`
  height: 60px;
  display: flex;
  align-items: center;
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
  color: #fff;
  font-style: italic;
`;

const MenuBars = styled.i`
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
    color: #ffff;
    background-image: url(${Bars});
    background-size: contain;
    height: 40px;
    width: 40px;
    cursor: pointer;
    position: absolute;
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
`;

const ActiveNav = css`
  background-color: #cd853f;
`;

const NavBtn = styled.div`
  display: flex;
  align-items: center;
  margin-right: 24px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;
