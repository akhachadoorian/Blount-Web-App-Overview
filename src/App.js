import './stylesheets/App.css';
import './stylesheets/styles.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './homepage'
import Navigation from './components/Navigation';

function App() {
  return (
    <Router basename="/Blount-Web-App-Overview">
      <div>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;