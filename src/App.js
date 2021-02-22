import React from 'react';
import './App.css';

// import { HashRouter, Route, Switch } from "react-router-dom"

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home'

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
    <Switch>
      <Route path="/" component={Home} exact />
    </Switch>
  </Router>
 
  );
}

export default App;