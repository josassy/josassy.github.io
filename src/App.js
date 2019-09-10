import React from 'react';
import Header from './Header.js';
import './App.scss';

function BodyContent() {
  return (
    <div className="page-content">
      <h1>Hey there!</h1>
      <p>This page is still under development. In the meantime, feel free to take a look at my <a href="http://linkedin.com/in/josiahlansford">LinkedIn</a>!</p>
    </div>
  )
}

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header />
        <BodyContent />
      </div>
    );
  }
}

export default App;
