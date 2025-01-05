import React from 'react';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';
import Resume from './components/Resume';
import Contact from './components/Contact';
import './App.css';

function App() {
  return (
    <div className="App">
      <AboutMe />
      <Projects />
      <Resume />
      <Contact />
    </div>
  );
}

export default App;
