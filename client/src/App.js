import React from 'react';
import Layout from './features/layout/Layout'
import AgentPage from './features/agent/AgentPage';
import Home from './features/Home'
import { Route, Switch } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Layout />
      <Switch>
        <Route exact path='/' render={Home} />
        <Route path='/' render={AgentPage} />
      </Switch>
    </div>
  );
}

export default App;
