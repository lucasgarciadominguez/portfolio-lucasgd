import { useState } from 'react';
import './App.css';
import About from './sections/About/About';
import Contact from './sections/Contact/Contact';
import Footer from './sections/Footer/Footer';
import Hero from './sections/Hero/Hero';
import Work from './sections/Work/Work';
import Projects from './sections/Projects/Projects';
import Skills from './sections/Skills/Skills';
import Certificates from './sections/Certificates/Certificates';

function App() {
  const [showWork, setShowWork] = useState(false);

  return (
    <>
      <Hero onShowWork={() => setShowWork(true)} /> {/* enables the work experience section */}
      {showWork && <Work />}
      <About />
      <Projects />
      <Skills />
      <Certificates />
      <Contact />
      <Footer />
    </>
  );
}


export default App;
