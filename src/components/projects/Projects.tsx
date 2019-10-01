import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Projects.css';
import '../../App.css';
import github_icon from './projects-images/github-icon.png';
import multirotor_icon from './projects-images/multirotor-icon.png';
import tic_tac_toe from './projects-images/tic-tac-toe.png';
import question_mark from './projects-images/question-mark.png';
import lock from './projects-images/lock.png';

const Projects: React.FC = () => {
  return (
    <div className="projects col-xl-4 text-center mb-5">
        <h2 className="section-header col-12 mb-xl-5 mb-lg-3">Projects</h2>
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
  );
}

export default Projects;
