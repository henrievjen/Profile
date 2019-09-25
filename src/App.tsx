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
            <img src={resume_image} className="resume rounded mt-5" />
          </div>
          <div className="profile col-xl-4 text-center border-left border-right border-light mt-5 mt-lg-0">
            <h2 className="section-header">Profile</h2>
          </div>
          <div className="projects col-xl-4 text-center">
            <h2 className="section-header col-12 mb-xl-5">Projects</h2>
              <div className="projects-list row">
                <div className="project col-xl-8 offset-xl-2 rounded">
                  <div className="project-icon text-left">
                    <img src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" className="project-icon-img rounded-circle" />
                  </div>
                  <span><a href="https://github.com/henrievjen/Github-Viewer" target="_blank">GitHub Viewer</a></span>
                </div>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
