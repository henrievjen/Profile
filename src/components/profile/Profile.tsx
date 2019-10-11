import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import styled from 'styled-components';

const Profile: React.FC = () => {
  const Section = styled.h2`
    color: rgb(163, 163, 163);
    font-weight: 400;
  `;

  const Content = styled.div`
    color: rgb(224, 224, 224);
    font-size: 24px;
  `;

  return (
    <div className="col-xl-4 text-center border-left border-right border-light mt-5 mt-xl-0 mb-5">
        <Section>Profile</Section>
        <Content className="mt-5 pl-5 pr-5">
          <ul>
            <li className="m-3">Computer Science Major at Missouri University of Science & Technology</li>
            <li className="m-3">Desktop/Web App Team Member - Multirotor Robot Design Team</li>
            <li className="m-3">ACM Web Development</li>
            <li className="m-3">ACM Competition</li>
            <li className="m-3">Eagle Scout</li>
          </ul>
          <p className="mt-5">Skills: JavaScript, Angular, React, TypeScript, HTML, CSS, C++, Git, BrowserStack, Cypress.io</p>
        </Content>
    </div>
  );
}

export default Profile;
