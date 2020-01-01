import React from 'react';
import RetroHeadliner from './components/RetroHeadliner/RetroHeadliner';
import RetroLinkedin from './components/RetroLinkedin/RetroLinkedin';
import RetroProjects from './components/RetroProjects/RetroProjects';
import './index';

function App() {
  return (
    <div className="main-app">
      <RetroHeadliner />
      <RetroLinkedin/>
      <RetroProjects />
  </div>
  );
}

export default App;
