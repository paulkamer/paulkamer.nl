import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './Home';
import HeaderBar from '../components/HeaderBar';
import Submenu from '../components/Submenu';
import FooterBar from '../components/FooterBar';
import Loader from '../components/Loader';

import '../styles/variables.scss';
import './App.scss';

const JobsIndexPage = React.lazy(() => import('./jobs'));
const JobNetcompanyPage = React.lazy(() => import('./jobs/Netcompany'));
const JobStartmePage = React.lazy(() => import('./jobs/Startme'));
const JobGsmPerformPage = React.lazy(() => import('./jobs/GsmPerform'));

const App: React.FC = () => {
  return (
    <Router>
      <main className="app-main">
        <HeaderBar />

        <div className="app-main__submenu">
          <Submenu />
        </div>
        <div className="app-main__page-container">
          <Suspense fallback={<Loader />}>
            <Routes>
              <Route>
                <Route path="/" element={<Suspense><Home /></Suspense>} />
                <Route path="/jobs/netcompany" element={<Suspense><JobNetcompanyPage /></Suspense>} />
                <Route path="/jobs/startme" element={<Suspense><JobStartmePage /></Suspense>} />
                <Route path="/jobs/gsm_perform" element={<Suspense><JobGsmPerformPage /></Suspense>} />
                <Route path="/jobs/gsm" element={<Suspense><JobGsmPerformPage /></Suspense>} />
                <Route path="/jobs/" element={<Suspense><JobsIndexPage /></Suspense>} />
              </Route>
            </Routes >
          </Suspense>
        </div>

        <FooterBar />
      </main >
    </Router >
  );
};

export default App;
