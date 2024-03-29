import React from 'react';
import styled from 'styled-components';
import { menuData } from '../data/MenuData';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import { FaTimes } from 'react-icons/fa';

const DropDown = ({ isOpen, toggle }) => {
  return (
    <DropdownContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <DropdownWrapper>
        <DropdownMenu>
          {menuData.map((menu, i) => (
            <DropdownLink to={menu.link} key={i}>
              {menu.title}
            </DropdownLink>
          ))}
        </DropdownMenu>
        <BtnWrap>
          <Button primary='true' round='true' big='true' to='/contact'>
            Contact Us
          </Button>
        </BtnWrap>
      </DropdownWrapper>
    </DropdownContainer>
  );
};

export default DropDown;

const DropdownContainer = styled.div`
  position: fixed;
  z-index: 999;
  width: 100%;
  height: 100%;
  background: #cd853f;
  display: grid;
  align-items: center;
  top: 0;
  left: 0;
  transition: 0.3s ease-in-out;
  opacity: ${({ isOpen }) => (isOpen ? 1 : 0)};
  top: ${({ isOpen }) => (isOpen ? '0' : '-100%')}; ;
`;

const Icon = styled.div`
  position: absolute;
  top: 1.2rem;
  right: 1.5rem;
  background: transparent;
  font-size: 2rem;
  cursor: pointer;
  outline: none;
`;

const CloseIcon = styled(FaTimes)`
  color: #000d1a;
`;

const DropdownWrapper = styled.div``;

const DropdownMenu = styled.div`
  display: grid;
  grid-template-column: 1fr;
  grid-template-rows: repeat(4, 80px);
  text-align: center;
  align-items: center;
  justify-content: center;
  margin-bottom: 4rem;

  @media screen and (max-width: 480px) {
    grid-temlate-rows: repeat(4, 680px);
  }
`;

const DropdownLink = styled(Link)`
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;
  color: #fff;
  font-size: 1.5rem;
  font-weight: 500;
  text-decoration: none;
  cursor: pointer;
  transition: 0.2 ease-in-out;

  &:hover {
    color: #000d1a;
  }
`;

const BtnWrap = styled.div`
  display: flex;
  justify-content: center;
`;
