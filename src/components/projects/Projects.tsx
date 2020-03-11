import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import styled from 'styled-components';
import github_icon from './projects-images/github-icon.png';
import multirotor_icon from './projects-images/multirotor-icon.png';
import tic_tac_toe from './projects-images/tic-tac-toe.png';
import question_mark from './projects-images/question-mark.png';
import lock from './projects-images/lock.png';

const Projects: React.FC = () => {
  const Projects = styled.div`
    @media only screen and (max-width: 1199px) {
        .projects {
            padding-left: 200px;
            padding-right: 200px;
        }
    }
  `;

  const Section = styled.h2`
    color: rgb(163, 163, 163);
    font-weight: 400;
  `;

  const Project = styled.div`
    background-color: rgb(255, 255, 255);
    height: 100px;
    -webkit-transition: all 150ms ease-in;
    -webkit-transform: scale(1); 
    -ms-transition: all 150ms ease-in;
    -ms-transform: scale(1); 
    -moz-transition: all 150ms ease-in;
    -moz-transform: scale(1);
    transition: all 150ms ease-in;
    transform: scale(1);

    &:hover {
        box-shadow: 0px 0px 50px #000000;
        z-index: 2;
        -webkit-transition: all 150ms ease-in;
        -webkit-transform: scale(1.05);
        -ms-transition: all 150ms ease-in;
        -ms-transform: scale(1.05);   
        -moz-transition: all 150ms ease-in;
        -moz-transform: scale(1.05);
        transition: all 150ms ease-in;
        transform: scale(1.05);
    }
  `;

  const ProjectIcon = styled.div`
    height: 100px;
  `;

  const ProjectIconImg = styled.img`
    width: auto;
    height: 100%;
  `;

  return (
    <Projects className="col-xl-4 text-center mt-5 mt-xl-0 mb-5">
        <Section className="section-header col-12 mb-xl-5 mb-lg-3">Projects</Section>
        <div className="row mt-5 mt-xl-0">
            <Project className="col-xl-8 col-4 offset-xl-2 offset-1 rounded">
                <ProjectIcon className="text-left">
                    <ProjectIconImg src={github_icon} className="rounded-circle mr-1" alt="GitHub Icon" />
                    <span><a href="https://github.com/henrievjen/Github-Viewer" target="_blank" rel="noopener noreferrer">GitHub Viewer</a></span>
                </ProjectIcon>
            </Project>
            <Project className="col-xl-8 col-4 offset-xl-2 offset-2 rounded mt-0 mt-xl-4">
                <ProjectIcon className="text-left">
                    <ProjectIconImg src={multirotor_icon} className="rounded-circle p-2 mr-2" alt="Multirotor Icon" />
                    <span><a href="https://github.com/MissouriMRR/propguard" target="_blank" rel="noopener noreferrer">Propguard</a></span>
                </ProjectIcon>
            </Project>
        </div>
        <div className="row mt-4">
            <Project className="col-xl-8 col-4 offset-xl-2 offset-1 rounded">
                <ProjectIcon className="text-left">
                    <ProjectIconImg src={tic_tac_toe} className="p-2 mr-2" alt="Tic-Tac-Toe" />
                    <span><a href="https://github.com/henrievjen/Tic-Tac-Toe" target="_blank" rel="noopener noreferrer">Tic-Tac-Toe</a></span>
                </ProjectIcon>
            </Project>
            <Project className="col-xl-8 col-4 offset-xl-2 offset-2 rounded mt-0 mt-xl-4">
                <ProjectIcon className="text-left">
                    <ProjectIconImg src={question_mark} className="p-3 mr-2" alt="Question Mark" />
                    <span><a href="https://github.com/henrievjen/JavaScript-Matching-Game" target="_blank" rel="noopener noreferrer">Matching Game</a></span>
                </ProjectIcon>
            </Project>
        </div>
        <div className="row mt-4">
            <Project className="col-xl-8 col-4 offset-xl-2 offset-4 rounded">
                <ProjectIcon className="text-left">
                    <ProjectIconImg src={lock} className="p-3 mr-2" alt="Lock" />
                    <span><a href="https://github.com/henrievjen/Password-Tool" target="_blank" rel="noopener noreferrer">Password Tool</a></span>
                </ProjectIcon>
            </Project>
        </div>
    </Projects>
  );
}

export default Projects;
