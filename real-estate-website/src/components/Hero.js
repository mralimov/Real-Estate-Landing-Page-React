import React from 'react';
import styled, { css } from 'styled-components/macro';
import { Button } from './Button';
import { IoMdArrowRoundForward } from 'react-icons/io';
import { IoArrowForward, IoArrowBack } from 'react-icons/io5';

const Herosection = styled.section`
  height: 100vh;
  max-height: 110px;
  position: relative;
  overflow: hidden;
`;

const Herowrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  position: relative;
`;

const HeroSlide = styled.div``;

const HeroSlider = styled.div``;

const HeroImage = styled.div``;

const HeroContent = styled.div``;

const SliderButtons = styled.div`
  position: absolute;
  bottom: 5rem;
  right: 5rem;
  displat: flex;
  z-index: 10;
`;

const Arrow = styled(IoMdArrowRoundForward)``;

const arrowButtons = css`
width: 5rem;
height: 5rem;
color: #fff;
cursor: pointer;
background: #000d1a;
border-radius: 5rem;
padding: 1rem;
margin-rigth: 1rem;
user-select: none;
transition: 0.3s;

&:hover {
        backgroundL #cd853f;
        transform: scale(1.05);
}
`;

const PrevArrow = styled(IoArrowBack)`
  ${arrowButtons}
`;

const NextArrow = styled(IoArrowForward)`
  ${arrowButtons}
`;
const Hero = ({ slides }) => {
  return (
    <Herosection>
      <Herowrapper>
        {slides.map((slide, i) => {
          return (
            <HeroSlide key={i}>
              <HeroSlider>
                <HeroImage>
                  <HeroContent>
                    <h1>{slide.title}</h1>
                    <p>{slide.price}</p>
                    <Button
                      to={slide.path}
                      primary='true'
                      css={`
                        max-width: 16rem;
                      `}
                    >
                      {slide.label}
                      <Arrow />
                    </Button>
                  </HeroContent>
                </HeroImage>
              </HeroSlider>
            </HeroSlide>
          );
        })}
        <SliderButtons>
          <PrevArrow />
          <NextArrow />
        </SliderButtons>
      </Herowrapper>
    </Herosection>
  );
};

export default Hero;
