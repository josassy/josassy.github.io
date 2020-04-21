import React from 'react';
import Header from './Header';
import './App.scss';
import { Home, Projects } from './pages';
import { HashRouter as Router, Route } from 'react-router-dom';

export const App = () => {
  return (
    <div className="App">
      <Router basename='/'>
        <Header />
        <div className="page-content">
          <Route exact path="/"><Home /></Route>
          <Route path="/projects"><Projects /></Route>
        </div>
      </Router>
    </div>
  );
}

export default App;
