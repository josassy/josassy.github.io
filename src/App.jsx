import React from 'react';
import Navbar from './Navbar';
import './App.scss';
import { Home, Lorum, Projects } from './pages';
// import { HashRouter as Router, Route } from 'react-router-dom';

export const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Projects />
      <Lorum />
      <Lorum />
      <Lorum />
      <Lorum />
    </div>
  );
}

export default App;
