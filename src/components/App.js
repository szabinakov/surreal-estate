import React, { useState } from 'react';
import '../styles/App.css';
import { Switch, Route } from 'react-router-dom'

import NavBar from './NavBar'
import Properties from './Properties'
import AddProperty from './AddProperty'

function App() {
  const [userID, setUserID] = useState('')

  const handleLogin = (response) => {
    setUserID(response.userID)
  }

  const handleLogout = () => {
    window.FB.logout((response) => setUserID(''))}

  return (
    <>
      <NavBar userID={userID} onLogin={handleLogin} onLogout={handleLogout}/>
      <Switch>
        <Route exact path='/' component={Properties}/>
        <Route path='/add-property' component={AddProperty}/>
      </Switch>
    </>
  );
}

export default App;
