import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Resume from './components/resume/Resume';
import Profile from './components/profile/Profile';
import Projects from './components/projects/Projects';

const App: React.FC = () => {
  const GlobalStyle = createGlobalStyle`
    body {
      background-color: rgb(70, 73, 94);
    }
  `;

  const Main = styled.div`
    width: 97%;
  `;

  const HeaderName = styled.h1`
    color: lightgray;
    font-size: 52px;
    font-weight: 600;
  `;

  const MainSections = styled.div`
    height: 80vh;
  `;

  return (
    <Router>
      <GlobalStyle />
      <div className="text-center">
        <Main>
          <header>
            <HeaderName className="mt-2 mb-5">Henri Evjen</HeaderName>
          </header>
          <MainSections className="row">
            <Resume></Resume>
            <Profile></Profile>
            <Projects></Projects>
          </MainSections>
        </Main>
      </div>

      <Switch>
        <Redirect from="/" to="/profile" />
        <Route path="/" component={App}></Route>
      </Switch>
    </Router>
  );
}

export default App;
