import React from 'react';
import './App.css';
import './axios.js';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path='/'>

          </Route>
          <Route path='/login'>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
