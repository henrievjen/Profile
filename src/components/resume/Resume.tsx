import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import styled from 'styled-components';
import resume_image from './resume-images/resume.png';

const Resume: React.FC = () => {
  const Resume = styled.img`
    width: 80%;
    height: auto;
    -webkit-transition: all 150ms ease-in;
    -webkit-transform: scale(1); 
    -ms-transition: all 150ms ease-in;
    -ms-transform: scale(1); 
    -moz-transition: all 150ms ease-in;
    -moz-transform: scale(1);
    transition: all 150ms ease-in;
    transform: scale(1);

    &:hover {
      cursor: pointer;
      box-shadow: 0px 0px 150px #000000;
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

  const Section = styled.h2`
    color: rgb(163, 163, 163);
    font-weight: 400;
  `;

  return (
    <div className="col-xl-4 text-center">
        <Section>Resume</Section>
        <Resume src={resume_image} className="rounded mt-5" alt="Resume" />
    </div>
  );
}

export default Resume;
