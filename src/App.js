import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import logo from './logo.svg';
import PageWrapper from './components/PageWrapper';
import Home from './components/Pages/Home';
import './App.css';

function App() {
  return (
    <Router>
      <PageWrapper>

        <Route 
          path="/"
          component={Home}
        />
        
      </PageWrapper>
    </Router>
  );
}

export default App;