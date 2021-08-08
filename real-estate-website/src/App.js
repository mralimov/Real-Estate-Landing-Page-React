import { Fragment } from 'react';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import { SliderData } from './data/SliderData';
import GlobalStyle from './globalSyle';
function App() {
  return (
    <Fragment>
      <GlobalStyle />
      <Navbar />
      <Hero slides={SliderData} />
    </Fragment>
  );
}

export default App;
