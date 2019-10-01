import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Profile.css';
import '../../App.css';

const Profile: React.FC = () => {
  return (
    <div className="profile col-xl-4 text-center border-left border-right border-light mt-5 mt-xl-0 mb-5">
        <h2 className="section-header">Profile</h2>
        <p className="profile-content mt-5 pl-5 pr-5">
          <ul>
            <li className="m-3">Computer Science Major at Missouri University of Science & Technology</li>
            <li className="m-3">Desktop/Web App Team Member - Multirotor Robot Design Team</li>
            <li className="m-3">ACM Web Development</li>
            <li className="m-3">ACM Competition</li>
            <li className="m-3">Eagle Scout</li>
          </ul>
          <p className="mt-5">Skills: JavaScript, Angular, React, TypeScript, HTML, CSS, C++, Git, BrowserStack, Cypress.io</p>
        </p>
    </div>
  );
}

export default Profile;
