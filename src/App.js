import React from 'react';
import RetroHeadliner from './components/RetroHeadliner/RetroHeadliner';
import RetroLinkedin from './RetroLinkedin';
import RetroProjects from './RetroProjects';
import RetroTechLinks from './RetroTechLinks';
import './style.css';

function App() {
  return (
    <div className="main-app">
    <div className="component-container">
      <RetroHeadliner className="header"></RetroHeadliner>
      <div className="middle-main-split">
        <RetroLinkedin className="linked"></RetroLinkedin>
        <RetroProjects className="projects"></RetroProjects>
      </div>
      <RetroTechLinks className="tech"></RetroTechLinks>
    </div>
  </div>
  );
}

export default App;
