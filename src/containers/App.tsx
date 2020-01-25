import React from 'react';
import { BrowserRouter as Router, Switch,  Route } from 'react-router-dom';

import Home from './Home';
import ProjectsPage from './ProjectsPage';
import HeaderBar from '../components/HeaderBar';
import FooterBar from '../components/FooterBar';

import '../styles/variables.scss';
import './App.scss';

function App() {
  return (
    <Router>
      <HeaderBar/>
      <main>
        <Switch>
          <Route>
            <Route exact path="/" component={Home} />
            <Route path="/projects/" component={ProjectsPage} />
          </Route>
        </Switch>
      </main>

      <FooterBar/>
    </Router>
  );
}

export default App;
