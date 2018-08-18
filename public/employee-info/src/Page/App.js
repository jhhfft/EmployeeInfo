import React from 'react'
import { Switch, Route,Redirect } from 'react-router-dom';
import Login from '../Page/Login'
import Main from '../Page/Main'

class App extends React.Component {
  render() {
    return (
      <Switch>
        <Route path='/login' component={Login} />
        <Route  path='/main' component={Main} />
        <Route excat path="/" component={Login} /> 
      </Switch>
    )
  }
}

export default App
