import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './pages/Home.jsx';
import Starred from './pages/starred.jsx';
import Show from './pages/show';
import {ThemeProvider} from 'styled-components'

const theme = {
  mainColors: {
    blue: '#2400ff',
    gray: '#c6c6c6',
    dark: '#353535',
  },
};

function App() {
  return (
<ThemeProvider theme={theme}>
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>

      <Route exact path="/starred">
        <Starred />
      </Route>

      <Route exact path="/shows/:id">
        <Show />

      </Route>

      <Route >
        Page Not found. OOPS!!
      </Route>

    </Switch>
    </ThemeProvider>

  );
}

export default App;
