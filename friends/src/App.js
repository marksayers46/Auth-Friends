import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <ul>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/friends">Friends</Link>
          </li>
        </ul>
        <Switch>
          <Route to="/friends" component="Component" />
          <Route path="/login" component="Component" />
          <Route component="Component" />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
