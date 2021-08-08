import React from 'react';
import styled from 'styled-components';
import { Button } from './Button';
import { ContenData, ContentDataTwo } from '../data/ContentData';

const Section = styled.section`
  width: 100%;
  height: 100%;
  padding: 4rem 0rem;
`;

const Container = styled.div`
  padding: calc((100vw - 1300px) / 2);
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 800px;

  @media screen and (max-width 768px) {
    grid-template-columns: 1fr;
  }
`;

const ColumnLeft = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  line-height: 1.4;
  padding: 4rem 2rem;
  order: ${({ reverse }) => (reverse ? '2' : '1')};

  h1 {
    margin-bottom: 2.5rem;
    font-size: clamp(1.5rem, 6vw, 2rem);
  }

  p {
    margin-bottom: 2rem;
    margin-top: 1.5rem;
  }

  p:nth-of-type(2) {
    margin-bottom: 5rem;
  }
`;

const ColumnRight = styled.div`
  padding: 1rem 2rem;
  display: flex;
  align-items: center;
  order: ${({ reverse }) => (reverse ? '2' : '1')};

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    order: ${({ reverse }) => (reverse ? '2' : '1')};
    & {
      margin-top: -10rem;
    }
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;

    @media screen and (max-width: 768px) {
      width: 90%;
      height: 90%;
      margin: auto;
    }
  }
`;

const InfoSection = ({
  heading,
  paragraphOne,
  paragraphTwo,
  buttonLabel,
  reverse,
  image,
}) => {
  return (
    <Section>
      <Container>
        <ColumnLeft>
          <h1>{heading}</h1>
          <p>{paragraphOne}</p>
          <p>{paragraphTwo}</p>
          <Button to='/homes' primary='true'>
            {buttonLabel}
          </Button>
        </ColumnLeft>
        <ColumnRight reverse={reverse}>
          <img src={image} alt='home' />
        </ColumnRight>
      </Container>
    </Section>
  );
};

export default InfoSection;
