import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Nav from './components/Nav.jsx'
import Home from './pages/Home.jsx';
import Starred from './pages/starred.jsx';

function App() {
  return (
    <div>
      <Nav /> 
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
    </div>

  );
}

export default App;
