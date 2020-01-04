import * as React from 'react';
import '../RetroProjects/RetroProjects';

export const RetroProjects = () => {
  return (
    <div className="main-pro-wrapper">
      <div className="btn">
          <a href="https://youtu.be/QZPfwbL5fHs" target="_blank" rel="noopener noreferrer">
              <span className="button-font">Virtual Library</span>
          </a>
      </div>
      <div className="btn">
      <a href="https://cudemo.goalexandria.com/offline" target="_blank" rel="noopener noreferrer">
          <span className="button-font">Offline Data Entry</span>
        </a>
      </div>
      <div className="btn">
      <a href="https://long-island-7738815626.gtsb.io/" target="_blank" rel="noopener noreferrer">
          <span className="button-font">Blog</span>
        </a>
      </div>
  </div>
  )
}

export default RetroProjects;