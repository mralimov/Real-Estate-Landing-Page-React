import { useState } from 'react';
import DropDown from './components/DropDown';
import Hero from './components/Hero';
import InfoSection from './components/InfoSection';
import Navbar from './components/Navbar';
import { ContenData } from './data/ContentData';
import { SliderData } from './data/SliderData';
import GlobalStyle from './globalSyle';
import { BrowserRouter as Router } from 'react-router-dom';
import Footer from './components/Footer';
import DetailsSection from './components/DetailsSection';
import { DetailsData } from './data/DetailsData';
import { FooterData } from './data/FooterData';

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <Router>
      <GlobalStyle />
      <Navbar toggle={toggle} />
      <DropDown isOpen={isOpen} toggle={toggle} />
      <Hero slides={SliderData} />
      <InfoSection {...ContenData} />
      <DetailsSection cards={DetailsData} />
      <Footer footerData={FooterData} />
    </Router>
  );
}

export default App;
