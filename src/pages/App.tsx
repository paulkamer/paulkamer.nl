import React, { Suspense } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./Home";
import HeaderBar from "../components/HeaderBar";
import Submenu from "../components/Submenu";
import FooterBar from "../components/FooterBar";
import Loader from "../components/Loader";

import "../styles/variables.scss";
import "./App.scss";

const JobsIndexPage = React.lazy(() => import("./jobs"));
const JobStartmePage = React.lazy(() => import("./jobs/Startme"));
const JobGsmPerformPage = React.lazy(() => import("./jobs/GsmPerform"));

const SkillsIndexPage = React.lazy(() => import("./skills"));

const ProjectsIndexPage = React.lazy(() => import("./projects"));
const ProjectWorldfootballPage = React.lazy(
  () => import("./projects/Worldfootball")
);
const ClinicaltrialsmonitorPage = React.lazy(
  () => import("./projects/Trialmonitor")
);
const ProjectWw2TwitterBotPage = React.lazy(
  () => import("./projects/Ww2TwitterBot")
);

function App() {
  return (
    <Router>
      <main className="app-main">
        <HeaderBar />

        <div className="app-main__submenu">
          <Submenu />
        </div>
        <Switch>
          <Route>
            <div className="app-main__page-container">
              <Suspense fallback={<Loader />}>
                <Route exact path="/" component={Home} />
                <Route
                  exact
                  path="/projects/worldfootball/"
                  component={ProjectWorldfootballPage}
                />
                <Route
                  exact
                  path="/projects/trialsmonitor/"
                  component={ClinicaltrialsmonitorPage}
                />
                <Route
                  exact
                  path="/projects/trialmonitor/"
                  component={ClinicaltrialsmonitorPage}
                />
                <Route
                  exact
                  path="/projects/ww2quotesbot/"
                  component={ProjectWw2TwitterBotPage}
                />
                <Route exact path="/projects/" component={ProjectsIndexPage} />
                <Route exact path="/jobs/startme" component={JobStartmePage} />
                <Route
                  exact
                  path="/jobs/gsm_perform"
                  component={JobGsmPerformPage}
                />
                <Route exact path="/jobs/gsm" component={JobGsmPerformPage} />
                <Route exact path="/jobs/" component={JobsIndexPage} />
                <Route exact path="/skills/" component={SkillsIndexPage} />
              </Suspense>
            </div>
          </Route>
        </Switch>

        <FooterBar />
      </main>
    </Router>
  );
}

export default App;
