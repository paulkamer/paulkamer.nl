import React from 'react';
import { BrowserRouter as Router, Switch,  Route } from 'react-router-dom';

import Home from './Home';
import HeaderBar from '../components/HeaderBar';
import Submenu from '../components/Submenu';
import FooterBar from '../components/FooterBar';

import ProjectsIndexPage from './ProjectsIndexPage';
import ProjectWorldfootballPage from './projects/ProjectWorldfootballPage';
import ClinicaltrialsmonitorPage from './projects/ProjectTrialmonitorPage';


import '../styles/variables.scss';
import './App.scss';

function App() {
  return (
    <Router>
      <main className="app-main">
        <HeaderBar/>

        <div className="app-main__submenu">
          <Submenu />
        </div>
        <Switch>
          <Route>

            <div className="app-main__page-container">
              <Route exact path="/" component={Home} />
              <Route exact path="/projects/worldfootball/" component={ProjectWorldfootballPage} />
              <Route exact path="/projects/trialmonitor/" component={ClinicaltrialsmonitorPage} />
              <Route exact path="/projects/" component={ProjectsIndexPage} />
            </div>
          </Route>
        </Switch>

        <FooterBar/>
      </main>
    </Router>
  );
}

export default App;
