import React from 'react';
import './App.scss';
import { Github, Linkedin, Terminal } from 'lucide-react'; // Optional icons

const App = () => {
  return (
    <div className="container">
      <main className="card">
        <div className="header">
          <Terminal size={32} className="icon-main" />
          <h1>Josiah Lansford - Robotics Platform Engineer</h1>
      </div>

        <p className="bio">
          I help robotics teams turn prototypes into scalable products. 
          From deployment pipelines and fleet infrastructure to secure 
          cloud integration, I design the systems that enable robotics to 
          generate value in the real world.
        </p>

        <div className="links">
          <a href="https://github.com/josassy" target="_blank" rel="noreferrer" className="btn">
            <Github size={20} />
            <span>GitHub</span>
          </a>
          <a href="https://linkedin.com/in/josiahlansford" target="_blank" rel="noreferrer" className="btn">
            <Linkedin size={20} />
            <span>LinkedIn</span>
          </a>
        </div>
      </main>

      <footer className="footer">
        Based in Columbus, OH
      </footer>
    </div>
  );
};

export default App;