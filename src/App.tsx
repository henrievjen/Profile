import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import resume_image from './images/resume.png';
import github_icon from './images/github-icon.png';
import multirotor_icon from './images/multirotor-icon.png';
import tic_tac_toe from './images/tic-tac-toe.png';
import question_mark from './images/question-mark.png';
import lock from './images/lock.png';

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
            <img src={resume_image} className="resume rounded mt-5 hovered" />
          </div>
          <div className="profile col-xl-4 text-center border-left border-right border-light mt-5 mt-lg-0">
            <h2 className="section-header">Profile</h2>
          </div>
          <div className="projects col-xl-4 text-center">
            <h2 className="section-header col-12 mb-xl-5">Projects</h2>
            <div className="projects-list row">
              <div className="project col-xl-8 offset-xl-2 rounded hovered">
                <div className="project-icon text-left">
                  <img src={github_icon} className="project-icon-img rounded-circle mr-1" />
                  <span><a href="https://github.com/henrievjen/Github-Viewer" target="_blank">GitHub Viewer</a></span>
                </div>
              </div>
            </div>
            <div className="projects-list row mt-4">
              <div className="project col-xl-8 offset-xl-2 rounded hovered">
                <div className="project-icon text-left">
                  <img src={multirotor_icon} className="project-icon-img rounded-circle p-2 mr-2" />
                  <span><a href="https://github.com/MissouriMRR/propguard" target="_blank">Propguard</a></span>
                </div>
              </div>
            </div>
            <div className="projects-list row mt-4">
              <div className="project col-xl-8 offset-xl-2 rounded hovered">
                <div className="project-icon text-left">
                  <img src={tic_tac_toe} className="project-icon-img p-2 mr-2" />
                  <span><a href="https://github.com/henrievjen/Tic-Tac-Toe" target="_blank">Tic-Tac-Toe</a></span>
                </div>
              </div>
            </div>
            <div className="projects-list row mt-4">
              <div className="project col-xl-8 offset-xl-2 rounded hovered">
                <div className="project-icon text-left">
                  <img src={question_mark} className="project-icon-img p-3 mr-2" />
                  <span><a href="https://github.com/henrievjen/JavaScript-Matching-Game" target="_blank">Matching Game</a></span>
                </div>
              </div>
            </div>
            <div className="projects-list row mt-4">
              <div className="project col-xl-8 offset-xl-2 rounded hovered">
                <div className="project-icon text-left">
                  <img src={lock} className="project-icon-img p-3 mr-2" />
                  <span><a href="https://github.com/henrievjen/Password-Tool" target="_blank">Password Tool</a></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
