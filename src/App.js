import React from 'react';
import './App.css';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';

import Main from './components/layout/Main';
import Login from './components/admin/Login';
import Dashboard from './components/admin/Dashboard';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path='/' component={Main} />
          <Route exact path='/home' component={Main} />
          <Route exact path='/about' component={Main} />

          <Route exact path='/admin' component={Login} />
          <Route exact path='/dashboard' component={Dashboard} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
