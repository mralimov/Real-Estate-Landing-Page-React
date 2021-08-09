import React from 'react';
import Features from '../components/Features';
import Hero from '../components/Hero';
import InfoSection from '../components/InfoSection';
import Listings from '../components/Listings';
import { ContentData, ContentDataTwo } from '../data/ContentData';
import { SliderData } from '../data/SliderData';

const Home = () => {
  return (
    <>
      <Hero slides={SliderData} />
      <InfoSection {...ContentData} />
      <Listings />
      <Features />
      <InfoSection {...ContentDataTwo} />
    </>
  );
};

export default Home;
