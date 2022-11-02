import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './pages/Home.jsx';
import Starred from './pages/starred.jsx';

function App() {
  return (
    
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>

      <Route exact path="/starred">
       <Starred/>
      </Route>

      <Route >
        Page Not found. OOPS!!
      </Route>

    </Switch>
  );
}

export default App;
