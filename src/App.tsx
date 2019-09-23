import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="head">
        <h1 className="header-name mt-2 mb-5">Henri Evjen</h1>
      </header>
      <div className="row main">
        <div className="resume col-xl-4 text-center">
          <h2 className="section-header">Resume</h2>
          <iframe className="resume-document" src="https://docs.google.com/document/d/1_xlyQjHw4ylexbQIBCXaS4U4tRdroPg76H4ah6nfROc/edit?usp=sharing"></iframe>
        </div>
        <div className="profile col-xl-4 text-center border-left border-right border-light">
          <h2 className="section-header">Profile</h2>
        </div>
        <div className="projects col-xl-4 text-center">
          <h2 className="section-header">Projects</h2>
        </div>
      </div>
    </div>
  );
}

export default App;
