import React, { Suspense }  from 'react';
import { BrowserRouter as Router, Switch,  Route } from 'react-router-dom';

import Home from './Home';
import HeaderBar from '../components/HeaderBar';
import Submenu from '../components/Submenu';
import FooterBar from '../components/FooterBar';
import Loader from '../components/Loader';

import '../styles/variables.scss';
import './App.scss';

const ProjectsIndexPage = React.lazy(() => import('./projects/ProjectsIndexPage'));
const ProjectWorldfootballPage = React.lazy(() => import('./projects/ProjectWorldfootballPage'));
const ClinicaltrialsmonitorPage = React.lazy(() => import('./projects/ProjectTrialmonitorPage'));

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
              <Suspense fallback={<Loader />}>
                <Route exact path="/" component={Home} />
                <Route exact path="/projects/worldfootball/" component={ProjectWorldfootballPage} />
                <Route exact path="/projects/trialsmonitor/" component={ClinicaltrialsmonitorPage} />
                <Route exact path="/projects/trialmonitor/" component={ClinicaltrialsmonitorPage} />
                <Route exact path="/projects/" component={ProjectsIndexPage} />
              </Suspense>
            </div>
          </Route>
        </Switch>

        <FooterBar/>
      </main>
    </Router>
  );
}

export default App;
