import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Resume.css';
import '../../App.css';
import resume_image from './resume-images/resume.png';

const Resume: React.FC = () => {
  return (
    <div className="col-xl-4 text-center">
        <h2 className="section-header">Resume</h2>
        <img src={resume_image} className="resume rounded mt-5 hovered" />
    </div>
  );
}

export default Resume;
