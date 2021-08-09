import { useState, useEffect, useLayoutEffect } from 'react';
import DropDown from './components/DropDown';
// import Hero from './components/Hero';
// import InfoSection from './components/InfoSection';
import Navbar from './components/Navbar';
// import { ContenData } from './data/ContentData';
// import { SliderData } from './data/SliderData';
import GlobalStyle from './globalSyle';
import { Switch, Route, useLocation } from 'react-router-dom';
import Footer from './components/Footer';
// import DetailsSection from './components/DetailsSection';
// import { DetailsData } from './data/DetailsData';
// import { FooterData } from './data/FooterData';
import Home from './pages';
import About from './pages/About';
import Contact from './pages/Contact';
import Rentals from './pages/Rentals';
import Homes from './pages/Homes';
import Aos from 'aos';
import 'aos/dist/aos.css';

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  useEffect(() => {
    Aos.init({});
  }, []);

  return (
    <>
      <GlobalStyle />
      <Navbar toggle={toggle} />
      <DropDown isOpen={isOpen} toggle={toggle} />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/about' component={About} />
        <Route path='/homes' component={Homes} />
        <Route path='/rentals' component={Rentals} />
        <Route path='/contact' component={Contact} />
      </Switch>
      <Footer />
    </>
  );
}

export default App;
