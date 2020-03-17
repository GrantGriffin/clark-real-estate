import React from 'react';
import Layout from './features/layout/Layout'
import AgentPage from './features/agent/AgentPage';
import Home from './features/home/Home'
import { Route, Switch, Redirect } from 'react-router-dom';

// boolean toggling login state
const loggedIn = true

// TODO: Add auth to manage login state
function App() {
  return (
    <div>
      <Layout />
      <Switch>
        <Route exact path='/'>
          {loggedIn ? <Redirect to='/agent-page' /> : <Redirect to='/home' />}
        </Route>
        <Route path="/home" render={Home} />
        <Route path='/agent-page' render={AgentPage} />
      </Switch>
    </div>
  );
}

export default App;
