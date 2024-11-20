import './stylesheets/App.css';
import './stylesheets/styles.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Overview from './pages/overview'
import TechStack from './pages/techStack'
import Documentation from './pages/documentation'
import SiteMap from './pages/sitemap'
import Design from './pages/design'
import ProblemsSolutions from './pages/problemsSolutions'
import RunProject from './pages/runProject'

import Navigation from './components/Navigation';

function App() {
  return (
    <Router basename="/Blount-Web-App-Overview">
      <div>
        <Navigation />
        <Routes>
          <Route path="/" element={<Overview />} />
          <Route path="/tech-stack" element={<TechStack />} />
          <Route path="/code-documentation" element={<Documentation />} />
          <Route path="/site-map" element={<SiteMap />} />
          <Route path="/design" element={<Design />} />
          <Route path="/problems-and-solutions" element={<ProblemsSolutions />} />
          <Route path="/run-project" element={<RunProject />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;