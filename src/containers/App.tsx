import React from 'react';
import { BrowserRouter as Router, Switch,  Route } from 'react-router-dom';

import Home from './Home';
import ProjectsPage from './ProjectsPage';
import HeaderBar from '../components/HeaderBar';
import FooterBar from '../components/FooterBar';

import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
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
      </div>
    </Router>
  );
}

export default App;
