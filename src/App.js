import React from 'react';
import { Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Switch>
      <Route exact path="/">
        Home page
      </Route>
      <Route exact path="/starred">
        Starred Page 
      </Route>
      <Route >
        Page Not found. OOPS!!
      </Route>
    </Switch>

  );
}

export default App;
