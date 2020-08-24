import React from 'react';
import '../styles/App.css';
import { Switch, Route } from 'react-router-dom'

import NavBar from './NavBar'
import Properties from './Properties'
import AddProperty from './AddProperty'

function App() {
  return (
    <>
      <NavBar/>
      <Switch>
        <Route exact path='/' component={Properties}/>
        <Route path='/add-property' component={AddProperty}/>
      </Switch>
    </>
  );
}

export default App;
