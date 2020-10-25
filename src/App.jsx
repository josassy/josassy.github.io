import React from 'react';
import { Navbar, Footer } from './components';
import './App.scss';
import { Home, Projects, About } from './pages';
import ParticlesBg from 'particles-bg';
// import { HashRouter as Router, Route } from 'react-router-dom';

export const App = () => {
  return (
    <div className="App">
      <ParticlesBg id="particles" type="cobweb" color="#184554" bg={false} />
      <Navbar />
      <Home />
      <Projects />
      <About />
      <Footer />
    </div>
  );
}

export default App;
