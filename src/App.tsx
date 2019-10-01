import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Resume from './components/resume/Resume';
import Profile from './components/profile/Profile';
import Projects from './components/projects/Projects';

const App: React.FC = () => {
  return (
    <div className="App text-center">
      <div className="centered-main">
        <header className="head">
          <h1 className="header-name mt-2 mb-5">Henri Evjen</h1>
        </header>
        <div className="row main">
          <Resume></Resume>
          <Profile></Profile>
          <Projects></Projects>
        </div>
      </div>
    </div>
  );
}

export default App;
