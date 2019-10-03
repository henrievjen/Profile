import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Resume from './components/resume/Resume';
import Profile from './components/profile/Profile';
import Projects from './components/projects/Projects';

const App: React.FC = () => {
  return (
    <Router>
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

      <Switch>
        <Redirect from="/" to="/profile" />
        <Route path="/" component={App}></Route>
      </Switch>
    </Router>
  );
}

export default App;
