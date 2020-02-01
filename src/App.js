import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import './App.css';

// Pages
import PageWrapper from './components/PageWrapper';
import Home from './components/Pages/Home';
import About from './components/Pages/About';

class App extends Component {
  render() {
    return (
      <Router>
        <PageWrapper>
  
          <Route 
            exact = {true}
            path="/"
            component={Home}
          />

          <Route
            path="/about"
            component={About}
          />
        </PageWrapper>
      </Router>
    );
  }
}

export default App;