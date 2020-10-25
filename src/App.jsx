import React from 'react';
import Navbar from './Navbar';
import './App.scss';
import { Home, Lorum, Projects } from './pages';
// import { HashRouter as Router, Route } from 'react-router-dom';

export const App = () => {
  return (
    <div className="App">
      {/* <Router basename='/'>
        <div className="page-content">
        <Route exact path="/"><Home /></Route>
        <Route path="/projects"><Projects /></Route>
        </div>
      </Router> */}
      <Navbar />
      <Home />
      <Lorum />
      <Projects />
      <Lorum />
      <Lorum />
    </div>
  );
}

export default App;
