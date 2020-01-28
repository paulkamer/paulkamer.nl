import React from 'react';
import { BrowserRouter as Router, Switch,  Route } from 'react-router-dom';

import Home from './Home';
import HeaderBar from '../components/HeaderBar';
import FooterBar from '../components/FooterBar';

import ProjectsIndexPage from './ProjectsIndexPage';
import ProjectWorldfootballPage from './projects/ProjectWorldfootballPage';
import ClinicaltrialsmonitorPage from './projects/ProjectTrialmonitorPage';


import '../styles/variables.scss';
import './App.scss';

function App() {
  return (
    <Router>
      <HeaderBar/>
      <main className="app-main">
        <Switch>
          <Route>
            <Route exact path="/" component={Home} />

            <div className="page-container">
              <Route exact path="/projects/worldfootball/" component={ProjectWorldfootballPage} />
              <Route exact path="/projects/trialmonitor/" component={ClinicaltrialsmonitorPage} />
              <Route exact path="/projects/" component={ProjectsIndexPage} />
            </div>
          </Route>
        </Switch>
      </main>

      <FooterBar/>
    </Router>
  );
}

export default App;
