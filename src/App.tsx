import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import resume_image from './images/resume.png';

const App: React.FC = () => {
  return (
    <div className="App text-center">
      <div className="centered-main">
        <header className="head">
          <h1 className="header-name mt-2 mb-5">Henri Evjen</h1>
        </header>
        <div className="row main">
          <div className="col-xl-4 text-center">
            <h2 className="section-header">Resume</h2>
            <img src={resume_image} className="resume rounded mt-xl-5" />
          </div>
          <div className="profile col-xl-4 text-center border-left border-right border-light">
            <h2 className="section-header">Profile</h2>
          </div>
          <div className="projects col-xl-4 text-center">
            <h2 className="section-header">Projects</h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
