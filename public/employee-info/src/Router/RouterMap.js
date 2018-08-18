import React from 'react'
import { Switch, Route } from 'react-router-dom';
import Login from '../Page/Login'
import Main from '../Page/Main'

class RouterMap extends React.Component {
  render() {
    return (
      <Switch>
        <Route path='/login' component={Login} />
        <Route path='/main' component={Main} />
      </Switch>
    )
  }
}

export default RouterMap