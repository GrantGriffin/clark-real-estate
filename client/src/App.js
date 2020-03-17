import React from 'react';
import Layout from './features/layout/Layout'
import AgentPage from './features/agent/AgentPage';
import Home from './features/home/Home'
import { Route, Switch, Redirect } from 'react-router-dom';

// boolean toggling login state
const loggedIn = false

// TODO: Add auth to manage login state
function App() {
  return (
    <div>
      <Layout />
      <br/>
      <br/>
      <br/>
      <br/>
      <Switch>
        <Route exact path='/'>
          {loggedIn ? <Redirect to='/agent-page' /> : <Redirect to='/home' />}
        </Route>
        <Route path='/home' component={Home}/>
        <Route path='/agent-page' component={AgentPage}/>
      </Switch>
    </div>
  );
}

export default App;
